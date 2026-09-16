import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
const $=id=>document.getElementById(id),stage=$('stage'),input=new THREE.Vector3(1,1.5,2);
let renderer,scene,camera,controls,group;
function calculate(){
 const p=Number($('drop').value),q=1-p,selected=[0,1,2].reduce((a,i)=>a+($('m'+i).checked?1<<i:0),0);
 const outcomes=Array.from({length:8},(_,mask)=>{const bits=[0,1,2].map(i=>(mask>>i)&1),k=bits.reduce((a,b)=>a+b,0);return {mask:bits,probability:q**k*p**(3-k),output:input.clone().multiply(new THREE.Vector3(...bits)).divideScalar(q).toArray()};});
 const mean=new THREE.Vector3();outcomes.forEach(o=>mean.addScaledVector(new THREE.Vector3(...o.output),o.probability));
 const variance=outcomes.reduce((a,o)=>a+o.probability*new THREE.Vector3(...o.output).distanceToSquared(input),0);
 const nonlinear=outcomes.reduce((a,o)=>a+o.probability*Math.max(0,o.output[0]-1),0);
 return {p,q,input:input.toArray(),selected,outcomes,mean:mean.toArray(),variance,nonlinear,atMean:Math.max(0,mean.x-1)};
}
const vec=a=>new THREE.Vector3(...a);
function addMesh(g,color,pos){const m=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color}));m.position.copy(vec(pos));group.add(m);return m;}
function draw(s){
 if(!renderer||!s)return;
 group.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});group.clear();
 const extent=input.clone().divideScalar(s.q),center=extent.clone().multiplyScalar(.5),radius=extent.length()/2;
 const direction=camera.position.clone().sub(controls.target).normalize();controls.target.copy(center);camera.position.copy(center).addScaledVector(direction,40);camera.lookAt(center);
 const w=stage.clientWidth,h=stage.clientHeight,aspect=w/h,half=radius*1.35/Math.min(1,aspect);
 Object.assign(camera,{left:-half*aspect,right:half*aspect,top:half,bottom:-half,near:.1,far:100});camera.updateProjectionMatrix();camera.updateMatrixWorld();renderer.setSize(w,h);
 const size=radius*.035;
 s.outcomes.forEach(o=>addMesh(new THREE.SphereGeometry(size,16,12),o.probability?0x61717a:0xcbd5d5,o.output));
 const edges=[];for(let m=0;m<8;m++)for(let i=0;i<3;i++)if(!(m&(1<<i)))edges.push(vec(s.outcomes[m].output),vec(s.outcomes[m|(1<<i)].output));
 group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(edges),new THREE.LineBasicMaterial({color:0xadbebc})));
 addMesh(new THREE.SphereGeometry(size*1.6,20,16),0x008752,s.mean);
 addMesh(new THREE.BoxGeometry(size*2.5,size*2.5,size*2.5),0xc52c61,s.outcomes[s.selected].output);
 window.dropoutFraming=[...s.outcomes.map(o=>o.output),s.mean].map(p=>vec(p).project(camera).toArray());renderer.render(scene,camera);
}
function update(){const s=calculate();window.dropoutState=s;const chosen=s.outcomes[s.selected],fmt=a=>'('+a.map(v=>v.toFixed(3)).join(', ')+')';$('pValue').textContent=s.p.toFixed(2);$('numbers').textContent=`Selected mask: ${chosen.mask.join(', ')}\nOutput: ${fmt(chosen.output)}\nMask probability: ${chosen.probability.toFixed(6)}${chosen.probability===0?' (impossible at this p)':''}\nExact mean: ${fmt(s.mean)}\nExpected squared distance: ${s.variance.toFixed(6)}\nE[ReLU(Y_x - 1)]: ${s.nonlinear.toFixed(6)}\nReLU(E[Y_x] - 1): ${s.atMean.toFixed(6)}`;draw(s);}
try{
 if(new URLSearchParams(location.search).has('noWebGL'))throw Error('fallback');
 renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0xf2f6f5);stage.prepend(renderer.domElement);
 scene=new THREE.Scene();camera=new THREE.OrthographicCamera();camera.position.set(25,18,30);group=new THREE.Group();scene.add(group);
 controls=new OrbitControls(camera,renderer.domElement);controls.enablePan=false;controls.enableZoom=false;controls.addEventListener('change',()=>draw(window.dropoutState));new ResizeObserver(()=>draw(window.dropoutState)).observe(stage);
}catch(e){renderer=undefined;$('fallback').hidden=false;}
$('drop').addEventListener('input',update);[0,1,2].forEach(i=>$('m'+i).addEventListener('change',update));
$('reset').onclick=()=>{$('drop').value=.5;[0,1,2].forEach(i=>{$('m'+i).checked=i!==1;});if(controls){controls.target.set(0,0,0);camera.position.set(25,18,30);}update();};
$('export').onclick=()=>{const u=URL.createObjectURL(new Blob([JSON.stringify(window.dropoutState,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=u;a.download='dropout-states.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};update();

import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
const $=id=>document.getElementById(id), ids=['x','y','z'];
const cases={conflict:[-2,1,.5],opposed:[-2,0,0],aligned:[1,1,0],orthogonal:[0,1,0],zero:[0,0,0]};
const a=new THREE.Vector3(1,0,0), stage=$('stage');
let renderer,scene,camera,controls,arrows,shafts,resize,extent=2.6;
const fmt=n=>(Math.abs(n)<1e-10?0:n).toFixed(4);
function draw(){if(renderer)renderer.render(scene,camera);}
function home(){camera.position.set(6,4,7);controls.target.set(0,0,0);controls.update();draw();}
try{
 renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,2));stage.appendChild(renderer.domElement);
 scene=new THREE.Scene();scene.background=new THREE.Color('#edf3ef');
 camera=new THREE.OrthographicCamera(-5,5,4,-4,.1,100);
 controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=false;controls.enablePan=false;controls.minZoom=.6;controls.maxZoom=2;controls.addEventListener('change',draw);
 const plane=new THREE.Mesh(new THREE.PlaneGeometry(5,5),new THREE.MeshBasicMaterial({color:'#829d8c',transparent:true,opacity:.12,side:THREE.DoubleSide,depthWrite:false}));plane.rotation.y=Math.PI/2;scene.add(plane);
 const origin=new THREE.Mesh(new THREE.SphereGeometry(.055,16,12),new THREE.MeshBasicMaterial({color:'#243d2e'}));scene.add(origin);
 const colors=['#a63354','#315c92','#7d847f','#007b62'];
 arrows=colors.map(color=>{const ar=new THREE.ArrowHelper(new THREE.Vector3(1,0,0),new THREE.Vector3(),1,color,.22,.15);scene.add(ar);return ar;});
 shafts=colors.map(color=>{const mesh=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,1,12),new THREE.MeshBasicMaterial({color}));scene.add(mesh);return mesh;});
 resize=()=>{const w=stage.clientWidth,h=stage.clientHeight,aspect=w/h,half=Math.max(extent,extent/aspect);camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();renderer.setSize(w,h,false);draw();};
 new ResizeObserver(resize).observe(stage);home();resize();
}catch(e){renderer?.domElement.remove();renderer=undefined;$('fallback').hidden=false;$('reset').disabled=true;}
function update(){
 const b=new THREE.Vector3(...ids.map(id=>Number($(id).value))),dot=a.dot(b),conflict=dot<0;
 const ap=a.clone(),bp=b.clone();
 // Two tasks: each correction uses the other original gradient, not its corrected copy.
 if(conflict){ap.projectOnPlane(b.clone().normalize());bp.projectOnPlane(a);}
 const raw=a.clone().add(b),p=ap.clone().add(bp);
 const state={a:a.toArray(),b:b.toArray(),dot,conflict,projectedA:ap.toArray(),projectedB:bp.toArray(),rawSum:raw.toArray(),pcgradSum:p.toArray(),lossDerivatives:{raw:[-a.dot(raw),-b.dot(raw)],pcgrad:[-a.dot(p),-b.dot(p)]}};
 window.pcgradState=state;
 ids.forEach((id,i)=>$('o'+id).textContent=fmt(b.getComponent(i)));
 $('verdict').textContent=`a dot b = ${fmt(dot)}. `+(conflict?(p.length()<1e-10?'Conflict; the corrected sum is zero. Neither task gradient is zero.':'Conflict; both gradients are projected before summing.'):'No conflict; the gradients are unchanged.');
 ['raw','pcgrad'].forEach(k=>state.lossDerivatives[k].forEach((n,i)=>$( (k==='raw'?'raw':'pc')+(i===0?'A':'B')).textContent=fmt(n)));
 $('vectors').textContent=JSON.stringify(state,null,2);
 const pair=$('pair').checked;$('key1').textContent=pair?"Projected A":"Raw sum";$('key2').textContent=pair?"Projected B":"PCGrad sum";
 if(renderer){const vectors=[a,b,pair?ap:raw,pair?bp:p];extent=Math.max(2.5,...vectors.map(v=>v.length()*1.12));vectors.forEach((v,i)=>{const len=v.length();arrows[i].visible=shafts[i].visible=len>1e-10;if(len>1e-10){const dir=v.clone().normalize();arrows[i].setDirection(dir);arrows[i].setLength(len,Math.min(.22,len*.25),Math.min(.15,len*.18));shafts[i].position.copy(v).multiplyScalar(.5);shafts[i].scale.y=len;shafts[i].quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir);}});resize();}
}
ids.forEach(id=>$(id).addEventListener('input',()=>{$('example').value='custom';update();}));
$('example').addEventListener('change',()=>{const v=cases[$('example').value];if(v){ids.forEach((id,i)=>$(id).value=v[i]);update();}});
$('pair').addEventListener('change',update);$('reset').addEventListener('click',home);
$('export').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(window.pcgradState,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download='pcgrad-state.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
update();

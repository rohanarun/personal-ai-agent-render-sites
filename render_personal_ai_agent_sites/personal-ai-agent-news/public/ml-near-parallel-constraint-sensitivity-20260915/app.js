import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {Matrix,SingularValueDecomposition} from 'ml-matrix';
const $=id=>document.getElementById(id),reference=[.4,.4,.1],norm=v=>Math.hypot(...v);
function compute(){
 const angle=+$('angle').value,noise=+$('noise').value,t=angle*Math.PI/180,c=Math.cos(t),s=Math.sin(t),A=new Matrix([[1,0,0],[c,s,0],[0,0,1]]),b=A.mmul(Matrix.columnVector(reference)).to1DArray(),noisy=[b[0],b[1]+noise,b[2]],svd=new SingularValueDecomposition(A),fit=svd.solve(Matrix.columnVector(noisy)).to1DArray(),error=norm(fit.map((v,i)=>v-reference[i])),residual=norm(A.mmul(Matrix.columnVector(fit)).to1DArray().map((v,i)=>v-noisy[i])),singularValues=svd.diagonal;
 return {angle,noise,c,s,A:A.to2DArray(),b,noisy,fit,reference:[...reference],error,residual,singularValues,condition:singularValues[0]/singularValues[2],gain:1/s,relativeError:error/norm(reference),relativeInput:Math.abs(noise)/norm(b)};
}
let renderer,scene,camera,orbit,group;
function draw(d){
 if(!renderer)return;
 for(const o of [...group.children]){o.geometry.dispose();o.material.dispose();group.remove(o);}
 function plane(normal,center,color,opacity,outlineOnly=false){
  const n=new THREE.Vector3(...normal),q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,0,1),n);
  const geo=new THREE.PlaneGeometry(2.6,2.6);if(!outlineOnly){const p=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,transparent:true,opacity,depthWrite:false}));p.quaternion.copy(q);p.position.set(...center);group.add(p);}
  const edge=new THREE.LineSegments(new THREE.EdgesGeometry(geo),new THREE.LineBasicMaterial({color,transparent:true,opacity:outlineOnly?.45:.8}));edge.quaternion.copy(q);edge.position.set(...center);group.add(edge);if(outlineOnly)geo.dispose();
 }
 plane([1,0,0],reference,0x188364,.15);plane([0,0,1],reference,0x507eaa,.12);
 plane([d.c,d.s,0],reference,0x727b76,0,true);
 plane([d.c,d.s,0],reference.map((v,i)=>v+d.noise*[d.c,d.s,0][i]),0xba2e61,.17);
 for(const [pos,color,size]of[[reference,0x23392c,.055],[d.fit,0xd5215d,.04]]){const dot=new THREE.Mesh(new THREE.SphereGeometry(size,20,14),new THREE.MeshBasicMaterial({color,depthTest:false}));dot.position.set(...pos);dot.renderOrder=10;group.add(dot);}
 const curve=new THREE.LineCurve3(new THREE.Vector3(...reference),new THREE.Vector3(...d.fit));if(d.error>1e-10){const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,1,.009,6,false),new THREE.MeshBasicMaterial({color:0xaa6d13,depthTest:false}));mesh.renderOrder=9;group.add(mesh);}
 renderer.render(scene,camera);
}
function update(){const d=compute();window.experiment=d;$('angleout').textContent=d.angle+' degrees';$('noiseout').textContent=d.noise.toFixed(3);$('condition').textContent=d.condition.toFixed(3);$('error').textContent=d.error.toFixed(6);$('residual').textContent=d.residual.toExponential(2);$('gain').textContent=d.gain.toFixed(3);$('snapshot').textContent='Fitted parameters: ['+d.fit.map(x=>x.toFixed(5)).join(', ')+']\nRelative parameter change: '+(100*d.relativeError).toFixed(3)+'%\nRelative measurement change: '+(100*d.relativeInput).toFixed(3)+'%\nCondition-number bound: '+(100*d.condition*d.relativeInput).toFixed(3)+'%';draw(d);}
function home(){if(!camera)return;camera.position.set(3.2,2.8,4.2);orbit.target.set(.4,.4,.1);orbit.update();}
try{
 renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));$('scene').append(renderer.domElement);scene=new THREE.Scene();scene.background=new THREE.Color(0xeff5f1);camera=new THREE.PerspectiveCamera(47,1,.1,50);orbit=new OrbitControls(camera,renderer.domElement);orbit.enableDamping=false;orbit.minDistance=2.5;orbit.maxDistance=10;orbit.addEventListener('change',()=>renderer.render(scene,camera));group=new THREE.Group();scene.add(group);
 const axes=new THREE.AxesHelper(1.8);scene.add(axes);
 for(const [label,pos]of[['w1',[1.95,0,0]],['w2',[0,1.95,0]],['w3',[0,0,1.95]]]){const c=document.createElement('canvas');c.width=128;c.height=64;const ctx=c.getContext('2d');ctx.font='bold 32px Arial';ctx.fillStyle='#213c2a';ctx.fillText(label,12,42);const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),depthTest:false}));sprite.position.set(...pos);sprite.scale.set(.5,.25,1);scene.add(sprite);}
 home();new ResizeObserver(()=>{const b=$('scene').getBoundingClientRect();renderer.setSize(b.width,b.height);camera.aspect=b.width/b.height;camera.updateProjectionMatrix();renderer.render(scene,camera);}).observe($('scene'));
}catch(e){renderer=null;$('fallback').hidden=false;}
$('angle').oninput=update;$('noise').oninput=update;$('orthogonal').onclick=()=>{$('angle').value=90;update();};$('parallel').onclick=()=>{$('angle').value=5;update();};$('zero').onclick=()=>{$('noise').value=0;update();};$('section').onclick=()=>{if(!camera)return;camera.position.set(.4,.4,4.8);orbit.target.set(.4,.4,.1);orbit.update();};$('reset').onclick=()=>{$('angle').value=10;$('noise').value=.05;home();update();};$('export').onclick=()=>{const u=URL.createObjectURL(new Blob([JSON.stringify({...compute(),toySystem:true,perturbation:'second right-hand-side component only'},null,2)],{type:'application/json'})),a=document.createElement('a');a.href=u;a.download='constraint-sensitivity.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};update();


import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-cpu';
const $=id=>document.getElementById(id),u=new THREE.Vector3(1,-1,0).normalize(),v=new THREE.Vector3(1,1,-2).normalize();
let renderer,scene,camera,orbit,dynamic;
const vec=x=>new THREE.Vector3(...x);
function line(points,color,parent=scene){parent.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color})));}
function render(){if(renderer)renderer.render(scene,camera);}
function home(){camera.position.set(4,3,6);camera.lookAt(0,0,0);orbit.target.set(0,0,0);orbit.update();render();}
function setup(){
 try{
 renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));$('scene').append(renderer.domElement);
 scene=new THREE.Scene();scene.background=new THREE.Color('#edf4f1');camera=new THREE.PerspectiveCamera(48,1,.1,100);
 orbit=new OrbitControls(camera,renderer.domElement);orbit.enableDamping=false;orbit.enablePan=false;orbit.minDistance=4;orbit.maxDistance=14;orbit.addEventListener('change',render);
 const plane=new THREE.Mesh(new THREE.PlaneGeometry(4.6,4.6),new THREE.MeshBasicMaterial({color:0x71b19b,transparent:true,opacity:.13,side:THREE.DoubleSide,depthWrite:false}));
 plane.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),new THREE.Vector3(1,1,1).normalize());scene.add(plane);
 for(let i=0;i<3;i++){const p=new THREE.Vector3(),q=new THREE.Vector3();p.setComponent(i,-2.4);q.setComponent(i,2.4);line([p,q],0xa7b8b2);}
 const ring=[];for(let i=0;i<=128;i++){const t=i*Math.PI/64;ring.push(u.clone().multiplyScalar(Math.sqrt(3)*Math.cos(t)).addScaledVector(v,Math.sqrt(3)*Math.sin(t)));}
 line(ring,0xa87c13);
 dynamic=new THREE.Group();scene.add(dynamic);home();
 new ResizeObserver(()=>{const w=$('scene').clientWidth,h=$('scene').clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.zoom=Math.min(1,w/h);camera.updateProjectionMatrix();render();}).observe($('scene'));
 }catch(e){if(renderer){renderer.dispose();renderer.domElement.remove();}renderer=null;$('fallback').hidden=false;$('fallback').textContent='3D is unavailable in this browser. The numerical experiment below remains active.';}
}
function update(){
 const m=+$('m').value,a=+$('a').value,t=+$('t').value,e=+$('e').value;
 const x=u.clone().multiplyScalar(a*Math.cos(t*Math.PI/180)).addScaledVector(v,a*Math.sin(t*Math.PI/180)).addScalar(m).toArray();
 const r=tf.tidy(()=>{const z=tf.tensor1d(x),{mean,variance}=tf.moments(z),c=tf.sub(z,mean),y=tf.div(c,tf.sqrt(tf.add(variance,e)));return {mean:mean.dataSync()[0],variance:variance.dataSync()[0],centered:Array.from(c.dataSync()),y:Array.from(y.dataSync())};});
 window.layernorm={m,a,t,e,x,...r,length:Math.hypot(...r.y),sum:r.y.reduce((s,n)=>s+n,0)};
 $('mval').textContent=m.toFixed(1);$('aval').textContent=a.toFixed(2);$('tval').textContent=t+' degrees';
 const f=z=>z.map(n=>n.toFixed(5)).join(', ');
 $('numbers').textContent='Input:      ['+f(x)+']\nCentered:   ['+f(r.centered)+']\nNormalized: ['+f(r.y)+']\nVariance: '+r.variance.toPrecision(6)+'\nOutput length: '+window.layernorm.length.toFixed(6)+' / reference 1.732051\nOutput sum: '+window.layernorm.sum.toExponential(2);
 $('result').textContent=a===0?'No feature differences remain: the normalized vector is zero.':r.variance<e?'Epsilon exceeds input variance. The normalized vector is substantially inside the reference circle.':'Input variance exceeds epsilon. The output approaches, but does not exactly reach, the reference circle.';
 $('status').textContent='One example, three features. Gain = 1; bias = 0. '+(renderer?'Drag to orbit.':'Numerical view active.');
 if(renderer){
  while(dynamic.children.length){const ob=dynamic.children[0];dynamic.remove(ob);ob.geometry?.dispose();ob.material?.dispose();}
  const points=[x,r.centered,r.y],colors=[0x286bbe,0x087a60,0xbc3464];
  points.forEach((p,i)=>{const mesh=new THREE.Mesh(new THREE.SphereGeometry(i===2?.075:.055,16,12),new THREE.MeshBasicMaterial({color:colors[i]}));mesh.position.copy(vec(p));dynamic.add(mesh);line([new THREE.Vector3(),vec(p)],colors[i],dynamic);});
  line([vec(x),vec(r.centered),vec(r.y)],0x3a5149,dynamic);render();
 }
}
async function start(){await tf.setBackend('cpu');await tf.ready();setup();for(const id of ['m','a','t','e'])$(id).addEventListener('input',update);
$('near').onclick=()=>{$('a').value=.01;$('e').value=.1;update();};
$('zero').onclick=()=>{$('a').value=0;update();};
$('reset').onclick=()=>{$('m').value=1;$('a').value=1;$('t').value=45;$('e').value=.1;if(renderer)home();update();};
$('face').onclick=()=>{if(renderer){camera.position.set(4,4,4);orbit.target.set(0,0,0);orbit.update();render();}};
$('export').onclick=()=>{const blob=new Blob([JSON.stringify({assumptions:'Three features, population variance, gain 1, bias 0, float32 CPU',...window.layernorm},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='layernorm-state.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};update();}
start().catch(e=>{$('status').textContent='Numerical runtime failed: '+e.message;});

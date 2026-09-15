import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
const theta=Math.PI/6,beta=Math.PI/3,axis=new THREE.Vector3(0,0,1),origin=new THREE.Vector3();
const host=document.getElementById('scene');let renderer,scene,camera,controls,qa,ka;
function draw(){if(renderer)renderer.render(scene,camera);}
try{
 renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));host.appendChild(renderer.domElement);
 scene=new THREE.Scene();scene.background=new THREE.Color('#edf3ef');camera=new THREE.PerspectiveCamera(40,1,.1,30);camera.position.set(1.5,-1.8,3.8);camera.up.set(0,1,0);
 controls=new OrbitControls(camera,renderer.domElement);controls.enablePan=false;controls.minDistance=2.7;controls.maxDistance=7;controls.addEventListener('change',draw);controls.saveState();
 const circle=Array.from({length:129},(_,i)=>new THREE.Vector3(Math.cos(i*Math.PI/64),Math.sin(i*Math.PI/64),0));scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(circle),new THREE.LineBasicMaterial({color:'#81998a'})));
 for(const points of [[[-1.3,0,0],[1.3,0,0]],[[0,-1.3,0],[0,1.3,0]]])scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p))),new THREE.LineBasicMaterial({color:'#b3c4b9'})));
 qa=new THREE.ArrowHelper(new THREE.Vector3(1,0,0),origin,1,0x007b65,.17,.09);ka=new THREE.ArrowHelper(new THREE.Vector3(0,1,0),origin,1,0xb7375d,.17,.09);scene.add(qa,ka);
 new ResizeObserver(()=>{renderer.setSize(host.clientWidth,host.clientHeight);camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();draw();}).observe(host);
 controls.update();
}catch(e){renderer?.dispose();renderer=undefined;host.querySelector('canvas')?.remove();document.getElementById('fallback').hidden=false;document.getElementById('camera').disabled=true;}
function update(){
 const m=+document.getElementById('m').value,n=+document.getElementById('n').value,s=+document.getElementById('s').value;
 for(const[id,value]of Object.entries({m,n,s}))document.getElementById(id+'Value').textContent=value;
 const q=new THREE.Vector3(1,0,0).applyAxisAngle(axis,(m+s)*theta),k=new THREE.Vector3(Math.cos(beta),Math.sin(beta),0).applyAxisAngle(axis,(n+s)*theta);
 const score=q.dot(k),expected=Math.cos(beta+(n-m)*theta);
 window.ropeState={m,n,s,theta,beta,actualPositions:[m+s,n+s],offset:n-m,q:q.toArray(),k:k.toArray(),norms:[q.length(),k.length()],score,expected,error:Math.abs(score-expected)};
 document.getElementById('result').textContent=`Positions: ${m+s}, ${n+s} | relative offset: ${n-m}\nDot product: ${score.toFixed(6)} | closed form: ${expected.toFixed(6)}\nNorms: ${q.length().toFixed(6)}, ${k.length().toFixed(6)}\nAbsolute numerical difference: ${Math.abs(score-expected).toExponential(2)}`;
 qa?.setDirection(q);ka?.setDirection(k);draw();
}
['m','n','s'].forEach(id=>document.getElementById(id).addEventListener('input',update));
function preset(m,n){document.getElementById('m').value=m;document.getElementById('n').value=n;document.getElementById('s').value=0;update();}
document.getElementById('same').onclick=()=>preset(0,0);document.getElementById('aligned').onclick=()=>preset(0,10);document.getElementById('reset').onclick=()=>preset(0,2);document.getElementById('camera').onclick=()=>{controls?.reset();draw();};
document.getElementById('export').onclick=()=>{const u=URL.createObjectURL(new Blob([JSON.stringify(window.ropeState,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=u;a.download='rope-state.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};update();

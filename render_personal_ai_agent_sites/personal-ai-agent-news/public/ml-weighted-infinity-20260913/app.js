'use strict';
const residuals=[0.2,0.4,0.7,1,1.4,2];
const $=id=>document.getElementById(id);
function calculate(weights,testWeight,coverage){
  const total=weights.reduce((a,b)=>a+b,0)+testWeight;
  let cumulative=0,q=Infinity;
  const masses=weights.map(w=>w/total);
  const cdf=masses.map((p,i)=>{cumulative+=p;if(q===Infinity&&cumulative+1e-12>=coverage)q=residuals[i];return cumulative;});
  return {weights,testWeight,coverage,masses,cdf,testMass:testWeight/total,q};
}
residuals.forEach((r,i)=>{const row=document.createElement('label');row.className='row';row.textContent=`Residual ${r.toFixed(1)} | weight`;const input=document.createElement('input');input.type='number';input.min='0.1';input.max='100';input.step='0.1';input.value='1';input.id=`w${i}`;input.setAttribute('aria-label',`Weight for residual ${r}`);input.addEventListener('input',render);row.append(input);$('rows').append(row);});
let state;
function render(){
  const inputs=residuals.map((_,i)=>$(`w${i}`));
  if(inputs.some(x=>!x.checkValidity()||!x.value)){ $('verdict').textContent='Enter weights from 0.1 to 100';$('export').disabled=true;return; }
  $('export').disabled=false;
  state=calculate(inputs.map(x=>Number(x.value)),Number($('weight').value),Number($('coverage').value)/100);
  const {q,masses,cdf,coverage,testMass}=state;
  $('weightValue').textContent=state.testWeight.toFixed(1);$('coverageValue').textContent=`${Math.round(coverage*100)}%`;
  $('verdict').textContent=Number.isFinite(q)?'A finite interval':'The interval is unbounded';
  $('interval').textContent=Number.isFinite(q)?`[${(-q).toFixed(1)}, +${q.toFixed(1)}]`:'All real values';
  $('finite').textContent=`${(100*(1-testMass)).toFixed(2)}%`;$('target').textContent=`${Math.round(coverage*100)}%`;$('quantile').textContent=Number.isFinite(q)?q.toFixed(1):'Infinity';
  $('reason').textContent=Number.isFinite(q)?`Residual ${q.toFixed(1)} is the first whose cumulative mass reaches the target. The interval is centered on the illustrative prediction of zero.`:'All six finite residuals together fall short of the target. The next support point is infinity; a finite maximum residual cannot replace it.';
  $('strip').replaceChildren(...masses.map(p=>{const span=document.createElement('span');span.style.width=`${p*100}%`;return span;}));
  const c=$('plot').getContext('2d'),w=720,h=300;c.clearRect(0,0,w,h);c.font='18px Arial';c.fillStyle='#43584e';c.fillText('Cumulative mass',18,26);c.strokeStyle='#be416b';c.lineWidth=2;c.beginPath();c.moveTo(48,260-coverage*200);c.lineTo(690,260-coverage*200);c.stroke();c.fillText(`${Math.round(coverage*100)}% target`,520,Math.max(24,250-coverage*200));
  c.strokeStyle='#178461';c.lineWidth=4;c.beginPath();c.moveTo(48,260);cdf.forEach((v,i)=>{const x=48+residuals[i]/2*610;c.lineTo(x,i?260-cdf[i-1]*200:260);c.lineTo(x,260-v*200);});c.lineTo(690,260-cdf[5]*200);c.stroke();c.fillText('0',42,287);c.fillText('Residual size',270,287);c.fillText('2.0',650,287);
}
function preset(test,coverage){residuals.forEach((_,i)=>$(`w${i}`).value=1);$('weight').value=test;$('coverage').value=coverage;render();}
$('weight').oninput=render;$('coverage').oninput=render;$('balanced').onclick=()=>preset(1,80);$('rare').onclick=()=>preset(6,80);$('reset').onclick=()=>preset(1,80);
$('export').onclick=()=>{const blob=new Blob([JSON.stringify({...state,q:Number.isFinite(state.q)?state.q:'Infinity',residuals,prediction:0},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='weighted-conformal.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};render();

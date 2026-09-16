const $=id=>document.getElementById(id);
function update(){const outcome=$('outcome').value.trim(),duration=$('duration').value.trim(),ref=$('reference').value.trim(),kind=$('kind').value;let status,time;
 if(kind==='missing'){status='No time record supplied. A typed duration is not included as actual time.';time='Not reported: no record supplied';}
 else if(kind==='estimate'){status='Estimate only. Do not present this as recorded actual time.';time=duration?'Estimate: '+duration:'Estimate duration missing';}
 else if(!duration||!ref){status='Recorded-entry details are incomplete. Duration and reference are both required.';time='Withheld: incomplete recorded-entry details';}
 else{status='User-reported recorded time. Check the original entry before sharing.';time='Recorded time (user-reported, unverified): '+duration;}
 if(!outcome)status='Outcome missing. '+status;
 $('status').textContent=status;$('report').textContent=['CLIENT PROGRESS DRAFT','Outcome: '+(outcome||'Not supplied'),'Time evidence: '+kind,'Time: '+time,'Reference: '+(ref||'Not supplied'),'Review: pending; no source verification performed','This is not an invoice or an authorization to charge.'].join('\n');}
['outcome','duration','reference','kind'].forEach(id=>$(id).addEventListener('input',update));$('export').addEventListener('click',()=>{const u=URL.createObjectURL(new Blob([$('report').textContent],{type:'text/plain'})),a=document.createElement('a');a.href=u;a.download='client-progress-draft.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);});update();

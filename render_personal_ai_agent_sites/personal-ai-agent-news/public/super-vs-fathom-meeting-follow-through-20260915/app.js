(()=>{
'use strict';
document.getElementById('download').addEventListener('click',()=>{
 const items=Array.from(document.querySelectorAll('#checklist li'),li=>'- '+li.textContent);
 const text=['MEETING FOLLOW-THROUGH PILOT','Planning checklist, not proof of execution.','',...items,'','No external action is authorized by downloading this checklist.','No measured product comparison has been performed.','Source: '+document.querySelector('link[rel=canonical]').href].join('\n');
 const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='meeting-follow-through-pilot.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.getElementById('notice').textContent='Pilot checklist downloaded.';
});
})();

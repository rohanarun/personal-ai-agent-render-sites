(() => {
 const fields=[['audience','Audience'],['claim','Message'],['evidence','Evidence and limits'],['action','Next action'],['delivery','Deliverable and review']];
 const output=document.getElementById('output');
 function update(){output.textContent=['CREATIVE BRIEF - DRAFT, NOT VERIFIED',...fields.map(([id,label])=>label+':\n'+(document.getElementById(id).value.trim()||'[Missing decision]')),'Before publication: confirm source accuracy, rollout, destination, asset rights, final rendering and approval.'].join('\n\n');}
 fields.forEach(([id])=>document.getElementById(id).addEventListener('input',update));
 document.getElementById('export').onclick=()=>{const u=URL.createObjectURL(new Blob([output.textContent],{type:'text/plain'})),a=document.createElement('a');a.href=u;a.download='launch-creative-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};update();
})();

const el=id=>document.getElementById(id);
function update(){
 const requirement=el('requirement').value.trim(),source=el('source').value.trim(),owner=el('owner').value.trim(),answer=el('answer').value;
 let assessment;
 if(!requirement)assessment='Requirement missing. Define the question before recording a decision.';
 else if(answer==='unknown')assessment='Unresolved. Missing information is not evidence that the vendor fails.';
 else if(!source)assessment='Unsupported answer. Add a source and inspect it before relying on this claim.';
 else assessment=answer==='yes'?'Reported yes, pending evidence review. Confirm the source applies to this order.':'Reported no, pending evidence review. Confirm the source actually rules out this requirement.';
 const record=['VENDOR EVIDENCE RECORD','Requirement: '+(requirement||'Not specified'),'Reported answer: '+answer,'Source: '+(source||'Missing'),'Follow-up owner: '+(owner||'Unassigned'),'Evidence review: not performed by this page','Assessment: '+assessment].join('\n');
 el('assessment').textContent=assessment;el('record').textContent=record;
}
['requirement','source','owner','answer'].forEach(id=>el(id).addEventListener('input',update));
el('export').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([el('record').textContent],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='vendor-evidence.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});update();

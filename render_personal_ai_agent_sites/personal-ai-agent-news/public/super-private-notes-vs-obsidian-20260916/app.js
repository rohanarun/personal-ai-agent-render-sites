(() => {
 const question=document.querySelector('#question'),scope=document.querySelector('#scope');
 function update(){window.ticketText=`# Public research ticket\n\n## Question\n${question.value.trim()||'[Question not specified]'}\n\n## Permitted sources\n${scope.value.trim()||'[Source scope not specified]'}\n\n## Required return\n- Source URL and date checked for each claim\n- Observation separated from interpretation\n- Missing information and unresolved questions\n\n## Boundaries\nResearch only. No bookings, outreach, account access or edits to private notes.\n\n## Human review\nOpen the sources before using the conclusions. This is an unsubmitted draft.\n`;document.querySelector('#ticket').textContent=window.ticketText;}
 question.addEventListener('input',update);scope.addEventListener('input',update);
 document.querySelector('#export').addEventListener('click',()=>{const u=URL.createObjectURL(new Blob([window.ticketText],{type:'text/markdown'})),a=document.createElement('a');a.href=u;a.download='public-research-ticket.md';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)});update();
})();

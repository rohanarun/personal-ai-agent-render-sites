(()=>{
'use strict';
const $=id=>document.getElementById(id);
const rows=[
{id:'claim1',text:'The fictional careers listing requests PostgreSQL experience.',caution:'This observation does not prove deployed technology or buying intent.'},
{id:'claim2',text:'The planned regional office could change data-sharing needs.',caution:'Expansion implications are a hypothesis, not an observed need or budget.'},
{id:'claim3',text:'The integration project may still be paused.',caution:'Last year\'s note does not establish current project status.'}
];
const labels={fact:'User-classified source statement',hypothesis:'Hypothesis to investigate',omit:'Omitted'};
function render(){
 $('draft').replaceChildren();
 for(const r of rows){const value=$(r.id).value;if(value==='omit')continue;const li=document.createElement('li');li.textContent=labels[value]+': '+r.text+' '+r.caution;$('draft').append(li);}
 if(!$('draft').children.length){const li=document.createElement('li');li.textContent='No sample claims included. Collect evidence before making account-specific assertions.';$('draft').append(li);}
 const overclaim=$('claim2').value==='fact'||$('claim3').value==='fact';
 $('warning').textContent=overclaim?'Review required: a hypothesis has been classified as a source statement. Neither expansion needs nor current project status is established by these samples.':'Keep source statements narrow. All classifications remain unverified; no buying intent is established.';
 $('notice').textContent='';
}
rows.forEach(r=>$(r.id).addEventListener('change',render));
$('reset').addEventListener('click',()=>{$('claim1').value='fact';$('claim2').value='hypothesis';$('claim3').value='hypothesis';$('question').value='What has changed in how your teams share operational data?';render();$('notice').textContent='Fictional example reset.';});
$('download').addEventListener('click',()=>{
 const text=['FICTIONAL NORTHLINE PRE-CALL BRIEF','Local planning draft. Classifications are unverified. No prospect research was performed.','',...rows.filter(r=>$(r.id).value!=='omit').map(r=>labels[$(r.id).value]+': '+r.text+' '+r.caution),'','Review: '+$('warning').textContent,'','Discovery question: '+($('question').value.trim()||'Not supplied.'),'','No outreach or CRM mutation is authorized.','Source article: '+document.querySelector('link[rel=canonical]').href].join('\n');
 const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='account-research-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('notice').textContent='Pre-call draft downloaded.';
});
render();
})();

(()=>{
'use strict';
const choices={
observed:{title:'Supported as an observation',reason:'The rates match the supplied counts. Keep the before/after qualification and avoid claiming a causal effect.'},
causal:{title:'The causal claim is not established',reason:'33.3% is the correct relative change, but these counts do not isolate a redesign effect from other changes. Keep the result observational.'},
units:{title:'The units are ambiguous and misleading',reason:'The increase is 10 percentage points, not a 10% relative increase. The relative change is approximately 33.3%.'}
};
const $=id=>document.getElementById(id);
function render(){const selected=document.querySelector('input[name=claim]:checked').value;$('verdict').textContent=choices[selected].title;$('reason').textContent=choices[selected].reason;$('notice').textContent='';}
document.querySelectorAll('input[name=claim]').forEach(e=>e.addEventListener('change',render));
$('download').addEventListener('click',()=>{
 const text=['FICTIONAL EVIDENCE-LED PRESENTATION OUTLINE','Not a generated deck or verified business result.','',
 'Slide 1 - Decision: should we investigate the observed conversion change?',
 'Slide 2 - Observed conversion rose from 30% to 40%.',
 'Source: fictional before 120/400; after 200/500. Same stated conversion definition.',
 'Slide 3 - Difference: 10 percentage points; relative change: 33.3%.',
 'Calculation: (0.40 - 0.30) / 0.30 = 0.3333...',
 'Slide 4 - Limitations: no randomized assignment or traffic-mix adjustment. No causal effect estimated.',
 'Slide 5 - Proposed next step: investigate comparability and plan an appropriate evaluation before attributing the change.',
 '','Current headline audit: '+$('verdict').textContent+' '+$('reason').textContent,
 '','No external upload, generation or publication was performed.','Source article: '+document.querySelector('link[rel=canonical]').href].join('\n');
 const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='evidence-led-outline.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('notice').textContent='Fictional evidence-led outline downloaded.';
});
render();
})();

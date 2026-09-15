(() => {
'use strict';
const $ = id => document.getElementById(id);
function result() {
 const identity=$('identity').value, access=$('access').value, coverage=$('coverage').value;
 let route, reason, next;
 if(identity==='mismatch'){
  route='Stop: resolve the account mismatch';
  reason='The records do not describe the same account. Combining them would create a misleading diagnosis.';
  next='Re-establish the authorized customer-to-account match before using either record. Escalate if that cannot be established.';
 }else if(identity==='unknown'){
  route='Establish the account match first';
  reason='Payment evidence is not usable for this customer until the relevant account and transaction are matched.';
  next='Obtain an authorized account and transaction reference. Do not ask for passwords or full payment credentials.';
 }else if(access==='stale'){
  route='Collect a current entitlement record';
  reason='A matched payment and an old access snapshot leave today\'s entitlement unresolved.';
  next='Read the current authorized entitlement source, retaining its observation time and reference. If inaccessible, escalate the evidence gap.';
 }else if(access==='missing'){
  route='Escalate a possible provisioning gap';
  reason='The reported observations are consistent with paid-but-unprovisioned access, but do not establish the cause or authorize a correction.';
  next='Check provisioning history and applicable policy. Send the evidence to the responsible reviewer; keep any access change separately approved.';
 }else{
  route='Investigate the login path';
  reason='The reported current source shows access. That does not establish why the customer cannot sign in.';
  next='Check the login error and correct account or organization context through an approved diagnostic path. Do not assume another payment or refund is needed.';
 }
 const fit=coverage==='covered'?'Start with the existing support integration. There is no demonstrated reason to add a computer-use step.':coverage==='gap'?'Consider a read-only Super pilot for the specific uncovered source, subject to authorized access and source verification. The gap does not establish Super compatibility.':'Test the existing Fin or Zendesk integration first. Unknown coverage is not evidence that a competing tool is inadequate.';
 return {route,reason,next,fit};
}
function render(){const r=result(); for(const key of ['route','reason','next','fit'])$(key).textContent=r[key];$('notice').textContent='';}
for(const id of ['identity','access','coverage'])$(id).addEventListener('change',render);
$('reset').addEventListener('click',()=>{ $('identity').value='unknown';$('access').value='stale';$('coverage').value='unknown';$('notes').value='';render();$('notice').textContent='Fictional case reset.'; });
$('download').addEventListener('click',()=>{
 const r=result(), text=['FICTIONAL SUPPORT INVESTIGATION - INTERNAL PLANNING BRIEF','Selections are user-reported, not verified. No agent ran or fetched customer data.','',...['identity','access','coverage'].map(id=>$(id).previousSibling?.textContent?.trim()+': '+$(id).selectedOptions[0].textContent),'','Proposed route: '+r.route,r.reason,'Next evidence: '+r.next,'Tool fit: '+r.fit,'','Redacted user notes: '+($('notes').value.trim()||'None supplied.'),'','No customer reply, refund or access change is authorized.','Source article: '+document.querySelector('link[rel=canonical]').href].join('\n');
 const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='support-investigation-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('notice').textContent='Internal planning brief downloaded.';
});
render();
})();

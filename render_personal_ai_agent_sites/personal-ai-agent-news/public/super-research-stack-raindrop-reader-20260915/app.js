(() => {
  const briefs = {
    save: 'Starting point: Raindrop.io\nTrial: Save five relevant sources with a reason for keeping each. Retrieve one tomorrow.\nEvidence of fit: You can locate the original source and explain why it matters.\nAvoid: assuming a saved or archived page is current.',
    read: 'Starting point: Readwise Reader\nTrial: Read one source, preserving a supporting passage, its qualification and your unresolved question.\nEvidence of fit: You can retrieve those notes and trace your interpretation.\nAvoid: treating a summary as a verified quotation.',
    investigate: 'Starting point: a bounded Super Powers AI trial\nTrial: Compare two tools against supplied prerequisites using dated primary sources.\nEvidence of fit: Each conclusion has an inspectable source and ambiguities remain visible.\nAvoid: assuming an integration, factual advantage or lower cost has been proved.'
  };
  const job=document.getElementById('job'),draft=document.getElementById('draft');
  const render=()=>{draft.textContent='EDITORIAL TRIAL BRIEF\nNOT A BENCHMARK OR PURCHASE\n\n'+briefs[job.value]+'\n\nNo account connected. Your trial result: NOT MEASURED.';};
  job.addEventListener('change',render);
  document.getElementById('export').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([draft.textContent],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='research-trial.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
  render();
})();

(() => {
  const examples = {
    leading: ['Would you love our improved setup guide?', 'This assumes improvement and encourages approval. Ask about an experienced task before proposing a solution.', 'During your most recent setup attempt in the past seven days, what, if anything, was difficult?', 'People who attempted setup in the past seven days.', 'What did you include when you thought about setup? Was there anything the question made hard to describe?'],
    double: ['How satisfied are you with the speed and clarity of setup?', 'A single rating mixes speed with clarity. Someone may feel differently about each; separate them.', 'Thinking about your latest setup attempt in the past seven days: how satisfied or dissatisfied were you with the time it took?\nSeparately: how clear or unclear were the instructions?', 'People who attempted setup in the past seven days; record whether they completed it.', 'Could you rate time and clarity differently? What did instructions mean to you? Pilot the response scales separately.'],
    recall: ['How often do you struggle with setup?', 'Often and struggle have no shared definition or recall window. A specific event may be easier to describe.', 'During your most recent setup attempt in the past seven days, did you stop before finishing?\nIf yes: what was the main reason?', 'People who attempted setup in the past seven days; screen out those who did not.', 'Which attempt did you think about? What counted as finishing? Could you answer without guessing?']
  };
  const get = id => document.getElementById(id);
  function render() {
    const values = ['revision', 'audience', 'probe'].map(id => get(id).value.trim());
    get('brief').textContent = ['PILOT DRAFT - NOT VALIDATED', '', ...values.map((v, i) => ['Candidate wording', 'Audience', 'Comprehension probe'][i] + ':\n' + (v || '[Missing: add before pilot]')), '', 'Review: record interpretation, confusion and revisions. Approve final wording and response choices before collection.'].join('\n\n');
  }
  function load() {
    const e = examples[get('example').value];
    get('original').textContent = e[0]; get('issue').textContent = e[1];
    ['revision', 'audience', 'probe'].forEach((id, i) => { get(id).value = e[i + 2]; }); render();
  }
  get('example').addEventListener('change', load);
  ['revision', 'audience', 'probe'].forEach(id => get(id).addEventListener('input', render));
  get('export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([get('brief').textContent], {type:'text/plain'}));
    const a = document.createElement('a'); a.href = url; a.download = 'survey-pilot-brief.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }); load();
})();

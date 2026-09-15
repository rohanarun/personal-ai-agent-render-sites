(() => {
  const questions = {
    start: 'Starting condition question: Which approved role, workspace, week and time zone must the operator use?',
    exception: 'Exception question: Who approves the response to an empty report or missing access, and when must the operator stop?',
    evidence: 'Evidence question: What filename, date range and test-folder location will the second operator verify?'
  };
  const draft = document.getElementById('draft');
  function render() {
    const selected = Object.entries(questions).filter(([id]) => document.getElementById(id).checked).map(([, text]) => text);
    draft.textContent = ['WEEKLY REPORT REVIEW - ILLUSTRATIVE DRAFT', 'NOT TESTED OR APPROVED', ...selected, selected.length ? 'Owner answers: PENDING. Second-person trial: PENDING.' : 'No review questions selected. Guide readiness remains unknown.'].join('\n\n');
  }
  Object.keys(questions).forEach(id => document.getElementById(id).addEventListener('change', render));
  document.getElementById('export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([draft.textContent], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'process-guide-review.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  render();
})();

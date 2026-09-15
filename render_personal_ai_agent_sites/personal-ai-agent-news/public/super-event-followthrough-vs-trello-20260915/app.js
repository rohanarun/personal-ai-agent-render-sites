(() => {
  const examples = {
    research: 'Research draft: Find equipment candidates against the organizer-supplied requirements.\nEvidence needed: dated manufacturer sources and unresolved compatibility questions.\nNext step: organizer reviews the shortlist; no purchase recommendation is approved.',
    confirm: 'Confirmation draft: Ask the venue technician whether the candidate works with the actual room system.\nEvidence needed: technician response or permitted equipment test.\nNext step: a real organizer accepts responsibility and agrees a deadline.',
    record: 'Record draft: Attach the actual test evidence to the shared task record.\nEvidence needed: test date, equipment identity and observed result.\nNext step: the task owner checks the evidence before changing status.'
  };
  const draft = document.getElementById('draft');
  const render = () => { draft.textContent = 'EVENT HANDOFF - FICTIONAL EXAMPLE\nNOT ASSIGNED, BOOKED OR SENT\n\n' + examples[document.querySelector('input:checked').value] + '\n\nOwner and deadline: UNCONFIRMED. No Trello card created.'; };
  document.querySelectorAll('input').forEach(input => input.addEventListener('change', render));
  document.getElementById('export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([draft.textContent], { type: 'text/plain' }));
    const a = document.createElement('a'); a.href = url; a.download = 'event-handoff.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  render();
})();

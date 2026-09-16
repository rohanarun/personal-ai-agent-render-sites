(() => {
  const evidence = document.querySelector('#evidence'), review = document.querySelector('#review');
  function update() {
    const ready = evidence.value === 'scoped' && review.value === 'approved';
    const status = ready ? 'Ready for a scoped publication proposal' : 'Hold the update';
    const reason = evidence.value === 'cached' ? 'A cached explanation is not a current observation. Collect fresh evidence before changing the guide.' : evidence.value === 'admin' ? 'Administrator-only evidence does not support every user. Narrow the claim and verify the target role.' : review.value === 'pending' ? 'Matching evidence is available, but the owner has not approved the change.' : 'Only the tested role and procedure are supported. Publish through the normal review workflow, then replay the reader path.';
    document.querySelector('#result').textContent = status;
    document.querySelector('#reason').textContent = reason;
    window.reviewNote = {example: 'Fictional documentation review', evidence: evidence.value, review: review.value, status, reason};
  }
  evidence.addEventListener('change', update); review.addEventListener('change', update);
  document.querySelector('#export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(window.reviewNote, null, 2)], {type:'application/json'}));
    const a = document.createElement('a'); a.href = url; a.download = 'docs-review.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  update();
})();

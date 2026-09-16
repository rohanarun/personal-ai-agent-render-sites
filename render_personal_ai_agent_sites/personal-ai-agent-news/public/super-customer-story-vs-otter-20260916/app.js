(() => {
 const $=id=>document.getElementById(id);
 function render(){
  const source=$('source').value.trim(),draft=$('draft').value.trim(),locator=$('locator').value.trim(),approval=$('approval').value.trim(),kind=$('kind').value;
  const comparison=!source||!draft?'Missing text: comparison unavailable.':source===draft?'Text matches the excerpt; audio accuracy remains unchecked.':'Text differs from the excerpt; review the wording and meaning.';
  $('brief').textContent=[kind==='quote'?'DIRECT QUOTATION CANDIDATE':'PARAPHRASE CANDIDATE',comparison,kind==='quote'?'Do not present changed wording as a verbatim quote.':'Do not label this paraphrase as a verbatim quote.','Source: '+(source||'[Missing]'),'Draft: '+(draft||'[Missing]'),'Location: '+(locator||'[Missing]'),'Approval note: '+(approval||'[None recorded]'),'Publication status: not verified by this worksheet.'].join('\n\n');
 }
 for(const id of ['source','draft','locator'])$(id).addEventListener('input',()=>{$('approval').value='';render();});
 $('kind').addEventListener('change',()=>{$('approval').value='';render();});$('approval').addEventListener('input',render);
 $('export').onclick=()=>{const url=URL.createObjectURL(new Blob([$('brief').textContent],{type:'text/plain'})),a=document.createElement('a');a.href=url;a.download='customer-story-review.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};render();
})();

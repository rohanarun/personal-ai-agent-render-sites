(()=>{"use strict";
const brief = [
"SOFTWARE EVALUATION PILOT",
"Template only. No vendor trials or account actions have been performed.",
"Prepared from: https://kalshhunter.com/super-software-evaluation-vs-perplexity-20260915/",
"",
"Decision owner: ______",
"Vendors and intended plans: ______",
"Users, guest roles and budget boundary: ______",
"Permitted trial actions and dummy data: ______",
"No purchases, external invitations or production changes without explicit approval.",
"",
"For EACH mandatory requirement record:",
"Pass condition: ______",
"Official URL and retrieval date: ______",
"Published claim and eligible plan: ______",
"Trial account, test date and evidence location: ______",
"Observed result: UNVERIFIED until tested",
"Exception / follow-up / owner: ______",
"",
"FICTIONAL EXAMPLE TESTS - not vendor capability claims:",
"1. SAML: configure the required identity provider on the intended plan; verify login and revoked-access behavior including session timing.",
"2. Export: two dummy tasks with comments and attachments; inspect all required fields and attachment-to-task links; test destination import when required.",
"3. Guest access: allow one project, deny another in a separate guest account; verify billing for that exact role.",
"",
"Assistant evaluation: accepted evidence rows, unsupported assertions, corrections, total spend and human review time.",
"Do not convert vendor claims into trial passes. Unknown is not a hidden zero or a pass.",
"Freshness: re-fetch source content or bypass cache. Metadata alone does not refresh the default cache key.",
"Decision: unresolved mandatory requirements require follow-up, not an invented winner."
].join("\n");
document.querySelector("#download").addEventListener("click",()=>{const url=URL.createObjectURL(new Blob([brief],{type:"text/plain;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download="software-evaluation-pilot.txt";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector("#download-status").textContent="Pilot brief downloaded. Evidence fields remain unverified.";});
})();

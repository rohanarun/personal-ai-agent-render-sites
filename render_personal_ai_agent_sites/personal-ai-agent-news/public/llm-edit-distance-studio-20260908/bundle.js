(() => {
  // .codex-tmp/edit-build/node_modules/fastest-levenshtein/esm/mod.js
  var peq = new Uint32Array(65536);
  var myers_32 = (a, b) => {
    const n = a.length;
    const m = b.length;
    const lst = 1 << n - 1;
    let pv = -1;
    let mv = 0;
    let sc = n;
    let i = n;
    while (i--) {
      peq[a.charCodeAt(i)] |= 1 << i;
    }
    for (i = 0; i < m; i++) {
      let eq = peq[b.charCodeAt(i)];
      const xv = eq | mv;
      eq |= (eq & pv) + pv ^ pv;
      mv |= ~(eq | pv);
      pv &= eq;
      if (mv & lst) {
        sc++;
      }
      if (pv & lst) {
        sc--;
      }
      mv = mv << 1 | 1;
      pv = pv << 1 | ~(xv | mv);
      mv &= xv;
    }
    i = n;
    while (i--) {
      peq[a.charCodeAt(i)] = 0;
    }
    return sc;
  };
  var myers_x = (b, a) => {
    const n = a.length;
    const m = b.length;
    const mhc = [];
    const phc = [];
    const hsize = Math.ceil(n / 32);
    const vsize = Math.ceil(m / 32);
    for (let i = 0; i < hsize; i++) {
      phc[i] = -1;
      mhc[i] = 0;
    }
    let j = 0;
    for (; j < vsize - 1; j++) {
      let mv2 = 0;
      let pv2 = -1;
      const start2 = j * 32;
      const vlen2 = Math.min(32, m) + start2;
      for (let k = start2; k < vlen2; k++) {
        peq[b.charCodeAt(k)] |= 1 << k;
      }
      for (let i = 0; i < n; i++) {
        const eq = peq[a.charCodeAt(i)];
        const pb = phc[i / 32 | 0] >>> i & 1;
        const mb = mhc[i / 32 | 0] >>> i & 1;
        const xv = eq | mv2;
        const xh = ((eq | mb) & pv2) + pv2 ^ pv2 | eq | mb;
        let ph = mv2 | ~(xh | pv2);
        let mh = pv2 & xh;
        if (ph >>> 31 ^ pb) {
          phc[i / 32 | 0] ^= 1 << i;
        }
        if (mh >>> 31 ^ mb) {
          mhc[i / 32 | 0] ^= 1 << i;
        }
        ph = ph << 1 | pb;
        mh = mh << 1 | mb;
        pv2 = mh | ~(xv | ph);
        mv2 = ph & xv;
      }
      for (let k = start2; k < vlen2; k++) {
        peq[b.charCodeAt(k)] = 0;
      }
    }
    let mv = 0;
    let pv = -1;
    const start = j * 32;
    const vlen = Math.min(32, m - start) + start;
    for (let k = start; k < vlen; k++) {
      peq[b.charCodeAt(k)] |= 1 << k;
    }
    let score = m;
    for (let i = 0; i < n; i++) {
      const eq = peq[a.charCodeAt(i)];
      const pb = phc[i / 32 | 0] >>> i & 1;
      const mb = mhc[i / 32 | 0] >>> i & 1;
      const xv = eq | mv;
      const xh = ((eq | mb) & pv) + pv ^ pv | eq | mb;
      let ph = mv | ~(xh | pv);
      let mh = pv & xh;
      score += ph >>> m - 1 & 1;
      score -= mh >>> m - 1 & 1;
      if (ph >>> 31 ^ pb) {
        phc[i / 32 | 0] ^= 1 << i;
      }
      if (mh >>> 31 ^ mb) {
        mhc[i / 32 | 0] ^= 1 << i;
      }
      ph = ph << 1 | pb;
      mh = mh << 1 | mb;
      pv = mh | ~(xv | ph);
      mv = ph & xv;
    }
    for (let k = start; k < vlen; k++) {
      peq[b.charCodeAt(k)] = 0;
    }
    return score;
  };
  var distance = (a, b) => {
    if (a.length < b.length) {
      const tmp = b;
      b = a;
      a = tmp;
    }
    if (b.length === 0) {
      return a.length;
    }
    if (a.length <= 32) {
      return myers_32(a, b);
    }
    return myers_x(a, b);
  };

  // .codex-tmp/personal-ai-agent-news/llm-edit-distance-studio-20260908/app.js
  var $ = (id) => document.getElementById(id);
  var state;
  function build() {
    const a = $("source").value, b = $("target").value;
    $("error").textContent = "";
    if (!/^[\x20-\x7e]{0,12}$/.test(a) || !/^[\x20-\x7e]{0,12}$/.test(b)) {
      state = null;
      $("error").textContent = "Use at most 12 printable ASCII characters per text.";
      $("distance").textContent = "--";
      $("operation").textContent = "Alignment paused.";
      $("prefix").textContent = "";
      $("cost").textContent = "";
      $("stepvalue").textContent = "";
      ["step", "previous", "next", "export"].forEach((id) => $(id).disabled = true);
      const c = $("canvas");
      c.getContext("2d").clearRect(0, 0, c.width, c.height);
      return;
    }
    const matrix = Array.from({ length: a.length + 1 }, (_, i2) => Array.from({ length: b.length + 1 }, (_2, j2) => distance(a.slice(0, i2), b.slice(0, j2))));
    let i = a.length, j = b.length;
    const reverse = [];
    while (i || j) {
      const v = matrix[i][j];
      if (i && j && v === matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)) {
        reverse.push({ i, j, kind: a[i - 1] === b[j - 1] ? "match" : "substitute", from: a[i - 1], to: b[j - 1], cost: a[i - 1] === b[j - 1] ? 0 : 1 });
        i--;
        j--;
      } else if (i && v === matrix[i - 1][j] + 1) {
        reverse.push({ i, j, kind: "delete", from: a[i - 1], to: "", cost: 1 });
        i--;
      } else {
        reverse.push({ i, j, kind: "insert", from: "", to: b[j - 1], cost: 1 });
        j--;
      }
    }
    state = { source: a, target: b, matrix, distance: matrix[a.length][b.length], path: [{ i: 0, j: 0, kind: "start", cost: 0 }, ...reverse.reverse()] };
    $("step").max = state.path.length - 1;
    $("step").value = 0;
    $("step").disabled = false;
    $("export").disabled = false;
    render();
  }
  function render() {
    if (!state) return;
    const k = Number($("step").value), p = state.path[k];
    $("distance").textContent = state.distance;
    $("stepvalue").textContent = `${k} of ${state.path.length - 1}`;
    $("previous").disabled = k === 0;
    $("next").disabled = k === state.path.length - 1;
    $("operation").textContent = p.kind === "start" ? "Start with two empty prefixes." : p.kind === "match" ? `Match ${JSON.stringify(p.from)}. No edit cost.` : p.kind === "substitute" ? `Substitute ${JSON.stringify(p.from)} with ${JSON.stringify(p.to)}. Cost 1.` : p.kind === "delete" ? `Delete ${JSON.stringify(p.from)}. Cost 1.` : `Insert ${JSON.stringify(p.to)}. Cost 1.`;
    $("prefix").textContent = JSON.stringify(state.source.slice(0, p.i)) + " -> " + JSON.stringify(state.target.slice(0, p.j));
    $("cost").textContent = "Prefix cost: " + state.matrix[p.i][p.j];
    draw(k);
  }
  function draw(k) {
    const c = $("canvas"), r = c.getBoundingClientRect(), d = devicePixelRatio || 1;
    c.width = r.width * d;
    c.height = r.height * d;
    const g = c.getContext("2d");
    g.scale(d, d);
    const rows = state.matrix.length, cols = state.matrix[0].length, size = Math.min((r.width - 32) / (cols + 1), (r.height - 24) / (rows + 1)), ox = (r.width - size * (cols + 1)) / 2, oy = 12;
    g.font = `${Math.min(16, size * 0.48)}px monospace`;
    g.textAlign = "center";
    g.textBaseline = "middle";
    const mark = (t, col, row) => g.fillText(t, ox + (col + 0.5) * size, oy + (row + 0.5) * size);
    g.fillStyle = "#29413c";
    ["0", ...state.target].forEach((s, j) => mark(s === " " ? "." : s, j + 1, 0));
    ["0", ...state.source].forEach((s, i) => mark(s === " " ? "." : s, 0, i + 1));
    state.matrix.forEach((row, i) => row.forEach((v, j) => {
      const on = state.path.some((p) => p.i === i && p.j === j), active = state.path[k].i === i && state.path[k].j === j;
      g.fillStyle = active ? "#f3bf61" : on ? "#c2e7d9" : "#ffffff";
      g.fillRect(ox + (j + 1) * size + 1, oy + (i + 1) * size + 1, size - 2, size - 2);
      g.fillStyle = "#243d36";
      mark(v, j + 1, i + 1);
    }));
    c.setAttribute("aria-label", `Prefix distance matrix with ${rows} rows and ${cols} columns. Minimum distance ${state.distance}. Current source prefix ${state.path[k].i}, target prefix ${state.path[k].j}.`);
  }
  ["source", "target"].forEach((id) => $(id).oninput = build);
  $("step").oninput = render;
  $("previous").onclick = () => {
    $("step").value = Number($("step").value) - 1;
    render();
  };
  $("next").onclick = () => {
    $("step").value = Number($("step").value) + 1;
    render();
  };
  $("reset").onclick = () => {
    $("source").value = "kitten";
    $("target").value = "sitting";
    build();
  };
  $("meaning").onclick = () => {
    $("source").value = "safe";
    $("target").value = "unsafe";
    build();
  };
  $("swap").onclick = () => {
    const a = $("source").value;
    $("source").value = $("target").value;
    $("target").value = a;
    build();
  };
  $("export").onclick = () => {
    if (!state) return;
    const u = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = u;
    a.download = "edit-alignment.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1e3);
  };
  new ResizeObserver(render).observe($("canvas"));
  build();
})();

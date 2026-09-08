(() => {
  // ../../../../../../../private/tmp/moreau-build/node_modules/quadprog/lib/vsmall.js
  var calculateMachineEpsilon = () => {
    let epsilon2 = 1e-60;
    let tmpa;
    let tmpb;
    do {
      epsilon2 += epsilon2;
      tmpa = 1 + 0.1 * epsilon2;
      tmpb = 1 + 0.2 * epsilon2;
    } while (tmpa <= 1 || tmpb <= 1);
    return epsilon2;
  };
  var epsilon = calculateMachineEpsilon();
  var vsmall_default = epsilon;

  // ../../../../../../../private/tmp/moreau-build/node_modules/quadprog/lib/dpori.js
  function dpori(a, lda, n) {
    let kp1, t;
    for (let k = 1; k <= n; k += 1) {
      a[k][k] = 1 / a[k][k];
      t = -a[k][k];
      for (let i = 1; i < k; i += 1) {
        const rowI = a[i];
        rowI[k] *= t;
      }
      kp1 = k + 1;
      if (n < kp1) {
        break;
      }
      const rowK = a[k];
      for (let j = kp1; j <= n; j += 1) {
        t = rowK[j];
        rowK[j] = 0;
        for (let i = 1; i <= k; i += 1) {
          const rowI = a[i];
          rowI[j] += t * rowI[k];
        }
      }
    }
  }
  var dpori_default = dpori;

  // ../../../../../../../private/tmp/moreau-build/node_modules/quadprog/lib/dposl.js
  function dposl(a, lda, n, b) {
    let k, t;
    for (k = 1; k <= n; k += 1) {
      t = 0;
      for (let i = 1; i < k; i += 1) {
        const rowI = a[i];
        t += rowI[k] * b[i];
      }
      b[k] = (b[k] - t) / a[k][k];
    }
    for (let kb = 1; kb <= n; kb += 1) {
      k = n + 1 - kb;
      b[k] /= a[k][k];
      t = -b[k];
      for (let i = 1; i < k; i += 1) {
        const rowI = a[i];
        b[i] += t * rowI[k];
      }
    }
  }
  var dposl_default = dposl;

  // ../../../../../../../private/tmp/moreau-build/node_modules/quadprog/lib/dpofa.js
  function dpofa(a, lda, n) {
    let info, jm1, t, s;
    for (let j = 1; j <= n; j += 1) {
      info = j;
      s = 0;
      jm1 = j - 1;
      if (jm1 < 1) {
        s = a[j][j] - s;
      } else {
        for (let k = 1; k <= jm1; k += 1) {
          const rowK = a[k];
          t = rowK[j];
          for (let i = 1; i < k; i += 1) {
            const rowI = a[i];
            t -= rowI[j] * rowI[k];
          }
          t /= rowK[k];
          rowK[j] = t;
          s += t * t;
        }
        s = a[j][j] - s;
      }
      if (s <= 0) {
        break;
      }
      a[j][j] = Math.sqrt(s);
      info = 0;
    }
    return info;
  }
  var dpofa_default = dpofa;

  // ../../../../../../../private/tmp/moreau-build/node_modules/quadprog/lib/qpgen2.js
  function qpgen2(dmat, dvec, fddmat, n, sol, lagr, crval, amat, bvec, fdamat, q, meq, iact, nnact, iter, work, ierr) {
    let l1, it1, nvl, nact, temp, sum2, t1, tt, gc, gs, nu, t1inf, t2min, go;
    const r = Math.min(n, q);
    let l = 2 * n + r * (r + 5) / 2 + 2 * q + 1;
    for (let i = 1; i <= n; i += 1) {
      work[i] = dvec[i];
    }
    for (let i = n + 1; i <= l; i += 1) {
      work[i] = 0;
    }
    for (let i = 1; i <= q; i += 1) {
      iact[i] = 0;
      lagr[i] = 0;
    }
    if (ierr[1] === 0) {
      const info = dpofa_default(dmat, fddmat, n);
      if (info !== 0) {
        ierr[1] = 2;
        return;
      }
      dposl_default(dmat, fddmat, n, dvec);
      dpori_default(dmat, fddmat, n);
    } else {
      for (let j = 1; j <= n; j += 1) {
        sol[j] = 0;
        for (let i = 1; i <= j; i += 1) {
          const dmatI = dmat[i];
          sol[j] += dmatI[j] * dvec[i];
        }
      }
      for (let j = 1; j <= n; j += 1) {
        const dmatJ = dmat[j];
        dvec[j] = 0;
        for (let i = j; i <= n; i += 1) {
          dvec[j] += dmatJ[i] * sol[i];
        }
      }
    }
    crval[1] = 0;
    for (let j = 1; j <= n; j += 1) {
      sol[j] = dvec[j];
      crval[1] += work[j] * sol[j];
      work[j] = 0;
      for (let i = j + 1; i <= n; i += 1) {
        const dmatI = dmat[i];
        dmatI[j] = 0;
      }
    }
    crval[1] = -crval[1] / 2;
    ierr[1] = 0;
    const iwzv = n;
    const iwrv = iwzv + n;
    const iwuv = iwrv + r;
    const iwrm = iwuv + r + 1;
    const iwsv = iwrm + r * (r + 1) / 2;
    const iwnbv = iwsv + q;
    const amatColumns = new Array(q + 1);
    for (let i = 1; i <= q; i += 1) {
      const amatColumn = new Array(n + 1);
      sum2 = 0;
      for (let j = 1; j <= n; j += 1) {
        const amatJ = amat[j];
        const constraintValue = amatJ[i];
        amatColumn[j] = constraintValue;
        sum2 += constraintValue * constraintValue;
      }
      amatColumns[i] = amatColumn;
      work[iwnbv + i] = Math.sqrt(sum2);
    }
    nact = nnact;
    iter[1] = 0;
    iter[2] = 0;
    function fnGoto50() {
      iter[1] += 1;
      l = iwsv;
      for (let i = 1; i <= q; i += 1) {
        const amatColumn = amatColumns[i];
        l += 1;
        sum2 = -bvec[i];
        for (let j = 1; j <= n; j += 1) {
          sum2 += amatColumn[j] * sol[j];
        }
        if (Math.abs(sum2) < vsmall_default) {
          sum2 = 0;
        }
        if (i > meq) {
          work[l] = sum2;
        } else {
          work[l] = -Math.abs(sum2);
          if (sum2 > 0) {
            for (let j = 1; j <= n; j += 1) {
              const amatJ = amat[j];
              const constraintValue = -amatColumn[j];
              amatColumn[j] = constraintValue;
              amatJ[i] = constraintValue;
            }
            bvec[i] = -bvec[i];
          }
        }
      }
      for (let i = 1; i <= nact; i += 1) {
        work[iwsv + iact[i]] = 0;
      }
      nvl = 0;
      temp = 0;
      for (let i = 1; i <= q; i += 1) {
        if (work[iwsv + i] < temp * work[iwnbv + i]) {
          nvl = i;
          temp = work[iwsv + i] / work[iwnbv + i];
        }
      }
      if (nvl === 0) {
        for (let i = 1; i <= nact; i += 1) {
          lagr[iact[i]] = work[iwuv + i];
        }
        return 999;
      }
      return 0;
    }
    function fnGoto55() {
      const amatColumn = amatColumns[nvl];
      for (let i = 1; i <= n; i += 1) {
        work[i] = 0;
      }
      for (let j = 1; j <= n; j += 1) {
        const dmatJ = dmat[j];
        const constraintValue = amatColumn[j];
        for (let i = 1; i <= n; i += 1) {
          work[i] += dmatJ[i] * constraintValue;
        }
      }
      l1 = iwzv;
      for (let i = 1; i <= n; i += 1) {
        work[l1 + i] = 0;
      }
      for (let j = nact + 1; j <= n; j += 1) {
        const workJ = work[j];
        for (let i = 1; i <= n; i += 1) {
          const dmatI = dmat[i];
          const workIndex = l1 + i;
          work[workIndex] += dmatI[j] * workJ;
        }
      }
      t1inf = true;
      for (let i = nact; i >= 1; i -= 1) {
        sum2 = work[i];
        l = iwrm + i * (i + 3) / 2;
        l1 = l - i;
        for (let j = i + 1; j <= nact; j += 1) {
          sum2 -= work[l] * work[iwrv + j];
          l += j;
        }
        sum2 /= work[l1];
        work[iwrv + i] = sum2;
        if (iact[i] <= meq) {
          continue;
        }
        if (sum2 <= 0) {
          continue;
        }
        t1inf = false;
        it1 = i;
      }
      if (!t1inf) {
        t1 = work[iwuv + it1] / work[iwrv + it1];
        for (let i = 1; i <= nact; i += 1) {
          if (iact[i] <= meq) {
            continue;
          }
          if (work[iwrv + i] <= 0) {
            continue;
          }
          temp = work[iwuv + i] / work[iwrv + i];
          if (temp < t1) {
            t1 = temp;
            it1 = i;
          }
        }
      }
      sum2 = 0;
      for (let i = iwzv + 1; i <= iwzv + n; i += 1) {
        sum2 += work[i] * work[i];
      }
      if (Math.abs(sum2) <= vsmall_default) {
        if (t1inf) {
          ierr[1] = 1;
          return 999;
        }
        for (let i = 1; i <= nact; i += 1) {
          work[iwuv + i] = work[iwuv + i] - t1 * work[iwrv + i];
        }
        work[iwuv + nact + 1] = work[iwuv + nact + 1] + t1;
        return 700;
      }
      sum2 = 0;
      for (let i = 1; i <= n; i += 1) {
        sum2 += work[iwzv + i] * amatColumn[i];
      }
      tt = -work[iwsv + nvl] / sum2;
      t2min = true;
      if (!t1inf) {
        if (t1 < tt) {
          tt = t1;
          t2min = false;
        }
      }
      for (let i = 1; i <= n; i += 1) {
        sol[i] += tt * work[iwzv + i];
        if (Math.abs(sol[i]) < vsmall_default) {
          sol[i] = 0;
        }
      }
      crval[1] += tt * sum2 * (tt / 2 + work[iwuv + nact + 1]);
      for (let i = 1; i <= nact; i += 1) {
        work[iwuv + i] = work[iwuv + i] - tt * work[iwrv + i];
      }
      work[iwuv + nact + 1] = work[iwuv + nact + 1] + tt;
      if (t2min) {
        nact += 1;
        iact[nact] = nvl;
        l = iwrm + (nact - 1) * nact / 2 + 1;
        for (let i = 1; i <= nact - 1; i += 1) {
          work[l] = work[i];
          l += 1;
        }
        if (nact === n) {
          work[l] = work[n];
        } else {
          for (let i = n; i >= nact + 1; i -= 1) {
            if (work[i] === 0) {
              continue;
            }
            gc = Math.max(Math.abs(work[i - 1]), Math.abs(work[i]));
            gs = Math.min(Math.abs(work[i - 1]), Math.abs(work[i]));
            if (work[i - 1] >= 0) {
              temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
            } else {
              temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
            }
            gc = work[i - 1] / temp;
            gs = work[i] / temp;
            if (gc === 1) {
              continue;
            }
            if (gc === 0) {
              work[i - 1] = gs * temp;
              for (let j = 1; j <= n; j += 1) {
                const dmatJ = dmat[j];
                temp = dmatJ[i - 1];
                dmatJ[i - 1] = dmatJ[i];
                dmatJ[i] = temp;
              }
            } else {
              work[i - 1] = temp;
              nu = gs / (1 + gc);
              for (let j = 1; j <= n; j += 1) {
                const dmatJ = dmat[j];
                temp = gc * dmatJ[i - 1] + gs * dmatJ[i];
                dmatJ[i] = nu * (dmatJ[i - 1] + temp) - dmatJ[i];
                dmatJ[i - 1] = temp;
              }
            }
          }
          work[l] = work[nact];
        }
      } else {
        sum2 = -bvec[nvl];
        for (let j = 1; j <= n; j += 1) {
          sum2 += sol[j] * amatColumn[j];
        }
        if (nvl > meq) {
          work[iwsv + nvl] = sum2;
        } else {
          work[iwsv + nvl] = -Math.abs(sum2);
          if (sum2 > 0) {
            for (let j = 1; j <= n; j += 1) {
              const amatJ = amat[j];
              const constraintValue = -amatColumn[j];
              amatColumn[j] = constraintValue;
              amatJ[nvl] = constraintValue;
            }
            bvec[nvl] = -bvec[nvl];
          }
        }
        return 700;
      }
      return 0;
    }
    function fnGoto797() {
      l = iwrm + it1 * (it1 + 1) / 2 + 1;
      l1 = l + it1;
      if (work[l1] === 0) {
        return 798;
      }
      gc = Math.max(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
      gs = Math.min(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
      if (work[l1 - 1] >= 0) {
        temp = Math.abs(gc * Math.sqrt(1 + gs / gc * (gs / gc)));
      } else {
        temp = -Math.abs(gc * Math.sqrt(1 + gs / gc * (gs / gc)));
      }
      gc = work[l1 - 1] / temp;
      gs = work[l1] / temp;
      if (gc === 1) {
        return 798;
      }
      if (gc === 0) {
        for (let i = it1 + 1; i <= nact; i += 1) {
          temp = work[l1 - 1];
          work[l1 - 1] = work[l1];
          work[l1] = temp;
          l1 += i;
        }
        for (let i = 1; i <= n; i += 1) {
          const dmatI = dmat[i];
          temp = dmatI[it1];
          dmatI[it1] = dmatI[it1 + 1];
          dmatI[it1 + 1] = temp;
        }
      } else {
        nu = gs / (1 + gc);
        for (let i = it1 + 1; i <= nact; i += 1) {
          temp = gc * work[l1 - 1] + gs * work[l1];
          work[l1] = nu * (work[l1 - 1] + temp) - work[l1];
          work[l1 - 1] = temp;
          l1 += i;
        }
        for (let i = 1; i <= n; i += 1) {
          const dmatI = dmat[i];
          temp = gc * dmatI[it1] + gs * dmatI[it1 + 1];
          dmatI[it1 + 1] = nu * (dmatI[it1] + temp) - dmatI[it1 + 1];
          dmatI[it1] = temp;
        }
      }
      return 0;
    }
    function fnGoto798() {
      l1 = l - it1;
      for (let i = 1; i <= it1; i += 1) {
        work[l1] = work[l];
        l += 1;
        l1 += 1;
      }
      work[iwuv + it1] = work[iwuv + it1 + 1];
      iact[it1] = iact[it1 + 1];
      it1 += 1;
      if (it1 < nact) {
        return 797;
      }
      return 0;
    }
    function fnGoto799() {
      work[iwuv + nact] = work[iwuv + nact + 1];
      work[iwuv + nact + 1] = 0;
      iact[nact] = 0;
      nact -= 1;
      iter[2] += 1;
      return 0;
    }
    while (true) {
      go = fnGoto50();
      if (go === 999) {
        return;
      }
      while (true) {
        go = fnGoto55();
        if (go === 0) {
          break;
        }
        if (go === 999) {
          return;
        }
        if (go === 700) {
          if (it1 === nact) {
            fnGoto799();
          } else {
            while (true) {
              fnGoto797();
              go = fnGoto798();
              if (go !== 797) {
                break;
              }
            }
            fnGoto799();
          }
        }
      }
    }
  }
  var qpgen2_default = qpgen2;

  // ../../../../../../../private/tmp/moreau-build/node_modules/quadprog/lib/quadprog.js
  function solveQP(Dmat, dvec, Amat, bvec = [], meq = 0, factorized = [0, 0]) {
    let message = "";
    const n = Dmat.length - 1;
    const q = Amat[1].length - 1;
    if (bvec.length === 0) {
      for (let i = 1; i <= q; i += 1) {
        bvec[i] = 0;
      }
    }
    if (n !== Dmat[1].length - 1) {
      message = "Dmat is not symmetric!";
    }
    if (n !== dvec.length - 1) {
      message = "Dmat and dvec are incompatible!";
    }
    if (n !== Amat.length - 1) {
      message = "Amat and dvec are incompatible!";
    }
    if (q !== bvec.length - 1) {
      message = "Amat and bvec are incompatible!";
    }
    if (meq > q || meq < 0) {
      message = "Value of meq is invalid!";
    }
    if (message !== "") {
      return {
        message
      };
    }
    const nact = 0;
    const r = Math.min(n, q);
    const workSize = 2 * n + r * (r + 5) / 2 + 2 * q + 1;
    const crval = new Array(2);
    const iact = new Array(q + 1);
    const sol = new Array(n + 1);
    const lagr = new Array(q + 1);
    const work = new Array(workSize + 1);
    const iter = new Array(3);
    qpgen2_default(Dmat, dvec, n, n, sol, lagr, crval, Amat, bvec, n, q, meq, iact, nact, iter, work, factorized);
    if (factorized[1] === 1) {
      message = "constraints are inconsistent, no solution!";
    }
    if (factorized[1] === 2) {
      message = "matrix D in quadratic function is not positive definite!";
    }
    return {
      solution: sol,
      Lagrangian: lagr,
      value: crval,
      unconstrained_solution: dvec,
      iterations: iter,
      iact,
      message
    };
  }

  // .codex-tmp/personal-ai-agent-news/ml-reverse-waterfill-studio-20260908/app.js
  var $ = (id) => document.getElementById(id);
  var sum = (a) => a.reduce((s, x) => s + x, 0);
  var fmt = (x) => x.toFixed(3);
  var state;
  function allocate(variances, fraction) {
    const total = fraction * sum(variances);
    const result = solveQP(
      [[], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],
      [0, 0, 0, 0],
      [[], [0, 1, 1, 0, 0, -1, 0, 0], [0, 1, 0, 1, 0, 0, -1, 0], [0, 1, 0, 0, 1, 0, 0, -1]],
      [0, total, 0, 0, 0, ...variances.map((x) => -x)],
      1
    );
    if (result.message) throw Error(result.message);
    const distortion = result.solution.slice(1);
    const bits = distortion.map((d, i) => Math.max(0, 0.5 * Math.log2(variances[i] / d)));
    return { total, distortion, bits, rate: sum(bits), level: Math.max(...distortion), baseline: 1.5 * Math.log2(1 / fraction) };
  }
  function setup(id) {
    const c = $(id), w = c.clientWidth, h = c.clientHeight, ratio = devicePixelRatio || 1;
    c.width = Math.round(w * ratio);
    c.height = Math.round(h * ratio);
    const g = c.getContext("2d");
    g.scale(ratio, ratio);
    g.font = "12px Arial";
    g.fillStyle = "#536158";
    return { g, w, h };
  }
  function draw() {
    if (!state) return;
    const { variances, level, distortion, total } = state;
    let { g, w, h } = setup("allocation");
    const top = 24, bottom = h - 32, scale = (bottom - top) / 4, bw = Math.min(100, w / 5);
    variances.forEach((v, i) => {
      const x2 = (i + 0.5) * w / 3 - bw / 2;
      g.fillStyle = "#007e6e";
      g.fillRect(x2, bottom - distortion[i] * scale, bw, distortion[i] * scale);
      g.strokeStyle = "#52665b";
      g.strokeRect(x2, bottom - v * scale, bw, v * scale);
      g.fillStyle = "#202624";
      g.textAlign = "center";
      g.fillText("X" + (i + 1), x2 + bw / 2, bottom + 21);
    });
    g.strokeStyle = "#b4216d";
    g.setLineDash([5, 4]);
    g.beginPath();
    g.moveTo(0, bottom - level * scale);
    g.lineTo(w, bottom - level * scale);
    g.stroke();
    ({ g, w, h } = setup("curve"));
    const l = 40, r = w - 12, t = 22, b = h - 40, maxD = sum(variances), maxR = state.curve[0].baseline;
    const x = (d) => l + (r - l) * d / maxD, y = (rate) => b - (b - t) * rate / maxR;
    g.strokeStyle = "#b8c6bd";
    g.beginPath();
    g.moveTo(l, t);
    g.lineTo(l, b);
    g.lineTo(r, b);
    g.stroke();
    g.fillText(fmt(maxR), 0, t + 4);
    g.fillText("0", 22, b + 4);
    g.fillText("bits", 0, 12);
    g.fillText("0", l, b + 18);
    g.textAlign = "right";
    g.fillText(fmt(maxD), r, b + 18);
    g.fillText("Total squared error", r, h - 2);
    for (const [key, color] of [["rate", "#007e6e"], ["baseline", "#b4216d"]]) {
      g.strokeStyle = color;
      g.lineWidth = 2;
      g.beginPath();
      state.curve.forEach((p, i) => i ? g.lineTo(x(p.total), y(p[key])) : g.moveTo(x(p.total), y(p[key])));
      g.stroke();
      g.fillStyle = color;
      g.beginPath();
      g.arc(x(total), y(state[key]), 4, 0, Math.PI * 2);
      g.fill();
    }
  }
  function update() {
    const variances = [4, +$("variance").value, 0.25], fraction = +$("fraction").value;
    state = { variances, fraction, ...allocate(variances, fraction), curve: Array.from({ length: 96 }, (_, i) => allocate(variances, 0.05 + i * 0.01)), units: { rate: "bits per 3D vector", distortion: "total squared error per vector" } };
    $("vOut").textContent = variances[1].toFixed(2);
    $("fOut").textContent = Math.round(fraction * 100) + "%";
    $("rate").textContent = fmt(state.rate);
    $("baseline").textContent = fmt(state.baseline);
    $("level").textContent = fmt(state.level);
    $("rows").innerHTML = variances.map((v, i) => `<tr><td>X${i + 1}</td><td>${fmt(v)}</td><td>${fmt(state.distortion[i])}</td><td>${fmt(state.bits[i])}</td></tr>`).join("");
    const active = state.bits.filter((x) => x > 1e-9).length;
    $("status").textContent = `${active} of 3 coordinates receive bits. Total error: ${fmt(state.total)}. Rate saved: ${fmt(state.baseline - state.rate)} bits/vector.`;
    draw();
  }
  $("variance").oninput = $("fraction").oninput = update;
  $("zero").onclick = () => {
    $("fraction").value = 1;
    update();
  };
  $("reset").onclick = () => {
    $("variance").value = 1;
    $("fraction").value = 0.5;
    update();
  };
  $("export").onclick = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "reverse-waterfill.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  };
  addEventListener("resize", draw);
  update();
})();

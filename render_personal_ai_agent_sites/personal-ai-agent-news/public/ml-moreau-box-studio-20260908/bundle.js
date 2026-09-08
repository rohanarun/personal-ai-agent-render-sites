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
    let l1, it1, nvl, nact, temp, sum, t1, tt, gc, gs, nu, t1inf, t2min, go;
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
      sum = 0;
      for (let j = 1; j <= n; j += 1) {
        const amatJ = amat[j];
        const constraintValue = amatJ[i];
        amatColumn[j] = constraintValue;
        sum += constraintValue * constraintValue;
      }
      amatColumns[i] = amatColumn;
      work[iwnbv + i] = Math.sqrt(sum);
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
        sum = -bvec[i];
        for (let j = 1; j <= n; j += 1) {
          sum += amatColumn[j] * sol[j];
        }
        if (Math.abs(sum) < vsmall_default) {
          sum = 0;
        }
        if (i > meq) {
          work[l] = sum;
        } else {
          work[l] = -Math.abs(sum);
          if (sum > 0) {
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
        sum = work[i];
        l = iwrm + i * (i + 3) / 2;
        l1 = l - i;
        for (let j = i + 1; j <= nact; j += 1) {
          sum -= work[l] * work[iwrv + j];
          l += j;
        }
        sum /= work[l1];
        work[iwrv + i] = sum;
        if (iact[i] <= meq) {
          continue;
        }
        if (sum <= 0) {
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
      sum = 0;
      for (let i = iwzv + 1; i <= iwzv + n; i += 1) {
        sum += work[i] * work[i];
      }
      if (Math.abs(sum) <= vsmall_default) {
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
      sum = 0;
      for (let i = 1; i <= n; i += 1) {
        sum += work[iwzv + i] * amatColumn[i];
      }
      tt = -work[iwsv + nvl] / sum;
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
      crval[1] += tt * sum * (tt / 2 + work[iwuv + nact + 1]);
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
        sum = -bvec[nvl];
        for (let j = 1; j <= n; j += 1) {
          sum += sol[j] * amatColumn[j];
        }
        if (nvl > meq) {
          work[iwsv + nvl] = sum;
        } else {
          work[iwsv + nvl] = -Math.abs(sum);
          if (sum > 0) {
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

  // .codex-tmp/personal-ai-agent-news/ml-moreau-box-studio-20260908/app.js
  var $ = (id) => document.getElementById(id);
  var state;
  function update() {
    const v = [+$("x").value, +$("y").value], lambda = +$("lambda").value;
    const result = solveQP([[], [0, 1, 0], [0, 0, 1]], [0, ...v], [[], [0, 1, -1, 0, 0], [0, 0, 0, 1, -1]], [0, -lambda, -lambda, -lambda, -lambda]);
    if (result.message) throw Error(result.message);
    const q = result.solution.slice(1), p = v.map((a, i) => a - q[i]), l1 = p.reduce((a, b) => a + Math.abs(b), 0), q2 = q.reduce((a, b) => a + b * b, 0), primal = lambda * l1 + q2 / 2, dual = v.reduce((a, b, i) => a + b * q[i], 0) - q2 / 2, dot = p.reduce((a, b, i) => a + b * q[i], 0);
    state = { v, lambda, p, q, primal, dual, gap: primal - dual, dot, support: p.filter((a) => Math.abs(a) > 1e-10).length };
    for (const id of ["x", "y", "lambda"]) $(id + "Value").textContent = $(id).value;
    $("support").textContent = state.support + " / 2";
    $("dot").textContent = dot.toFixed(4);
    $("gap").textContent = state.gap.toExponential(2);
    $("verdict").textContent = state.support ? "The remainder is nonzero. These two pieces are not perpendicular." : "The input lies in the box. Its sparse remainder is zero.";
    $("vectors").innerHTML = [["v", v], ["q", q], ["p", p], ["p + q", p.map((a, i) => a + q[i])]].map(([label, a]) => "<tr><td>" + label + "</td>" + a.map((n) => "<td>" + n.toFixed(4) + "</td>").join("") + "</tr>").join("");
    $("objectives").textContent = "Primal = " + primal.toFixed(6) + "; dual = " + dual.toFixed(6) + ". Zero classification tolerance: 1e-10.";
    draw();
  }
  function draw() {
    const c = $("plane"), w = c.clientWidth, h = c.clientHeight, d = devicePixelRatio || 1;
    c.width = w * d;
    c.height = h * d;
    const g = c.getContext("2d");
    g.scale(d, d);
    const xy = (a2) => [(a2[0] + 4) * w / 8, (4 - a2[1]) * h / 8];
    g.fillStyle = "#fff";
    g.fillRect(0, 0, w, h);
    g.lineWidth = 1;
    for (let i = -3; i <= 3; i++) {
      g.strokeStyle = i === 0 ? "#7d9096" : "#e0e6e8";
      g.beginPath();
      g.moveTo(...xy([i, -4]));
      g.lineTo(...xy([i, 4]));
      g.moveTo(...xy([-4, i]));
      g.lineTo(...xy([4, i]));
      g.stroke();
    }
    const l = state.lambda, a = xy([-l, l]);
    g.fillStyle = "#14786e18";
    g.fillRect(...a, l * w / 4, l * h / 4);
    g.strokeStyle = "#14786e";
    g.strokeRect(...a, l * w / 4, l * h / 4);
    function arrow(a2, b, color, dash = false) {
      const u = xy(a2), v = xy(b), angle = Math.atan2(v[1] - u[1], v[0] - u[0]);
      g.strokeStyle = color;
      g.fillStyle = color;
      g.lineWidth = 3;
      g.setLineDash(dash ? [4, 5] : []);
      g.beginPath();
      g.moveTo(...u);
      g.lineTo(...v);
      g.stroke();
      g.setLineDash([]);
      if (Math.hypot(v[0] - u[0], v[1] - u[1]) > 4) {
        g.beginPath();
        g.moveTo(...v);
        g.lineTo(v[0] - 9 * Math.cos(angle - 0.4), v[1] - 9 * Math.sin(angle - 0.4));
        g.lineTo(v[0] - 9 * Math.cos(angle + 0.4), v[1] - 9 * Math.sin(angle + 0.4));
        g.fill();
      }
    }
    arrow([0, 0], state.v, "#343b40", true);
    arrow([0, 0], state.q, "#14786e");
    arrow(state.q, state.v, "#b34566");
    const z = xy(state.v);
    g.fillStyle = "#343b40";
    g.beginPath();
    g.arc(...z, 6, 0, Math.PI * 2);
    g.fill();
    g.font = "14px Arial";
    g.fillText("v", z[0] + 9, z[1] - 9);
    g.fillStyle = "#536167";
    g.fillText("0", w / 2 + 5, h / 2 + 17);
  }
  for (const id of ["x", "y", "lambda"]) $(id).addEventListener("input", update);
  $("inside").onclick = () => {
    $("x").value = 0.5;
    $("y").value = -0.5;
    $("lambda").value = 1;
    update();
  };
  $("reset").onclick = () => {
    $("x").value = 2.4;
    $("y").value = 0.6;
    $("lambda").value = 1;
    update();
  };
  function move(e) {
    const c = $("plane"), r = c.getBoundingClientRect();
    $("x").value = Math.round(Math.max(-3, Math.min(3, 8 * (e.clientX - r.left) / r.width - 4)) * 10) / 10;
    $("y").value = Math.round(Math.max(-3, Math.min(3, 4 - 8 * (e.clientY - r.top) / r.height)) * 10) / 10;
    update();
  }
  $("plane").onpointerdown = (e) => {
    $("plane").setPointerCapture(e.pointerId);
    move(e);
  };
  $("plane").onpointermove = (e) => {
    if ($("plane").hasPointerCapture(e.pointerId)) move(e);
  };
  $("plane").onpointerup = (e) => {
    if ($("plane").hasPointerCapture(e.pointerId)) $("plane").releasePointerCapture(e.pointerId);
  };
  $("export").onclick = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" })), a = document.createElement("a");
    a.href = url;
    a.download = "moreau-box.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  };
  window.addEventListener("resize", draw);
  update();
})();

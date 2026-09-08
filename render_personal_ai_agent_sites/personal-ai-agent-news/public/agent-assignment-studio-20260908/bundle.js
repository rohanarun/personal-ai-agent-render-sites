(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // .codex-tmp/assignment-build/node_modules/munkres-js/munkres.js
  var require_munkres = __commonJS({
    ".codex-tmp/assignment-build/node_modules/munkres-js/munkres.js"(exports, module) {
      var MAX_SIZE = parseInt(Number.MAX_SAFE_INTEGER / 2) || (1 << 26) * (1 << 26);
      var DEFAULT_PAD_VALUE = 0;
      function Munkres() {
        this.C = null;
        this.row_covered = [];
        this.col_covered = [];
        this.n = 0;
        this.Z0_r = 0;
        this.Z0_c = 0;
        this.marked = null;
        this.path = null;
      }
      Munkres.prototype.pad_matrix = function(matrix, pad_value) {
        pad_value = pad_value || DEFAULT_PAD_VALUE;
        var max_columns = 0;
        var total_rows = matrix.length;
        var i;
        for (i = 0; i < total_rows; ++i)
          if (matrix[i].length > max_columns)
            max_columns = matrix[i].length;
        total_rows = max_columns > total_rows ? max_columns : total_rows;
        var new_matrix = [];
        for (i = 0; i < total_rows; ++i) {
          var row = matrix[i] || [];
          var new_row = row.slice();
          while (total_rows > new_row.length)
            new_row.push(pad_value);
          new_matrix.push(new_row);
        }
        return new_matrix;
      };
      Munkres.prototype.compute = function(cost_matrix, options) {
        options = options || {};
        options.padValue = options.padValue || DEFAULT_PAD_VALUE;
        this.C = this.pad_matrix(cost_matrix, options.padValue);
        this.n = this.C.length;
        this.original_length = cost_matrix.length;
        this.original_width = cost_matrix[0].length;
        var nfalseArray = [];
        while (nfalseArray.length < this.n)
          nfalseArray.push(false);
        this.row_covered = nfalseArray.slice();
        this.col_covered = nfalseArray.slice();
        this.Z0_r = 0;
        this.Z0_c = 0;
        this.path = this.__make_matrix(this.n * 2, 0);
        this.marked = this.__make_matrix(this.n, 0);
        var step = 1;
        var steps = {
          1: this.__step1,
          2: this.__step2,
          3: this.__step3,
          4: this.__step4,
          5: this.__step5,
          6: this.__step6
        };
        while (true) {
          var func = steps[step];
          if (!func)
            break;
          step = func.apply(this);
        }
        var results = [];
        for (var i = 0; i < this.original_length; ++i)
          for (var j = 0; j < this.original_width; ++j)
            if (this.marked[i][j] == 1)
              results.push([i, j]);
        return results;
      };
      Munkres.prototype.__make_matrix = function(n, val) {
        var matrix = [];
        for (var i = 0; i < n; ++i) {
          matrix[i] = [];
          for (var j = 0; j < n; ++j)
            matrix[i][j] = val;
        }
        return matrix;
      };
      Munkres.prototype.__step1 = function() {
        for (var i = 0; i < this.n; ++i) {
          var minval = Math.min.apply(Math, this.C[i]);
          for (var j = 0; j < this.n; ++j)
            this.C[i][j] -= minval;
        }
        return 2;
      };
      Munkres.prototype.__step2 = function() {
        for (var i = 0; i < this.n; ++i) {
          for (var j = 0; j < this.n; ++j) {
            if (this.C[i][j] === 0 && !this.col_covered[j] && !this.row_covered[i]) {
              this.marked[i][j] = 1;
              this.col_covered[j] = true;
              this.row_covered[i] = true;
              break;
            }
          }
        }
        this.__clear_covers();
        return 3;
      };
      Munkres.prototype.__step3 = function() {
        var count = 0;
        for (var i = 0; i < this.n; ++i) {
          for (var j = 0; j < this.n; ++j) {
            if (this.marked[i][j] == 1 && this.col_covered[j] == false) {
              this.col_covered[j] = true;
              ++count;
            }
          }
        }
        return count >= this.n ? 7 : 4;
      };
      Munkres.prototype.__step4 = function() {
        var done = false;
        var row = -1, col = -1, star_col = -1;
        while (!done) {
          var z = this.__find_a_zero();
          row = z[0];
          col = z[1];
          if (row < 0)
            return 6;
          this.marked[row][col] = 2;
          star_col = this.__find_star_in_row(row);
          if (star_col >= 0) {
            col = star_col;
            this.row_covered[row] = true;
            this.col_covered[col] = false;
          } else {
            this.Z0_r = row;
            this.Z0_c = col;
            return 5;
          }
        }
      };
      Munkres.prototype.__step5 = function() {
        var count = 0;
        this.path[count][0] = this.Z0_r;
        this.path[count][1] = this.Z0_c;
        var done = false;
        while (!done) {
          var row = this.__find_star_in_col(this.path[count][1]);
          if (row >= 0) {
            count++;
            this.path[count][0] = row;
            this.path[count][1] = this.path[count - 1][1];
          } else {
            done = true;
          }
          if (!done) {
            var col = this.__find_prime_in_row(this.path[count][0]);
            count++;
            this.path[count][0] = this.path[count - 1][0];
            this.path[count][1] = col;
          }
        }
        this.__convert_path(this.path, count);
        this.__clear_covers();
        this.__erase_primes();
        return 3;
      };
      Munkres.prototype.__step6 = function() {
        var minval = this.__find_smallest();
        for (var i = 0; i < this.n; ++i) {
          for (var j = 0; j < this.n; ++j) {
            if (this.row_covered[i])
              this.C[i][j] += minval;
            if (!this.col_covered[j])
              this.C[i][j] -= minval;
          }
        }
        return 4;
      };
      Munkres.prototype.__find_smallest = function() {
        var minval = MAX_SIZE;
        for (var i = 0; i < this.n; ++i)
          for (var j = 0; j < this.n; ++j)
            if (!this.row_covered[i] && !this.col_covered[j]) {
              if (minval > this.C[i][j])
                minval = this.C[i][j];
            }
        return minval;
      };
      Munkres.prototype.__find_a_zero = function() {
        for (var i = 0; i < this.n; ++i)
          for (var j = 0; j < this.n; ++j)
            if (this.C[i][j] === 0 && !this.row_covered[i] && !this.col_covered[j])
              return [i, j];
        return [-1, -1];
      };
      Munkres.prototype.__find_star_in_row = function(row) {
        for (var j = 0; j < this.n; ++j)
          if (this.marked[row][j] == 1)
            return j;
        return -1;
      };
      Munkres.prototype.__find_star_in_col = function(col) {
        for (var i = 0; i < this.n; ++i)
          if (this.marked[i][col] == 1)
            return i;
        return -1;
      };
      Munkres.prototype.__find_prime_in_row = function(row) {
        for (var j = 0; j < this.n; ++j)
          if (this.marked[row][j] == 2)
            return j;
        return -1;
      };
      Munkres.prototype.__convert_path = function(path, count) {
        for (var i = 0; i <= count; ++i)
          this.marked[path[i][0]][path[i][1]] = this.marked[path[i][0]][path[i][1]] == 1 ? 0 : 1;
      };
      Munkres.prototype.__clear_covers = function() {
        for (var i = 0; i < this.n; ++i) {
          this.row_covered[i] = false;
          this.col_covered[i] = false;
        }
      };
      Munkres.prototype.__erase_primes = function() {
        for (var i = 0; i < this.n; ++i)
          for (var j = 0; j < this.n; ++j)
            if (this.marked[i][j] == 2)
              this.marked[i][j] = 0;
      };
      function make_cost_matrix(profit_matrix, inversion_function) {
        var i, j;
        if (!inversion_function) {
          var maximum = -1 / 0;
          for (i = 0; i < profit_matrix.length; ++i)
            for (j = 0; j < profit_matrix[i].length; ++j)
              if (profit_matrix[i][j] > maximum)
                maximum = profit_matrix[i][j];
          inversion_function = function(x) {
            return maximum - x;
          };
        }
        var cost_matrix = [];
        for (i = 0; i < profit_matrix.length; ++i) {
          var row = profit_matrix[i];
          cost_matrix[i] = [];
          for (j = 0; j < row.length; ++j)
            cost_matrix[i][j] = inversion_function(profit_matrix[i][j]);
        }
        return cost_matrix;
      }
      function format_matrix(matrix) {
        var columnWidths = [];
        var i, j;
        for (i = 0; i < matrix.length; ++i) {
          for (j = 0; j < matrix[i].length; ++j) {
            var entryWidth = String(matrix[i][j]).length;
            if (!columnWidths[j] || entryWidth >= columnWidths[j])
              columnWidths[j] = entryWidth;
          }
        }
        var formatted = "";
        for (i = 0; i < matrix.length; ++i) {
          for (j = 0; j < matrix[i].length; ++j) {
            var s = String(matrix[i][j]);
            while (s.length < columnWidths[j])
              s = " " + s;
            formatted += s;
            if (j != matrix[i].length - 1)
              formatted += " ";
          }
          if (i != matrix[i].length - 1)
            formatted += "\n";
        }
        return formatted;
      }
      function computeMunkres(cost_matrix, options) {
        var m = new Munkres();
        return m.compute(cost_matrix, options);
      }
      computeMunkres.version = "1.2.2";
      computeMunkres.format_matrix = format_matrix;
      computeMunkres.make_cost_matrix = make_cost_matrix;
      computeMunkres.Munkres = Munkres;
      if (typeof module !== "undefined" && module.exports) {
        module.exports = computeMunkres;
      }
    }
  });

  // .codex-tmp/personal-ai-agent-news/agent-assignment-studio-20260908/app.js
  var import_munkres_js = __toESM(require_munkres());
  var $ = (id) => document.getElementById(id);
  var initial = [[1, 2, 8], [2, 9, 9], [9, 1, 2]];
  var agents = ["A", "B", "C"];
  var snapshot;
  $("matrix").innerHTML = "<span></span>" + [1, 2, 3].map((n) => `<span class="col">Task ${n}</span>`).join("") + agents.map((a, i) => `<strong>${a}</strong>` + initial[i].map((v, j) => `<input id="c${i}${j}" type="number" min="0" max="99" step="1" value="${v}" aria-label="Agent ${a} task ${j + 1} cost">`).join("")).join("");
  $("assignments").innerHTML = agents.map((a, i) => `<label>Agent ${a}<select id="a${i}" aria-label="Agent ${a} task">${[0, 1, 2].map((j) => `<option value="${j}" ${i === j ? "selected" : ""}>Task ${j + 1}</option>`).join("")}</select></label>`).join("");
  function readCosts() {
    return agents.map((_, i) => agents.map((_2, j) => {
      const raw = $(`c${i}${j}`).value;
      const v = Number(raw);
      if (raw.trim() === "" || !Number.isInteger(v) || v < 0 || v > 99) throw Error("Every cost must be a whole number from 0 to 99.");
      return v;
    }));
  }
  function draw(assignment, costs) {
    const c = $("canvas"), r = c.getBoundingClientRect(), d = devicePixelRatio || 1;
    c.width = r.width * d;
    c.height = 270 * d;
    const g = c.getContext("2d");
    g.scale(d, d);
    g.clearRect(0, 0, r.width, 270);
    g.font = "15px Arial";
    if (!costs) {
      g.fillStyle = "#ae243a";
      g.fillText("Enter valid costs to restore the allocation.", 12, 130);
      return;
    }
    const x1 = 58, x2 = r.width - 65;
    assignment.forEach((j, i) => {
      g.strokeStyle = ["#007968", "#235da2", "#a84170"][i];
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(x1, 45 + i * 85);
      g.lineTo(x2, 45 + j * 85);
      g.stroke();
    });
    agents.forEach((a, i) => {
      g.fillStyle = "#f7f9fa";
      g.fillRect(0, 28 + i * 85, 57, 35);
      g.fillRect(x2 + 1, 28 + i * 85, 64, 35);
      g.fillStyle = "#20252b";
      g.fillText("Agent " + a, 0, 50 + i * 85);
      g.fillText("Task " + (i + 1), x2 + 7, 50 + i * 85);
    });
    c.setAttribute("aria-label", assignment.map((j, i) => `Agent ${agents[i]} to task ${j + 1}, cost ${costs[i][j]}`).join("; "));
  }
  function render() {
    snapshot = null;
    $("error").textContent = "";
    document.querySelectorAll(".matrix input").forEach((e) => e.classList.remove("chosen", "best"));
    let costs;
    try {
      costs = readCosts();
    } catch (e) {
      $("error").textContent = e.message;
      ["total", "minimum", "gap"].forEach((id) => $(id).textContent = "--");
      $("status").textContent = "Calculation paused: invalid cost.";
      ["greedy", "optimal", "export"].forEach((id) => $(id).disabled = true);
      draw([], null);
      return;
    }
    ["greedy", "optimal", "export"].forEach((id) => $(id).disabled = false);
    const pairs = (0, import_munkres_js.default)(costs.map((r) => r.slice())), optimal = pairs.reduce((s, [i, j]) => s + costs[i][j], 0), assignment = agents.map((_, i) => Number($("a" + i).value)), valid = new Set(assignment).size === 3, total = assignment.reduce((s, j, i) => s + costs[i][j], 0);
    pairs.forEach(([i, j]) => $(`c${i}${j}`).classList.add("best"));
    assignment.forEach((j, i) => $(`c${i}${j}`).classList.add("chosen"));
    $("minimum").textContent = optimal;
    $("total").textContent = valid ? total : "--";
    $("gap").textContent = valid ? total - optimal : "--";
    $("status").textContent = valid ? total === optimal ? "This allocation is globally optimal for these costs." : `Valid allocation. It costs ${total - optimal} units more than the optimum.` : "Conflict: a task is assigned more than once. Each task must have exactly one agent.";
    snapshot = { costs, assignment, valid, total: valid ? total : null, optimal_pairs: pairs, optimal_cost: optimal, excess_cost: valid ? total - optimal : null };
    draw(assignment, costs);
  }
  $("matrix").addEventListener("input", render);
  $("assignments").addEventListener("change", render);
  $("greedy").onclick = () => {
    const c = readCosts(), used = /* @__PURE__ */ new Set();
    agents.forEach((_, i) => {
      const j = [0, 1, 2].filter((j2) => !used.has(j2)).sort((a, b) => c[i][a] - c[i][b] || a - b)[0];
      used.add(j);
      $("a" + i).value = j;
    });
    render();
  };
  $("optimal").onclick = () => {
    (0, import_munkres_js.default)(readCosts()).forEach(([i, j]) => $("a" + i).value = j);
    render();
  };
  $("reset").onclick = () => {
    initial.forEach((r, i) => r.forEach((v, j) => $(`c${i}${j}`).value = v));
    agents.forEach((_, i) => $("a" + i).value = i);
    render();
  };
  $("export").onclick = () => {
    if (!snapshot) return;
    const u = URL.createObjectURL(new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = u;
    a.download = "agent-assignment.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1e3);
  };
  new ResizeObserver(render).observe($("canvas"));
  render();
})();

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

  // .codex-tmp/huffman-build/node_modules/n-ary-huffman/index.js
  var require_n_ary_huffman = __commonJS({
    ".codex-tmp/huffman-build/node_modules/n-ary-huffman/index.js"(exports, module) {
      var BranchPoint;
      var createTree;
      createTree = function(elements, numBranches, options) {
        var branchPointIndex, branchPoints, childIndex, children, element, elementIndex, latestBranchPointIndex, lowestWeight, nextBranchPoint, nextElement, numBranchPoints, numChildren, numElements, numPadding, root, weight;
        if (options == null) {
          options = {};
        }
        if (!(numBranches >= 2)) {
          throw new RangeError("`n` must be at least 2");
        }
        numElements = elements.length;
        if (numElements === 0) {
          return new BranchPoint([], 0);
        }
        if (numElements === 1) {
          element = elements[0];
          return new BranchPoint([element], element.weight);
        }
        if (!options.sorted) {
          elements = elements.slice(0).sort(function(a, b) {
            return b.weight - a.weight;
          });
        }
        numBranchPoints = Math.ceil((numElements - 1) / (numBranches - 1));
        numPadding = 1 + (numBranches - 1) * numBranchPoints - numElements;
        branchPoints = Array(numBranchPoints);
        latestBranchPointIndex = 0;
        branchPointIndex = 0;
        elementIndex = numElements - 1;
        if (numPadding > 0) {
          numChildren = numBranches - numPadding;
          weight = 0;
          children = Array(numChildren);
          childIndex = 0;
          while (childIndex < numChildren) {
            element = elements[elementIndex];
            children[childIndex] = element;
            weight += element.weight;
            elementIndex--;
            childIndex++;
          }
          branchPoints[0] = new BranchPoint(children, weight);
          latestBranchPointIndex = 1;
        }
        nextElement = elementIndex >= 0 ? elements[elementIndex] : null;
        while (latestBranchPointIndex < numBranchPoints) {
          weight = 0;
          children = Array(numBranches);
          childIndex = 0;
          nextBranchPoint = branchPoints[branchPointIndex];
          while (childIndex < numBranches) {
            if (nextElement == null || nextBranchPoint != null && nextBranchPoint.weight <= nextElement.weight) {
              lowestWeight = nextBranchPoint;
              branchPointIndex++;
              nextBranchPoint = branchPoints[branchPointIndex];
            } else {
              lowestWeight = nextElement;
              elementIndex--;
              nextElement = elementIndex >= 0 ? elements[elementIndex] : null;
            }
            children[childIndex] = lowestWeight;
            weight += lowestWeight.weight;
            childIndex++;
          }
          branchPoints[latestBranchPointIndex] = new BranchPoint(children, weight);
          latestBranchPointIndex++;
        }
        root = branchPoints[numBranchPoints - 1];
        return root;
      };
      BranchPoint = (function() {
        function BranchPoint2(children1, weight1) {
          this.children = children1;
          this.weight = weight1;
        }
        BranchPoint2.prototype.assignCodeWords = function(alphabet, callback, prefix) {
          var codeWord, i, index, node, ref;
          if (prefix == null) {
            prefix = "";
          }
          index = 0;
          ref = this.children;
          for (i = ref.length - 1; i >= 0; i += -1) {
            node = ref[i];
            codeWord = prefix + alphabet[index++];
            if (node instanceof BranchPoint2) {
              node.assignCodeWords(alphabet, callback, codeWord);
            } else {
              callback(node, codeWord);
            }
          }
        };
        return BranchPoint2;
      })();
      module.exports = {
        createTree,
        BranchPoint
      };
    }
  });

  // .codex-tmp/personal-ai-agent-news/ml-huffman-code-studio-20260908/app.js
  var import_n_ary_huffman = __toESM(require_n_ary_huffman());
  var $ = (id) => document.getElementById(id);
  var symbols = ["A", "B", "C", "D"];
  var initial = [8, 4, 2, 1];
  var state;
  var tree;
  var items;
  $("controls").innerHTML = symbols.map((s, i) => `<label for="w${i}"><strong>${s}</strong><input id="w${i}" type="range" min="1" max="20" step="1" value="${initial[i]}" aria-label="Frequency ${s}"><output id="o${i}">${initial[i]}</output></label>`).join("");
  function build() {
    items = symbols.map((symbol, i) => ({ symbol, weight: Number($("w" + i).value) }));
    items.forEach((e, i) => $("o" + i).textContent = e.weight);
    tree = import_n_ary_huffman.default.createTree(items.slice(), 2);
    tree.assignCodeWords("01", (item, code) => item.code = code);
    const sum = items.reduce((s, e) => s + e.weight, 0);
    items.forEach((e) => e.probability = e.weight / sum);
    $("codes").replaceChildren(...items.map((e) => {
      const tr = document.createElement("tr");
      [e.symbol, (e.probability * 100).toFixed(1) + "%", e.code].forEach((v) => {
        const td = document.createElement("td");
        td.textContent = v;
        tr.append(td);
      });
      return tr;
    }));
    $("average").textContent = items.reduce((s, e) => s + e.probability * e.code.length, 0).toFixed(3);
    draw();
    encode();
  }
  function encode() {
    state = null;
    const message = $("message").value;
    $("error").textContent = "";
    if (!/^[ABCD]{0,40}$/.test(message)) {
      $("error").textContent = "Only uppercase A, B, C, and D are in this codebook.";
      ["bits", "decoded", "payload"].forEach((id) => $(id).textContent = "");
      $("export").disabled = true;
      return;
    }
    const lookup = Object.fromEntries(items.map((e) => [e.symbol, e.code])), chunks = [...message].map((c) => lookup[c]), bits = chunks.join("");
    let node = tree, decoded = "";
    for (const bit of bits) {
      node = node.children[1 - Number(bit)];
      if (!node.children) {
        decoded += node.symbol;
        node = tree;
      }
    }
    const fixed = message.length * 2;
    state = { codebook: items, expected_bits_per_symbol: items.reduce((s, e) => s + e.probability * e.code.length, 0), message, bits, decoded, payload_bits: bits.length, fixed_payload_bits: fixed, overhead_excluded: true };
    $("bits").textContent = "Encoded: " + (chunks.join(" ") || "(empty)");
    $("decoded").textContent = "Decoded: " + (decoded || "(empty)");
    $("payload").textContent = `Huffman payload: ${bits.length} bits. Fixed-width payload: ${fixed} bits. ${bits.length <= fixed ? fixed - bits.length + " bits saved." : bits.length - fixed + " extra bits."}`;
    $("export").disabled = false;
  }
  function draw() {
    if (!tree) return;
    const c = $("canvas"), r = c.getBoundingClientRect(), d = devicePixelRatio || 1;
    c.width = r.width * d;
    c.height = r.height * d;
    const g = c.getContext("2d");
    g.scale(d, d);
    let leaf = 0, maxDepth = 0;
    const positions = /* @__PURE__ */ new Map();
    function place(n, depth) {
      maxDepth = Math.max(maxDepth, depth);
      const px = n.children ? n.children.map((ch) => place(ch, depth + 1)).reduce((a, b) => a + b) / n.children.length : leaf++;
      positions.set(n, { px, depth });
      return px;
    }
    place(tree, 0);
    const X = (n) => 28 + positions.get(n).px * (r.width - 56) / 3, Y = (n) => 28 + positions.get(n).depth * (r.height - 58) / maxDepth;
    g.font = "14px Arial";
    g.textAlign = "center";
    g.textBaseline = "middle";
    function paint(n) {
      if (n.children) n.children.forEach((ch, i) => {
        g.strokeStyle = "#8ba7b0";
        g.lineWidth = 2;
        g.beginPath();
        g.moveTo(X(n), Y(n));
        g.lineTo(X(ch), Y(ch));
        g.stroke();
        g.fillStyle = "#225363";
        g.fillText(1 - i, (X(n) + X(ch)) / 2 + 9, (Y(n) + Y(ch)) / 2);
        paint(ch);
      });
      g.fillStyle = n.children ? "#e3e9ed" : "#176d83";
      g.beginPath();
      g.arc(X(n), Y(n), 18, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = n.children ? "#263139" : "white";
      g.fillText(n.symbol || n.weight, X(n), Y(n));
    }
    paint(tree);
    c.setAttribute("aria-label", items.map((e) => `${e.symbol}, weight ${e.weight}, code ${e.code}`).join("; "));
  }
  $("controls").addEventListener("input", build);
  $("message").oninput = encode;
  $("reset").onclick = () => {
    initial.forEach((w, i) => $("w" + i).value = w);
    $("message").value = "AAAABBCD";
    build();
  };
  $("uniform").onclick = () => {
    symbols.forEach((_, i) => $("w" + i).value = 1);
    build();
  };
  $("export").onclick = () => {
    if (!state) return;
    const u = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = u;
    a.download = "huffman-message.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1e3);
  };
  new ResizeObserver(draw).observe($("canvas"));
  build();
})();

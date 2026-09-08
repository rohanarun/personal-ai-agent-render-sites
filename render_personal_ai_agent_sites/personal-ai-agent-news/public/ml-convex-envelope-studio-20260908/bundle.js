(() => {
  // .codex-tmp/hull-build/node_modules/d3-polygon/src/area.js
  function area_default(polygon) {
    var i = -1, n = polygon.length, a, b = polygon[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = polygon[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area / 2;
  }

  // .codex-tmp/hull-build/node_modules/d3-polygon/src/cross.js
  function cross_default(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }

  // .codex-tmp/hull-build/node_modules/d3-polygon/src/hull.js
  function lexicographicOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  function computeUpperHullIndexes(points) {
    const n = points.length, indexes = [0, 1];
    let size = 2, i;
    for (i = 2; i < n; ++i) {
      while (size > 1 && cross_default(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
      indexes[size++] = i;
    }
    return indexes.slice(0, size);
  }
  function hull_default(points) {
    if ((n = points.length) < 3) return null;
    var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
    for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
    sortedPoints.sort(lexicographicOrder);
    for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
    var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints);
    var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
    for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
    for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
    return hull;
  }

  // .codex-tmp/hull-build/node_modules/d3-polygon/src/contains.js
  function contains_default(polygon, point) {
    var n = polygon.length, p = polygon[n - 1], x = point[0], y = point[1], x0 = p[0], y0 = p[1], x1, y1, inside = false;
    for (var i = 0; i < n; ++i) {
      p = polygon[i], x1 = p[0], y1 = p[1];
      if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1) inside = !inside;
      x0 = x1, y0 = y1;
    }
    return inside;
  }

  // .codex-tmp/personal-ai-agent-news/ml-convex-envelope-studio-20260908/app.js
  var $ = (id) => document.getElementById(id);
  var samples = { square: [[2, 2], [4, 2], [4, 4], [2, 4], [3, 3]], triangle: [[2, 2], [8, 2], [2, 8]], line: [[2, 2], [4, 4], [6, 6]] };
  var state;
  function boundary(h, p) {
    return h.some((a, i) => {
      const b = h[(i + 1) % h.length], dx = b[0] - a[0], dy = b[1] - a[1], cross = dx * (p[1] - a[1]) - dy * (p[0] - a[0]);
      return Math.abs(cross) < 1e-8 && p[0] >= Math.min(a[0], b[0]) - 1e-9 && p[0] <= Math.max(a[0], b[0]) + 1e-9 && p[1] >= Math.min(a[1], b[1]) - 1e-9 && p[1] <= Math.max(a[1], b[1]) + 1e-9;
    });
  }
  function render() {
    const base = samples[$("sample").value], extra = [Number($("ex").value), Number($("ey").value)], probe = [Number($("qx").value), Number($("qy").value)], points = $("extra").checked ? [...base, extra] : base;
    ["ex", "ey", "qx", "qy"].forEach((id) => $(id + "o").textContent = Number($(id).value).toFixed(1));
    const hull = hull_default(points), area = hull ? Math.abs(area_default(hull)) : 0, bounds = [Math.min(...points.map((p) => p[0])), Math.min(...points.map((p) => p[1])), Math.max(...points.map((p) => p[0])), Math.max(...points.map((p) => p[1]))], boxArea = (bounds[2] - bounds[0]) * (bounds[3] - bounds[1]), inBox = probe[0] >= bounds[0] && probe[0] <= bounds[2] && probe[1] >= bounds[1] && probe[1] <= bounds[3], membership = area < 1e-9 ? "degenerate" : boundary(hull, probe) ? "boundary" : contains_default(hull, probe) ? "inside" : "outside";
    state = { points, hull, probe, area, bounds, box_area: boxArea, in_bounding_box: inBox, membership };
    $("area").textContent = area.toFixed(2);
    $("boxarea").textContent = boxArea.toFixed(2);
    $("boxstatus").textContent = inBox ? "Yes" : "No";
    $("status").textContent = membership === "degenerate" ? "No 2D region: zero-area sample." : membership === "boundary" ? "Probe is on the hull boundary." : `Probe is ${membership} the hull.`;
    draw(base, extra);
  }
  function draw(base, extra) {
    const c = $("canvas"), r = c.getBoundingClientRect(), d = devicePixelRatio || 1;
    c.width = r.width * d;
    c.height = r.height * d;
    const g = c.getContext("2d");
    g.scale(d, d);
    const X = (v) => 32 + v * (r.width - 52) / 10, Y = (v) => r.height - 32 - v * (r.height - 52) / 10;
    g.font = "12px Arial";
    for (let i = 0; i <= 10; i += 2) {
      g.strokeStyle = "#d6e0e5";
      g.beginPath();
      g.moveTo(X(i), Y(0));
      g.lineTo(X(i), Y(10));
      g.moveTo(X(0), Y(i));
      g.lineTo(X(10), Y(i));
      g.stroke();
      g.fillStyle = "#566572";
      g.fillText(i, X(i) - 4, r.height - 12);
      g.fillText(i, 9, Y(i) + 4);
    }
    const h = state.hull;
    if (h?.length) {
      g.beginPath();
      h.forEach((p, i) => i ? g.lineTo(X(p[0]), Y(p[1])) : g.moveTo(X(p[0]), Y(p[1])));
      g.closePath();
      g.fillStyle = "#c5e9e1";
      g.fill();
      g.strokeStyle = "#167b72";
      g.lineWidth = 2;
      g.stroke();
    }
    const [x0, y0, x1, y1] = state.bounds;
    g.setLineDash([5, 5]);
    g.strokeStyle = "#788493";
    g.strokeRect(X(x0), Y(y1), X(x1) - X(x0), Y(y0) - Y(y1));
    g.setLineDash([]);
    function dot(p, color) {
      g.beginPath();
      g.arc(X(p[0]), Y(p[1]), 5, 0, 2 * Math.PI);
      g.fillStyle = color;
      g.fill();
    }
    base.forEach((p) => dot(p, "#216c9b"));
    if ($("extra").checked) dot(extra, "#bf426b");
    const [qx, qy] = state.probe;
    g.strokeStyle = "#20262c";
    g.lineWidth = 3;
    g.beginPath();
    g.moveTo(X(qx) - 7, Y(qy));
    g.lineTo(X(qx) + 7, Y(qy));
    g.moveTo(X(qx), Y(qy) - 7);
    g.lineTo(X(qx), Y(qy) + 7);
    g.stroke();
    c.setAttribute("aria-label", `Hull area ${state.area}, probe ${state.probe.join(", ")}, membership ${state.membership}.`);
  }
  ["sample", "extra"].forEach((id) => $(id).onchange = render);
  ["ex", "ey", "qx", "qy"].forEach((id) => $(id).oninput = render);
  $("reset").onclick = () => {
    $("sample").value = "square";
    $("extra").checked = false;
    $("ex").value = $("ey").value = 8;
    $("qx").value = $("qy").value = 6;
    render();
  };
  function move(e) {
    const r = $("canvas").getBoundingClientRect();
    $("qx").value = Math.max(0, Math.min(10, (e.clientX - r.left - 32) / (r.width - 52) * 10));
    $("qy").value = Math.max(0, Math.min(10, (r.height - 32 - (e.clientY - r.top)) / (r.height - 52) * 10));
    render();
  }
  $("canvas").onpointerdown = (e) => {
    $("canvas").setPointerCapture(e.pointerId);
    move(e);
  };
  $("canvas").onpointermove = (e) => {
    if ($("canvas").hasPointerCapture(e.pointerId)) move(e);
  };
  $("canvas").onpointerup = (e) => {
    $("canvas").releasePointerCapture(e.pointerId);
  };
  $("export").onclick = () => {
    const u = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = u;
    a.download = "convex-envelope.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1e3);
  };
  new ResizeObserver(render).observe($("canvas"));
  render();
})();

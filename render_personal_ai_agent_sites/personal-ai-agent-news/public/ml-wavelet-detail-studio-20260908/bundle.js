(() => {
  // .codex-tmp/wavelet-build/node_modules/discrete-wavelets/dist/discrete-wavelets.es5.js
  var SYMMETRIC_PADDING = "symmetric";
  function symmetricPadding(data, index, inverse) {
    if (inverse === void 0) {
      inverse = false;
    }
    if (data.length === 0) {
      throw new Error("Cannot determine symmetric padding for data of zero length.");
    }
    var dirChanges = Math.floor(index / data.length);
    var inversions = inverse ? dirChanges : dirChanges + 1;
    return inversions % 2 === 0 ? data[index % data.length] : data[data.length - 1 - index % data.length];
  }
  var ANTISYMMETRIC_PADDING = "antisymmetric";
  function antisymmetricPadding(data, index, inverse) {
    if (inverse === void 0) {
      inverse = false;
    }
    var dirChanges = Math.floor(index / data.length);
    var sign = dirChanges % 2 === 0 ? -1 : 1;
    return sign * symmetricPadding(data, index, inverse);
  }
  var CONSTANT_PADDING = "constant";
  function constantPadding(data, inverse) {
    if (inverse === void 0) {
      inverse = false;
    }
    if (data.length === 0) {
      throw new Error("Cannot determine constant padding for data of zero length.");
    }
    return !inverse ? data[data.length - 1] : data[0];
  }
  var PERIODIC_PADDING = "periodic";
  function periodicPadding(data, index, inverse) {
    if (inverse === void 0) {
      inverse = false;
    }
    if (data.length === 0) {
      throw new Error("Cannot determine periodic padding for data of zero length.");
    }
    return !inverse ? data[index % data.length] : data[data.length - 1 - index % data.length];
  }
  var REFLECT_PADDING = "reflect";
  function reflectPadding(data, index, inverse) {
    if (inverse === void 0) {
      inverse = false;
    }
    if (data.length === 0) {
      throw new Error("Cannot determine reflect padding for data of zero length.");
    }
    if (data.length === 1)
      return data[0];
    var dirChanges = Math.floor(index / (data.length - 1));
    var inversions = inverse ? dirChanges : dirChanges + 1;
    return inversions % 2 === 0 ? data[index % (data.length - 1) + 1] : data[data.length - 2 - index % (data.length - 1)];
  }
  var SMOOTH_PADDING = "smooth";
  function smoothPadding(data, index, inverse) {
    if (inverse === void 0) {
      inverse = false;
    }
    if (data.length === 0) {
      throw new Error("Cannot determine smooth padding for data of zero length.");
    }
    var end = data.length - 1;
    var offset = inverse ? data[0] : data[end];
    var slope = inverse ? data.length === 1 ? data[0] : data[0] - data[1] : data.length === 1 ? -data[0] : data[end] - data[end - 1];
    return offset + (index + 1) * slope;
  }
  var ZERO_PADDING = "zero";
  function zeroPadding() {
    return 0;
  }
  var PADDING_MODES = {
    antisymmetric: ANTISYMMETRIC_PADDING,
    constant: CONSTANT_PADDING,
    periodic: PERIODIC_PADDING,
    reflect: REFLECT_PADDING,
    smooth: SMOOTH_PADDING,
    symmetric: SYMMETRIC_PADDING,
    zero: ZERO_PADDING,
    modes: [
      ZERO_PADDING,
      CONSTANT_PADDING,
      SYMMETRIC_PADDING,
      PERIODIC_PADDING,
      SMOOTH_PADDING,
      REFLECT_PADDING,
      ANTISYMMETRIC_PADDING
    ]
  };
  var HaarWavelet = [
    1 / Math.SQRT2,
    1 / Math.SQRT2
  ];
  var Db2Wavelet = [
    (1 + Math.sqrt(3)) / (4 * Math.SQRT2),
    (3 + Math.sqrt(3)) / (4 * Math.SQRT2),
    (3 - Math.sqrt(3)) / (4 * Math.SQRT2),
    (1 - Math.sqrt(3)) / (4 * Math.SQRT2)
  ];
  var Db3Wavelet = [
    0.33267055295008263,
    0.8068915093110925,
    0.45987750211849154,
    -0.13501102001025458,
    -0.08544127388202666,
    0.03522629188570953
  ];
  var Db4Wavelet = [
    0.2303778133088965,
    0.7148465705529157,
    0.6308807679298589,
    -0.027983769416859854,
    -0.18703481171909309,
    0.030841381835560764,
    0.0328830116668852,
    -0.010597401785069032
  ];
  var Db5Wavelet = [
    0.16010239797419293,
    0.6038292697971896,
    0.7243085284377729,
    0.13842814590132074,
    -0.24229488706638203,
    -0.032244869584638375,
    0.07757149384004572,
    -0.006241490212798274,
    -0.012580751999081999,
    0.0033357252854737712
  ];
  var Db6Wavelet = [
    0.11154074335010947,
    0.49462389039845306,
    0.7511339080210954,
    0.31525035170919763,
    -0.22626469396543983,
    -0.12976686756726194,
    0.09750160558732304,
    0.027522865530305727,
    -0.03158203931748603,
    5538422011614961e-19,
    0.004777257510945511,
    -0.0010773010853084796
  ];
  var Db7Wavelet = [
    0.07785205408500918,
    0.3965393194819173,
    0.7291320908462351,
    0.4697822874051931,
    -0.14390600392856498,
    -0.22403618499387498,
    0.07130921926683026,
    0.08061260915108308,
    -0.03802993693501441,
    -0.01657454163066688,
    0.01255099855609984,
    4295779729213665e-19,
    -0.0018016407040474908,
    35371379997452024e-20
  ];
  var Db8Wavelet = [
    0.05441584224310401,
    0.31287159091429995,
    0.6756307362972898,
    0.5853546836542067,
    -0.015829105256349306,
    -0.2840155429615469,
    4724845739132828e-19,
    0.12874742662047847,
    -0.017369301001807547,
    -0.044088253930794755,
    0.013981027917398282,
    0.008746094047405777,
    -0.004870352993451574,
    -39174037337694705e-20,
    6754494064505693e-19,
    -11747678412476953e-20
  ];
  var Db9Wavelet = [
    0.038077947363878345,
    0.24383467461259034,
    0.6048231236901112,
    0.6572880780513005,
    0.13319738582500756,
    -0.2932737832791749,
    -0.09684078322297646,
    0.14854074933810638,
    0.03072568147933338,
    -0.06763282906132997,
    25094711483145197e-20,
    0.022361662123679096,
    -0.004723204757751397,
    -0.00428150368246343,
    0.0018476468830562265,
    23038576352319597e-20,
    -2519631889427101e-19,
    393473203162716e-19
  ];
  var Db10Wavelet = [
    0.026670057900555554,
    0.1881768000776915,
    0.5272011889317256,
    0.6884590394536035,
    0.2811723436605775,
    -0.24984642432731538,
    -0.19594627437737705,
    0.12736934033579325,
    0.09305736460357235,
    -0.07139414716639708,
    -0.029457536821875813,
    0.033212674059341,
    0.0036065535669561697,
    -0.010733175483330575,
    0.001395351747052901,
    0.001992405295185056,
    -6858566949597116e-19,
    -11646685512928545e-20,
    9358867032006959e-20,
    -13264202894521244e-21
  ];
  var ScalingNumbers = {
    "db1": HaarWavelet,
    "db2": Db2Wavelet,
    "db3": Db3Wavelet,
    "db4": Db4Wavelet,
    "db5": Db5Wavelet,
    "db6": Db6Wavelet,
    "db7": Db7Wavelet,
    "db8": Db8Wavelet,
    "db9": Db9Wavelet,
    "db10": Db10Wavelet,
    "D2": HaarWavelet,
    "D4": Db2Wavelet,
    "D6": Db3Wavelet,
    "D8": Db4Wavelet,
    "D10": Db5Wavelet,
    "D12": Db6Wavelet,
    "D14": Db7Wavelet,
    "D16": Db8Wavelet,
    "D18": Db9Wavelet,
    "D20": Db10Wavelet,
    "haar": HaarWavelet
  };
  function add(a, b) {
    if (a.length !== b.length) {
      throw new Error("Both arrays have to have the same length.");
    }
    return a.map(function(value, index) {
      return value + b[index];
    });
  }
  function assertValidApproxDetail(approx, detail) {
    if (approx.length !== detail.length) {
      throw new Error("Approximation and detail coefficients must have equal length.");
    }
    if (approx.length === 0) {
      throw new Error("Approximation and detail coefficients must not have zero length.");
    }
    return true;
  }
  function assertValidCoeffs(coeffs) {
    if (coeffs.length < 1) {
      throw new Error("Invalid coefficients. Array length must not be zero.");
    }
    return true;
  }
  function assertValidFilters(filters) {
    if (filters.high.length !== filters.low.length) {
      throw new Error("High-pass and low-pass filters have to have equal length.");
    }
    if (filters.low.length < 2) {
      throw new Error("Wavelet filter length has to be larger than or equal to two.");
    }
    return true;
  }
  function basisFromWavelet(wavelet) {
    return typeof wavelet !== "string" ? wavelet : waveletFromScalingNumbers(ScalingNumbers[wavelet]);
  }
  function createArray(length, populate) {
    if (populate === void 0) {
      populate = 0;
    }
    if (!Number.isInteger(length)) {
      throw new Error("Length has to be an integer.");
    }
    if (length < 0) {
      throw new Error("Length must not be smaller than zero.");
    }
    return Array.apply(null, Array(length)).map(function(_, index) {
      return typeof populate === "function" ? populate(index) : populate;
    });
  }
  function dot(a, b) {
    if (a.length !== b.length) {
      throw new Error("Both arrays have to have the same length.");
    }
    return a.reduce(function(dot2, value, index) {
      return dot2 + value * b[index];
    }, 0);
  }
  function mulScalar(scalar, array) {
    return array.map(function(value) {
      return scalar * value;
    });
  }
  function padElement(data, index, inverse, mode) {
    switch (mode) {
      case PADDING_MODES.antisymmetric:
        return antisymmetricPadding(data, index, inverse);
      case PADDING_MODES.constant:
        return constantPadding(data, inverse);
      case PADDING_MODES.periodic:
        return periodicPadding(data, index, inverse);
      case PADDING_MODES.reflect:
        return reflectPadding(data, index, inverse);
      case PADDING_MODES.smooth:
        return smoothPadding(data, index, inverse);
      case PADDING_MODES.symmetric:
        return symmetricPadding(data, index, inverse);
      case PADDING_MODES.zero:
        return zeroPadding();
      default:
        throw new Error('Unknown signal extension mode: "' + mode + '"');
    }
  }
  function padWidths(dataLength, filterLength) {
    if (dataLength <= 0) {
      throw new Error("Cannot determine padding widths for data of length less than or equal to zero.");
    }
    if (filterLength < 2) {
      throw new Error("Cannot determine padding widths for filter of length less than two.");
    }
    return [
      filterLength - 2,
      (dataLength + filterLength) % 2 === 0 ? filterLength - 2 : filterLength - 1
    ];
  }
  function waveletFromScalingNumbers(scalingNumbers) {
    if (scalingNumbers.length < 2) {
      throw new Error("Scaling numbers length has to be larger than or equal to two.");
    }
    var waveletNumbers = scalingNumbers.slice().reverse().map(function(value, index) {
      return index % 2 === 0 ? value : -value;
    });
    return {
      dec: {
        low: scalingNumbers.slice(),
        high: waveletNumbers.slice()
      },
      rec: {
        low: scalingNumbers.slice(),
        high: waveletNumbers.slice()
      }
    };
  }
  var DEFAULT_PADDING_MODE = PADDING_MODES.symmetric;
  var DiscreteWavelets = (
    /** @class */
    (function() {
      function DiscreteWavelets2() {
      }
      DiscreteWavelets2.dwt = function(data, wavelet, mode) {
        if (mode === void 0) {
          mode = DEFAULT_PADDING_MODE;
        }
        var waveletBasis = basisFromWavelet(wavelet);
        var filters = waveletBasis.dec;
        assertValidFilters(filters);
        var filterLength = filters.low.length;
        data = this.pad(data, padWidths(data.length, filterLength), mode);
        var approx = [];
        var detail = [];
        for (var offset = 0; offset + filterLength <= data.length; offset += 2) {
          var values = data.slice(offset, offset + filterLength);
          approx.push(dot(values, filters.low));
          detail.push(dot(values, filters.high));
        }
        return [approx, detail];
      };
      DiscreteWavelets2.energy = function(values) {
        var energy = 0;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
          var value = values_1[_i];
          if (typeof value === "number")
            energy += Math.pow(value, 2);
          else
            energy += this.energy(value);
        }
        return energy;
      };
      DiscreteWavelets2.idwt = function(approx, detail, wavelet) {
        if (approx === void 0 && detail !== void 0) {
          approx = createArray(detail.length, 0);
        }
        if (detail === void 0 && approx !== void 0) {
          detail = createArray(approx.length, 0);
        }
        if (approx === void 0 || detail === void 0) {
          throw new Error("Coefficients must not be undefined.");
        }
        assertValidApproxDetail(approx, detail);
        var waveletBasis = basisFromWavelet(wavelet);
        var filters = waveletBasis.rec;
        assertValidFilters(filters);
        var filterLength = filters.low.length;
        var coeffLength = approx.length;
        var pad = createArray(filterLength + (coeffLength - 1) * 2, 0);
        for (var i = 0; i < coeffLength; i++) {
          var offset = 2 * i;
          var values = pad.slice(offset, offset + filterLength);
          values = add(values, mulScalar(approx[i], filters.low));
          values = add(values, mulScalar(detail[i], filters.high));
          pad = pad.slice(0, offset).concat(values).concat(pad.slice(offset + values.length));
        }
        return pad.slice(filterLength - 2, pad.length - (filterLength - 2));
      };
      DiscreteWavelets2.maxLevel = function(dataLength, wavelet) {
        if (!Number.isInteger(dataLength)) {
          throw new Error("Length of data is not an integer. This is not allowed.");
        }
        if (dataLength < 0) {
          throw new Error("Data length cannot be less than zero.");
        }
        if (dataLength === 0)
          return 0;
        var waveletBasis = basisFromWavelet(wavelet);
        var filterLength = waveletBasis.dec.low.length;
        return Math.max(0, Math.floor(Math.log2(dataLength / (filterLength - 1))));
      };
      DiscreteWavelets2.pad = function(data, padWidths2, mode) {
        if (!data) {
          throw new Error("Cannot add padding to empty data.");
        }
        var front = padWidths2[0];
        var back = padWidths2[1];
        return createArray(front, function(index) {
          return padElement(data, front - 1 - index, true, mode);
        }).concat(data).concat(createArray(back, function(index) {
          return padElement(data, index, false, mode);
        }));
      };
      DiscreteWavelets2.wavedec = function(data, wavelet, mode, level) {
        if (mode === void 0) {
          mode = DEFAULT_PADDING_MODE;
        }
        if (level === void 0)
          level = this.maxLevel(data.length, wavelet);
        if (level < 0) {
          throw new Error("Decomposition level must not be less than zero");
        }
        var coeffs = [];
        var approx = data.slice();
        for (var l = 1; l <= level; l++) {
          var approxDetail = this.dwt(approx, wavelet, mode);
          approx = approxDetail[0];
          var detail = approxDetail[1];
          coeffs.unshift(detail.slice());
        }
        coeffs.unshift(approx.slice());
        return coeffs;
      };
      DiscreteWavelets2.waverec = function(coeffs, wavelet) {
        assertValidCoeffs(coeffs);
        wavelet = basisFromWavelet(wavelet);
        var approx = coeffs[0];
        for (var i = 1; i < coeffs.length; i++) {
          var detail = coeffs[i];
          if (approx.length === detail.length + 1) {
            approx = approx.slice(0, approx.length - 1);
          }
          approx = this.idwt(approx, detail, wavelet);
        }
        return approx.slice();
      };
      DiscreteWavelets2.Modes = PADDING_MODES;
      return DiscreteWavelets2;
    })()
  );
  var discrete_wavelets_es5_default = DiscreteWavelets;

  // .codex-tmp/personal-ai-agent-news/ml-wavelet-detail-studio-20260908/app.js
  var $ = (id) => document.getElementById(id);
  var state;
  for (let i = 0; i < 8; i++) {
    const label = document.createElement("label");
    label.textContent = "Sample " + (i + 1);
    const input = document.createElement("input");
    input.type = "number";
    input.min = -4;
    input.max = 4;
    input.step = 0.25;
    input.value = 0;
    input.id = "x" + i;
    input.onchange = render;
    label.append(input);
    $("samples").append(label);
  }
  function render() {
    const input = Array.from({ length: 8 }, (_, i) => {
      const e = $("x" + i), v = Number(e.value), x = Number.isFinite(v) && v >= -4 && v <= 4 ? v : 0;
      e.value = x;
      return x;
    }), threshold = Number($("threshold").value), coefficients = discrete_wavelets_es5_default.wavedec(input, "haar", "symmetric", 3), filtered = coefficients.map((row, i) => row.map((x) => i && Math.abs(x) < threshold ? 0 : x)), reconstruction = discrete_wavelets_es5_default.waverec(filtered, "haar"), error = input.reduce((s, x, i) => s + (x - reconstruction[i]) ** 2, 0), removed = coefficients.reduce((s, row, i) => s + row.reduce((t, x, j) => t + (x - filtered[i][j]) ** 2, 0), 0), energy = discrete_wavelets_es5_default.energy(input), kept = filtered.flat().filter((x) => Math.abs(x) > 1e-10).length;
    state = { input, coefficients, filtered, reconstruction, threshold, energy, error, removed_energy: removed, kept_nonzero: kept, wavelet: "haar", mode: "symmetric", levels: 3 };
    $("thresholdValue").textContent = threshold.toFixed(1);
    $("energy").textContent = energy.toFixed(3);
    $("error").textContent = error.toFixed(3);
    $("removed").textContent = removed.toFixed(3);
    $("kept").textContent = kept + " / 8";
    $("bands").replaceChildren();
    coefficients.forEach((row, i) => {
      const band = document.createElement("div");
      band.className = "band";
      const name = document.createElement("strong");
      name.textContent = ["A3 / mean", "D3 / 8 samples", "D2 / 4 samples", "D1 / 2 samples"][i];
      const cells = document.createElement("div");
      cells.className = "coeffs";
      row.forEach((x, j) => {
        const c = document.createElement("div"), drop = i > 0 && Math.abs(x) < threshold;
        c.className = "coef" + (drop ? " removed" : "");
        c.textContent = x.toFixed(3);
        c.title = drop ? "Discarded" : "Retained";
        cells.append(c);
      });
      band.append(name, cells);
      $("bands").append(band);
    });
    draw();
  }
  function draw() {
    if (!state) return;
    const c = $("canvas"), r = c.getBoundingClientRect(), d = devicePixelRatio || 1;
    c.width = r.width * d;
    c.height = r.height * d;
    const g = c.getContext("2d");
    g.scale(d, d);
    const left = 35, right = r.width - 20, top = 22, bottom = r.height - 30, xx = (i) => left + (right - left) * i / 7, limit = Math.max(5, ...state.input.map(Math.abs), ...state.reconstruction.map((x) => Math.abs(x) + 1)), yy = (v) => bottom - (v + limit) / (2 * limit) * (bottom - top);
    g.fillStyle = "#f0f4f7";
    g.fillRect(0, 0, r.width, r.height);
    g.font = "12px Arial";
    g.fillStyle = "#5e6b7b";
    g.strokeStyle = "#c5d2dd";
    for (const v of [-4, 0, 4]) {
      g.beginPath();
      g.moveTo(left, yy(v));
      g.lineTo(right, yy(v));
      g.stroke();
      g.fillText(v, 8, yy(v) + 4);
    }
    for (let i = 0; i < 8; i++) g.fillText(i + 1, xx(i) - 3, r.height - 8);
    for (const [values, color, dash] of [[state.input, "#176a83", []], [state.reconstruction, "#b23f68", [7, 5]]]) {
      g.strokeStyle = color;
      g.lineWidth = 2.5;
      g.setLineDash(dash);
      g.beginPath();
      values.forEach((v, i) => i ? g.lineTo(xx(i), yy(v)) : g.moveTo(xx(i), yy(v)));
      g.stroke();
      g.setLineDash([]);
      if (!dash.length) values.forEach((v, i) => {
        g.fillStyle = color;
        g.beginPath();
        g.arc(xx(i), yy(v), 4, 0, Math.PI * 2);
        g.fill();
      });
    }
    c.setAttribute("aria-label", `Input and reconstruction; squared error ${state.error.toFixed(3)}`);
  }
  var presets = { step: [0, 0, 0, 0, 4, 4, 4, 4], impulse: [4, 0, 0, 0, 0, 0, 0, 0], alternating: [-2, 2, -2, 2, -2, 2, -2, 2], constant: [2, 2, 2, 2, 2, 2, 2, 2] };
  Object.entries(presets).forEach(([id, values]) => $(id).onclick = () => {
    values.forEach((v, i) => $("x" + i).value = v);
    render();
  });
  $("threshold").oninput = render;
  $("export").onclick = () => {
    const u = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = u;
    a.download = "wavelet-detail.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1e3);
  };
  new ResizeObserver(draw).observe($("canvas"));
  $("step").click();
})();

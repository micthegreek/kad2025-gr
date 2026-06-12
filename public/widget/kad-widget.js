/*!
 * kad2025.gr — Widget Ελέγχου ΚΑΔ v1.0
 * Δωρεάν ενσωμάτωση: https://www.kad2025.gr/widget
 * Χωρίς εξαρτήσεις, χωρίς cookies, χωρίς συλλογή δεδομένων.
 */
(function () {
  "use strict";

  var BASE = "https://www.kad2025.gr";
  var UTM = "utm_source=widget&utm_medium=embed&utm_campaign=partner";

  function el(tag, styles, attrs) {
    var node = document.createElement(tag);
    if (styles) for (var k in styles) node.style[k] = styles[k];
    if (attrs) for (var a in attrs) node.setAttribute(a, attrs[a]);
    return node;
  }

  function go(input) {
    var v = (input.value || "").replace(/[^0-9]/g, "");
    if (!v) { input.focus(); return; }
    window.open(BASE + "/antistoixisi?q=" + encodeURIComponent(v) + "&" + UTM, "_blank", "noopener");
  }

  function render(container) {
    if (container.getAttribute("data-kad2025-ready")) return;
    container.setAttribute("data-kad2025-ready", "1");

    var box = el("div", {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
      background: "#ffffff",
      border: "1px solid #d1dae8",
      borderRadius: "10px",
      padding: "16px",
      maxWidth: "360px",
      boxShadow: "0 2px 12px rgba(26,58,107,0.10)",
      boxSizing: "border-box"
    });

    var title = el("div", { fontSize: "14px", fontWeight: "700", color: "#1a3a6b", marginBottom: "4px" });
    title.textContent = "🔄 Έλεγχος ΚΑΔ 2008 → 2025";

    var sub = el("div", { fontSize: "11.5px", color: "#5a6a7e", marginBottom: "10px", lineHeight: "1.5" });
    sub.textContent = "Βρείτε τον νέο ΚΑΔ 2025 — επίσημα δεδομένα ΑΑΔΕ. Προθεσμία διόρθωσης: 30/10/2026.";

    var row = el("div", { display: "flex", gap: "6px" });

    var input = el("input", {
      flex: "1",
      minWidth: "0",
      padding: "9px 10px",
      border: "1px solid #d1dae8",
      borderRadius: "8px",
      fontSize: "14px",
      fontFamily: "inherit",
      color: "#1a2332",
      background: "#f4f7fb",
      outline: "none",
      boxSizing: "border-box"
    }, {
      type: "text",
      inputmode: "numeric",
      maxlength: "8",
      placeholder: "π.χ. 47910000",
      "aria-label": "Κωδικός ΚΑΔ"
    });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") go(input); });

    var btn = el("button", {
      padding: "9px 14px",
      background: "#1a3a6b",
      color: "#ffffff",
      border: "none",
      borderRadius: "8px",
      fontSize: "13.5px",
      fontWeight: "700",
      cursor: "pointer",
      fontFamily: "inherit",
      whiteSpace: "nowrap"
    }, { type: "button" });
    btn.textContent = "Έλεγχος";
    btn.addEventListener("click", function () { go(input); });
    btn.addEventListener("mouseover", function () { btn.style.background = "#0f2347"; });
    btn.addEventListener("mouseout", function () { btn.style.background = "#1a3a6b"; });

    row.appendChild(input);
    row.appendChild(btn);

    var foot = el("div", { fontSize: "10.5px", color: "#8a96a8", marginTop: "10px", textAlign: "right" });
    var link = el("a", { color: "#1a3a6b", textDecoration: "none", fontWeight: "600" }, {
      href: BASE + "/?" + UTM, target: "_blank", rel: "noopener"
    });
    link.textContent = "Δωρεάν από kad2025.gr";
    foot.appendChild(document.createTextNode("⚡ "));
    foot.appendChild(link);

    box.appendChild(title);
    box.appendChild(sub);
    box.appendChild(row);
    box.appendChild(foot);
    container.appendChild(box);
  }

  function init() {
    var nodes = document.querySelectorAll("#kad2025-widget, [data-kad2025-widget]");
    for (var i = 0; i < nodes.length; i++) render(nodes[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

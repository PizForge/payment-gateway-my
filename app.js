"use strict";

var gateways = [];
var plans = [];
var active = {};
var tableBody = document.getElementById("rows");
var query = document.getElementById("q");
var emptyMessage = document.getElementById("empty");
var loadError = document.getElementById("load-error");
document.getElementById("report-rate").href = "https://github.com/" + REPO + "/issues/new?template=rate-report.md";

function esc(value) {
  return value.replace(/[&<>"]/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
  });
}

function renderGateways() {
  var searchTerm = query.value.toLowerCase().trim();
  var output = "";

  gateways.forEach(function (gateway) {
    if (searchTerm && gateway.n.toLowerCase().indexOf(searchTerm) < 0) return;
    for (var filter in active) {
      if (active[filter] && gateway.t.indexOf(filter) < 0) return;
    }
    var tags = gateway.t.map(function (tag) {
      return '<span class="tag">' + ({ fpx: "FPX", duitnow: "DuitNow QR", global: "Global", nomonthly: "No monthly fees" }[tag]) + "</span>";
    }).join("");
    output += "<tr><td class=\"name\">" + esc(gateway.n) + "<div>" + tags + "</div></td><td>" + esc(gateway.r) + "</td><td>" + formatMonth(gateway.ratesChecked) + "</td><td>" + esc(gateway.f) + "</td><td>" + esc(gateway.s) + "</td><td>" + esc(gateway.b) + "</td><td>" + esc(gateway.p) + "</td></tr>";
  });

  tableBody.innerHTML = output;
  emptyMessage.hidden = !!output;
}

function formatMonth(yearMonth) {
  var date = new Date(yearMonth + "-01T00:00:00Z");
  return new Intl.DateTimeFormat("en-MY", { month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}

function calculateCosts() {
  var salesInput = document.getElementById("sales");
  var averageInput = document.getElementById("avg");
  var results = document.getElementById("res");
  var sales = Math.max(0, +salesInput.value || 0);
  var average = Math.max(1, +averageInput.value || 1);
  var transactionCount = sales / average;
  var sortedPlans = plans.map(function (plan) {
    return { n: plan.n, c: sales * plan.p + transactionCount * plan.fx + plan.m };
  }).sort(function (left, right) {
    return left.c - right.c;
  });

  results.innerHTML = sortedPlans.map(function (plan) {
    return "<li>" + esc(plan.n) + ': <b>RM ' + plan.c.toFixed(2) + "</b></li>";
  }).join("");
}

function validateData(data) {
  if (!data || !/^\d{4}-\d{2}-\d{2}$/.test(data.lastUpdated) || !Array.isArray(data.gateways) || !Array.isArray(data.plans)) {
    throw new Error("data.json must contain a lastUpdated date and gateways and plans arrays.");
  }
  if (data.gateways.some(function (gateway) {
    return !/^\d{4}-\d{2}$/.test(gateway.ratesChecked);
  })) {
    throw new Error("Every gateway must have a ratesChecked date in YYYY-MM format.");
  }
  return data;
}

document.querySelectorAll(".chip").forEach(function (button) {
  button.addEventListener("click", function () {
    var filter = button.dataset.f;
    active[filter] = !active[filter];
    button.setAttribute("aria-pressed", active[filter]);
    renderGateways();
  });
});

query.addEventListener("input", renderGateways);
document.getElementById("sales").addEventListener("input", calculateCosts);
document.getElementById("avg").addEventListener("input", calculateCosts);

fetch("data.json")
  .then(function (response) {
    if (!response.ok) throw new Error("Unable to load data.json (HTTP " + response.status + ").");
    return response.json();
  })
  .then(validateData)
  .then(function (data) {
    gateways = data.gateways;
    plans = data.plans;
    var updatedDate = new Date(data.lastUpdated + "T00:00:00Z");
    var updatedLabel = document.getElementById("last-updated");
    updatedLabel.dateTime = data.lastUpdated;
    updatedLabel.textContent = new Intl.DateTimeFormat("en-MY", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(updatedDate);
    renderGateways();
    calculateCosts();
  })
  .catch(function (error) {
    loadError.textContent = "Could not load gateway data. Serve this folder over HTTP and check data.json. " + error.message;
    loadError.hidden = false;
  });

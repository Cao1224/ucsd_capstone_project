// Chart.js - Mean Outcome Differences Before & After Reweighing
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("meanOutcomeChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Train Set", "Validation Set", "Test Set", "Transformed (Reweighing)"],
      datasets: [
        {
          label: "Before Reweighing",
          data: [0.009, 0.008, 0.011, 0],  // Last value 0 represents transformed data
          backgroundColor: ["#ff6384", "#ff6384", "#ff6384", "#36a2eb"],
          borderColor: ["#ff6384", "#ff6384", "#ff6384", "#36a2eb"],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 0.015
        }
      }
    }
  });
});

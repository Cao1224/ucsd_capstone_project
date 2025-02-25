document.addEventListener("DOMContentLoaded", function () {
  const datasetOverview = document.getElementById("datasetOverview");
  const rearrestOutcomes = document.getElementById("rearrestOutcomes");
  const demographicBreakdown = document.getElementById("demographicBreakdown");
  const caseDistribution = document.getElementById("caseDistribution");
  const priorHistoryImpact = document.getElementById("priorHistoryImpact");


  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtnDemographics = document.getElementById("prevBtnDemographics");
  const nextBtnDemographics = document.getElementById("nextBtnDemographics");
  const prevBtnCase = document.getElementById("prevBtnCase");
  const nextBtnCase = document.getElementById("nextBtnCase");
  const prevBtnPrior = document.getElementById("prevBtnPrior");
  const nextBtnPrior = document.getElementById("nextBtnPrior");

  let currentPage = 0;

  function updateView() {
    datasetOverview.classList.add("d-none");
    rearrestOutcomes.classList.add("d-none");
    demographicBreakdown.classList.add("d-none");
    caseDistribution?.classList.add("d-none");
    priorHistoryImpact?.classList.add("d-none");

    // Show the appropriate section based on `currentPage`
    if (currentPage === 0) {
      datasetOverview?.classList.remove("d-none");
      prevBtn?.setAttribute("disabled", "true");
      nextBtn?.removeAttribute("disabled");
    } else if (currentPage === 1) {
      rearrestOutcomes?.classList.remove("d-none");
      prevBtn?.removeAttribute("disabled");
      nextBtn?.removeAttribute("disabled");
    } else if (currentPage === 2) {
      demographicBreakdown?.classList.remove("d-none");
      prevBtnDemographics?.removeAttribute("disabled");
      nextBtnDemographics?.removeAttribute("disabled");
    } else if (currentPage === 3) {
      caseDistribution?.classList.remove("d-none");
      prevBtnCase?.removeAttribute("disabled");
      nextBtnCase?.setAttribute("disabled");
    }else if (currentPage === 4) {
      priorHistoryImpact?.classList.remove("d-none");
      prevBtnPrior?.removeAttribute("disabled");
      nextBtnPrior?.setAttribute("disabled", "true");
  }
}

  // Button Event Listeners
  if (nextBtn) nextBtn.addEventListener("click", function () { if (currentPage < 4) { currentPage++; updateView(); } });
  if (prevBtn) prevBtn.addEventListener("click", function () { if (currentPage > 0) { currentPage--; updateView(); } });
  if (nextBtnDemographics) nextBtnDemographics.addEventListener("click", function () { if (currentPage < 4) { currentPage++; updateView(); } });
  if (prevBtnDemographics) prevBtnDemographics.addEventListener("click", function () { if (currentPage > 0) { currentPage--; updateView(); } });
  if (nextBtnCase) nextBtnCase.addEventListener("click", function () { if (currentPage < 4) { currentPage++; updateView(); } });
  if (prevBtnCase) prevBtnCase.addEventListener("click", function () { if (currentPage > 0) { currentPage--; updateView(); } });
  if (nextBtnPrior) nextBtnPrior.addEventListener("click", function () { if (currentPage < 4) { currentPage++; updateView(); } });
  if (prevBtnPrior) prevBtnPrior.addEventListener("click", function () { if (currentPage > 0) { currentPage--; updateView(); } });

  // 🎯 Chart.js - Rearrest Outcomes Distribution
  const ctx = document.getElementById("rearrestChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["No Rearrest", "Misdemeanor Rearrest", "Non-Violent Felony", "Violent Felony"],
      datasets: [{
        data: [83.7, 8.1, 6.0, 2.2],
        backgroundColor: "#3374a1",
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false  // This removes the legend
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Rearrest Categories", // X-axis title
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }, y: {
          title: {
            display: true,
            text: "Percentage (%)", // Y-axis title
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }
      }
    }
  });

  const ctxRace = document.getElementById("raceChart").getContext("2d");
  new Chart(ctxRace, {
    type: "bar",
    data: {
      labels: [
        "American Indian/Alaskan Native",
        "Asian/Pacific Islander",
        "Black",
        "Other",
        "Unknown",
        "White"
      ],
      datasets: [
        {
          label: "No Rearrest",
          data: [689, 8340, 100466, 3077, 12309, 80203],
          backgroundColor: "#3374a1"
        },
        {
          label: "Rearrest",
          data: [113, 1186, 20731, 382, 2140, 15085],
          backgroundColor: "#e1812c"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Race", // X-axis title
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        },
        y: {
          title: {
            display: true,
            text: "Count", // Y-axis title
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          beginAtZero: true,
          ticks: {
            stepSize: 20000
          }
        }
      }
    }
  });

  const ctxEthnicity = document.getElementById("ethnicityChart").getContext("2d");
  new Chart(ctxEthnicity, {
    type: "bar",
    data: {
      labels: ["Hispanic", "Non-Hispanic", "Unknown"],
      datasets: [
        { label: "No Rearrest", data: [56428, 132023, 16633], backgroundColor: "#3374a1" },
        { label: "Rearrest", data: [9766, 26913, 2958], backgroundColor: "#e1812c" }
      ]
    },
    options: {
      responsive: true, plugins: { legend: { position: "top" } }, scales: {
        x: {
          title: {
            display: true,
            text: "Race", // X-axis title
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        },
        y: {
          title: {
            display: true,
            text: "Count", // Y-axis title
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }
      }
    }
  });

  const ctxGender = document.getElementById("genderChart").getContext("2d");
  new Chart(ctxGender, {
    type: "bar",
    data: {
      labels: ["Female", "Male", "Unknown"],
      datasets: [
        { label: "No Rearrest", data: [39801, 163037, 2246], backgroundColor: "#3374a1" },
        { label: "Rearrest", data: [6404, 32776, 457], backgroundColor: "#e1812c" }
      ]
    },
    options: {
      responsive: true, plugins: { legend: { position: "top" } }, scales: {
        x: {
          title: {
            display: true,
            text: "Race", // X-axis title
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        },
        y: {
          title: {
            display: true,
            text: "Count", // Y-axis title
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }
      }
    }
  });

  function getContainerSize(callback) {
    const container = document.querySelector(".chart-container");

    if (!container) {
      console.log("Container not found!");
      return;
    }

    let width = container.clientWidth;
    let height = container.clientHeight;

    if (width === 0 || height === 0) {
      console.log("Waiting for container size...");
      setTimeout(() => getContainerSize(callback), 100); // Retry after 100ms
      return;
    }

    console.log("Container size found:", width, height);
    if (callback) callback(width, height);
  }

  // Define color scale
  const colorScale = d3.scaleThreshold()
    .domain([500, 1000, 5000, 10000, 20000, 40000])
    .range(["#FFEDA0", "#FD8D3C", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"]);

  // Case count data by county
  const countyCases = {
    "Albany County": 3026,
    "Allegany County": 121,
    "Bronx County": 28368,
    "Broome County": 1880,
    "Cattaraugus County": 967,
    "Cayuga County": 908,
    "Chautauqua County": 2373,
    "Chemung County": 1081,
    "Chenango County": 327,
    "Clinton County": 545,
    "Columbia County": 288,
    "Cortland County": 612,
    "Delaware County": 83,
    "Dutchess County": 1134,
    "Erie County": 6366,
    "Essex County": 88,
    "Franklin County": 140,
    "Fulton County": 698,
    "Genesee County": 649,
    "Greene County": 93,
    "Hamilton County": 2,
    "Herkimer County": 207,
    "Jefferson County": 1174,
    "Kings County": 46127,
    "Lewis County": 80,
    "Livingston County": 133,
    "Madison County": 559,
    "Monroe County": 5677,
    "Montgomery County": 791,
    "Nassau County": 14860,
    "New York County": 35368,
    "Niagara County": 2805,
    "Oneida County": 2850,
    "Onondaga County": 5213,
    "Ontario County": 622,
    "Orange County": 2835,
    "Orleans County": 82,
    "Oswego County": 1503,
    "Otsego County": 403,
    "Putnam County": 51,
    "Queens County": 34981,
    "Rensselaer County": 1412,
    "Richmond County": 7099,
    "Rockland County": 434,
    "Saratoga County": 1126,
    "Schenectady County": 1855,
    "Schoharie County": 34,
    "Schuyler County": 82,
    "Seneca County": 84,
    "St. Lawrence County": 632,
    "Steuben County": 873,
    "Suffolk County": 14942,
    "Sullivan County": 118,
    "Tioga County": 106,
    "Tompkins County": 618,
    "Ulster County": 974,
    "Warren County": 547,
    "Washington County": 147,
    "Wayne County": 163,
    "Westchester County": 7163,
    "Wyoming County": 188,
    "Yates County": 54
  }


  // Tooltip for displaying case count
  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip");

  getContainerSize((width, height) => {
    // Now we have valid width and height, we can load the map
    d3.json("assets/new-york-counties.geojson").then(function (geoData) {


      const svg = d3.select("#countyMap")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`) // Ensures scaling
        .attr("preserveAspectRatio", "xMidYMid meet"); // Keeps aspect ratio

      const projection = d3.geoMercator();
      const path = d3.geoPath().projection(projection);

      // Fit projection into container
      projection.fitExtent([[10, 10], [width - 10, height - 10]], geoData);

      // Create a `g` group element to apply transformations
      const g = svg.append("g");

      // Draw counties
      g.selectAll("path")
        .data(geoData.features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", function (d) {
          const count = countyCases[d.properties.name] || 0;
          return colorScale(count);
        })
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .on("mouseover", function (event, d) {
          const countyName = d.properties.name;
          const caseCount = countyCases[countyName] || "No Data";
          tooltip.style("opacity", 1)
            .html(`<strong>${countyName}</strong><br>Cases: ${caseCount}`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
        })
        .on("mousemove", function (event) {
          tooltip.style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function () {
          tooltip.style("opacity", 0);
        });

      
        const legendData = [500, 1000, 5000, 10000, 20000, 40000];
        const legendContainer = d3.select("#legend");
  

  
        const legendItems = legendContainer.selectAll(".legend-item")
          .data(legendData)
          .enter().append("div")
          .attr("class", "legend-item")
          .style("display", "flex")
          .style("align-items", "center")
          .style("gap", "8px");
  
        // Color Boxes
        legendItems.append("div")
          .style("width", "20px")
          .style("height", "20px")
          .style("background-color", d => colorScale(d));
  
        // Labels
        legendItems.append("span")
          .text(d => `${d}+`);

    });
     
  });

  window.addEventListener("resize", () => getContainerSize(null));

  const ctxOffense = document.getElementById("priorOffenseChart").getContext("2d");
  
  new Chart(ctxOffense, {
    type: "bar",
    data: {
      labels: ["No Prior Offense", "Has Prior Offense"],
      datasets: [{
        label: "Reoffending Rate (%)",
        data: [6.01, 10.18],
        backgroundColor: "#3374a1",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 12,
          title: { display: true, text: "Reoffending Rate (%)" }
        },
        x: { title: { display: true, text: "Prior Offense History" } }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
  updateView();
});

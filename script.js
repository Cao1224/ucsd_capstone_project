document.addEventListener("DOMContentLoaded", function () {
  const datasetOverview = document.getElementById("datasetOverview");
  const rearrestOutcomes = document.getElementById("rearrestOutcomes");
  const demographicBreakdown = document.getElementById("demographicBreakdown");
  const caseDistribution = document.getElementById("caseDistribution");
  const priorHistoryImpact = document.getElementById("priorHistoryImpact");

  // Setup for the data section visualization navigation
  let currentVizIndex = 0;
  const sections = [
    {desc: 'rearrestOutcomesDesc', viz: 'rearrestOutcomesViz'},
    {desc: 'raceDesc', viz: 'raceViz'},
    {desc: 'ethnicityDesc', viz: 'ethnicityViz'},
    {desc: 'genderDesc', viz: 'genderViz'},
    {desc: 'caseDistributionDesc', viz: 'caseDistribution'},
    {desc: 'priorHistoryImpactDesc', viz: 'priorHistoryImpact'}
  ];
  
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateDataVisualization() {
    // Hide all description and visualization boxes
    sections.forEach(section => {
      document.getElementById(section.desc)?.classList.add('d-none');
      document.getElementById(section.viz)?.classList.add('d-none');
    });
    
    // Show current section
    document.getElementById(sections[currentVizIndex].desc)?.classList.remove('d-none');
    document.getElementById(sections[currentVizIndex].viz)?.classList.remove('d-none');
    
    // Update button states
    prevBtn.disabled = currentVizIndex === 0;
    nextBtn.disabled = currentVizIndex === sections.length - 1;
  }
  
  // Button click handlers
  if (prevBtn) {
    prevBtn.addEventListener("click", function() {
      if (currentVizIndex > 0) {
        currentVizIndex--;
        updateDataVisualization();
      }
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener("click", function() {
      if (currentVizIndex < sections.length - 1) {
        currentVizIndex++;
        updateDataVisualization();
      }
    });
  }
  
  // Initialize the visualization
  updateDataVisualization();
  
  // Initialize charts
  initializeCharts();
  
  // Fix for map not showing - directly set dimensions
  const mapContainer = document.getElementById('countyMap');
  if (mapContainer) {
    const svgWidth = 500;
    const svgHeight = 350;
    
    // Set explicit size for the SVG
    d3.select("#countyMap")
      .attr("width", svgWidth)
      .attr("height", svgHeight);
    
    // Load the map with these fixed dimensions
    loadCountyMap(svgWidth, svgHeight);
  }
  
  // Add toggle functionality for accordion headers
  const accordionHeaders = document.querySelectorAll('[data-bs-toggle="collapse"]');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('data-bs-target');
      const targetCollapse = document.querySelector(targetId);
      
      if (targetCollapse) {
        // Check if it's currently shown
        const isShown = targetCollapse.classList.contains('show');
        
        // Toggle the collapse state
        if (isShown) {
          // If it's open, close it
          new bootstrap.Collapse(targetCollapse).hide();
        } else {
          // If it's closed, open it
          new bootstrap.Collapse(targetCollapse).show();
        }
      }
    });
  });

  // Fix for the expand/collapse all buttons
  const expandAllBtn = document.getElementById("expandAllBtn");
  const collapseAllBtn = document.getElementById("collapseAllBtn");
  const accordionItems = document.querySelectorAll(".accordion-collapse");
  
  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      accordionItems.forEach(item => {
        // Create a new Bootstrap collapse instance and show it
        const bsCollapse = new bootstrap.Collapse(item, { toggle: false });
        bsCollapse.show();
      });
    });
  }
  
  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", () => {
      accordionItems.forEach(item => {
        // Create a new Bootstrap collapse instance and hide it
        const bsCollapse = new bootstrap.Collapse(item, { toggle: false });
        bsCollapse.hide();
      });
    });
  }
  
  // Fix for fairness expand/collapse buttons
  const expandAllFairnessBtn = document.getElementById("expandAllFairnessBtn");
  const collapseAllFairnessBtn = document.getElementById("collapseAllFairnessBtn");
  const accordionFairnessItems = document.querySelectorAll(".accordion-collapse-fairness");
  
  if (expandAllFairnessBtn) {
    expandAllFairnessBtn.addEventListener("click", () => {
      accordionFairnessItems.forEach(item => {
        const bsCollapse = new bootstrap.Collapse(item, { toggle: false });
        bsCollapse.show();
      });
    });
  }
  
  if (collapseAllFairnessBtn) {
    collapseAllFairnessBtn.addEventListener("click", () => {
      accordionFairnessItems.forEach(item => {
        const bsCollapse = new bootstrap.Collapse(item, { toggle: false });
        bsCollapse.hide();
      });
    });
  }

  window.addEventListener("resize", () => getContainerSize(null));
});

function initializeCharts() {
  // Rearrest Outcomes Chart - changed to bar chart with black color
  const rearrestCtx = document.getElementById('rearrestChart')?.getContext('2d');
  if (rearrestCtx) {
    new Chart(rearrestCtx, {
      type: 'bar',
      data: {
        labels: ['No Rearrest', 'Misdemeanor', 'Non-violent Felony', 'Violent Felony'],
        datasets: [{
          label: 'Percentage (%)',
          data: [83.7, 8.1, 6.0, 2.2],
          backgroundColor: '#000000'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Rearrest Outcomes Distribution (%)'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)'
            }
          }
        }
      }
    });
  }

  // Race Distribution Chart
  const raceCtx = document.getElementById('raceChart')?.getContext('2d');
  if (raceCtx) {
    new Chart(raceCtx, {
      type: 'bar',
      data: {
        labels: ['White', 'Black', 'Asian', 'Other'],
        datasets: [{
          label: 'No Reoffense',
          data: [30, 25, 10, 5],
          backgroundColor: '#4CAF50'
        }, {
          label: 'Reoffense',
          data: [15, 20, 5, 3],
          backgroundColor: '#F44336'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Race Distribution by Reoffending Status'
          }
        }
      }
    });
  }

  // Ethnicity Distribution Chart
  const ethnicityCtx = document.getElementById('ethnicityChart')?.getContext('2d');
  if (ethnicityCtx) {
    new Chart(ethnicityCtx, {
      type: 'bar',
      data: {
        labels: ['Hispanic', 'Non-Hispanic'],
        datasets: [{
          label: 'No Reoffense',
          data: [35, 40],
          backgroundColor: '#4CAF50'
        }, {
          label: 'Reoffense',
          data: [12, 13],
          backgroundColor: '#F44336'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Ethnicity Distribution by Reoffending Status'
          }
        }
      }
    });
  }

  // Gender Distribution Chart
  const genderCtx = document.getElementById('genderChart')?.getContext('2d');
  if (genderCtx) {
    new Chart(genderCtx, {
      type: 'bar',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          label: 'No Reoffense',
          data: [45, 30],
          backgroundColor: '#4CAF50'
        }, {
          label: 'Reoffense',
          data: [15, 10],
          backgroundColor: '#F44336'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Gender Distribution by Reoffending Status'
          }
        }
      }
    });
  }

  // Prior Offense Chart
  const priorOffenseCtx = document.getElementById('priorOffenseChart')?.getContext('2d');
  if (priorOffenseCtx) {
    new Chart(priorOffenseCtx, {
      type: 'bar',
      data: {
        labels: ['No Prior Offense', 'Has Prior Offense'],
        datasets: [{
          label: 'Reoffending Rate (%)',
          data: [6.01, 10.18],
          backgroundColor: ['#4CAF50', '#F44336']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Reoffending Rate (%)'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Reoffending Rate by Prior Offense History'
          }
        }
      }
    });
  }
}

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

const tooltip = d3.select("body").append("div")
  .attr("class", "tooltip");

// Function to load the county map with fixed dimensions
function loadCountyMap(width, height) {
    const svg = d3.select("#countyMap")
        .attr("width", width)
        .attr("height", height);
        
    svg.html("");
        
    // Load GeoJSON data
    d3.json("assets/new-york-counties.geojson")
        .then(function(geoData) {
            const projection = d3.geoMercator()
                .fitSize([width, height], geoData);
                
            const path = d3.geoPath()
                .projection(projection);
                
            // Draw counties
            svg.selectAll("path")
                .data(geoData.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("fill", function(d) {
                    const count = countyCases[d.properties.name] || 0;
                    return colorScale(count);
                })
                .attr("stroke", "#fff")
                .attr("stroke-width", 1)
                .on("mouseover", function(event, d) {
                    const countyName = d.properties.name;
                    const caseCount = countyCases[countyName] || "No Data";
                    d3.select(this).attr("fill", "#4292c6");
                    
                    // Show tooltip
                    d3.select("#tooltip")
                        .style("display", "block")
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 10) + "px")
                        .html(`<strong>${countyName}</strong><br>Cases: ${caseCount}`);
                })
                .on("mouseout", function() {
                    const d = d3.select(this).datum();
                    const count = countyCases[d.properties.name] || 0;
                    d3.select(this).attr("fill", colorScale(count));
                    
                    // Hide tooltip
                    d3.select("#tooltip").style("display", "none");
                });
                
            // Create legend
            createLegend();
            
        })
        .catch(function(error) {
            // Leave blank if doesn't load - no error message
            document.getElementById("countyMap").innerHTML = "";
        });
}

function createLegend() {
  const legendData = [500, 1000, 5000, 10000, 20000, 40000];
  const legendContainer = d3.select("#legend");
  
  // Clear existing legend
  legendContainer.html("");
  
  legendContainer.selectAll(".legend-item")
    .data(legendData)
    .enter()
    .append("div")
    .attr("class", "legend-item")
    .style("display", "flex")
    .style("align-items", "center")
    .style("margin-bottom", "5px")
    .html(d => `
      <div style="width: 20px; height: 20px; background-color: ${colorScale(d)}; margin-right: 8px;"></div>
      <span>${d.toLocaleString()}+ cases</span>
    `);
}

document.body.insertAdjacentHTML('beforeend', `
  <div id="tooltip" style="position: absolute; display: none; background: white; 
       padding: 8px; border-radius: 4px; box-shadow: 0 0 10px rgba(0,0,0,0.1);
       pointer-events: none; z-index: 1000;">
  </div>
`);

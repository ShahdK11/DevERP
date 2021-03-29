function LoadLeftBudgetChart(label, data) {
  try {
    //WidgetChart 1
    var ctx = document.getElementById("widgetChart1");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: label,
        type: 'line',
        datasets: [{
          data: data,
          label: 'عدد الموظفين',
          backgroundColor: 'rgba(255,255,255,.1)',
          borderColor: 'rgba(255,255,255,.55)',
        },]
      },
      options: {
        maintainAspectRatio: true,
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
            }
          }]
        },
        title: {
          display: false,
        },
        elements: {
          line: {
            borderWidth: 0
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function LoadConnectionsChart(label, data) {
  try {
    //WidgetChart 1
    var ctx = document.getElementById("widgetChart2");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: label,
        type: 'line',
        datasets: [{
          data: data,
          label: 'عدد الموظفين',
          backgroundColor: 'rgba(255,255,255,.1)',
          borderColor: 'rgba(255,255,255,.55)',
        },]
      },
      options: {
        maintainAspectRatio: true,
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
            }
          }]
        },
        title: {
          display: false,
        },
        elements: {
          line: {
            borderWidth: 0
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function LoadAccountsChart(label, data) {
  try {
    //WidgetChart 3
    var ctx = document.getElementById("widgetChart3");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: label,
          type: 'line',
          datasets: [{
            data: data,
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
          },]
        },
        options: {

          maintainAspectRatio: true,
          legend: {
            display: false
          },
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 2,
                fontColor: 'transparent'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: false,
              }
            }]
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              borderWidth: 1
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function LoadBudgetChart(label, data) {
  try {
    //WidgetChart 4
    var ctx = document.getElementById("widgetChart4");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: label,
          datasets: [
            {
              label: "My First dataset",
              data: data,
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "rgba(255,255,255,.3)"
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.65
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}



function loadAnnualBudget(label,data) {
  try {
    var ctx = document.getElementById("annual-budget");
    if (ctx) {
      ctx.height = 280;
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: data,
          labels: label
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 55,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false
          },
          tooltips: {
            titleFontFamily: "Poppins",
            xPadding: 15,
            yPadding: 10,
            caretPadding: 0,
            bodyFontSize: 16
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

}

function loadSpentAmount (label,data) {
  try {
    var ctx = document.getElementById("spent-chart");
    if (ctx) {
      ctx.height = 250;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: label,
          datasets: data
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: true,
                color: '#f2f2f2'
              },
              ticks: {
                fontFamily: "Poppins",
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: 50,
                max: 150,
                fontFamily: "Poppins",
                fontSize: 12
              },
              gridLines: {
                display: true,
                color: '#f2f2f2'

              }
            }]
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3
            }
          }


        }
      });
    }
  }catch (error){
      console.log(error);
  }

}
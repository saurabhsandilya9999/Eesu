//For the year 2016, plot the extra runs conceded by each team.

function fetchAndVisualizeData() {
    fetch("./data3.json")
      .then(r => r.json())
      .then(visualizeData);
};
fetchAndVisualizeData();

function visualizeData(data) {
    visualizeExtraRunsConcededByEachTeam(data.extraRunsConcededByEachTeam);
    return;
};

function visualizeExtraRunsConcededByEachTeam(extraRunsConcededByEachTeam) {
    const seriesData = [];
    for (let team in extraRunsConcededByEachTeam) {
      seriesData.push([team, extraRunsConcededByEachTeam[team]]);
    }

    //console.log(seriesData);

//pie vhart

// Highcharts.chart('extra-runs-conceded-by-each-team', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     title: {
//         text: '4. For the year 2016, plot the extra runs conceded by each team'
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: false
//             },
//             showInLegend: true
//         }
//     },
//     series: [{
//         name: 'Teams',
//         colorByPoint: true,
//         data: seriesData
//       }]

// });

Highcharts.chart('extra-runs-conceded-by-each-team', {
    chart: {
        type: 'column'
    },
    title: {
        text: '3. For the year 2016, Extra Runs Conceded By Each Team.'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Extra Runs'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Extra Runs: <b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'Teams',
        data: seriesData,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});

};
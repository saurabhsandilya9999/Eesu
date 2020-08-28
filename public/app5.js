//Win by each team

function fetchAndVisualizeData() {
    fetch("./data5.json")
      .then(r => r.json())
      .then(visualizeData);
};
fetchAndVisualizeData();

function visualizeData(data) {
    visualizeWinByEachTeam(data.winByEachTeam); //This is from data5.json -> {"winByEachTeam":{"Sunrisers Hyderabad":58,...}
    return;                                                                  //--------------
};

// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});


function visualizeWinByEachTeam(winByEachTeam) {
    const seriesData = [];
    for (let team in winByEachTeam) {
      seriesData.push([team, winByEachTeam[team]]);
    }

    //console.log(seriesData, "seriesData");

// Build the chart
Highcharts.chart('win-by-each-team', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '4. Win By Each Team'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Teams',
        data: seriesData
      }]
});

};

//For the year 2015, plot the top 10 economical bowlers along with their economy rates.

function fetchAndVisualizeData() {
    fetch("./data4.json")
      .then(r => r.json())
      .then(visualizeData);
};
fetchAndVisualizeData();

function visualizeData(data) {
    visualizetop10EconomicBowlers(data.top10EconomicBowlers);
    return;
};

function visualizetop10EconomicBowlers(top10EconomicBowlers) {
    const seriesData = [];
    for (let bowler in top10EconomicBowlers) {
      seriesData.push([bowler, top10EconomicBowlers[bowler]]);
    }

    //console.log(seriesData);

Highcharts.chart('top-10-economical-bowlers', {
    chart: {
        type: 'column'
    },
    title: {
        text: '4. For the year 2015, the top 10 economical bowlers along with their economy rates.'
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
            text: 'Economic Rates'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: "Economy Rate: <b>{point.y:.2f}</b>"
    },
    series: [{
        name: 'Economy Rate',
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
              
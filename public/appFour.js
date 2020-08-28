//For the season, plot the top 10 economical bowlers along with their economy rates.

let year
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  year = form.elements.year.value
  //console.log(year, "year")
  e.preventDefault()
  fetch(`economy/?year=${year}`)
    .then(data => data.json())
    .then(visualizeData)
});

function visualizeData(data) {
  document.querySelector("#season-top-10-economical-bowlers").innerHTML="", visualizeSeasonTop10EconomicBowlers(data, year)
  return;
};

function visualizeSeasonTop10EconomicBowlers(data, year) {

  Highcharts.chart('season-top-10-economical-bowlers', {
    chart: {
        type: 'column'
    },
    title: {
        text: `5. For the year ${year}, The Top 10 Economical Bowlers Along With Their Economy Rates.`
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
    series: [
      {
        name: "Economy",
        data: data
      }
    ]
});

};
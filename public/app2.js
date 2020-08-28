//Plot the number of matches won by each team over all the years of IPL.

function fetchAndVisualizeData() {
    fetch("./data2.json")
      .then(r => r.json())
      .then(visualizeData);
};
fetchAndVisualizeData();

function visualizeData(data) {
    visualizeMatchesWonPerTeam(data.matchesWonPerTeam);
    return;
};

function visualizeMatchesWonPerTeam(matchesWonPerTeam) {
    const kkr = [];
    const rcb = [];
    const csk = [];
    const kxp = [];
    const rr =[];
    const dd = [];
    const mi = [];
    const dc = [];
    const ktk = [];
    const pw = [];
    const nr = [];
    const sh = [];
    const rps = [];
    const gl = [];
    const dcl = [];
    
    //console.log(matchesWonPerTeam);

    for (let won in matchesWonPerTeam) {
        kkr.push(matchesWonPerTeam[won]['Kolkata Knight Riders']);
        //console.log(kkr);
        rcb.push(matchesWonPerTeam[won]['Royal Challengers Bangalore']);
        csk.push(matchesWonPerTeam[won]['Chennai Super Kings'] || "");
        kxp.push(matchesWonPerTeam[won]['Kings XI Punjab']);
        rr.push(matchesWonPerTeam[won]['Rajasthan Royals'] || "");
        dd.push(matchesWonPerTeam[won]['Delhi Daredevils'] || "");
        mi.push(matchesWonPerTeam[won]['Mumbai Indians'] || "");
        dc.push(matchesWonPerTeam[won]['Deccan Chargers'] || "");
        ktk.push(matchesWonPerTeam[won]['Kochi Tuskers Kerala'] || "");
        pw.push(matchesWonPerTeam[won]['Pune Warriors'] || "");
        nr.push(matchesWonPerTeam[won][''] || "");
        sh.push(matchesWonPerTeam[won]['Sunrisers Hyderabad'] || "");
        rps.push(matchesWonPerTeam[won]['Rising Pune Supergiants'] || "");
        gl.push(matchesWonPerTeam[won]['Gujarat Lions'] || "");
        dcl.push(matchesWonPerTeam[won]['Delhi Capitals'] || "");
    
        // console.log(matchesWonPerTeam[won]['Kings XI Punjab']);
      }


Highcharts.chart("matches-won-per-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "2. Matches Won By Each Team Over All The Years Of IPL."
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories: ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
        crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches Won By Each Team"
      }
    },
    tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Kolkata Knight Riders',
        data: kkr

    }, {
        name: 'Royal Challengers Bangalore',
        data: rcb

    }, {
        name: 'Chennai Super Kings',
        data: csk

    }, {
        name: 'Kings XI Punjab',
        data: kxp

    }, {
        name: 'Rajasthan Royals',
        data: rr

    }, {
        name: 'Delhi Daredevils',
    data: dd

    }, {
        name: 'Mumbai Indians',
        data: mi

    }, {
        name: 'Deccan Chargers',
        data: dc

    }, {
        name: 'Kochi Tuskers Kerala',
        data: ktk

    }, {
        name: 'Pune Warriors',
    data: pw

    }, {
        name: 'noResult',
        data: nr

    }, {
        name: 'Sunrisers Hyderabad',
        data: sh

    }, {
        name: 'Rising Pune Supergiants',
        data: rps

    }, {
        name: 'Gujarat Lions',
        data: gl

    }, {
        name: 'Delhi Capitals',
        data: dcl

    }]

   });
    
 };


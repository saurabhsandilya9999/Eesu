const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerTeam = require("./ipl/matchesWonPerTeam");
const extraRunsConcededByEachTeam = require("./ipl/extraRunsConcededByEachTeam");
//const top10EconomicBowlers = require("./ipl/top10EconomicBowlers");
const seasonTop10EconomicBowlers = require("./ipl/seasonTop10EconomicBowlers");
const winByEachTeam = require("./ipl/winByEachTeam");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json"; //matchesPlayedPerYear
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json"; //matchesWonPerTeam
const JSON_OUTPUT_FILE_PATH3 = "./public/data3.json"; //extraRunsConcededByEachTeam
//const JSON_OUTPUT_FILE_PATH4 = "./public/data4.json"; //top10EconomicBowlers
const JSON_OUTPUT_FILE_PATH_FOUR = "./public/data_four.json";
const JSON_OUTPUT_FILE_PATH5 = "./public/data5.json"; //winByeachTeam

function main() {
  //matchesPlayedPerYear
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result);
    });

  //matchesWonPerTeam  
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
       let result = matchesWonPerTeam(matches);
       saveMatchesWonPerTeam(result);
    });

  //extraRunsConcededByEachTeam
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          let result = extraRunsConcededByEachTeam(matches, deliveries);
          saveExtraRunsConcededByEachTeam(result);
        });
    });

    // //top10EconomicBowlers
    // csv()
    // .fromFile(MATCHES_FILE_PATH)
    // .then(matches => {
    //   csv()
    //     .fromFile(DELIVERIES_FILE_PATH)
    //     .then(deliveries => {
    //       let result = top10EconomicBowlers(matches, deliveries);
    //       savetop10EconomicBowlers(result);
    //     });
    // });

    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        let result4 = seasonTop10EconomicBowlers(matches, deliveries)
        saveSeasonTop10EconomicBowlers(result4);
      })
    });

    //winByEachTeam
    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
       let result = winByEachTeam(matches);
       saveWinByEachTeam(result);
    });
};

//savefunctions

//matchesPlayedPerYear
function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
};

//matchesWonPerTeam 
function saveMatchesWonPerTeam(result) {
  const jsonData = {
    matchesWonPerTeam: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
};

//extraRunsConcededByEachTeam
function saveExtraRunsConcededByEachTeam(result) {
  const jsonData = {
    extraRunsConcededByEachTeam: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}; 

//top10EconomicBowlers
// function savetop10EconomicBowlers(result) {
//   const jsonData = {
//     top10EconomicBowlers: result
//   };
//   const jsonString = JSON.stringify(jsonData);
//   fs.writeFile(JSON_OUTPUT_FILE_PATH4, jsonString, "utf8", err => {
//     if (err) {
//       console.error(err);
//     }
//   });
// };

//seasonTop10EconomicBowlers
function saveSeasonTop10EconomicBowlers(result) {
  const jsonData = {
    seasonTop10EconomicBowlers: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_FOUR, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
};

//winByEachTeam
function saveWinByEachTeam(result) {
  const jsonData = {
    winByEachTeam: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH5, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
};

main();

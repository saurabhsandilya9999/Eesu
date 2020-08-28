function extraRunsConcededByEachTeam(matches, deliveries) {
    const result = {};
  
    const result_id = [];
  
    for (let match of matches) {
    const season = match.season;
    const id = match.id;
        if(season == "2016") {
            result_id.push(id);
        }
    };
  
    for(let element of result_id) {
        for(let delivery of deliveries) {
            if(element == delivery["match_id"]) {
                const bowling_team = delivery["bowling_team"];          //These two should come after the codition is provided
                const extra_runs = parseInt(delivery["extra_runs"]);    //else it will add the first value with the first value
  
                if(result[bowling_team]) {
                  result[bowling_team] += extra_runs;
                }
                else if(!(result[bowling_team])) {
                  result[bowling_team] = extra_runs;
                }
              }
          }; 
      }; 
    return result;
  };
  
  module.exports = extraRunsConcededByEachTeam;
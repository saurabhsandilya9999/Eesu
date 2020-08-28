
function top10EconomicBowlers(matches, deliveries) {
    const result = {};
  
    const result_id = [];
  
    const bowler_economic_rate = {};
    const bowler_overs_bowled = {};
  
    for (let match of matches) {
    const season = match.season;
    const id = match.id;
        if(season == "2015") {
            result_id.push(id);
        }
    };
  
    for(let element of result_id) {
        
        for(let delivery of deliveries) {
            
            if(element == delivery["match_id"]) {
  
              const bowler = delivery["bowler"];
              const total_runs = parseInt(delivery["total_runs"]);
              
              //first, calculating the total_runs of each bowler
              if(bowler_economic_rate[bowler]) {
                bowler_economic_rate[bowler] += total_runs;
              }
              else if(!(bowler_economic_rate[bowler])) {
                bowler_economic_rate[bowler] = total_runs;
              }
  
              //second, calculating count of balls bowled by each bowler
              if(bowler_overs_bowled[bowler]) {
                bowler_overs_bowled[bowler] += 1;
              }
              else if(!(bowler_overs_bowled[bowler])) {
                bowler_overs_bowled[bowler] = 1;
              }
  
  
          } 
      };
    }; 
  
    //third, calculation total overs by each bowler
    for(let element in bowler_overs_bowled) {
      const overs = bowler_overs_bowled[element]/6;
      bowler_overs_bowled[element] = overs;
   }
  
    //fourth, calculation the economic index using "first/third"
    for(let key1 of Object.keys(bowler_economic_rate)) {
       for(let key2 of Object.keys(bowler_overs_bowled)) {
         if(key1 == key2) {
          bowler_economic_rate[key1] = bowler_economic_rate[key1]/bowler_overs_bowled[key2];
         }
       }
     }
  
      //fifth, Move them to an array, sort that array, and then use that array for your purposes.
      var sortable = [];
  
      for (var object in bowler_economic_rate) {
        sortable.push([object, bowler_economic_rate[object]]);
      }
  
      sortable.sort(function(a, b) {
        return a[1] - b[1];
      });
  
      //sixth, Once you have the array, you could rebuild the object from the array in the order 
      var objSorted = {};
      sortable.forEach(function(item){
        objSorted[item[0]]=item[1];
      });
  
      //seventh, again convert them to array in order to slice top 10 bowlers
      var top = [];
  
      for(var object in objSorted) {
        top.push([object, objSorted[object]]);
      }
      
      var top10 = top.slice(0, 10);
  
      //last, convert the top 10 array into objects again
      var objTop10 = {};
      top10.forEach(function(item){
        objTop10[item[0]]=item[1];
      });
  
    return objTop10;
  
  };

 module.exports = top10EconomicBowlers;
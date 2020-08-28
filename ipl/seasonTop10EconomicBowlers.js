function seasonTop10EconomicBowlers(matches, deliveries) {
    let result={}
    
    for(let i=2008; i<=2019; i++) {
        result[i]=calculate(matches, deliveries, i);
    }
    //console.log(result)
    return result;
};

function calculate(matches, deliveries, year) {
    let total_runs = {}, overs = {}, economic_rate;
    const Id = (matches.filter(i=>i.season == year)).map(i=>parseInt(i.id)); 
    const Deliveries = deliveries.filter(i=> Id.includes(parseInt(i['match_id'])))
    //console.log(ffDeliveries)
    for(let i in Deliveries) {
        const runs = Deliveries[i]['total_runs'];
        const bowler = Deliveries[i].bowler;
        if(total_runs[bowler]) {
            total_runs[bowler] += parseInt(runs);
            if(parseInt(Deliveries[i].ball) == 6) {
                overs[bowler] += 1
            }
        }
        else {
            total_runs[bowler]=parseInt(runs)
            overs[bowler]=0;
        }
    }

    for(let i in total_runs) {
        total_runs[i]=total_runs[i]/overs[i];
    }
    
    economic_rate=(Object.entries(total_runs).sort((a,b)=>a[1]-b[1])).slice(0, 10)
    // console.log(overs);
    // console.log(total_runs);
    //console.log(economic_rate);
    return economic_rate;
};

module.exports = seasonTop10EconomicBowlers;
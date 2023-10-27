import ScoringModel from "../mongo/schemas/scoring";

// create seed data, for type of tournaments

export async function createDefaultScoring() {

    const isData = await ScoringModel.countDocuments();
    console.log('Count before creating scoring' + isData);

    if(isData == 0) {
        const leagueDefaultScoring = new ScoringModel({
            name: 'Standard football league scoring',
            winPoints: 3,
            drawPoints: 1,
            defeatPoints: 0,
            drawsAllowed: true
        });
        
        
        leagueDefaultScoring.save().then((tt => console.log('--> League default scoring created created', tt))).catch(ex => console.log("Unable to create scoring seed data" + ex));
        
        const countAfterInsertion = await ScoringModel.countDocuments();
        console.log('Scoring inserted - ' + countAfterInsertion);
    }
    

}

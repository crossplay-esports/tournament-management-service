import TournamentTypeModel from "../mongo/schemas/tournamentType";

// create seed data, for type of tournaments

export async function createTournamentTypes() {

    const isData = await TournamentTypeModel.countDocuments();
    console.log('Count before insertion' + isData);

    if(isData == 0) {
        const leagueRoundRobinTournamentType = new TournamentTypeModel({
            name: 'League Round Robin'
        });
        
        const singleEliminationTournamentType = new TournamentTypeModel({
            name: 'Single Elimination Tournament'
        });
        
        const doubleEliminationTournamentType = new TournamentTypeModel({
            name: 'Double Elimination Tournament'
        });
        
        leagueRoundRobinTournamentType.save().then((tt => console.log('--> League Round Robin tournament type created', tt))).catch(ex => console.log("Unable to create seed data" + ex));
        
        singleEliminationTournamentType.save().then((tt => console.log('--> Single Elimination tournament types created', tt))).catch(ex => console.log("Unable to create seed data" + ex));
        
        doubleEliminationTournamentType.save().then((tt => console.log('--> Double Elimination tournament type created', tt))).catch(ex => console.log("Unable to create seed data" + ex));

        const countAfterInsertion = await TournamentTypeModel.countDocuments();
        console.log('Tournament type inserted - ' + countAfterInsertion);
    }
    

}

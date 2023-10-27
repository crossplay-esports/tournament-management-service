import mongoose, { Schema } from "mongoose";
import { Team } from "./team";
import { Tournament } from "./tournament";

export const TeamTournamentMapping = new Schema({
    teamId: Team,
    tournamentId: Tournament
});

const teamTournamentMappingModel = mongoose.model('TeamTournamentMapping', TeamTournamentMapping);
export default teamTournamentMappingModel;
import mongoose, {Schema} from "mongoose";

import { TournamentType } from "./tournamentType";
import { Scoring } from "./scoring";

export const Tournament = new Schema({
    name : String,
    startDate: Date,
    endDate: Date,
    seasonName: String,
    maxTeams: Number,
    region: String,
    description: String,
    game: String,
    type: TournamentType,
    scoring: Scoring,
    gameFrequency: String,
    noOfRounds: Number
});

const tournamentModel = mongoose.model('Tournament', Tournament);
export default tournamentModel;
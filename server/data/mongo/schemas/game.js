import { Schema } from "mongoose";
import { Tournament } from "./tournament";
import { Schedule } from "./schedule";
import { Team } from "./team";

export const Game = new Schema({
    tournamentId: Tournament,
    scheduleId: Schedule,
    homeTeamId: Team,
    awayTeamId: Team,
    homeTeamGoals: Number,
    awayTeamGoals: Number,
    status: String,
    roundNumber: Number,
    gameFrequencyNumber: String,
})
import { Schema } from "mongoose";
import { Tournament } from "./tournament";
import { Team } from "./team";

export const Standing = new Schema({
    tournamentId: Tournament,
    teamId: Team,
    gamesPlayed: Number,
    gamesWon: Number,
    gamesDrawn: Number,
    gamesLost: Number,
    points: Number,
    goalsFor: Number,
    goalsAgainst: Number,
    goalDifference: Number
})
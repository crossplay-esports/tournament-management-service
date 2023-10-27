import { Schema } from "mongoose";
import { Team } from "./team";

export const Player = new Schema({
    name: String,
    discordId: String,
    inGameName: String,
    teamId: Team,
    rating: String,
    position: String,
    alternatePostions: [String],
    isManager: Boolean
});
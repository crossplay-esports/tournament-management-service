import { Schema } from "mongoose";
import { Player } from "./player";
import { Game } from "./game";

export const playerStats = new Schema({
    playerId: Player,
    gameId: Game,
    goals: String,
    assists: String,
    shot_accuracy: String,
    no_of_dribbles: String,
    dribble_accuracy: String,
    possession_lost: String,
    no_of_passes: String,
    pass_accuracy: String,
    no_of_tackles: String,
    tackle_accuracy: String,
    possession_won: String,
    clean_sheet: String
});
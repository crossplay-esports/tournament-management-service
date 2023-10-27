import { Schema } from "mongoose";
import { Tournament } from "./tournament";

export const Schedule = new Schema({
    name: String,
    tournamentId: Tournament
});
import { Schema } from "mongoose";
import mongoose from "mongoose";

export const Scoring = new Schema({
    name: String,
    winPoints: Number,
    defeatPoints: Number,
    drawsAllowed: Boolean,
    drawPoints: Number
});

const scoringModel = mongoose.model('Scoring', Scoring);
export default scoringModel;

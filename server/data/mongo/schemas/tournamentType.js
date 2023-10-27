import mongoose, {Schema} from "mongoose";

export const TournamentType = new Schema({
    name : String,
}); 

const tournamentTypeModel = mongoose.model('TournamentType', TournamentType);
export default tournamentTypeModel;
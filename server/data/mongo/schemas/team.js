import { Schema } from "mongoose";

export const Team = new Schema({
    name: String,
    logo: {
        data: Buffer,
        contentType: String
    },
    size: Number
})
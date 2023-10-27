import { createDefaultScoring } from "./scoring";
import { createTournamentTypes } from "./tounamentType"

export const initializeDB = () => {
    createTournamentTypes();
    createDefaultScoring();
    console.log('All seed data creation called async');
}
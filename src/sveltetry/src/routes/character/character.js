import {writable} from "svelte/store";

export const character = writable({
    Name:"",
    God:"",
    Rank:0,
    Defense:0,
    Abilities: {}
});

export const Abilities = writable({
    Charisma:0,
    Combat: 0,
    Magic:0,
    Sanctity:0,
    Scouting:0,
    Thievery:0
});
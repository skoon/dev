import {writable} from "svelte/store";

export const character = writable({
    Name:"",
    God:"",
    Rank:0,
    Defense:0,
    Abilities: {
        Charisma:0,
        Combat: 0,
        Magic:0,
        Sanctity:0,
        Scouting:0,
        Thievery:0
    }
});

class CharacterClass {
    Name = "";
    God = "";
    Rank = 0;
    Defense = 0;
    Abilities = {};
    constructor(name,god,rank,defense,abilities){
        this.Name = name;
        this.God= god;
        this.Rank = rank;
        this.Defense = defense;
        this.Abilities = abilities;
    }
}


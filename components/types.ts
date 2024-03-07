export interface CharacterStats { 
    level: string, 
    vigor: string, 
    mind: string, 
    endurance: string, 
    strength: string, 
    dexterity: string, 
    intelligence: string, 
    faith: string, 
    arcane: string
}

export interface CharacterClass {
    id: string,
    name: string,
    image: string,
    description: string,
    stats: CharacterStats
}

export interface DamageNegation {
    name: string,
    amount: number
}

export interface Armour {
    id: string,
    name: string,
    image: string,
    category: string,
    dmgNegation: DamageNegation[],
    resistance: DamageNegation[],
    weight: number,
    specialEffect: string
}

export interface Weapon {
    id: string,
    name: string,
    attack: Stat[],
    defence: Stat[],
    scalesWith: ScalesWith[],
    requiredAttributes: Stat[],
    category: string,
    weight: number
}

export interface Talisman {
    id: string,
    name: string,
    effect: string
}

interface Stat {
    name: string,
    amount: number
}

interface ScalesWith {
    name: string,
    scaling: string
}


import { CharacterStats, Armour, Talisman } from "@/utils/types";
import { NEGATION_NAMES } from "./consts";

export function calculatePhysicalDefences(totalStats: CharacterStats, level: number) {
    const strengthLevel = totalStats.strength;
    let baseStat = 0;
      
    // calculates defense number based on given level
    if (level < 72) {
      baseStat = 40 + 60*((level + 78) / 149);
    }
    else if (level < 92) {
      baseStat = 100 + 20*((level - 71) / 20);
    }
    else if (level < 162) {
      baseStat = 120 + 15*((level - 91) / 70);
    }
    else {
      baseStat = 135 + 20*((level - 161) / 552);
    }
  
    // adds to defense based on level of strength
    if (strengthLevel < 31) {
      baseStat += 10*(strengthLevel / 30);
    }
    else if (strengthLevel < 41) {
      baseStat += 10 + 5*((strengthLevel-30) / 10);
    }
    else if (strengthLevel < 61) {
      baseStat += 15 + 15*((strengthLevel - 40) / 20);
    }
    else {
      baseStat += 30 + 10*((strengthLevel - 60) / 39);
    }
  
    let physical = baseStat;
    let strike = baseStat;
    let slash = baseStat;
    let pierce = baseStat;
  
    return [physical, strike, slash, pierce].map(i => Math.floor(i));
  }
  
  export function calculateNegations(selectedArmours: Armour[], selectedTalismans: Talisman[]) {
    let negationValues = [0, 0, 0, 0, 0, 0, 0, 0];
  
    selectedArmours.forEach((armour) => {
      
      if (armour != null) {
        NEGATION_NAMES.forEach((name, i) => {
          negationValues[i] = negationValues[i] - ((negationValues[i] * armour.dmgNegation[name as keyof typeof armour.dmgNegation])/100) + armour.dmgNegation[name as keyof typeof armour.dmgNegation];
        })
      }
    })
    
    selectedArmours.forEach((armour) => {
      if (armour != null) {
        NEGATION_NAMES.forEach((name, i) => {
          name += "Negation"
          if (armour.statChanges?.hasOwnProperty(name)) {
            let armourValue = armour.statChanges[name as keyof typeof armour.statChanges]
            if (armourValue != undefined)
              negationValues[i] = negationValues[i] - ((negationValues[i] * armourValue)/100) + armourValue;
          }
        })
      }
    })
  
    selectedTalismans.forEach((talisman, i) => {
      if (talisman != null) {
        NEGATION_NAMES.forEach((name, i) => {
          name += "Negation"
          if (talisman.statChanges?.hasOwnProperty(name)) {
            let talismanValue = talisman.statChanges[name as keyof typeof talisman.statChanges];
            if (talismanValue != undefined) 
              negationValues[i] = negationValues[i]- ((negationValues[i] *  +talismanValue) / 100) + +talismanValue;
          }
        });
      }
    })
    return negationValues;
  }
  
  export function calculateMagicDefences(totalStats: CharacterStats, level: number) {
    const intelligenceLevel = totalStats.intelligence;
    const vigorLevel = totalStats.vigor;
    const arcaneLevel = totalStats.arcane;
  
    let baseStat = 0;
  
    // calculates defense number based on given level
    if (level < 72) {
      baseStat = 40 + 60*((level + 78) / 149);
    }
    else if (level < 92) {
      baseStat = 100 + 20*((level - 71) / 20);
    }
    else if (level < 162) {
      baseStat = 120 + 15*((level - 91) / 70);
    }
    else {
      baseStat = 135 + 20*((level - 161) / 552);
    }
  
    const calculationFormula1 = (level: number) => {
      let stat = 0;
      if (level < 21) {
        stat += 40 * (level / 20)
      }
      else if (level < 36) {
        stat += 40 + 10 * ((level - 20) / 20)
      }
      else if (level < 61) {
        stat += 50 + 10 * ((level - 35) / 25)
      }
      else {
        stat += 60 + 10 * ((level - 60) / 39)
      }
      return stat;
    }
  
    const calculationFormula2 = (level: number) => {
      let stat = 0;
      if (level < 31) {
        stat += 20 * (level  / 30)
      }
      else if (vigorLevel < 41) {
        stat += 20 + 20 * ((level - 30) / 10)
      }
      else if (vigorLevel < 61) {
        stat += 40 + 20 * ((level - 40) / 20)
      }
      else {
        stat += 60 + 10 * ((level - 60) / 39)
      }
      return stat;
    }
  
    let magic = baseStat + calculationFormula1(intelligenceLevel);
    let fire = baseStat + calculationFormula2(vigorLevel);
    let lightning = baseStat;
    let holy = baseStat + calculationFormula1(arcaneLevel);
  
    return [magic, fire, lightning, holy].map(i => Math.floor(i))
  }
  
  export function calculateBaseResistances(totalStats: CharacterStats, level: number, selectedArmours: Armour[], selectedTalismans: Talisman[]) {
    const vigorLevel = totalStats.vigor;
    const enduranceLevel = totalStats.endurance;
    const mindLevel = totalStats.mind;
    const arcaneLevel = totalStats.arcane;
  
    let baseStat = 0;
      
    // calculates defense number based on given level
    if (level < 72) {
      baseStat = 75 + 30*((level + 78) / 149);
    }
    else if (level < 92) {
      baseStat = 105 + 40*((level - 71) / 20);
    }
    else if (level < 162) {
      baseStat = 145 + 15*((level - 91) / 70);
    }
    else {
      baseStat = 160 + 20*((level - 161) / 552);
    }
  
    const calculationFormula1 = (level: number) => {
      let stat = 0;
      if (level < 31) {
        stat = 0;
      }
      else if (level < 41) {
        stat += 30 * ((level - 30) / 10)
      }
      else if (level < 61) {
        stat += 30 + 10 * ((level - 40) / 20)
      }
      else {
        stat += 40 + 10 * ((level - 60) / 39)
      }
      return stat;
    }
  
    const calculationFormula2 = (level: number) => {
      let stat = 0;
      if (level < 16) {
        stat = level;
      }
      else if (level < 41) {
        stat += 15 + 15*((level - 15) / 25)
      }
      else if (level < 61) {
        stat += 30 + 10*((level - 40) / 20)
      }
      else {
        stat += 40 + 10*((level - 60) / 39)
      }
      return stat;
    }
  
    const armourResistances = calculateArmourResistances(selectedArmours);
  
    let immunity = baseStat + calculationFormula1(vigorLevel) + armourResistances[0];
    let robustness = baseStat + calculationFormula1(enduranceLevel)+ armourResistances[1];
    let focus = baseStat + calculationFormula1(mindLevel)+ armourResistances[2];
    let vitality = baseStat + calculationFormula2(arcaneLevel)+ armourResistances[3];
  
    selectedTalismans.forEach(talisman => {
      if (talisman?.statChanges?.immunity) immunity += +talisman.statChanges.immunity;
      if (talisman?.statChanges?.robustness) robustness += +talisman.statChanges.robustness;
      if (talisman?.statChanges?.focus) focus += +talisman.statChanges.focus;
      if (talisman?.statChanges?.vitality) vitality += +talisman.statChanges.vitality;
    })
    
    return [immunity, robustness, focus, vitality].map(i => Math.floor(i));
  }
  
  export function calculateArmourResistances(armours: Armour[]) {
    let resistances = [0, 0, 0, 0];
    armours.forEach((armour) => {
      if (armour != null) {
        resistances[0] += armour.resistances.immunity
        resistances[1] += armour.resistances.robustness
        resistances[2] += armour.resistances.focus
        resistances[3] += armour.resistances.vitality
      }
    })
    return resistances;
  }
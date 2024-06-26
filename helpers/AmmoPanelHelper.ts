import { ATTACK_TYPES } from "./consts";
import { Ammo } from "./types";

/**
 * Returns an object holding the attack power for an arrow/bolt as well as
 * how that attack power is distributed.
 * @param ammo 
 * @returns 
 */
export function calculateAmmoAttackPower(ammo: Ammo) {
    if (!ammo) return null;
    let total = 0;
    let apAlt = "Attack Power: "
    
    ATTACK_TYPES.forEach(type => {
        let currVal = ammo?.attackPower[type as keyof typeof ammo.attackPower];
        if (currVal) {
            total += currVal;
            apAlt += "\n • " + (type.charAt(0).toUpperCase() + type.slice(1)) + ": " + currVal;
        }
        else apAlt += "\n • " + (type.charAt(0).toUpperCase() + type.slice(1)) + ": " + 0;
    })

    return {atkPower: total, apAlt: apAlt};
}
'use client'
import { getTotalStats } from "@/utils/BuildCreatorUtils"
import { Weapon } from "@/utils/types"
import { calculateAttackPower } from "@/utils/AttackPowerUtils";
import { PanelTitle } from "..";
import { useContext } from "react";
import BuildCreatorContext from "@/context/BuildCreatorContext";

function AttackPowerPanel() {
    const {selectedClass, characterStats, selectedArmours, selectedTalismans, selectedWeapons, selectedAffinities, selectedWepLvls, twoHanded, runeEffect} = useContext(BuildCreatorContext);
    const totalStats = getTotalStats(selectedClass, characterStats, selectedArmours, selectedTalismans, twoHanded, runeEffect);

    return (
    <>
    <PanelTitle text="Attack Power/Spell Scaling" img="icons/attack-power.png"/>
    
    <div className="attack-power-panel">
        {
            selectedWeapons.map((weapon: Weapon, i: number) => {
                const attackPower = calculateAttackPower(weapon, selectedAffinities[i], selectedWepLvls[i], totalStats)
                return (
                    <div key={i}>
                        <span className="attack-power" data-alt={attackPower.attackPowerAlt}>
                        {(i < 3 ? "L Armament " : "R Armament ") + (i % 3 + 1)}
                        </span>
                        {
                            Math.floor(
                                attackPower
                                .finalAttackValues
                                .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                            )
                        } 
                        {
                            ["staff", "seal"].includes(weapon?.type) && " / " + attackPower.sorceryScaling
                        }
                    </div>
            )})
        }
    </div>
    </>
  )
}

export default AttackPowerPanel
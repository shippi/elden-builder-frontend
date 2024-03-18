'use client'
import { useEffect, useState } from "react"
import { DisabledDropDown, DropDown } from ".."
import { getSelectedItems, getTotalStats } from "@/utils/BuildCreatorUtils"
import { Armour, Ash, CharacterClass, CharacterStats, Talisman, Weapon } from "../types"
import { wepLevelsData } from "@/public/data"

interface Props {
    weapons: Weapon[],
    ashes: Ash[],
    affinities: any[],
    characterClass: CharacterClass,
    characterStats: CharacterStats,
    armours: Armour[],
    talismans: Talisman[],
    onWepChange: Function,
    onAffChange: Function,
    onAshChange: Function,
    onLvlChange: Function,
    onTwoHandChange: Function
}

function WeaponsPanel({weapons, ashes, affinities, characterClass, characterStats, armours, talismans, onWepChange, onAffChange, onAshChange, onLvlChange, onTwoHandChange} : Props) {
    const [wepIndices, setWepIndices] = useState([-1, -1, -1, -1, -1, -1]);
    const [ashIndices, setAshIndices] = useState([-1, -1, -1, -1, -1, -1]);
    const [affIndices, setAffIndices] = useState([0, 0, 0, 0, 0, 0]);
    const [lvlIndices, setLvlIndices] = useState([0, 0, 0, 0, 0, 0]);
    const [currIndex, setCurrIndex] = useState(0);
    const [twoHanded, setTwoHanded] = useState(false);
    const totalStats = getTotalStats(characterClass, characterStats, armours, talismans, twoHanded);

    const handleWepOnChange = (newIndex: number) => {
        let newIndices = [...wepIndices];
        newIndices[currIndex] = newIndex;
        const selectedWeapons = getSelectedItems(weapons, newIndices);
        setWepIndices(newIndices);

        let newAffIndices = [...affIndices];
        newAffIndices[currIndex] = 0;
        const selectedAffinities = getSelectedItems(affinities, newAffIndices).map(aff => aff.name);

        let newLvlIndices = [...lvlIndices];
        newLvlIndices[currIndex] = 0;
        const selectedLvls = getSelectedItems(wepLevelsData, newLvlIndices).map(lvl => +lvl.name.substring(1));
        setLvlIndices(newLvlIndices);

        let selectedAshes;

        if (newIndex > -1 && !weapons[newIndex].unique) {
            const availableAshes = getAvailableAshes(ashes, weapons[newIndex].type)
            const currentAshIndex = getAshIndex(availableAshes, weapons[newIndex].defaultSkill)
           
            let newAshIndices = [...ashIndices];
            newAshIndices[currIndex] = currentAshIndex;
            setAshIndices(newAshIndices);
            selectedAshes = getSelectedAshes(selectedWeapons, ashes, newAshIndices);
        }
        else {
            selectedAshes = getSelectedAshes(selectedWeapons, ashes, ashIndices);  
            setWepIndices(newIndices);
        }
        onWepChange(selectedWeapons, selectedAshes, selectedAffinities, selectedLvls);
    }

    const handleAshOnChange = (newIndex: number) => {
        let newIndices = [...ashIndices];
        newIndices[currIndex] = newIndex;
        setAshIndices(newIndices);

        const selectedWeapons = getSelectedItems(weapons, wepIndices);
        const selectedAshes = getSelectedAshes(selectedWeapons, ashes, newIndices);

        onAshChange(selectedAshes);
    }

    const handleAffOnChange = (newIndex: number) => {
        let newIndices = [...affIndices];
        newIndices[currIndex] = newIndex;
        setAffIndices(newIndices);

        const selectedAffinities = getSelectedItems(affinities, newIndices).map(aff => aff.name);
       
        onAffChange(selectedAffinities);
    }

    const handleLvlOnChange = (newIndex: number) => {
        let newIndices = [...lvlIndices];
        newIndices[currIndex] = newIndex;
        setLvlIndices(newIndices);

        const selectedLvls = getSelectedItems(wepLevelsData, newIndices).map(lvl => +lvl.name.substring(1));
        onLvlChange(selectedLvls);
    }

    const handleCheckboxChange = () => {
        setTwoHanded(!twoHanded);
        onTwoHandChange(!twoHanded);
    }

    return (
        <div className="weapons-panel">
            {/* div for selecting weapons*/}
                <div className="selectors-container">
                {
                    wepIndices.map((i, j) => (
                        j < 3 &&
                        <div className="selector" onClick={() => {setCurrIndex(j)}}>
                            <label>{"Left Armament " + (j % 3 + 1)}</label>
                            <DropDown items={weapons} index={wepIndices[j]} isNullable={true} onChange={handleWepOnChange} hasImages={true}/>
                            <div className="requirements-text">
                            {isRequiredStatsMet(weapons[wepIndices[j]], totalStats).isMet ? "" : isRequiredStatsMet(weapons[wepIndices[j]], totalStats).reqMessage}
                            </div>
                            <div className="weapon-options">
                                <div className="ashes">
                                { 
                                    weapons[wepIndices[j]]?.unique ? <DisabledDropDown value={weapons[wepIndices[j]].defaultSkill}/> :
                                    wepIndices[j] < 0 ? <DisabledDropDown value={"Ash of War"} /> :
                                    <DropDown items={getAvailableAshes(ashes, weapons[wepIndices[j]].type)} index={ashIndices[j]} isNullable={false} hasImages={false} onChange={handleAshOnChange} />
                                }
                                </div>
                                <div className="affinity">
                                    {
                                        weapons[wepIndices[j]]?.changeAffinity ?
                                        <DropDown items={affinities} index={affIndices[j]} isNullable={false} hasImages={false} onChange={handleAffOnChange} /> :
                                        <DisabledDropDown value={"Affinity"} />
                                    }
                                </div>
                                <div className="levels">
                                    {
                                        wepIndices[j] > -1 && !weapons[wepIndices[j]]?.unique ? <DropDown items={wepLevelsData} index={lvlIndices[j]} isNullable={false} hasImages={false} onChange={handleLvlOnChange} /> :
                                        wepIndices[j] > -1 && weapons[wepIndices[j]].unique ? <DropDown items={wepLevelsData.slice(0, 11)} index={lvlIndices[j]} isNullable={false} hasImages={false} onChange={handleLvlOnChange} /> :
                                        <DisabledDropDown value={"+0"} />
                                    }
                                </div>
                            </div>
                            <br/>
                        </div>
                    ))
                }
                    
                    <div>
                        <br/>
                        <div className="two-handed-container" onClick={handleCheckboxChange}>
                            <input type="checkbox" checked={twoHanded} onChange={handleCheckboxChange}/>Two-Handed
                        </div>
                    </div>
                </div>
                <div className="selectors-container">
                {
                    wepIndices.map((i, j) => (
                        j >= 3 &&
                        <div className="selector" onClick={() => {setCurrIndex(j)}}>
                            <label>{ "Right Armament " + (j % 3 + 1)} </label>
                            <DropDown items={weapons} index={wepIndices[j]} isNullable={true} onChange={handleWepOnChange} hasImages={true}/>
                            <div className="requirements-text">
                            {isRequiredStatsMet(weapons[wepIndices[j]], totalStats).isMet ? "" : isRequiredStatsMet(weapons[wepIndices[j]], totalStats).reqMessage}
                            </div>
                            <div className="weapon-options">
                                <div className="ashes">
                                { 
                                    weapons[wepIndices[j]]?.unique ? <DisabledDropDown value={weapons[wepIndices[j]].defaultSkill}/> :
                                    wepIndices[j] < 0 ? <DisabledDropDown value={"Ash of War"} /> :
                                    <DropDown items={getAvailableAshes(ashes, weapons[wepIndices[j]].type)} index={ashIndices[j]} isNullable={false} hasImages={false} onChange={handleAshOnChange} />
                                }
                                </div>
                                <div className="affinity">
                                    {
                                        weapons[wepIndices[j]]?.changeAffinity ?
                                        <DropDown items={affinities} index={affIndices[j]} isNullable={false} hasImages={false} onChange={handleAffOnChange} /> :
                                        <DisabledDropDown value={"Affinity"} />
                                    }
                                </div>
                                <div className="levels">
                                    {
                                        wepIndices[j] > -1 && !weapons[wepIndices[j]]?.unique ? <DropDown items={wepLevelsData} index={lvlIndices[j]} isNullable={false} hasImages={false} onChange={handleLvlOnChange} /> :
                                        wepIndices[j] > -1 && weapons[wepIndices[j]].unique ? <DropDown items={wepLevelsData.slice(0, 11)} index={lvlIndices[j]} isNullable={false} hasImages={false} onChange={handleLvlOnChange} /> :
                                        <DisabledDropDown value={"+0"} />
                                    }
                                </div>
                            </div>
                            <br/>
                        </div>
                        
                    ))
                }
                </div>
        </div>
    )
}

export default WeaponsPanel

function getAvailableAshes(ashes: Ash[], wepType: string) {
    return ashes.filter(ash => ash.availability[wepType as keyof typeof ash.availability] == true);
}

function getAshIndex(ashes: Ash[], ashName: string) {
    let index = 0;
    ashes.forEach((ash, i) => {
        if (ash.name == ashName) index = i
    })
    return index;
}

function getSelectedAshes(weps: Weapon[], ashes: Ash[], ashIndices: number[]) {
    let selectedAshes = new Array(weps.length).fill(null);

    weps.forEach((wep, i) => {
        if (wep && !wep.unique) {
            selectedAshes[i] = getAvailableAshes(ashes, wep.type)[ashIndices[i]]
        }
    })

    return selectedAshes;
}

function isRequiredStatsMet(weapon: Weapon, totalStats: CharacterStats) {
    const statNames = ["strength", "dexterity", "intelligence", "faith", "arcane"];
    let isMet = true;
    let reqMessage = "Requirements: "

    if (weapon == undefined) return {isMet: isMet, reqMessage: reqMessage}

    statNames.forEach((stat, i) => {
        const wepReq = weapon.requiredAttributes[stat as keyof typeof weapon.requiredAttributes];
        const currStat = totalStats[stat as keyof typeof totalStats]
        

        if (wepReq && currStat < wepReq) {
            isMet = false;
        }
        if (wepReq) {
            reqMessage += wepReq + "/"  
        }
        else {
            reqMessage += "0/"
        }
    });
    reqMessage = reqMessage.slice(0, -1);
    return { isMet: isMet, reqMessage: reqMessage}
}
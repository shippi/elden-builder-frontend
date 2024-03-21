'use client'
import { useState } from "react"
import { DropDown, PanelTitle } from ".."
import { Armour } from "@/utils/types"
import { getSelectedArmours } from "@/utils/ArmourUtils"

interface Props {
    armours: Armour[],
    onChange: Function
}

function ArmourPanel({armours, onChange} : Props) {
    const [indices, setIndices] = useState([-1, -1, -1, -1]);
    const [currIndex, setCurrIndex] = useState(0);

    const armoursArr = [
        [...armours].filter(armour => (armour.category == "Head")),
        [...armours].filter(armour => (armour.category == "Chest")),
        [...armours].filter(armour => (armour.category == "Arms")),
        [...armours].filter(armour => (armour.category == "Legs"))
    ]

    const handleOnChange = (newIndex: number) => {
        let newIndeces = [...indices];
        newIndeces[currIndex] = newIndex;

        const selectedArmours = getSelectedArmours(armours, newIndeces);

        setIndices(newIndeces);
        onChange(selectedArmours);
    }

    const armourSwitch = (index: number) => {
        switch(index) {
            case 0:
                return "Helmet"
            case 1:
                return "Chest"
            case 2: 
                return "Gauntlets"
            case 3:
                return "Legs"
        }
    }

    return (
        <div>
        <PanelTitle text="Armour" img="icons/armour.png"/>
        <div className="armour-panel">
            {/* div for selecting chest armour */}
            <div>
                {
                    indices.map((i, j) => (
                        <div className="selector" onClick={() => {setCurrIndex(j)}}>
                            <label>{armourSwitch(j)}</label>
                            <DropDown items={armoursArr[j]} index={indices[j]} isNullable={true} onChange={handleOnChange} hasImages={true} searchEnabled={true}/>
                        </div>
                    ))
                }
            </div>
            <br/>
            {/* div for displaying active effects from armour */}
            <div className="active-effects">
                <label>Active Effects:</label>
                <ul>
                {
                    getSelectedArmours(armours, indices).map(armour => (
                        armour?.effect == null ? "" : 
                        <li>{armour.effect}</li>
                    ))
                }
                </ul>
            </div>
        </div>
        </div>
    )
}

export default ArmourPanel


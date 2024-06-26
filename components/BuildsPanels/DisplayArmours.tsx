import { ListItem, PanelTitle } from "..";
import { ARMOUR_TYPES } from "@/helpers/consts";
import { Armour } from "@/helpers/types";

interface Props {
    selectedArmours: Armour[]
}

function DisplayArmours({selectedArmours} : Props) {
    return (
        <div>
        <PanelTitle text="Armour" img="/icons/armour.png"/>
        <div className="armour-panel">
        {
            selectedArmours.map((armour: Armour, i: number) => (
                <div  key={i}>
                    <label>{ARMOUR_TYPES[i]}</label>
                    <ListItem image={armour?.image} text={armour?.name}/>
                </div>

            ))
        }
        <div className="active-effects">
            <label>Active Effects:</label>
            <ul>
            {
                selectedArmours.map((armour: any) => (
                    armour?.effect == null ? "" : 
                    <li key={armour.name}>{armour.effect}</li>
                ))
            }
            </ul>
            </div>
        </div>
        </div>
    )
}

export default DisplayArmours
'use client'
import { DisplayArmours, DisplayCharacter, DisplayStats, DisplayWeapons } from "."
import { getItemFromName } from "@/helpers/BuildCreatorHelper"
import { armours, classes, greatRunes, talismans, weapons } from "@/public/data"
import DisplayTalismans from "./BuildsPanels/DisplayTalismans"
import DisplayGreatRune from "./BuildsPanels/DisplayGreatRune"

interface Props {
    name: string,
    creatorName: string,
    build: any
}

function BuildPage({ name, creatorName, build } : Props) {
    const selectedClass = getItemFromName(build.selectedClass, classes);
    const selectedArmours = build.selectedArmours.map((armour: string) => getItemFromName(armour, armours));
    const selectedTalismans = build.selectedTalismans.map((talisman: string) => getItemFromName(talisman, talismans));
    const selectedWeapons = build.selectedWeapons.map((weapon: string) => getItemFromName(weapon, weapons));
    const selectedAffinities = build.selectedAffinities;
    const selectedAshes = build.selectedAshes;
    const selectedWepLvls = build.selectedWepLvls;
    const selectedRune = getItemFromName(build.selectedRune, greatRunes);

    return (
        <>
        <div style={{height: "40px"}}></div>
       
        <div className="build-page">
            <div className="panels-container">
            <div className="header">
                <h1>{name}</h1> 
                <div style={{borderLeft: "1px solid grey", height:"25px"}}/>
                <div>Created by <span>{creatorName}</span></div>
            </div>
            </div>
            
            <div className="panels-container">
                <div className="subcontainer">
                    <DisplayCharacter 
                        selectedClass={selectedClass}
                    />
                    <DisplayGreatRune 
                        selectedRune={selectedRune}
                    />
                </div>
                <div className="subcontainer">
                    <DisplayWeapons 
                        selectedWeapons={selectedWeapons} 
                        selectedAffinities={selectedAffinities} 
                        selectedAshes={selectedAshes} 
                        selectedLevels={selectedWepLvls}                        
                    />
                    <div className="subcontainer2">
                        <DisplayArmours selectedArmours={selectedArmours} />
                        <DisplayTalismans selectedTalismans={selectedTalismans} />
                    </div>
                </div>

                <div className="subcontainer">
                    <DisplayStats/>
                </div>
            </div>
        </div>
        </>
    )
}

export default BuildPage
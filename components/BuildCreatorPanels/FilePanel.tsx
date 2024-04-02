'use client'
import { AuthContext } from "@/context/AuthContext"
import BuildCreatorContext from "@/context/BuildCreatorContext"
import { useContext, useEffect, useRef, useState } from "react"
import { Ammo, Armour, Ash, Spell, Talisman, Weapon } from "@/helpers/types";
import { delay } from "@/utils";
import { checkNameExists } from "@/helpers/FileHelper";
import { DropDown } from "..";
import { useClickOutside } from "@/hooks";

function FilePanel() {
  const {selectedClass, selectedArmours, selectedTalismans, selectedWeapons, selectedAshes, selectedWepLvls, selectedAffinities, selectedRune, selectedArrows, selectedBolts, selectedSpells, characterStats} = useContext(BuildCreatorContext)
  const {currentUser} = useContext(AuthContext);
 
  const [saveLoading, setSaveLoading] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [loadOpen, setLoadOpen] = useState(false);
  
  const [buildName, setBuildName] = useState("Untitled");
  const [saveId, setSaveId] = useState<number>(-1);
  const [builds, setBuilds] = useState<any[]>([]);
  const [buildNameWidth, setBuildNameWidth] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const uid = currentUser.uid;

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) setBuildNameWidth(ref.current.offsetWidth + "px")
  })

  const dropDownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropDownRef, () => {setLoadOpen(false)});

  useEffect(() => {
    if (currentUser && uid) {
      const res = async() => {
        await fetch(process.env.NEXT_PUBLIC_API_URL + `builds?uid=${uid}`)
        .then(async res => await res.json())
        .then(data => setBuilds(data))
      }
      res()
    }
  }, [loadOpen])

  useEffect(() => {
    setDisplaySuccess(false)
  }, [saveLoading])
  
  const handleSave = async () => {
    if (!currentUser) {
      return;
    }
    
    const buildData = {
      selectedClass: selectedClass.name,
      selectedArmours: selectedArmours.map((armour: Armour | null) => { if (armour) return(armour.name)}), 
      selectedTalismans: selectedTalismans.map((talisman: Talisman| null) => { if (talisman) return(talisman.name)}), 
      selectedWeapons: selectedWeapons.map((weapon: Weapon | null) => { if (weapon) return(weapon.name)}), 
      selectedAshes: selectedAshes.map((ash: Ash | null) => { if (ash) return(ash.name)}), 
      selectedWepLvls: selectedWepLvls,
      selectedAffinities: selectedAffinities, 
      selectedRune: selectedRune ? selectedRune.name : null, 
      selectedArrows: selectedArrows.map((arrow: Ammo | null) => { if (arrow) return(arrow.name)}), 
      selectedBolts: selectedBolts.map((bolt: Ammo | null) => { if (bolt) return(bolt.name)}), 
      selectedSpells: selectedSpells.map((spell: Spell | null) => { if (spell) return(spell.name)}), 
      characterStats: characterStats
    }

    setSaveLoading(true);

    if (saveId < 0) {
      const nameExists = await checkNameExists(uid, buildName);

      if (nameExists) {
        setSaveLoading(false);
        return;
      } 
      const sentData = {
        uid: uid,
        name: buildName,
        build: buildData,
        isPublic: false
      }
    
      await fetch(process.env.NEXT_PUBLIC_API_URL + "builds", 
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(sentData)
        })
        .then(res=> res.json())
        .then(data => setSaveId(data.id))
        .catch(error => console.log(error));
    }
    else {
      const sentData = {
        name: buildName,
        build: buildData,
        isPublic: false
      }

      await fetch(process.env.NEXT_PUBLIC_API_URL + "builds/" + saveId, 
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(sentData)
      })
      .then(res=> res.json())
      .catch(error => console.log(error));
    }
    setDisplaySuccess(true);
    await delay(2510);
    setSaveLoading(false);
    
  }

  const handleLoad = async () => {
    if (!currentUser) {
      return;
    }
    setLoadOpen(!loadOpen);
  }

  const onDropDownSelect = (newIndex: number) => {
    setSelectedIndex(newIndex);
    setBuildName(builds[newIndex].name);
    setSaveId(builds[newIndex].id);
    setLoadOpen(false);
  }

  return (
    <div className="file-panel">
      <div>
        <label>Build Name: </label>
        <div className="input-container" ref={ref}>
          <input type="text" style={{marginTop: "5px"}} value={buildName} onChange={e => setBuildName(e.target.value)}/>
          <div className="load-container">
            {
              loadOpen ? 
              <div className="dummy-button"><i className="fa fa-angle-down rotate" aria-hidden="true"/></div>
              :
<button onClick={handleLoad}><i className={(!loadOpen ? "" : "rotate") + " fa fa-angle-down"} aria-hidden="true"/></button>
            }
            
            
          </div>
         
        </div>
        <div style={{height: "2px"}}/>
        {loadOpen && <div ref={dropDownRef}><DropDown items={builds} index={selectedIndex} isNullable={false} hasImages={false} showSelected={false} width={buildNameWidth} onChange={onDropDownSelect} /></div>}

      </div>
      <button>New</button>
      <button onClick={handleSave} className={saveLoading ? "disabled" : ""} disabled={saveLoading}>Save</button>
      {displaySuccess && <div className="success-message">Build saved succesfully!</div>}
    </div>
  )
}

export default FilePanel

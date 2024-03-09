'use client'
import { useClickOutside } from '@/hooks';
import { useEffect, useRef, useState } from 'react'

interface Props {
    items: any[],
    index: number,
    isNullable: boolean,
    incompatibilities?: number[],
    onChange: Function
}

function DropDown({ items, index, isNullable, incompatibilities, onChange }: Props) {  
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    
    const ref = useRef(null);
    useClickOutside(ref, () => setOpen(false));

    const selectedRef = useRef(null);

    const scrollToRef = (ref: any) => {
        
        if (ref.current && index > -1) {
            if(ref.current.children[index]) {
                ref.current.children[index].scrollIntoView();
            }
        }   
        else if (ref.current && index == -1) {
            ref.current.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        if(open) scrollToRef(selectedRef)
    }, [open])

    const isCompatible = (currItem: any, currIndex: number) => {
        let compatible = true;
        
        if (incompatibilities?.includes(currIndex) && currIndex > -1) return false;

        incompatibilities?.forEach(i => {
            
            let item = items[i];
            if(item?.incompatible?.includes(currItem.name) && i != index) compatible = false;;
        });
        
        return compatible;
    }

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="select-menu" ref={ref}>
            <div className="selected" onClick={() => { setOpen(!open); }}>
                <div>
                { index > -1 ? <img src={items[index].image}/>:<img/>}
                { index > -1 ? items[index].name : "None" }
                </div>
                
                <i className={(!open ? "" : "rotate") + " fa fa-angle-down"} aria-hidden="true"></i>
            </div>
            {
                
                <div className={"dropdown" + (open ? "": " hidden")} >
                    <div className="search-box">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input 
                            type="text"
                            value={search}
                            placeholder="Search..."
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        />
                    </div>
                
                <ul ref={selectedRef}>
                    {
                        isNullable == true &&
                        <li 
                            className={index < 0 ? "selected-item" : ""} 
                            onClick={() => { 
                                onChange(-1); 
                                setOpen(false); 
                            }}
                        >
                            None
                        </li>
                    }
                    {
                        items.map((item, i) => (
                            item.name.toLowerCase().indexOf(search.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')) >= 0 &&
                            <li 
                                className={i == index ? "selected-item" : isCompatible(item, i) == false ? "disabled" : ""}
                                key={i.toString()} 
                                onClick={() => {
                                    if(isCompatible(item, i)) {
                                        onChange(i);
                                        setOpen(false);
                                        setSearch("");
                                    }
                                }}
                            >
                                <img src={item.image}/>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
                </div>
            }
        </div>
        </>
        
    )
}

export default DropDown
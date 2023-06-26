import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen]  = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            // console.log(divEl.current);

            if(!divEl.current){return;}
            
            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener("click" , handler, true);

        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }; 

    const handleOptionClick = (option) => {
        //CLOSE DROPDOWN
        setIsOpen(false);

        //wHAT OPTION USER CLICKED  
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (<div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>)
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {/* {selection ? selection.label : "Select..."} */}
                {value?.label || "Select..."} {/**first truthy value / if not then last falsy */}
                {isOpen ? <GoChevronUp className="text-lg"/> : <GoChevronDown className="text-lg"/>}
            </Panel>
            {isOpen && (
              <Panel className="absolute top-full">
                {renderedOptions}
              </Panel>)}
        </div>
    );
}

export default Dropdown;
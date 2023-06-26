import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] =useState(-1);

    const handleClick = (nextIndex) => {
        // if (expandedIndex === nextIndex){
        //     setExpandedIndex(-1);
        // }
        // else{
        //     setExpandedIndex(nextIndex);
        // }

        setExpandedIndex( (currentExpandedIndex/** most upto version of variable */) => {
                
                // console.log("Stale version of expandedIndex ",expandedIndex);
                // console.log("Up To Date version of currentExpandedIndex ",currentExpandedIndex);

            if (currentExpandedIndex === nextIndex){
                return -1
            }
            else{
                return nextIndex;
            }
        });

    }

    const renderedItems = items.map( (item, index) => {

        const isExpanded = index === expandedIndex;

        // const content = isExpanded && <div>{item.content}</div>; // first falsy, if no falsy then last truthy 
        // const content = isExpanded || <div>{item.content}</div>; //first value that is truthy if no truthy then last falsy 

        const icon = <span className="text-2xl">{ isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}> {/*if instead of arrow function we passed handleClick without argument then will recieve event as argument for eg. onCLick= {handelCLick} */}
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    );
}

export default Accordion;
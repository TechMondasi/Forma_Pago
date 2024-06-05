"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const CollapsibleSection = ({title, children, className}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${className} w-full`}>
            <button onClick={toggleSection}
            className="relative flex text-5xl rounded-full border-solid border-2 border-purple-600 py-2 px-8 w-full justify-center transition-transform ease-out"
            >
                <span className="">
                    {title}
                </span>
                <span className="absolute right-4 inset-y-0 flex items-center">
                    {isOpen? <ChevronUpIcon className="w-8 inline"/> : <ChevronDownIcon className="w-8 inline"/>}
                </span>
            </button>
            {isOpen && (
                <div>
                    {children}
                </div>
            )}
        </div>
    )
}

export default CollapsibleSection;

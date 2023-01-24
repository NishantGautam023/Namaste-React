import { faqs } from "../constant";
import AccordionItem from "./AccordionItem";
import {useState} from "react";

const Accordion = () => {
    const [clicked, setClicked] = useState("0")

    const handleToggle = (index) => {
        if(clicked === index){
            return setClicked("0")
        }
        setClicked(index)
    }


    return (
        <ul className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} faq={faq} onToggle={() => handleToggle(index)} active = {clicked === index}  />
            ))}
        </ul>
    );
};

export default Accordion;
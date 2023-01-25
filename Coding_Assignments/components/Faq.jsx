
import {useState} from "react";
import Accordion from "./Accordion";
import {accordionData} from "../constant";

const Faq = () => {





    return (
        <>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </>
    )
}


export default Faq ;

import {useState} from "react";
import Accordion from "./Accordion";
import {accordionData} from "../constant";

const Faq = () => {





    return (
        <>
                <h1>FAQ </h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </>
    )
}


export default Faq ;
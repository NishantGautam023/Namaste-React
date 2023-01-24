import {accordionData} from "../constant";
import Accordion from "./Accordion";

const AccordionItem = () => {
    return (
        <>
            <h1>React Accordion Demo</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>

        </>
    )
}

export default AccordionItem
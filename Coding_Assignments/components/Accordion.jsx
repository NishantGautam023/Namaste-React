import { faqs } from "../constant";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
    return (
        <ul className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} faq={faq} />
            ))}
        </ul>
    );
};

export default Accordion;
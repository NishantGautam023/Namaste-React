const AccordionItem = ({ faq, onToggle, active }) => {
    const { question, answer } = faq;
    return (
        <li className={`accordion_item ${active ? "active" : ""}`}>
            <button className="accordion-button" onClick={onToggle}>
                {question}
                <span className="accordion-control">—</span>
            </button>
            <div className={`answer_wrapper ${active ? "open" : ""}`}>
                <div className="accordion-answer">{answer}</div>
            </div>
        </li>
    );
};

export default AccordionItem;
const AccordionItem = ({ faq }) => {
    const { question, answer } = faq;
    return (
        <li className="accordion_item">
            <button className="accordion-button">
                {question}
                <span className="accordion-control">—</span>
            </button>
            <div className="accordion-answer-wrapper">
                <div className="accordion-answer">{answer}</div>
            </div>
        </li>
    );
};

export default AccordionItem;
import { useState } from 'react';
import styles from '../styles/accordion.module.css';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionTrigger}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.accordionQuestion}>{question}</span>
        <svg
          className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ''}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}>
        <p className={styles.accordionAnswer}>{answer}</p>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

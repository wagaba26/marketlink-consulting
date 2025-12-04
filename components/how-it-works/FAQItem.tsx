'use client';

import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui';
import { useToggle } from '@/hooks/useToggle';
import type { FAQItemData } from '@/types';
import styles from './FAQItem.module.css';

export default function FAQItem({ question, answer }: FAQItemData) {
    const [isOpen, toggle] = useToggle(false);

    return (
        <Card className={styles.faqCard} padding="small">
            <h4 className={styles.question} onClick={toggle}>
                {question}
                <ChevronDown
                    size={18}
                    color="var(--text-secondary)"
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                />
            </h4>
            {isOpen && (
                <p className={styles.answer}>{answer}</p>
            )}
        </Card>
    );
}

import Link from 'next/link';
import { Card } from '@/components/ui';
import type { Article } from '@/types';
import styles from './ArticleCard.module.css';

export default function ArticleCard({ title, excerpt, date, category }: Article) {
    return (
        <Card className={styles.articleCard}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.excerpt}>{excerpt}</p>
                <div className={styles.footer}>
                    <span className={styles.date}>{date}</span>
                    <Link href="#" className={styles.readMore}>Read More →</Link>
                </div>
            </div>
        </Card>
    );
}

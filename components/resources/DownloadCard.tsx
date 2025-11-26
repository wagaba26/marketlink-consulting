'use client';

import { Download, FileText } from 'lucide-react';
import { Card } from '@/components/ui';
import type { DownloadResource } from '@/types';
import styles from './DownloadCard.module.css';

export default function DownloadCard({ title, size, url = '#' }: DownloadResource) {
    return (
        <Card className={styles.downloadCard} padding="small">
            <div className={styles.info}>
                <FileText color="var(--primary)" />
                <div>
                    <h4 className={styles.title}>{title}</h4>
                    <span className={styles.size}>{size}</span>
                </div>
            </div>
            <a
                href={url}
                download
                className="btn"
                style={{ padding: '0.5rem', background: 'var(--accent)', color: 'var(--primary)', textDecoration: 'none' }}
            >
                <Download size={18} />
            </a>
        </Card>
    );
}

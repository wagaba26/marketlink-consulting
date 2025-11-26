import { Card } from '@/components/ui';
import styles from './ValueCard.module.css';

interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
    return (
        <Card className="text-center">
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
        </Card>
    );
}

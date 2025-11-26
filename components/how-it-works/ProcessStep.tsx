import { Card } from '@/components/ui';
import styles from './ProcessStep.module.css';

interface ProcessStepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ProcessStep({ icon, title, description }: ProcessStepProps) {
    return (
        <Card className={styles.stepCard}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </Card>
    );
}

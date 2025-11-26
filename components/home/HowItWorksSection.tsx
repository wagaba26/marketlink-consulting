import { Grid } from '@/components/ui';
import styles from './HowItWorksSection.module.css';

export default function HowItWorksSection() {
    const steps = [
        {
            number: '1',
            title: 'Register',
            description: 'Sign up as a trader or supplier and complete our verification process.',
        },
        {
            number: '2',
            title: 'Connect',
            description: 'Get matched with verified suppliers or distributors based on your needs.',
        },
        {
            number: '3',
            title: 'Transact',
            description: 'Securely order, pay, and arrange logistics through our platform.',
        },
        {
            number: '4',
            title: 'Grow',
            description: 'Expand your business with our credit facilities and market insights.',
        },
    ];

    return (
        <Grid columns={4} style={{ marginTop: '3rem' }}>
            {steps.map((step, index) => (
                <div key={index} className={styles.step}>
                    <div className={styles.stepNumber}>{step.number}</div>
                    <h3 style={{ color: 'white' }}>{step.title}</h3>
                    <p style={{ opacity: 0.9 }}>{step.description}</p>
                </div>
            ))}
        </Grid>
    );
}

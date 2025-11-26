import Image from 'next/image';
import styles from './DirectorWelcome.module.css';

export default function DirectorWelcome() {
    return (
        <section className={styles.directorWelcome}>
            <div className="container">
                <div className={styles.label}>About MarketLink</div>

                <div className={styles.card}>
                    <div className={styles.grid}>
                        <div className={styles.photoContainer}>
                            <Image
                                src="/director-photo.jpg"
                                alt="Wagaba Emmanuel, Managing Director"
                                width={400}
                                height={500}
                                className={styles.photo}
                                priority
                            />
                        </div>

                        <div className={styles.content}>
                            <h2 className={styles.heading}>Message from the Managing Director</h2>
                            <div className={styles.accentLine}></div>

                            <div className={styles.message}>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Welcome to MarketLink, and thank you for visiting our website.
                                </p>

                                <p style={{ marginBottom: '1.5rem' }}>
                                    As Managing Director, I am proud to introduce a company built with a clear purpose — to make automotive trade easier, more reliable, and better connected across Africa.
                                </p>

                                <p style={{ marginBottom: '1.5rem' }}>
                                    Our team brings years of experience working with international companies entering African markets, as well as supporting local automotive traders to source quality products from trusted suppliers. MarketLink was founded in 2025 to provide the structure, trust, and professional support that the automotive industry has always needed: from sourcing and logistics to credit assessment, compliance, and ongoing account management.
                                </p>

                                <p style={{ marginBottom: '1.5rem' }}>
                                    Whether you are an automotive trader seeking dependable sourcing or a global supplier exploring opportunities in Africa, we are here to support your growth and build long-term partnerships.
                                </p>

                                <p>
                                    Thank you for choosing MarketLink. We look forward to working with you.
                                </p>
                            </div>

                            <div className={styles.signature}>
                                <div className={styles.signatureName}>Wagaba Emmanuel</div>
                                <div className={styles.signatureTitle}>Managing Director, MarketLink Consulting</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <h2 style={{ color: 'white' }}>Stay Updated</h2>
            <p className="mb-4" style={{ opacity: 0.9 }}>
                Get the latest automotive trade insights and news delivered to your inbox.
            </p>
            <form className={styles.form}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.input}
                    required
                />
                <button
                    type="submit"
                    className="btn"
                    style={{ background: 'white', color: 'var(--primary)' }}
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}

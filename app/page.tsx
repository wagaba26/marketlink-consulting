import HeroEnhanced from '@/components/HeroEnhanced';
import Link from 'next/link';
import { Users, Globe, ShieldCheck, Truck, CreditCard, TrendingUp, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <HeroEnhanced />

      {/* Who We Serve */}
      <section className="section container">
        <h2 className={styles.sectionTitle}>Who We Serve</h2>
        <p className={styles.sectionSubtitle}>
          We bridge the gap between local automotive traders in Africa and global manufacturers.
        </p>

        <div className="grid grid-2">
          <div className="card">
            <div className={styles.cardIcon}>
              <Users size={32} />
            </div>
            <h3>Automotive Traders</h3>
            <p className="mb-4">
              Garages, workshops, retailers, and distributors looking for genuine parts, credit facilities, and streamlined logistics.
            </p>
            <ul className="mb-4" style={{ listStyle: 'none' }}>
              <li className="mb-1">✓ Access to global suppliers</li>
              <li className="mb-1">✓ Credit assessment & funding</li>
              <li className="mb-1">✓ Business formalization support</li>
            </ul>
            <Link href="/services" className="btn btn-secondary">Learn More</Link>
          </div>

          <div className="card">
            <div className={styles.cardIcon}>
              <Globe size={32} />
            </div>
            <h3>International Suppliers</h3>
            <p className="mb-4">
              Manufacturers and distributors seeking reliable market entry, compliance management, and verified local partners.
            </p>
            <ul className="mb-4" style={{ listStyle: 'none' }}>
              <li className="mb-1">✓ Market entry consulting</li>
              <li className="mb-1">✓ Regulatory compliance</li>
              <li className="mb-1">✓ Verified distributor network</li>
            </ul>
            <Link href="/services" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" style={{ background: 'var(--accent)' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Core Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive solutions to facilitate seamless automotive trade.
          </p>

          <div className="grid grid-3">
            <div className="card">
              <ShieldCheck size={40} className="mb-2" color="var(--primary)" />
              <h3>Compliance & Consulting</h3>
              <p>Regulatory support, KYC/AML checks, and market entry strategies for suppliers.</p>
            </div>
            <div className="card">
              <Truck size={40} className="mb-2" color="var(--primary)" />
              <h3>Logistics & Sourcing</h3>
              <p>End-to-end supply chain management, warehousing, and customs clearance.</p>
            </div>
            <div className="card">
              <CreditCard size={40} className="mb-2" color="var(--primary)" />
              <h3>Financial Services</h3>
              <p>Credit assessment, trade finance facilitation, and secure payment processing.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="section container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="mb-4">Africa's Growing Automotive Market</h2>
            <p className="mb-4">
              The African automotive aftermarket is projected to grow significantly, driven by a rising middle class and increased vehicle ownership. MarketLink positions you to capitalize on this opportunity.
            </p>
            <Link href="/insights" className="btn btn-secondary">Read Market Report</Link>
          </div>
          <div className="grid grid-2">
            <div className="text-center">
              <div className={styles.statNumber}>5%+</div>
              <div className={styles.statLabel}>Annual Growth</div>
            </div>
            <div className="text-center">
              <div className={styles.statNumber}>$30B</div>
              <div className={styles.statLabel}>Market Value</div>
            </div>
            <div className="text-center">
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Traders Network</div>
            </div>
            <div className="text-center">
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Global Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ color: 'white' }}>How MarketLink Works</h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            <div className={styles.step}>
              <div className={styles.stepNumber} style={{ opacity: 0.2 }}>1</div>
              <h3 style={{ color: 'white' }}>Register</h3>
              <p style={{ opacity: 0.9 }}>Sign up as a trader or supplier and complete our verification process.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber} style={{ opacity: 0.2 }}>2</div>
              <h3 style={{ color: 'white' }}>Connect</h3>
              <p style={{ opacity: 0.9 }}>Get matched with verified suppliers or distributors based on your needs.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber} style={{ opacity: 0.2 }}>3</div>
              <h3 style={{ color: 'white' }}>Transact</h3>
              <p style={{ opacity: 0.9 }}>Securely order, pay, and arrange logistics through our platform.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber} style={{ opacity: 0.2 }}>4</div>
              <h3 style={{ color: 'white' }}>Grow</h3>
              <p style={{ opacity: 0.9 }}>Expand your business with our credit facilities and market insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section container">
        <div className={styles.newsletter}>
          <h2 style={{ color: 'white' }}>Stay Updated</h2>
          <p className="mb-4" style={{ opacity: 0.9 }}>Get the latest automotive trade insights and news delivered to your inbox.</p>
          <form style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
            <button type="submit" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}

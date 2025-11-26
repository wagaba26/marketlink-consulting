import Link from 'next/link';

export default function Insights() {
    const articles = [
        {
            title: "The Future of African Automotive Trade",
            excerpt: "How digital platforms are revolutionizing the supply chain for local traders.",
            date: "Oct 12, 2025",
            category: "Market Trends"
        },
        {
            title: "Navigating Import Regulations in Uganda",
            excerpt: "A comprehensive guide to compliance, taxes, and customs procedures.",
            date: "Sep 28, 2025",
            category: "Regulation"
        },
        {
            title: "Unlocking Credit for Small Auto Businesses",
            excerpt: "How financial inclusion is empowering garage owners to scale their operations.",
            date: "Sep 15, 2025",
            category: "Finance"
        },
        {
            title: "Top 5 Spare Parts in High Demand",
            excerpt: "Analysis of the most sought-after automotive components in the East African market.",
            date: "Aug 30, 2025",
            category: "Data Insights"
        }
    ];

    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>Market Insights</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Stay informed with the latest trends, analysis, and news from the automotive sector.
                </p>
            </div>

            <div className="grid grid-2 mb-8">
                {articles.map((article, i) => (
                    <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '200px', background: 'var(--accent)', borderRadius: 'var(--radius) var(--radius) 0 0', marginBottom: '1rem' }}></div>
                        <div style={{ padding: '0.5rem' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase' }}>{article.category}</span>
                            <h3 style={{ margin: '0.5rem 0' }}>{article.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>{article.excerpt}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{article.date}</span>
                                <Link href="#" style={{ color: 'var(--primary)', fontWeight: '600' }}>Read More →</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Newsletter */}
            <div style={{ background: 'var(--primary)', color: 'white', padding: '3rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                <h2>Subscribe to Our Newsletter</h2>
                <p className="mb-4" style={{ opacity: 0.9 }}>Get weekly updates directly to your inbox.</p>
                <form style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <input type="email" placeholder="Your email address" style={{ padding: '0.8rem', borderRadius: 'var(--radius)', border: 'none', width: '300px' }} />
                    <button className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Subscribe</button>
                </form>
            </div>
        </div>
    );
}

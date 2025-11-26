import ArticleCard from '@/components/insights/ArticleCard';
import Newsletter from '@/components/home/Newsletter';
import { Grid } from '@/components/ui';
import type { Article } from '@/types';

export default function Insights() {
    const articles: Article[] = [
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

            <Grid columns={2} className="mb-8">
                {articles.map((article, i) => (
                    <ArticleCard key={i} {...article} />
                ))}
            </Grid>

            {/* Newsletter */}
            <Newsletter />
        </div>
    );
}

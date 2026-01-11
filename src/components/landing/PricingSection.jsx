import { motion } from 'framer-motion';
import { Check, CreditCard, Smartphone, ShieldCheck } from 'lucide-react';

const plans = [
    {
        name: "Basic",
        price: "Free",
        desc: "Essential tools for your journey.",
        features: ["7-Day Meal Plan", "BMR & TDEE Calculator", "Basic Recipes", "Standard Generation"],
        cta: "Start Free",
        highlight: false
    },
    {
        name: "FitFirst Pro",
        price: "$6.99",
        period: "/mo",
        desc: "Complete system access.",
        features: ["Unlimited Regenerations", "Shopping List Generator", "Priority Support", "Weekly Analytics"],
        cta: "Go Premium",
        highlight: true
    }
];

const PricingSection = ({ onPlanSelect }) => {
    return (
        <section id="pricing" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Transparent Pricing</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>Invest in your health for less than the cost of a lunch.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '900px', margin: '0 auto 5rem' }}>
                    {plans.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass-card"
                            style={{
                                padding: '3rem',
                                border: p.highlight ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                                position: 'relative',
                                boxShadow: p.highlight ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
                            }}
                        >
                            {p.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '0.4rem 1.2rem',
                                    borderBottomLeftRadius: '12px',
                                    fontWeight: 'bold',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                }}>
                                    Recommended
                                </div>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>{p.name}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>{p.desc}</p>
                            <div style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--color-text-main)' }}>
                                {p.price}<span style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', fontWeight: '400' }}>{p.period}</span>
                            </div>
                            <ul style={{ listStyle: 'none', marginBottom: '3rem' }}>
                                {p.features.map((f, j) => (
                                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', fontSize: '1rem', color: 'var(--color-text-main)' }}>
                                        <div style={{ background: '#d1fae5', borderRadius: '50%', padding: '4px' }}>
                                            <Check size={14} color="var(--color-primary)" />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => onPlanSelect && onPlanSelect(p)}
                                className={p.highlight ? 'btn-primary' : 'btn-secondary'}
                                style={{ width: '100%', fontSize: '1rem' }}
                            >
                                {p.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Payment Methods */}
                <div className="glass-card text-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem', border: '1px dashed #cbd5e1' }}>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
                        <ShieldCheck size={16} style={{ display: 'inline', marginBottom: '-3px' }} /> Secure Payments Accepted
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', opacity: 0.7 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)' }}>
                            <CreditCard size={24} /> <span>VISA</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)' }}>
                            <CreditCard size={24} /> <span>Mastercard</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)' }}>
                            <Smartphone size={24} /> <span>Apple Pay</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)' }}>
                            <Smartphone size={24} /> <span>Google Pay</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)' }}>
                            <span style={{ fontWeight: '800', fontFamily: 'monospace', fontSize: '1.2rem' }}>UPI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

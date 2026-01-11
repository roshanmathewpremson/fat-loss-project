import { motion } from 'framer-motion';
import { Leaf, Award, Zap, Heart } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: "100% Natural Ingredients",
        desc: "Based on wholesome Kerala produce: Coconut, Rice, Fish, and fresh Vegetables. No supplements needed."
    },
    {
        icon: Award,
        title: "Science-Backed",
        desc: "We calculate the exact calories you need to lose fat while preserving muscle, based on your biometrics."
    },
    {
        icon: Zap,
        title: "Flexible & Easy",
        desc: "Don't like a meal? Shuffle it! Our modular system ensures you never get bored of your diet."
    },
    {
        icon: Heart,
        title: "Heart Healthy",
        desc: "Optimized macronutrients to support heart health, energy levels, and long-term well-being."
    }
];

const FeaturesSection = () => {
    return (
        <section id="features" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Why Choose FitFirst?</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        We combine the comfort of home-cooked food with the precision of nutritional science.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="glass-card"
                            style={{ padding: '2.5rem 2rem', borderTop: '4px solid var(--color-primary)' }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--color-primary-light)',
                                color: 'var(--color-primary-dark)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <f.icon size={28} />
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{f.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

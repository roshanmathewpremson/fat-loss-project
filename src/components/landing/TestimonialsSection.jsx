import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import avatar1 from '../../assets/avatars/avatar_new_1.png';
import avatar2 from '../../assets/avatars/avatar_new_2.png';
import avatar3 from '../../assets/avatars/avatar_new_3.png';

const testimonials = [
    {
        name: "Vikram S.",
        role: "Startup Founder, Kochi",
        text: "FitFirst feels like an OS update for my body. The data-driven plan is incredibly precise, and I lost 6kg without giving up my favorite fish curry. 10/10 design.",
        rating: 5,
        image: avatar1
    },
    {
        name: "Priya R.",
        role: "Architect, Trivandrum",
        text: "Finally, a health app that looks and feels premium. The user experience is silky smooth, and the calorie metrics are spot on. It's the most sophisticated way to eat healthy.",
        rating: 5,
        image: avatar2
    },
    {
        name: "Ramesh M.",
        role: "Director, Calicut",
        text: "I was skeptical about 'Calorie OS', but it works. It removed all the guesswork. A streamlined, high-performance diet protocol that fits my busy schedule perfectly.",
        rating: 5,
        image: avatar3
    }
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>User Stories</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>Upgrading lives, one download at a time.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="glass-card"
                            style={{ padding: '2.5rem' }}
                        >
                            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem' }}>
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#10b981" color="#10b981" />
                                ))}
                            </div>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.5', marginBottom: '2rem', fontWeight: '500', color: 'var(--color-text-main)' }}>"{t.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.8)' }}>
                                    <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{t.name}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

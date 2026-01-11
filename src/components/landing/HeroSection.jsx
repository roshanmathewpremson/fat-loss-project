import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Leaf } from 'lucide-react';

const HeroSection = ({ children }) => {
    const scrollToGenerator = () => {
        document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section style={{ paddingTop: '140px', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    marginBottom: '4rem'
                }}>
                    {/* Left Column: Text */}
                    <div style={{ textAlign: 'left' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: '#d1fae5',
                                color: '#065f46',
                                padding: '6px 16px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '2rem',
                                border: '1px solid #a7f3d0'
                            }}>
                                <Leaf size={14} fill="currentColor" /> Simple. Healthy. Proven.
                            </div>

                            <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
                                Your Body, <br />
                                <span className="text-gradient">Fully Optimized</span>
                            </h1>

                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: '1.6' }}>
                                The smart way to plan Kerala meals. Lose weight with food you actualy enjoy, backed by nutritional science.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button onClick={scrollToGenerator} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    Start Journey <ArrowRight size={20} />
                                </button>
                                <a href="#features" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    Learn More
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'relative',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)',
                            border: '8px solid white'
                        }}>
                            <img
                                src="/src/assets/images/hero_composition.png"
                                alt="Healthy Tracking"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="glass-card"
                            style={{
                                position: 'absolute',
                                bottom: '30px',
                                left: '-20px',
                                padding: '1rem',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'rgba(255,255,255,0.9)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        >
                            <div style={{ background: '#ecfdf5', padding: '8px', borderRadius: '50%' }}>
                                <Target size={20} color="var(--color-primary)" />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Success Rate</div>
                                <div style={{ fontWeight: '700', color: 'var(--color-text-main)' }}>94% on Track</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Generator Container */}
                <motion.div
                    id="generator"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div className="container">
                <div className="glass-card" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    padding: '4rem 2rem'
                }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Ready to Transform Your Health?</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.9)' }}>
                        Join thousands of others achieving their dream body with the food they love.
                    </p>
                    <button
                        onClick={() => document.getElementById('generator').scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            background: 'white',
                            color: 'var(--color-primary)',
                            fontWeight: '800',
                            fontSize: '1.1rem',
                            padding: '1.2rem 3rem',
                            display: 'inline-block',
                            cursor: 'pointer',
                            border: 'none',
                            borderRadius: '50px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                    >
                        Get My Free Plan Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

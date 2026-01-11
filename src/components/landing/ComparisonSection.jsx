import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
    return (
        <section style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Stop Starving, Start Living</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>See the difference between generic diets and FitFirst.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* The Old Way */}
                    <div className="glass-card" style={{ opacity: 0.9 }}>
                        <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}>Generic Fad Diets</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><X color="#ef4444" size={20} /> Boring Salads & Boiled Chicken</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><X color="#ef4444" size={20} /> Expensive exotic ingredients</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><X color="#ef4444" size={20} /> Constantly hungry & tired</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><X color="#ef4444" size={20} /> Hard to sustain long-term</li>
                        </ul>
                    </div>

                    {/* The Kerala Way */}
                    <div className="glass-card" style={{ border: '2px solid var(--color-primary)', transform: 'scale(1.05)', boxShadow: 'var(--shadow-lg)' }}>
                        <div style={{
                            background: 'var(--color-primary)', color: 'white',
                            padding: '0.5rem 1rem', borderRadius: '20px',
                            display: 'inline-block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem'
                        }}>
                            THE FITFIRST WAY
                        </div>
                        <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Authentic Lifestyle</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Check color="var(--color-primary)" size={20} /> Fish Curry, Thoran, & Rice</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Check color="var(--color-primary)" size={20} /> Affordable local ingredients</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Check color="var(--color-primary)" size={20} /> High energy & satisfied</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Check color="var(--color-primary)" size={20} /> Lifetime healthy habits</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;

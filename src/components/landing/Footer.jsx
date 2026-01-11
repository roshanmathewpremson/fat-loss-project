import { Instagram, Twitter, Facebook, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ marginTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div className="glass-card" style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(4, 120, 87, 0.95) 100%)',
                    color: 'white',
                    padding: '4rem',
                    border: 'none'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                        <div>
                            <h3 style={{ marginBottom: '1rem', color: 'white', fontFamily: 'var(--font-main)' }}>FitFirst</h3>
                            <p style={{ opacity: 0.9, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                                Pioneering the future of personalized nutrition protocols. The first operating system for your body.
                            </p>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '1rem', color: 'white' }}>Links</h4>
                            <ul style={{ listStyle: 'none', opacity: 0.9, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
                                <li><a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a></li>
                                <li><a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '1rem', color: 'white' }}>Legal</h4>
                            <ul style={{ listStyle: 'none', opacity: 0.9, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
                                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '1rem', color: 'white' }}>Connect</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}><Instagram size={24} /></a>
                                <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}><Twitter size={24} /></a>
                                <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}><Facebook size={24} /></a>
                            </div>
                        </div>

                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', textAlign: 'center', opacity: 0.8, fontSize: '0.9rem' }}>
                        <p className="flex-center" style={{ gap: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Made with <Heart size={16} fill="white" /> for a healthier world. © 2026 FitFirst Inc.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

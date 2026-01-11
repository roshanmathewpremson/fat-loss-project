import { motion } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    return (
        <nav style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            width: '90%',
            maxWidth: '1000px',
        }}>
            <motion.div
                className="glass-card"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(255,255,255,0.8)'
                }}
            >
                {/* Logo */}
                <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        background: 'var(--color-primary-light)',
                        padding: '6px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Activity color="var(--color-primary)" size={20} />
                    </div>
                    <div style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: 'var(--color-text-main)',
                        letterSpacing: '-0.02em'
                    }}>
                        FitFirst
                    </div>
                </a>

                {/* Desktop Menu */}
                <div
                    className="desktop-nav"
                    style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'rgba(0,0,0,0.03)', padding: '5px', borderRadius: '100px' }}
                    onMouseLeave={() => setActiveTab('')}
                >
                    {['Features', 'Stories', 'Pricing', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                textDecoration: 'none',
                                color: activeTab === item ? 'var(--color-primary-dark)' : 'var(--color-text-secondary)',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                padding: '0.5rem 1.2rem',
                                borderRadius: '100px',
                                position: 'relative',
                                zIndex: 1,
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={() => setActiveTab(item)}
                        >
                            {activeTab === item && (
                                <motion.span
                                    layoutId="bubble"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(255, 255, 255, 0.4)',
                                        borderRadius: '100px',
                                        zIndex: -1,
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.5)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)'
                                    }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {item}
                        </a>
                    ))}
                </div>

                <a
                    href="#generator"
                    className="btn-primary desktop-nav"
                    style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                    Get Started
                </a>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer', color: 'var(--color-text-main)' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{
                        position: 'absolute',
                        top: '80px',
                        left: 0,
                        right: 0,
                        background: 'white',
                        borderRadius: '24px',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                        border: '1px solid #e2e8f0'
                    }}
                >
                    {['Features', 'Stories', 'Pricing', 'FAQ'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} style={{
                            textDecoration: 'none',
                            color: 'var(--color-text-main)',
                            fontSize: '1.2rem',
                            fontWeight: '600'
                        }}>
                            {item}
                        </a>
                    ))}
                    <a href="#generator" onClick={() => setIsOpen(false)} className="btn-primary" style={{ textAlign: 'center' }}>Create Plan</a>
                </motion.div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;

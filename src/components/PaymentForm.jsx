import { motion } from 'framer-motion';
import { Lock, CreditCard, Calendar, ShieldCheck, ChevronLeft, User, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useState } from 'react';

const PaymentForm = ({ plan, onBack, onSuccess }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            onSuccess();
        }, 2000);
    };

    const InputField = ({ label, icon: Icon, placeholder, type = "text", half = false }) => (
        <div style={{ marginBottom: '1rem', gridColumn: half ? 'span 1' : 'span 2' }}>
            <label style={{ fontSize: '0.85rem', marginBottom: '0.4rem', display: 'block', fontWeight: '600', color: 'var(--color-text-secondary)' }}>{label}</label>
            <div style={{ position: 'relative' }}>
                <Icon size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)' }} />
                <input
                    type={type}
                    placeholder={placeholder}
                    required
                    style={{
                        width: '100%',
                        paddingLeft: '2.5rem',
                        paddingRight: '1rem',
                        paddingTop: '0.8rem',
                        paddingBottom: '0.8rem',
                        background: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '12px'
                    }}
                />
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}
        >
            <button
                onClick={onBack}
                style={{
                    background: 'none', border: 'none', color: 'var(--color-text-secondary)',
                    display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1.5rem',
                    cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600'
                }}
            >
                <ChevronLeft size={18} /> Back to Plans
            </button>

            <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', color: 'var(--color-text-main)' }}>Secure Checkout</h2>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                                <ShieldCheck size={14} color="var(--color-primary)" /> SSL Encrypted
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Total Due</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>{plan.price}</div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handlePay} style={{ padding: '2rem' }}>

                    {/* Member Details Section */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)' }}>
                            <div style={{ width: '24px', height: '24px', background: '#d1fae5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <User size={14} color="var(--color-primary)" />
                            </div>
                            Member Details
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <InputField label="Full Name" icon={User} placeholder="John Doe" />
                            <InputField label="Email Address" icon={Mail} placeholder="john@example.com" type="email" />
                            <InputField label="Phone Number" icon={Phone} placeholder="+91 98765 43210" type="tel" />
                        </div>
                    </div>

                    {/* Billing Address Section */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)' }}>
                            <div style={{ width: '24px', height: '24px', background: '#d1fae5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <MapPin size={14} color="var(--color-primary)" />
                            </div>
                            Billing Address
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <InputField label="Street Address" icon={MapPin} placeholder="123 Kerala St" />
                            <InputField label="Apartment / Suite" icon={MapPin} placeholder="Apt 4B" half />
                            <InputField label="City" icon={MapPin} placeholder="Kochi" half />
                            <InputField label="State / Province" icon={MapPin} placeholder="Kerala" half />
                            <InputField label="Zip / Postal Code" icon={MapPin} placeholder="682001" half />
                            <InputField label="Country" icon={Globe} placeholder="India" />
                        </div>
                    </div>

                    {/* Payment Details Section */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)' }}>
                            <div style={{ width: '24px', height: '24px', background: '#d1fae5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CreditCard size={14} color="var(--color-primary)" />
                            </div>
                            Payment Method
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <InputField label="Card Number" icon={CreditCard} placeholder="0000 0000 0000 0000" />
                            <InputField label="Expiry Date" icon={Calendar} placeholder="MM/YY" half />
                            <InputField label="CVC / CVC" icon={Lock} placeholder="123" half />
                        </div>
                    </div>

                    <motion.button
                        type="submit"
                        disabled={isProcessing}
                        className="btn-primary"
                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '1rem', fontSize: '1.1rem' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isProcessing ? 'Processing Securely...' : `Complete Payment of ${plan.price}`}
                        {!isProcessing && <ShieldCheck size={20} />}
                    </motion.button>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)' }}>
                            Guaranteed safe & secure checkout. By confirming, you agree to our Terms of Service.
                        </p>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default PaymentForm;

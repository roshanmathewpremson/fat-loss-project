import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "Is this diet suitable for vegetarians?",
        a: "Absolutely! Kerala cuisine has a rich tradition of vegetarian dishes. Our generator can be toggled to provide 100% vegetarian meal plans using pulses, legumes, and dairy."
    },
    {
        q: "Do I need to cook every meal?",
        a: "We recommend cooking to control ingredients, but our plans are designed for meal prepping. Cook once, eat twice! We also provide simple quick-fix options."
    },
    {
        q: "How accurate are the calorie counts?",
        a: "We use standard Indian food databases. While home cooking varies, our estimates provide a solid baseline for consistent weight loss when portion sizes are respected."
    },
    {
        q: "Can I use this if I have diabetes?",
        a: "While our diet is generally healthy, please consult your doctor. We offer low-glycemic options like brown rice and whole grains which are better for blood sugar control."
    }
];

const FAQSection = () => {
    return (
        <section id="faq" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ minHeight: 'auto', maxWidth: '800px' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((item, i) => (
                        <FAQItem key={i} q={item.q} a={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', marginBottom: '1rem' }} onClick={() => setIsOpen(!isOpen)}>
            <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600' }}>
                {q}
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQSection;

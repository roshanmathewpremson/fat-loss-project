import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi there! I'm Marco from FitFirst. Need help with your diet plan today?" }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages(prev => [...prev, { type: 'user', text: input }]);
        const userInput = input;
        setInput('');

        setTimeout(() => {
            let response = "I'm checking that for you...";

            if (userInput.toLowerCase().includes('price') || userInput.toLowerCase().includes('cost')) {
                response = "Our Basic plan is totally free! FitFirst Pro is $6.99/mo for unlimited features.";
            } else if (userInput.toLowerCase().includes('diet') || userInput.toLowerCase().includes('food')) {
                response = "We use authentic Kerala recipes tailored to your body type. Healthy meets delicious!";
            } else if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
                response = "Hello! Ready to start your transformation?";
            }

            setMessages(prev => [...prev, { type: 'bot', text: response }]);
        }, 800);
    };

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(prev => !prev)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {isOpen ? <X size={28} /> :
                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}>
                        <MessageSquare size={28} fill="white" />
                    </motion.div>
                }
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9 }}
                        style={{
                            position: 'fixed',
                            bottom: '7.5rem',
                            right: '2rem',
                            width: '360px',
                            height: '550px',
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '24px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                            zIndex: 1000,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc' }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Bot size={22} color="var(--color-primary-dark)" />
                                </div>
                                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', border: '2px solid white' }}></div>
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>Marco</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Sparkles size={12} color="var(--color-accent)" /> FitFirst Guide
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.2rem', background: '#ffffff' }}>
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                        maxWidth: '85%',
                                        padding: '1rem 1.2rem',
                                        borderRadius: '16px',
                                        background: msg.type === 'user' ? 'var(--color-primary)' : '#f1f5f9',
                                        color: msg.type === 'user' ? 'white' : 'var(--color-text-main)',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5',
                                        borderBottomRightRadius: msg.type === 'user' ? '4px' : '16px',
                                        borderBottomLeftRadius: msg.type === 'bot' ? '4px' : '16px',
                                        boxShadow: msg.type === 'user' ? '0 4px 12px rgba(16, 185, 129, 0.2)' : 'none'
                                    }}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div style={{ padding: '1.2rem', background: 'white', borderTop: '1px solid #f1f5f9' }}>
                            <div style={{ display: 'flex', gap: '0.8rem' }}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type a message..."
                                    style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.8rem 1rem', width: '100%', borderRadius: '40px', color: 'var(--color-text-main)', fontSize: '0.95rem' }}
                                />
                                <button
                                    onClick={handleSend}
                                    style={{
                                        background: 'var(--color-primary)',
                                        color: 'white',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s',
                                        flexShrink: 0
                                    }}
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;

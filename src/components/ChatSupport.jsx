import { useState, useRef, useEffect } from 'react';

const QA_DB = [
    { keywords: ['hi', 'hello', 'hey'], answer: "Hello! I'm your Diet Assistant. How can I help you reach your goals today?" },
    { keywords: ['bmr', 'metabolic'], answer: "BMR (Basal Metabolic Rate) is the number of calories your body burns at rest. We use it to calculate your daily needs!" },
    { keywords: ['rice', 'carbs'], answer: "Yes! You can eat rice. Our Kerala diet plans include rice, but portion control is key for fat loss." },
    { keywords: ['custom', 'change'], answer: "You can regenerate your plan anytime using the 'Regenerate Plan' button to get new meal options." },
    { keywords: ['weight', 'fast'], answer: "Healthy weight loss is about 0.5kg to 1kg per week. Consistency is more important than speed!" },
    { keywords: ['hungry'], answer: "If you're feeling hungry, try drinking water or having a low-calorie vegetable salad. Protein also helps satiety!" },
];

const ChatSupport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! Need help with your diet plan?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI delay and logic
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase();
            let botResponse = "I'm not sure about that, but I'm here to motivate you! Try sticking to the calorie limits.";

            const match = QA_DB.find(entry =>
                entry.keywords.some(k => lowerInput.includes(k))
            );

            if (match) {
                botResponse = match.answer;
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                className={`chat-fab ${isOpen ? 'hidden' : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open Chat"
            >
                💬
            </button>

            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-title">
                        <span style={{ fontSize: '1.2rem' }}>🤖</span>
                        <div>
                            <strong>Diet Assistant</strong>
                            <div className="status-indicator">
                                <span className="dot"></span> Online
                            </div>
                        </div>
                    </div>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                </div>

                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.sender}`}>
                            <div className="message-bubble">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message bot">
                            <div className="message-bubble typing">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chat-input-area" onSubmit={handleSend}>
                    <input
                        type="text"
                        placeholder="Ask me anything..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" disabled={!inputValue.trim()}>
                        ➤
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChatSupport;

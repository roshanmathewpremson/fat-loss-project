import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Settings, User, Activity, Scale, Target } from 'lucide-react';

// Moved outside to prevent re-renders losing focus
const InputGroup = ({ label, icon: Icon, children }) => (
    <div style={{ marginBottom: '1.2rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            <Icon size={16} /> {label}
        </label>
        {children}
    </div>
);

const DietForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        age: '',
        gender: 'male',
        height: '',
        weight: '',
        activity: 'sedentary',
        goalSpeed: 'normal'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.age || !formData.height || !formData.weight) {
            alert('Please fill in all required fields');
            return;
        }
        onSubmit({
            ...formData,
            age: Number(formData.age),
            height: Number(formData.height),
            weight: Number(formData.weight)
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card"
            style={{
                maxWidth: '500px',
                margin: '0 auto',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Customize Your Plan</h2>
                <p style={{ color: 'var(--color-text-secondary)' }}>Tell us about yourself to get started.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <InputGroup label="Age" icon={User}>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="e.g. 28"
                            style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                        />
                    </InputGroup>
                    <InputGroup label="Gender" icon={User}>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </InputGroup>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <InputGroup label="Height (cm)" icon={Scale}>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            placeholder="e.g. 175"
                            style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                        />
                    </InputGroup>
                    <InputGroup label="Weight (kg)" icon={Scale}>
                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            placeholder="e.g. 70"
                            style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                        />
                    </InputGroup>
                </div>

                <InputGroup label="Activity Level" icon={Activity}>
                    <select
                        name="activity"
                        value={formData.activity}
                        onChange={handleChange}
                        style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                    >
                        <option value="sedentary">Sedentary (Office Job)</option>
                        <option value="light">Lightly Active (1-2 days/week)</option>
                        <option value="moderate">Moderately Active (3-5 days/week)</option>
                        <option value="active">Very Active (6-7 days/week)</option>
                        <option value="very_active">Athlete (2x per day)</option>
                    </select>
                </InputGroup>

                <InputGroup label="Goal Pace" icon={Target}>
                    <select
                        name="goalSpeed"
                        value={formData.goalSpeed}
                        onChange={handleChange}
                        style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                    >
                        <option value="slow">Sustainable (-0.25kg/week)</option>
                        <option value="normal">Recommended (-0.5kg/week)</option>
                        <option value="fast">Aggressive (-1kg/week)</option>
                    </select>
                </InputGroup>

                <motion.button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Generate My Plan <ChevronRight size={20} />
                </motion.button>
            </form>
        </motion.div>
    );
};

export default DietForm;

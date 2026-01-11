import { motion, AnimatePresence } from 'framer-motion';
import { Flame, RefreshCw, Undo2, Coffee, Utensils, Moon, TrendingUp, Zap } from 'lucide-react';
import breakfastImg from '../assets/images/breakfast.png';
import lunchImg from '../assets/images/lunch.png';
import dinnerImg from '../assets/images/dinner.png';
import snackImg from '../assets/images/snack.png';

// --- Visualization Components ---

const ProgressBar = ({ value, max, color = "var(--color-primary)" }) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    return (
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ height: '100%', background: color, borderRadius: '4px', boxShadow: `0 0 10px ${color}` }}
            />
        </div>
    );
};

const CalorieDonut = ({ value, target, size = 120 }) => {
    const radius = size / 2 - 10;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min(100, (value / target) * 100);
    const offset = circumference - (percentage / 100) * circumference;
    const color = value > target ? 'var(--color-accent)' : 'var(--color-primary)';

    return (
        <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                <motion.circle
                    cx={size / 2} cy={size / 2} r={radius}
                    stroke={color} strokeWidth="8" fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                    style={{ filter: `drop-shadow(0 0 4px ${color})` }}
                />
            </svg>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>{value}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>/ {target}</div>
            </div>
        </div>
    );
};

// --- Meal Components ---

const MealCard = ({ label, meal, icon: Icon, image, delay }) => (
    <motion.div
        layout
        className="glass-card"
        style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid var(--color-border)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
    >
        <div style={{ height: '120px', overflow: 'hidden', position: 'relative' }}>
            <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            {/* Gradient Removed for Cleaner Look */}
            <div style={{
                position: 'absolute', top: '10px', left: '10px',
                background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(5px)',
                padding: '4px 10px', borderRadius: '4px',
                fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-primary-dark)',
                display: 'flex', alignItems: 'center', gap: '4px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
                <Icon size={12} /> {label}
            </div>
        </div>
        <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'rgba(255,255,255,0.4)' }}>
            <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '600', lineHeight: '1.4', color: 'var(--color-text-main)' }}>{meal.name}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Protein: <span style={{ color: 'var(--color-primary)' }}>{meal.protein}g</span></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{
                    color: 'var(--color-warning)',
                    background: 'rgba(255, 159, 10, 0.1)',
                    padding: '4px 8px', borderRadius: '4px',
                    fontSize: '0.8rem', fontWeight: '600',
                    display: 'flex', alignItems: 'center', gap: '4px',
                    border: '1px solid rgba(255, 159, 10, 0.2)'
                }}>
                    <Flame size={12} /> {meal.calories} kcal
                </span>
            </div>
        </div>
    </motion.div>
);

const DayPlan = ({ day, meals, index, targetCalories }) => {
    const totalCalories = meals.breakfast.calories + meals.lunch.calories + meals.dinner.calories + meals.snack.calories;
    const totalProtein = (meals.breakfast.protein || 0) + (meals.lunch.protein || 0) + (meals.dinner.protein || 0) + (meals.snack.protein || 0);

    return (
        <motion.div
            layout
            style={{ marginBottom: '4rem' }}
        >
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                <motion.h3
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', color: 'white' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <span style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        width: '36px', height: '36px',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1rem', fontWeight: '700',
                        boxShadow: '0 0 15px rgba(41,151,255,0.4)'
                    }}>{day}</span>
                    <span style={{ fontWeight: '700', letterSpacing: '-0.5px' }}>Day {day}</span>
                </motion.h3>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'right', minWidth: '120px' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '4px', textTransform: 'uppercase' }}>Daily Calories</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '80px' }}>
                                <ProgressBar value={totalCalories} max={targetCalories} />
                            </div>
                            <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'white' }}>{totalCalories}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <MealCard label="Breakfast" meal={meals.breakfast} icon={Coffee} image={breakfastImg} delay={index * 0.1 + 0.1} />
                <MealCard label="Lunch" meal={meals.lunch} icon={Utensils} image={lunchImg} delay={index * 0.1 + 0.2} />
                <MealCard label="Dinner" meal={meals.dinner} icon={Moon} image={dinnerImg} delay={index * 0.1 + 0.3} />
                <MealCard label="Snack" meal={meals.snack} icon={Coffee} image={snackImg} delay={index * 0.1 + 0.4} />
            </div>
        </motion.div>
    );
};

const DietPlan = ({ targetCalories, weeklyPlan, onReset, onRegenerate }) => {
    const weeklyAvg = weeklyPlan.reduce((acc, days) => {
        return acc + days.breakfast.calories + days.lunch.calories + days.dinner.calories + days.snack.calories;
    }, 0) / 7;

    const weeklyMacros = weeklyPlan.reduce((acc, days) => {
        ['breakfast', 'lunch', 'dinner', 'snack'].forEach(mealType => {
            const meal = days[mealType];
            acc.protein += meal.protein || 0;
            acc.carbs += meal.carbs || 0;
            acc.fats += meal.fats || 0;
        });
        return acc;
    }, { protein: 0, carbs: 0, fats: 0 });

    // Average per day
    weeklyMacros.protein = Math.round(weeklyMacros.protein / 7);
    weeklyMacros.carbs = Math.round(weeklyMacros.carbs / 7);
    weeklyMacros.fats = Math.round(weeklyMacros.fats / 7);

    const MacroCard = ({ label, value, color, unit = "g" }) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.3)', padding: '0.8rem', borderRadius: '12px', flex: 1 }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>{label}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: color }}>{value}{unit}</div>
        </div>
    );

    return (
        <div style={{ width: '100%' }}>
            {/* Dashboard Header */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                <motion.div
                    className="glass-card"
                    style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(255,255,255,0.4) 100%)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                            <h2 style={{ color: 'var(--color-primary-dark)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Zap size={14} /> Daily Target
                            </h2>
                            <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1, letterSpacing: '-2px', color: 'var(--color-text-main)' }}>
                                {targetCalories}
                            </div>
                            <p style={{ color: 'var(--color-text-secondary)' }}>kcal / day</p>
                        </div>
                        <div style={{ height: '80px', width: '80px' }}>
                            <CalorieDonut value={Math.round(weeklyAvg)} target={targetCalories} size={80} />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="glass-card"
                    style={{ padding: '2rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Macro Balance</h2>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
                        <MacroCard label="Protein" value={weeklyMacros.protein} color="#3b82f6" />
                        <MacroCard label="Carbs" value={weeklyMacros.carbs} color="#10b981" />
                        <MacroCard label="Fats" value={weeklyMacros.fats} color="#f59e0b" />
                    </div>

                    {/* Simple Bar Visualization */}
                    <div style={{ marginTop: '1.5rem', display: 'flex', height: '8px', borderRadius: '4px', overflow: 'hidden', width: '100%' }}>
                        <div style={{ width: `${(weeklyMacros.protein / (weeklyMacros.protein + weeklyMacros.carbs + weeklyMacros.fats)) * 100}%`, background: '#3b82f6' }} />
                        <div style={{ width: `${(weeklyMacros.carbs / (weeklyMacros.protein + weeklyMacros.carbs + weeklyMacros.fats)) * 100}%`, background: '#10b981' }} />
                        <div style={{ width: `${(weeklyMacros.fats / (weeklyMacros.protein + weeklyMacros.carbs + weeklyMacros.fats)) * 100}%`, background: '#f59e0b' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                        <span>Protein</span>
                        <span>Carbs</span>
                        <span>Fats</span>
                    </div>
                </motion.div>
            </div>

            <motion.div layout style={{ marginBottom: '2rem' }}>
                <AnimatePresence mode="popLayout">
                    {weeklyPlan.map((dayPlan, index) => (
                        <DayPlan key={index} index={index} day={index + 1} meals={dayPlan} targetCalories={targetCalories} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Floating Action Bar - Dynamic Island Style */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '50px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid rgba(255,255,255,0.4)',
                    zIndex: 100,
                    width: 'auto'
                }}
            >
                <motion.button
                    onClick={onRegenerate}
                    whileHover={{ scale: 1.05, color: 'var(--color-primary-dark)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{ border: 'none', background: 'transparent', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: '600' }}
                >
                    <RefreshCw size={18} /> Shuffle Plan
                </motion.button>
                <div style={{ width: '1px', background: 'rgba(0,0,0,0.1)', height: '20px' }}></div>
                <motion.button
                    onClick={onReset}
                    whileHover={{ scale: 1.05, color: '#ff3b30' }}
                    whileTap={{ scale: 0.95 }}
                    style={{ border: 'none', background: 'transparent', color: 'var(--color-text-secondary)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}
                >
                    <Undo2 size={18} /> Reset
                </motion.button>
            </motion.div>
        </div>
    );
};

export default DietPlan;

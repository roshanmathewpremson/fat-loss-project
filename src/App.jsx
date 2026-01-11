import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Landing Page Components
import Navbar from './components/landing/Navbar';
import HeroSection from './components/landing/HeroSection';
import FeaturesSection from './components/landing/FeaturesSection';
import ComparisonSection from './components/landing/ComparisonSection';
import TestimonialsSection from './components/landing/TestimonialsSection';
import PricingSection from './components/landing/PricingSection';
import FAQSection from './components/landing/FAQSection';
import CTASection from './components/landing/CTASection';
import Footer from './components/landing/Footer';
import Chatbot from './components/Chatbot';

// Core Functionality
import DietForm from './components/DietForm';
import DietPlan from './components/DietPlan';
import PaymentForm from './components/PaymentForm';
import { calculateBMR, calculateTDEE, calculateTargetCalories } from './utils/calorieCalculator';
import { getRandomMeal } from './utils/keralaFoodDB';

function App() {
  const [view, setView] = useState('form'); // 'form' | 'loading' | 'plan' | 'payment'
  const [targetCalories, setTargetCalories] = useState(0);
  const [weeklyPlan, setWeeklyPlan] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const generatePlan = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push({
        breakfast: getRandomMeal('breakfast'),
        lunch: getRandomMeal('lunch'),
        dinner: getRandomMeal('dinner'),
        snack: getRandomMeal('snack')
      });
    }
    return days;
  };

  const handleFormSubmit = (data) => {
    setView('loading');
    setTimeout(() => {
      const bmr = calculateBMR(data.weight, data.height, data.age, data.gender);
      const tdee = calculateTDEE(bmr, data.activity);
      const target = calculateTargetCalories(tdee, data.goalSpeed);

      setTargetCalories(target);
      setWeeklyPlan(generatePlan(target));
      setView('plan');
    }, 1500);
  };

  const handleRegenerate = () => {
    setWeeklyPlan(generatePlan(targetCalories));
  };

  const handleReset = () => {
    setView('form');
    setTargetCalories(0);
    setWeeklyPlan([]);
  };

  const handlePlanSelect = (plan) => {
    if (plan.price === 'Free') {
      document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPlan(plan);
      setView('payment');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePaymentSuccess = () => {
    alert('Payment Successful! Welcome to FitFirst Pro.');
    setView('form'); // Or redirect to a pro dashboard
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar />

      <HeroSection>
        {/* Core Generator Functionality Embedded in Hero */}
        <AnimatePresence mode="wait">
          {view === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <DietForm onSubmit={handleFormSubmit} />
            </motion.div>
          )}

          {view === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card text-center"
              style={{ padding: '4rem' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                style={{ fontSize: '3rem', marginBottom: '2rem', display: 'inline-block' }}
              >
                🥑
              </motion.div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>Curating your Kerala meal plan...</h3>
            </motion.div>
          )}

          {view === 'plan' && (
            <motion.div
              key="plan"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <DietPlan
                targetCalories={targetCalories}
                weeklyPlan={weeklyPlan}
                onReset={handleReset}
                onRegenerate={handleRegenerate}
              />
            </motion.div>
          )}

          {view === 'payment' && selectedPlan && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <PaymentForm
                plan={selectedPlan}
                onBack={() => setView('form')}
                onSuccess={handlePaymentSuccess}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </HeroSection>

      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection onPlanSelect={handlePlanSelect} />
      <FAQSection />
      <CTASection />
      <Footer />
      <Chatbot />

      {/* iOS Home Indicator */}
      <div style={{
        position: 'fixed',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '140px',
        height: '5px',
        background: 'rgba(0,0,0,0.2)',
        borderRadius: '100px',
        zIndex: 9999,
        pointerEvents: 'none'
      }} />
    </div>
  );
}

export default App;

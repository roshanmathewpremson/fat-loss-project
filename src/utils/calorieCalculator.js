export const calculateBMR = (weight, height, age, gender) => {
    // Mifflin-St Jeor Equation
    // Note: Since we didn't ask for gender in the prompt requirements ("age, weight activity level"),
    // we will assume a generic average or default to Male logic or ask for it? 
    // The user prompt said: "age, weight activity level for preference and goal speed"
    // It didn't explicitly say Gender. I will add a gender toggle or default to an average.
    // Actually, BMR varies significantly by gender. I should probably add a gender selector to the form for accuracy.
    // Formula:
    // Men: 10W + 6.25H - 5A + 5
    // Women: 10W + 6.25H - 5A - 161

    // If height is missing (prompt didn't strictly require it but needed for BMR), I'll estimate or ask.
    // User Prompt: "ask the user few details like age, weight activity level".
    // It missed Height and Gender. 
    // I will add Height and Gender to the form for better results, but keep it simple.

    const s = gender === 'female' ? -161 : 5;
    return (10 * weight) + (6.25 * height) - (5 * age) + s;
};

export const calculateTDEE = (bmr, activityLevel) => {
    const multipliers = {
        sedentary: 1.2,      // Little or no exercise
        light: 1.375,        // Light exercise 1-3 days/week
        moderate: 1.55,      // Moderate exercise 3-5 days/week
        active: 1.725,       // Hard exercise 6-7 days/week
        very_active: 1.9     // Very hard exercise & physical job
    };
    return bmr * (multipliers[activityLevel] || 1.2);
};

export const calculateTargetCalories = (tdee, goalSpeed) => {
    // goalSpeed: 'normal' (0.5kg/week) -> -500 kcal
    // goalSpeed: 'fast' (1kg/week) -> -1000 kcal (capped safely)

    let deficit = 0;
    if (goalSpeed === 'fast') deficit = 700; // Aggressive but safer than 1000 without supervision
    else if (goalSpeed === 'slow') deficit = 250;
    else deficit = 500; // normal

    let target = tdee - deficit;

    // Safety floor
    if (target < 1200) target = 1200;

    return Math.round(target);
};

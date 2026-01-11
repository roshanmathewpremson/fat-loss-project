export const foodDatabase = {
    breakfast: [
        { name: "Puttu (1 piece) + Kadala Curry", calories: 350, protein: 12, carbs: 55, fats: 8 },
        { name: "Appam (2 nos) + Egg Roast", calories: 320, protein: 14, carbs: 40, fats: 12 },
        { name: "Idli (3 nos) + Sambar", calories: 250, protein: 8, carbs: 45, fats: 4 },
        { name: "Dosa (2 nos) + Chutney", calories: 300, protein: 6, carbs: 48, fats: 10 },
        { name: "Oats Upma with Vegetables", calories: 280, protein: 8, carbs: 40, fats: 6 },
        { name: "Ragi Puttu (1 piece) + Steamed Banana", calories: 280, protein: 6, carbs: 50, fats: 4 },
        { name: "Idiyappam (3 nos) + Vegetable Stew", calories: 290, protein: 5, carbs: 55, fats: 5 }
    ],
    lunch: [
        { name: "Kerala Red Rice (1 cup) + Fish Curry + Thoran", calories: 450, protein: 25, carbs: 65, fats: 8 },
        { name: "Kerala Red Rice (1 cup) + Sambar + Avial", calories: 400, protein: 10, carbs: 70, fats: 6 },
        { name: "Rice (1/2 cup) + Grilled Chicken + Salad", calories: 350, protein: 30, carbs: 50, fats: 10 },
        { name: "Chappathi (2 nos) + Dal Curry + Salad", calories: 320, protein: 12, carbs: 45, fats: 8 },
        { name: "Curd Rice with Pomegranate", calories: 300, protein: 8, carbs: 40, fats: 10 },
        { name: "Rice (1 cup) + Moru Curry + Mezhukkupuratti", calories: 420, protein: 10, carbs: 65, fats: 12 }
    ],
    dinner: [
        { name: "Chappathi (2 nos) + Paneer Curry", calories: 350, protein: 14, carbs: 40, fats: 15 },
        { name: "Wheat Dosa (2 nos) + Chutney", calories: 280, protein: 6, carbs: 45, fats: 8 },
        { name: "Grilled Fish + Steamed Vegetables", calories: 250, protein: 25, carbs: 15, fats: 10 },
        { name: "Oats Porridge with Nuts", calories: 220, protein: 8, carbs: 35, fats: 6 },
        { name: "Kanji (Rice Gruel) + Payar (Green Gram)", calories: 280, protein: 12, carbs: 55, fats: 2 },
        { name: "Salad with Boiled Egg Whites", calories: 200, protein: 16, carbs: 10, fats: 8 }
    ],
    snack: [
        { name: "Fruit Salad (Small Bowl)", calories: 100, protein: 1, carbs: 25, fats: 0 },
        { name: "Buttermilk (Sambharam)", calories: 40, protein: 2, carbs: 4, fats: 2 },
        { name: "Green Tea + 2 Marie Biscuits", calories: 60, protein: 1, carbs: 12, fats: 1 },
        { name: "Boiled Chickpeas (Sundal)", calories: 120, protein: 6, carbs: 18, fats: 3 },
        { name: "Nuts (Almonds/Walnuts - Handful)", calories: 150, protein: 5, carbs: 5, fats: 13 }
    ]
};

export const getRandomMeal = (type) => {
    const options = foodDatabase[type];
    return options[Math.floor(Math.random() * options.length)];
};

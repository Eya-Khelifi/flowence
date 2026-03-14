


var recipesByCategory = {
    'Healthy': [
        { name: 'Quinoa Salad', image: 'quinoi salad.jpg', desc: 'A refreshing and protein-packed salad that\'s perfect for lunch.' },
        { name: 'Green Salad', image: 'green salad.jpg', desc: 'Fresh and crisp green salad with mixed greens and vegetables.' },
        { name: 'Figs Salad', image: 'figs salad.jpg', desc: 'A sweet and savory salad featuring fresh figs and mixed greens.' },
        { name: 'Cheesy Salad', image: 'cheesy salad.jpg', desc: 'A delicious salad with cheese and fresh vegetables.' },
        { name: 'Cauliflower Dish', image: 'califlower dish.jpg', desc: 'A healthy and flavorful cauliflower-based dish.' },
        { name: 'Kale Salad', image: 'SALADS.jpg', desc: 'Kale with lemon vinaigrette - fresh and healthy.' },
        { name: 'Vegan Bowl', image: 'VEGAN.jpg', desc: 'Plant-based bowl with grains, vegetables, and legumes.' },
        { name: 'Veggie Stir Fry', image: 'VEGTABLESSTIR.jpg', desc: 'Mixed vegetables with soy sauce - perfect for meal prep.' },
        { name: 'Mediterranean Chickpea Salad', image: 'mediterranean chickpea salad.jpg', desc: 'A hearty and protein-rich salad with chickpeas, tomatoes, cucumbers, and olive oil.' },
        { name: 'Avocado Spinach Salad', image: 'avocado spinach salad.jpg', desc: 'Fresh spinach and creamy avocado with a light lemon dressing.' },
        { name: 'Greek Salad', image: 'greek salad.jpg', desc: 'Classic Greek salad with tomatoes, cucumbers, olives, and feta cheese.' },
        { name: 'Cesar Salad', image: 'cesar salad.jpg', desc: 'Crispy romaine lettuce with creamy Caesar dressing and parmesan.' },
        { name: 'Quinoa Bowl', image: 'quinoi salad.jpg', desc: 'A protein-packed quinoa bowl with roasted vegetables - perfect for meal prep.' }
    ],
    'Quick': [
        { name: 'Toast', image: 'toast.jpg', desc: 'Quick and easy toast - perfect for a fast breakfast or snack.' },
        { name: 'Green Smoothie', image: 'green smoothie.jpg', desc: 'Start your day with a delicious and nutrient-rich smoothie.' },
        { name: 'Fruit Smoothie', image: 'Fruit Smoothie.jpg', desc: 'Berry blast smoothie - refreshing and nutritious.' },
        { name: 'Veggie Wrap', image: 'WRAP.jpg', desc: 'A fresh and healthy wrap packed with vegetables and flavor.' },
        { name: 'Chicken Wrap', image: 'WRAP.jpg', desc: 'Grilled chicken in a tortilla with fresh vegetables.' },
        { name: 'Peanut Butter Banana Toast', image: 'peanut butter banana toast.jpg', desc: 'Quick toast with peanut butter and banana slices for a fast snack.' },
        { name: 'Yogurt Parfait', image: 'yogurt parfait.jpg', desc: 'Layers of yogurt, granola, and fresh fruit for a quick breakfast.' },
        { name: 'Fig Toast', image: 'fig toast.jpg', desc: 'Delicious toast topped with fresh figs, honey, and ricotta cheese.' }
    ],
    'Morning Boost': [
        { name: 'Breakfast Bowl', image: 'BREAKFAST.jpg', desc: 'Complete breakfast bowl with eggs, vegetables, and grains.' },
        { name: 'Overnight Oats', image: 'oats.jpg', desc: 'Quick and easy overnight oats for a healthy breakfast.' },
        { name: 'Oatmeal Bowl', image: 'oats.jpg', desc: 'Hearty oatmeal with nuts and berries for a nutritious breakfast.' },
        { name: 'Green Smoothie', image: 'green smoothie.jpg', desc: 'Start your day with a delicious and nutrient-rich smoothie.' },
        { name: 'Chia Seed Pudding', image: 'chia seed pudding.jpg', desc: 'Overnight chia seeds with almond milk and fresh berries for a nutritious breakfast.' },
        { name: 'Yogurt Parfait', image: 'yogurt parfait.jpg', desc: 'Layers of yogurt, granola, and fresh fruit for a quick breakfast.' },
        { name: 'Breakfast Smoothie Bowl', image: 'breakfast smoothie bowl.jpg', desc: 'A thick and creamy smoothie bowl topped with fresh fruits and granola.' },
        { name: 'Fruit Smoothie', image: 'Fruit Smoothie.jpg', desc: 'Berry blast smoothie - refreshing and nutritious.' }
    ],
    'Protein': [
        { name: 'Grilled Chicken', image: 'GRILLEDCHICKEN.jpg', desc: 'Perfectly grilled chicken breast - high protein meal prep option.' },
        { name: 'Colorful Grill', image: 'colorful grill.jpg', desc: 'A vibrant and protein-rich grilled dish with colorful vegetables.' },
        { name: 'Plant Based Protein Dish', image: 'plant based protein dish.jpg', desc: 'A complete plant-based protein meal packed with nutrients.' },
        { name: 'Grilled Salmon', image: 'salmon.jpg', desc: 'A flavorful and healthy grilled salmon recipe for dinner.' },
        { name: 'Chicken Wrap', image: 'WRAP.jpg', desc: 'Grilled chicken in a tortilla with fresh vegetables.' },
        { name: 'Turkey Meatballs', image: 'turkey meatballs.jpg', desc: 'Lean turkey meatballs baked to perfection for a high-protein meal.' },
        { name: 'Tuna Salad', image: 'tuna salad.jpg', desc: 'Protein-packed tuna mixed with fresh veggies and a light dressing.' },
        { name: 'Chickpea Stir-fry', image: 'chickpea.jpg', desc: 'A quick and wholesome dinner option with protein-rich chickpeas.' }
    ],
    'Vegan': [
        { name: 'Vegan Bowl', image: 'VEGAN.jpg', desc: 'Plant-based bowl with grains, vegetables, and legumes.' },
        { name: 'Plant Based Protein Dish', image: 'plant based protein dish.jpg', desc: 'A complete plant-based protein meal packed with nutrients.' },
        { name: 'Green Salad', image: 'green salad.jpg', desc: 'Fresh and crisp green salad with mixed greens and vegetables.' },
        { name: 'Figs Salad', image: 'figs salad.jpg', desc: 'A sweet and savory salad featuring fresh figs and mixed greens.' },
        { name: 'Cauliflower Dish', image: 'califlower dish.jpg', desc: 'A healthy and flavorful cauliflower-based dish.' },
        { name: 'Veggie Stir Fry', image: 'VEGTABLESSTIR.jpg', desc: 'Mixed vegetables with soy sauce - perfect for meal prep.' },
        { name: 'Kale Salad', image: 'SALADS.jpg', desc: 'Kale with lemon vinaigrette - fresh and healthy.' },
        { name: 'Lentil Soup', image: 'lentil soup.jpg', desc: 'Warm and hearty lentil soup with vegetables and spices.' },
        { name: 'Vegan Buddha Bowl', image: 'vegan buddha bowl.jpg', desc: 'A colorful bowl of grains, vegetables, and legumes for a complete vegan meal.' },
        { name: 'Mediterranean Chickpea Salad', image: 'mediterranean chickpea salad.jpg', desc: 'A hearty and protein-rich salad with chickpeas, tomatoes, cucumbers, and olive oil.' }
    ],
    'Desserts': [
        { name: 'Strawberry Chocolate', image: 'strawberrychoco.jpg', desc: 'A delightful combination of fresh strawberries and rich chocolate.' },
        { name: 'Brownie Bowl', image: 'brownie bowl.jpg', desc: 'A delicious and satisfying brownie bowl for your sweet cravings.' },
        { name: 'Craving Stopper Bowl', image: 'craving stopper bowl.jpg', desc: 'A healthy bowl that helps satisfy your cravings naturally.' },
        { name: 'Chocolate Avocado Mousse', image: 'chocolate avocado mousse.jpg', desc: 'Creamy and healthy chocolate mousse made with avocado.' },
        { name: 'Fruit Tart', image: 'fruit tart.jpg', desc: 'A sweet tart topped with fresh seasonal fruits and a light glaze.' },
        { name: 'Smoothie Bowl', image: 'SMOOTHIEBOWLS.jpg', desc: 'A colorful and delicious smoothie bowl topped with fresh fruits and nuts.' }
    ]
};

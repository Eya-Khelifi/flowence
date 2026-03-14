






function getRecipeData(name) {
    
    
    var recipes = {
        'Quinoa Salad': {
            name: 'Quinoa Salad',
            subtitle: 'A refreshing and protein-packed salad',
            description: 'This quinoa salad is perfect for lunch or as a side dish. Packed with protein, fiber, and essential nutrients, it\'s both delicious and nutritious.',
            image: 'quinoi salad.jpg',
            macros: { calories: 320, protein: 12, carbs: 45, fat: 8 },
            ingredients: [
                '1 cup cooked quinoa',
                '1 cup cherry tomatoes, halved',
                '1 cucumber, diced',
                '1/2 red onion, thinly sliced',
                '1/4 cup feta cheese, crumbled',
                '2 tbsp olive oil',
                '1 tbsp lemon juice',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Cook quinoa according to package instructions and let cool.',
                'Combine quinoa with tomatoes, cucumber, and red onion in a large bowl.',
                'Add feta cheese and mix gently.',
                'Drizzle with olive oil and lemon juice.',
                'Season with salt and pepper to taste.',
                'Toss everything together and serve chilled.'
            ]
        },
        'Green Smoothie': {
            name: 'Green Smoothie',
            subtitle: 'Start your day with a nutrient-rich smoothie',
            description: 'A delicious and healthy green smoothie packed with vitamins, minerals, and antioxidants. Perfect for breakfast or as a refreshing snack.',
            image: 'green smoothie.jpg',
            macros: { calories: 180, protein: 5, carbs: 35, fat: 3 },
            ingredients: [
                '1 cup spinach',
                '1 banana',
                '1/2 cup mango',
                '1/2 cup pineapple',
                '1 cup almond milk',
                '1 tbsp chia seeds'
            ],
            instructions: [
                'Wash the spinach thoroughly.',
                'Peel and slice the banana.',
                'Add all ingredients to a blender.',
                'Blend on high speed until smooth.',
                'Pour into a glass and enjoy immediately.'
            ]
        },
        'Grilled Salmon': {
            name: 'Grilled Salmon',
            subtitle: 'A flavorful and healthy grilled salmon recipe',
            description: 'Perfectly grilled salmon with a delicious marinade. Rich in omega-3 fatty acids and protein, this is a healthy dinner option.',
            image: 'salmon.jpg',
            macros: { calories: 350, protein: 35, carbs: 5, fat: 20 },
            ingredients: [
                '4 salmon fillets (6 oz each)',
                '2 tbsp olive oil',
                '2 tbsp lemon juice',
                '2 cloves garlic, minced',
                '1 tsp dill',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Preheat grill to medium-high heat.',
                'Mix olive oil, lemon juice, garlic, and dill in a bowl.',
                'Season salmon fillets with salt and pepper.',
                'Brush marinade over salmon fillets.',
                'Grill for 4-5 minutes per side until flaky.',
                'Serve immediately with your favorite sides.'
            ]
        },
        'Overnight Oats': {
            name: 'Overnight Oats',
            subtitle: 'Quick and easy overnight oats for breakfast',
            description: 'A make-ahead breakfast that\'s both convenient and nutritious. Perfect for busy mornings.',
            image: 'oats.jpg',
            macros: { calories: 280, protein: 10, carbs: 45, fat: 6 },
            ingredients: [
                '1/2 cup rolled oats',
                '1/2 cup milk (or plant-based)',
                '1/4 cup Greek yogurt',
                '1 tbsp honey',
                '1/4 cup berries',
                '1 tbsp chia seeds'
            ],
            instructions: [
                'Combine oats, milk, and yogurt in a jar.',
                'Add honey and mix well.',
                'Stir in chia seeds.',
                'Cover and refrigerate overnight.',
                'In the morning, top with fresh berries.',
                'Enjoy cold or at room temperature.'
            ]
        },
        'Chickpea Stir-fry': {
            name: 'Chickpea Stir-fry',
            subtitle: 'A quick and wholesome dinner option',
            description: 'A protein-rich vegetarian stir-fry that\'s quick to make and packed with flavor.',
            image: 'chickpea.jpg',
            macros: { calories: 290, protein: 15, carbs: 40, fat: 7 },
            ingredients: [
                '2 cups cooked chickpeas',
                '1 bell pepper, sliced',
                '1 onion, sliced',
                '2 cloves garlic, minced',
                '1 tbsp soy sauce',
                '1 tsp ginger, grated',
                '2 tbsp olive oil'
            ],
            instructions: [
                'Heat olive oil in a large pan over medium heat.',
                'Add onion and bell pepper, cook for 3-4 minutes.',
                'Add garlic and ginger, cook for 1 minute.',
                'Add chickpeas and stir-fry for 5 minutes.',
                'Add soy sauce and mix well.',
                'Serve hot over rice or quinoa.'
            ]
        },
        'Veggie Wrap': {
            name: 'Veggie Wrap',
            subtitle: 'A fresh and healthy wrap packed with vegetables',
            description: 'A delicious and nutritious wrap filled with fresh vegetables, hummus, and your favorite greens. Perfect for a light lunch or quick meal.',
            image: 'WRAP.jpg',
            macros: { calories: 280, protein: 10, carbs: 38, fat: 9 },
            ingredients: [
                '1 large whole wheat tortilla',
                '2 tbsp hummus',
                '1/2 cup mixed greens',
                '1/4 cup shredded carrots',
                '1/4 cup cucumber, sliced',
                '1/4 cup bell peppers, sliced',
                '1/4 cup red onion, thinly sliced',
                '2 tbsp feta cheese (optional)',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Lay the tortilla flat on a clean surface.',
                'Spread hummus evenly over the tortilla.',
                'Layer mixed greens in the center of the tortilla.',
                'Add carrots, cucumber, bell peppers, and red onion.',
                'Sprinkle with feta cheese if desired.',
                'Season with salt and pepper.',
                'Fold the sides of the tortilla inward, then roll tightly from the bottom.',
                'Cut in half and serve immediately.'
            ]
        },
        'Oatmeal Bowl': {
            name: 'Oatmeal Bowl',
            subtitle: 'Hearty oatmeal with nuts and berries',
            description: 'A nutritious and filling oatmeal bowl perfect for breakfast meal prep. Packed with fiber, protein, and healthy fats.',
            image: 'oats.jpg',
            macros: { calories: 320, protein: 12, carbs: 50, fat: 8 },
            ingredients: [
                '1 cup rolled oats',
                '2 cups milk or water',
                '1/4 cup mixed nuts (almonds, walnuts)',
                '1/4 cup mixed berries',
                '1 tbsp honey or maple syrup',
                '1 tbsp chia seeds',
                'Pinch of cinnamon'
            ],
            instructions: [
                'Cook oats with milk or water according to package directions.',
                'Let cool slightly, then divide into meal prep containers.',
                'Top with nuts, berries, and chia seeds.',
                'Drizzle with honey or maple syrup.',
                'Sprinkle with cinnamon.',
                'Store in refrigerator for up to 5 days.',
                'Reheat or enjoy cold when ready to eat.'
            ]
        },
        'Veggie Stir Fry': {
            name: 'Veggie Stir Fry',
            subtitle: 'Mixed vegetables with soy sauce',
            description: 'A quick and colorful vegetable stir-fry that\'s perfect for meal prep. Packed with nutrients and flavor.',
            image: 'VEGTABLESSTIR.jpg',
            macros: { calories: 150, protein: 6, carbs: 25, fat: 4 },
            ingredients: [
                '2 cups mixed vegetables (broccoli, bell peppers, carrots, snap peas)',
                '1 onion, sliced',
                '2 cloves garlic, minced',
                '1 tbsp fresh ginger, grated',
                '2 tbsp soy sauce',
                '1 tbsp sesame oil',
                '1 tsp rice vinegar',
                '2 tbsp vegetable oil'
            ],
            instructions: [
                'Heat vegetable oil in a large wok or pan over high heat.',
                'Add onion and cook for 2 minutes.',
                'Add garlic and ginger, cook for 30 seconds.',
                'Add harder vegetables first (broccoli, carrots), cook for 3 minutes.',
                'Add remaining vegetables and stir-fry for 3-4 minutes.',
                'Add soy sauce, sesame oil, and rice vinegar.',
                'Toss everything together and cook for 1 more minute.',
                'Serve hot or store for meal prep.'
            ]
        },
        'Kale Salad': {
            name: 'Kale Salad',
            subtitle: 'Kale with lemon vinaigrette',
            description: 'A fresh and healthy kale salad that stays crisp for days. Perfect for meal prep.',
            image: 'SALADS.jpg',
            macros: { calories: 180, protein: 5, carbs: 15, fat: 12 },
            ingredients: [
                '4 cups kale, chopped',
                '1/4 cup olive oil',
                '2 tbsp lemon juice',
                '1 tsp Dijon mustard',
                '1/4 cup dried cranberries',
                '1/4 cup sliced almonds',
                '1/4 cup feta cheese',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Wash and dry kale thoroughly.',
                'Remove tough stems and chop into bite-sized pieces.',
                'Massage kale with a bit of olive oil to soften.',
                'Whisk together olive oil, lemon juice, and Dijon mustard.',
                'Toss kale with dressing.',
                'Add cranberries, almonds, and feta cheese.',
                'Season with salt and pepper.',
                'Store in airtight container for up to 3 days.'
            ]
        },
        'Chicken Wrap': {
            name: 'Chicken Wrap',
            subtitle: 'Grilled chicken in a tortilla',
            description: 'A protein-packed wrap perfect for meal prep. Grilled chicken with fresh vegetables in a whole wheat tortilla.',
            image: 'WRAP.jpg',
            macros: { calories: 380, protein: 28, carbs: 35, fat: 14 },
            ingredients: [
                '1 large whole wheat tortilla',
                '4 oz grilled chicken breast, sliced',
                '1/4 cup hummus',
                '1/2 cup mixed greens',
                '1/4 cup tomatoes, diced',
                '1/4 cup cucumber, sliced',
                '2 tbsp red onion, thinly sliced'
            ],
            instructions: [
                'Grill or cook chicken breast and let cool.',
                'Slice chicken into strips.',
                'Lay tortilla flat and spread with hummus.',
                'Layer greens, chicken, tomatoes, cucumber, and onion.',
                'Fold sides in and roll tightly.',
                'Wrap in foil or parchment paper for meal prep.',
                'Store in refrigerator for up to 3 days.'
            ]
        },
        'Quinoa Bowl': {
            name: 'Quinoa Bowl',
            subtitle: 'Quinoa with roasted veggies',
            description: 'A protein-packed quinoa bowl with roasted vegetables. Perfect for meal prep and keeps well in the refrigerator.',
            image: 'quinoi salad.jpg',
            macros: { calories: 350, protein: 14, carbs: 48, fat: 10 },
            ingredients: [
                '1 cup cooked quinoa',
                '1 cup mixed roasted vegetables (zucchini, bell peppers, sweet potato)',
                '1/4 cup chickpeas',
                '2 tbsp tahini dressing',
                '1/4 cup feta cheese',
                'Fresh herbs (parsley, cilantro)',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Cook quinoa according to package directions and let cool.',
                'Roast vegetables in the oven at 400°F for 20-25 minutes.',
                'Divide quinoa into meal prep containers.',
                'Top with roasted vegetables and chickpeas.',
                'Drizzle with tahini dressing.',
                'Add feta cheese and fresh herbs.',
                'Season with salt and pepper.',
                'Store in refrigerator for up to 4 days.'
            ]
        },
        'Fruit Smoothie': {
            name: 'Fruit Smoothie',
            subtitle: 'Berry blast smoothie',
            description: 'A refreshing and nutritious smoothie that can be prepped in advance. Perfect for on-the-go breakfast.',
            image: 'Fruit Smoothie.jpg',
            macros: { calories: 220, protein: 8, carbs: 42, fat: 3 },
            ingredients: [
                '1 cup frozen mixed berries',
                '1 banana',
                '1/2 cup Greek yogurt',
                '1/2 cup milk or plant-based milk',
                '1 tbsp honey',
                '1 tbsp chia seeds',
                'Ice cubes (optional)'
            ],
            instructions: [
                'Combine all ingredients in a blender.',
                'Blend until smooth and creamy.',
                'Pour into mason jars or containers.',
                'Store in refrigerator for up to 2 days.',
                'Shake well before drinking.',
                'Can be frozen for longer storage.'
            ]
        },
        'Grilled Chicken': {
            name: 'Grilled Chicken',
            subtitle: 'Perfectly grilled chicken breast',
            description: 'High-protein grilled chicken breast that\'s perfect for meal prep. Can be used in salads, wraps, or as a main dish.',
            image: 'GRILLEDCHICKEN.jpg',
            macros: { calories: 250, protein: 45, carbs: 0, fat: 6 },
            ingredients: [
                '4 boneless, skinless chicken breasts',
                '2 tbsp olive oil',
                '2 cloves garlic, minced',
                '1 tsp paprika',
                '1 tsp dried oregano',
                'Salt and pepper to taste',
                'Lemon juice'
            ],
            instructions: [
                'Preheat grill to medium-high heat.',
                'Mix olive oil, garlic, paprika, and oregano.',
                'Season chicken breasts with salt and pepper.',
                'Brush with marinade.',
                'Grill for 6-7 minutes per side until cooked through.',
                'Let rest for 5 minutes before slicing.',
                'Store in refrigerator for up to 4 days.',
                'Reheat or use cold in salads and wraps.'
            ]
        },
        'Vegan Bowl': {
            name: 'Vegan Bowl',
            subtitle: 'Plant-based bowl with grains and vegetables',
            description: 'A complete plant-based meal with grains, vegetables, and legumes. Perfect for vegan meal prep.',
            image: 'VEGAN.jpg',
            macros: { calories: 320, protein: 12, carbs: 55, fat: 8 },
            ingredients: [
                '1 cup cooked brown rice or quinoa',
                '1/2 cup black beans',
                '1/2 cup roasted sweet potato',
                '1/2 cup steamed broccoli',
                '1/4 avocado, sliced',
                '2 tbsp tahini dressing',
                'Fresh cilantro',
                'Lime wedges'
            ],
            instructions: [
                'Cook rice or quinoa and let cool.',
                'Roast sweet potato cubes at 400°F for 20 minutes.',
                'Steam broccoli until tender-crisp.',
                'Divide rice into meal prep containers.',
                'Top with black beans, sweet potato, and broccoli.',
                'Add avocado slices and drizzle with tahini.',
                'Garnish with cilantro and lime.',
                'Store in refrigerator for up to 4 days.'
            ]
        },
        'Breakfast Bowl': {
            name: 'Breakfast Bowl',
            subtitle: 'Complete breakfast with eggs and vegetables',
            description: 'A hearty breakfast bowl that can be prepped ahead. Perfect for busy mornings.',
            image: 'BREAKFAST.jpg',
            macros: { calories: 380, protein: 20, carbs: 35, fat: 18 },
            ingredients: [
                '2 eggs, scrambled',
                '1/2 cup roasted potatoes',
                '1/2 cup sautéed spinach',
                '1/4 cup cherry tomatoes',
                '1/4 avocado, sliced',
                '2 tbsp feta cheese',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Scramble eggs and let cool.',
                'Roast potato cubes at 400°F for 25 minutes.',
                'Sauté spinach until wilted.',
                'Divide ingredients into meal prep containers.',
                'Layer potatoes, spinach, and eggs.',
                'Top with tomatoes, avocado, and feta.',
                'Season with salt and pepper.',
                'Store in refrigerator and reheat when ready to eat.'
            ]
        },
        'Toast': {
            name: 'Toast',
            subtitle: 'Quick and easy toast',
            description: 'A simple and satisfying toast perfect for a quick breakfast or snack. Customize with your favorite toppings.',
            image: 'toast.jpg',
            macros: { calories: 150, protein: 5, carbs: 28, fat: 3 },
            ingredients: [
                '2 slices whole grain bread',
                '1 tbsp butter or avocado',
                'Optional: honey, jam, or nut butter',
                'Optional: sliced banana or berries',
                'Optional: chia seeds or hemp hearts'
            ],
            instructions: [
                'Toast bread slices until golden brown.',
                'Spread with butter, avocado, or your favorite spread.',
                'Add optional toppings like honey, jam, or nut butter.',
                'Top with fresh fruit if desired.',
                'Sprinkle with seeds for extra nutrition.',
                'Serve immediately and enjoy.'
            ]
        },
        'Brownie Bowl': {
            name: 'Brownie Bowl',
            subtitle: 'A delicious and satisfying brownie bowl',
            description: 'A healthier take on brownies in a bowl format. Rich, chocolatey, and satisfying for your sweet tooth.',
            image: 'brownie bowl.jpg',
            macros: { calories: 320, protein: 8, carbs: 45, fat: 12 },
            ingredients: [
                '1/2 cup black beans, cooked',
                '1/4 cup cocoa powder',
                '2 tbsp maple syrup',
                '1/4 cup almond flour',
                '1 egg or flax egg',
                '1 tsp vanilla extract',
                '1/4 cup dark chocolate chips',
                'Pinch of salt'
            ],
            instructions: [
                'Preheat oven to 350°F.',
                'Blend black beans until smooth.',
                'Mix in cocoa powder, maple syrup, and vanilla.',
                'Add almond flour, egg, and salt.',
                'Fold in chocolate chips.',
                'Pour into greased bowl or ramekin.',
                'Bake for 20-25 minutes until set.',
                'Let cool slightly before serving.'
            ]
        },
        'Craving Stopper Bowl': {
            name: 'Craving Stopper Bowl',
            subtitle: 'A healthy bowl that helps satisfy your cravings',
            description: 'A nutritious bowl designed to help curb cravings naturally. Packed with protein, fiber, and healthy fats.',
            image: 'craving stopper bowl.jpg',
            macros: { calories: 280, protein: 12, carbs: 35, fat: 10 },
            ingredients: [
                '1/2 cup Greek yogurt',
                '1/4 cup mixed berries',
                '1 tbsp almond butter',
                '1/4 cup granola',
                '1 tbsp chia seeds',
                '1/2 banana, sliced',
                '1 tsp honey (optional)'
            ],
            instructions: [
                'Scoop Greek yogurt into a bowl.',
                'Top with fresh mixed berries.',
                'Drizzle with almond butter.',
                'Add granola for crunch.',
                'Sprinkle chia seeds on top.',
                'Arrange banana slices around the bowl.',
                'Drizzle with honey if desired.',
                'Enjoy immediately for best texture.'
            ]
        },
        'Strawberry Chocolate': {
            name: 'Strawberry Chocolate',
            subtitle: 'A delightful combination of fresh strawberries and rich chocolate',
            description: 'A sweet and indulgent treat combining fresh strawberries with rich chocolate. Perfect for satisfying your sweet tooth.',
            image: 'strawberrychoco.jpg',
            macros: { calories: 250, protein: 4, carbs: 35, fat: 12 },
            ingredients: [
                '1 cup fresh strawberries, sliced',
                '2 oz dark chocolate, melted',
                '1/4 cup Greek yogurt',
                '1 tbsp honey',
                '1 tsp vanilla extract',
                'Optional: chopped nuts for topping'
            ],
            instructions: [
                'Wash and slice fresh strawberries.',
                'Melt dark chocolate in a double boiler or microwave.',
                'Mix Greek yogurt with honey and vanilla.',
                'Layer strawberries in a bowl or plate.',
                'Drizzle with melted chocolate.',
                'Add dollops of sweetened yogurt.',
                'Top with chopped nuts if desired.',
                'Serve immediately and enjoy.'
            ]
        },
        'Green Salad': {
            name: 'Green Salad',
            subtitle: 'Fresh and crisp green salad with mixed greens',
            description: 'A refreshing green salad packed with fresh vegetables and mixed greens. Light, healthy, and perfect for any meal.',
            image: 'green salad.jpg',
            macros: { calories: 120, protein: 4, carbs: 15, fat: 6 },
            ingredients: [
                '4 cups mixed greens (lettuce, spinach, arugula)',
                '1 cucumber, sliced',
                '1/2 cup cherry tomatoes, halved',
                '1/4 cup red onion, thinly sliced',
                '2 tbsp olive oil',
                '1 tbsp lemon juice',
                'Salt and pepper to taste',
                'Optional: fresh herbs (parsley, basil)'
            ],
            instructions: [
                'Wash and dry all greens thoroughly.',
                'Chop or tear greens into bite-sized pieces.',
                'Slice cucumber and halve cherry tomatoes.',
                'Thinly slice red onion.',
                'Combine all vegetables in a large bowl.',
                'Whisk together olive oil and lemon juice.',
                'Drizzle dressing over salad.',
                'Season with salt and pepper.',
                'Toss gently and serve immediately.'
            ]
        },
        'Figs Salad': {
            name: 'Figs Salad',
            subtitle: 'A sweet and savory salad featuring fresh figs',
            description: 'An elegant salad combining fresh figs with mixed greens, cheese, and a light vinaigrette. Perfect for a sophisticated meal.',
            image: 'figs salad.jpg',
            macros: { calories: 200, protein: 6, carbs: 28, fat: 9 },
            ingredients: [
                '4-6 fresh figs, quartered',
                '4 cups mixed greens',
                '1/4 cup goat cheese or feta, crumbled',
                '2 tbsp walnuts, chopped',
                '2 tbsp olive oil',
                '1 tbsp balsamic vinegar',
                '1 tsp honey',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Wash and dry mixed greens.',
                'Quarter fresh figs.',
                'Crumble cheese and chop walnuts.',
                'Arrange greens on a plate or bowl.',
                'Top with quartered figs.',
                'Sprinkle with cheese and walnuts.',
                'Whisk together olive oil, balsamic, and honey.',
                'Drizzle dressing over salad.',
                'Season with salt and pepper.',
                'Serve immediately.'
            ]
        },
        'Cheesy Salad': {
            name: 'Cheesy Salad',
            subtitle: 'A delicious salad with cheese and fresh vegetables',
            description: 'A satisfying salad featuring your favorite cheese with fresh vegetables and a creamy dressing. Perfect for a hearty lunch.',
            image: 'cheesy salad.jpg',
            macros: { calories: 320, protein: 15, carbs: 18, fat: 22 },
            ingredients: [
                '4 cups mixed greens',
                '1/2 cup cheese (cheddar, mozzarella, or feta), cubed or crumbled',
                '1/2 cup cherry tomatoes, halved',
                '1/4 cup red bell pepper, diced',
                '1/4 cup cucumber, sliced',
                '2 tbsp olive oil',
                '1 tbsp lemon juice',
                '1 tsp Dijon mustard',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Wash and dry mixed greens.',
                'Cube or crumble cheese of your choice.',
                'Halve cherry tomatoes and dice bell pepper.',
                'Slice cucumber.',
                'Combine all vegetables in a large bowl.',
                'Add cheese cubes or crumbles.',
                'Whisk together olive oil, lemon juice, and mustard.',
                'Drizzle dressing over salad.',
                'Season with salt and pepper.',
                'Toss gently and serve.'
            ]
        },
        'Cauliflower Dish': {
            name: 'Cauliflower Dish',
            subtitle: 'A healthy and flavorful cauliflower-based dish',
            description: 'A versatile and nutritious cauliflower dish that can be roasted, steamed, or prepared in various ways. High in fiber and vitamins.',
            image: 'califlower dish.jpg',
            macros: { calories: 150, protein: 6, carbs: 20, fat: 6 },
            ingredients: [
                '1 head cauliflower, cut into florets',
                '2 tbsp olive oil',
                '2 cloves garlic, minced',
                '1 tsp paprika',
                '1/2 tsp turmeric',
                'Salt and pepper to taste',
                'Optional: fresh herbs (parsley, cilantro)',
                'Optional: lemon juice'
            ],
            instructions: [
                'Preheat oven to 400°F.',
                'Cut cauliflower into bite-sized florets.',
                'Toss florets with olive oil, garlic, paprika, and turmeric.',
                'Season with salt and pepper.',
                'Spread on a baking sheet in a single layer.',
                'Roast for 20-25 minutes until golden and tender.',
                'Toss halfway through cooking.',
                'Garnish with fresh herbs and lemon juice if desired.',
                'Serve hot as a side dish or main course.'
            ]
        },
        'Colorful Grill': {
            name: 'Colorful Grill',
            subtitle: 'A vibrant and protein-rich grilled dish',
            description: 'A beautiful and nutritious grilled dish featuring colorful vegetables and protein. Perfect for a healthy and visually appealing meal.',
            image: 'colorful grill.jpg',
            macros: { calories: 280, protein: 22, carbs: 25, fat: 12 },
            ingredients: [
                '4 oz protein (chicken, fish, or tofu)',
                '1 bell pepper, sliced (red, yellow, or orange)',
                '1 zucchini, sliced',
                '1/2 red onion, sliced',
                '1 cup cherry tomatoes',
                '2 tbsp olive oil',
                '1 tsp herbs (rosemary, thyme)',
                'Salt and pepper to taste',
                'Lemon wedges for serving'
            ],
            instructions: [
                'Preheat grill to medium-high heat.',
                'Slice all vegetables into uniform pieces.',
                'Toss vegetables with olive oil and herbs.',
                'Season protein and vegetables with salt and pepper.',
                'Grill protein for 4-6 minutes per side.',
                'Grill vegetables in a grill basket for 8-10 minutes.',
                'Turn vegetables occasionally for even cooking.',
                'Serve grilled protein with colorful vegetables.',
                'Garnish with lemon wedges and enjoy.'
            ]
        },
        'Plant Based Protein Dish': {
            name: 'Plant Based Protein Dish',
            subtitle: 'A complete plant-based protein meal',
            description: 'A nutritious and satisfying plant-based dish packed with protein from legumes, grains, and vegetables. Perfect for vegans and vegetarians.',
            image: 'plant based protein dish.jpg',
            macros: { calories: 350, protein: 18, carbs: 45, fat: 10 },
            ingredients: [
                '1 cup cooked lentils or chickpeas',
                '1/2 cup quinoa or brown rice',
                '1 cup mixed vegetables (broccoli, bell peppers, carrots)',
                '2 tbsp tahini or nut butter',
                '1 tbsp lemon juice',
                '1 clove garlic, minced',
                '1 tsp cumin',
                'Salt and pepper to taste',
                'Fresh herbs for garnish'
            ],
            instructions: [
                'Cook quinoa or rice according to package directions.',
                'Cook lentils or chickpeas until tender.',
                'Steam or roast mixed vegetables.',
                'Whisk together tahini, lemon juice, garlic, and cumin.',
                'Season dressing with salt and pepper.',
                'Divide grains into bowls.',
                'Top with legumes and vegetables.',
                'Drizzle with tahini dressing.',
                'Garnish with fresh herbs.',
                'Serve warm or at room temperature.'
            ]
        },
        'Mediterranean Chickpea Salad': {
            name: 'Mediterranean Chickpea Salad',
            subtitle: 'Hearty and protein-rich salad',
            description: 'A hearty and protein-rich salad with chickpeas, tomatoes, cucumbers, and olive oil. Perfect for a refreshing meal.',
            image: 'mediterranean chickpea salad.jpg',
            macros: { calories: 320, protein: 12, carbs: 45, fat: 10 },
            ingredients: [
                '2 cups chickpeas, rinsed and drained',
                '1 cucumber, diced',
                '1 cup cherry tomatoes, halved',
                '1/4 cup red onion, finely chopped',
                '1/4 cup fresh parsley, chopped',
                '3 tbsp olive oil',
                '2 tbsp lemon juice',
                'Salt and pepper to taste'
            ],
            instructions: [
                'In a large bowl, combine chickpeas, cucumber, tomatoes, red onion, and parsley.',
                'In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.',
                'Pour dressing over salad and toss to combine.',
                'Let sit for 10-15 minutes to allow flavors to meld.',
                'Serve chilled or at room temperature.'
            ]
        },
        'Avocado Spinach Salad': {
            name: 'Avocado Spinach Salad',
            subtitle: 'Fresh spinach and creamy avocado',
            description: 'Fresh spinach and creamy avocado with a light lemon dressing. A simple yet delicious salad packed with healthy fats.',
            image: 'avocado spinach salad.jpg',
            macros: { calories: 220, protein: 4, carbs: 12, fat: 18 },
            ingredients: [
                '4 cups fresh spinach',
                '1 ripe avocado, sliced',
                '1/2 cup cherry tomatoes, halved',
                '1/4 cup walnuts, chopped',
                '2 tbsp olive oil',
                '1 tbsp lemon juice',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Wash and dry spinach thoroughly.',
                'Place spinach in a large bowl.',
                'Top with avocado slices, cherry tomatoes, and walnuts.',
                'Whisk together olive oil, lemon juice, salt, and pepper.',
                'Drizzle dressing over the salad just before serving.',
                'Toss gently to coat.'
            ]
        },
        'Peanut Butter Banana Toast': {
            name: 'Peanut Butter Banana Toast',
            subtitle: 'Quick and nutritious snack',
            description: 'Quick toast with peanut butter and banana slices for a fast snack. loaded with energy and healthy fats.',
            image: 'peanut butter banana toast.jpg',
            macros: { calories: 350, protein: 12, carbs: 45, fat: 16 },
            ingredients: [
                '2 slices whole grain bread',
                '2 tbsp peanut butter (or almond butter)',
                '1 banana, sliced',
                '1 tsp chia seeds (optional)',
                '1 tsp honey (optional)'
            ],
            instructions: [
                'Toast the bread slices to your desired crispness.',
                'Spread peanut butter evenly on each slice.',
                'Arrange banana slices on top of the peanut butter.',
                'Sprinkle with chia seeds and drizzle with honey if desired.',
                'Serve immediately.'
            ]
        },
        'Yogurt Parfait': {
            name: 'Yogurt Parfait',
            subtitle: 'Layers of yogurt and fruit',
            description: 'Layers of yogurt, granola, and fresh fruit for a quick breakfast. A perfect balance of protein and crunch.',
            image: 'yogurt parfait.jpg',
            macros: { calories: 280, protein: 14, carbs: 40, fat: 8 },
            ingredients: [
                '1 cup Greek yogurt',
                '1/2 cup granola',
                '1/2 cup mixed berries (strawberries, blueberries)',
                '1 tbsp honey'
            ],
            instructions: [
                'In a glass or jar, add a layer of yogurt.',
                'Add a layer of granola.',
                'Add a layer of mixed berries.',
                'Repeat layers until glass is full.',
                'Drizzle with honey on top.',
                'Serve immediately or refrigerate for later.'
            ]
        },
        'Chia Seed Pudding': {
            name: 'Chia Seed Pudding',
            subtitle: 'Nutritious overnight breakfast',
            description: 'Overnight chia seeds with almond milk and fresh berries for a nutritious breakfast. High in fiber and omega-3s.',
            image: 'chia seed pudding.jpg',
            macros: { calories: 200, protein: 6, carbs: 18, fat: 12 },
            ingredients: [
                '3 tbsp chia seeds',
                '1 cup almond milk (or milk of choice)',
                '1/2 tsp vanilla extract',
                '1 tbsp maple syrup',
                'Fresh berries for topping'
            ],
            instructions: [
                'In a jar or bowl, potential mix chia seeds, milk, vanilla, and maple syrup.',
                'Stir well to prevent clumps.',
                'Cover and refrigerate for at least 4 hours or overnight.',
                'Stir again before serving.',
                'Top with fresh berries and enjoy.'
            ]
        },
        'Tuna Salad': {
            name: 'Tuna Salad',
            subtitle: 'Protein-packed and fresh',
            description: 'Protein-packed tuna mixed with fresh veggies and a light dressing. Great for sandwiches or on a bed of greens.',
            image: 'tuna salad.jpg',
            macros: { calories: 300, protein: 25, carbs: 8, fat: 18 },
            ingredients: [
                '2 cans (5 oz) tuna, drained',
                '2 stalks celery, diced',
                '1/4 cup red onion, finely diced',
                '1/3 cup mayonnaise or Greek yogurt',
                '1 tbsp lemon juice',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Drain the tuna well.',
                'In a medium bowl, flake the tuna with a fork.',
                'Add celery, red onion, mayonnaise/yogurt, and lemon juice.',
                'Mix until well combined.',
                'Season with salt and pepper.',
                'Serve on bread, crackers, or salad greens.'
            ]
        },
        'Turkey Meatballs': {
            name: 'Turkey Meatballs',
            subtitle: 'Lean and savory meatballs',
            description: 'Lean turkey meatballs baked to perfection for a high-protein meal. Versatile and delicious with marinara or on their own.',
            image: 'turkey meatballs.jpg',
            macros: { calories: 320, protein: 28, carbs: 10, fat: 18 },
            ingredients: [
                '1 lb ground turkey',
                '1/2 cup breadcrumbs',
                '1 large egg',
                '2 cloves garlic, minced',
                '1/4 cup fresh parsley, chopped',
                '1/2 tsp onion powder',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Preheat oven to 400°F (200°C).',
                'In a large bowl, mix all ingredients until combined. Do not overmix.',
                'Form into 12-16 golf ball-sized meatballs.',
                'Place on a parchment-lined baking sheet.',
                'Bake for 15-20 minutes or until cooked through.',
                'Serve warm with your favorite sauce.'
            ]
        },
        'Lentil Soup': {
            name: 'Lentil Soup',
            subtitle: 'Warm and hearty soup',
            description: 'Warm and hearty lentil soup with vegetables and spices. A comforting and nutritious meal.',
            image: 'lentil soup.jpg',
            macros: { calories: 250, protein: 18, carbs: 35, fat: 4 },
            ingredients: [
                '1 cup dried lentils, rinsed',
                '1 onion, chopped',
                '2 carrots, chopped',
                '2 celery stalks, chopped',
                '4 cups vegetable broth',
                '1 can (14 oz) diced tomatoes',
                '1 tsp cumin',
                '1 tsp thyme'
            ],
            instructions: [
                'In a large pot, sauté onion, carrots, and celery until softened.',
                'Add lentils, broth, tomatoes, cumin, and thyme.',
                'Bring to a boil, then reduce heat and simmer.',
                'Cook for 25-30 minutes until lentils are tender.',
                'Season with salt and pepper.',
                'Serve hot.'
            ]
        },
        'Vegan Buddha Bowl': {
            name: 'Vegan Buddha Bowl',
            subtitle: 'Colorful and complete meal',
            description: 'A colorful bowl of grains, vegetables, and legumes for a complete vegan meal. Packed with variety and nutrients.',
            image: 'vegan buddha bowl.jpg',
            macros: { calories: 380, protein: 15, carbs: 55, fat: 12 },
            ingredients: [
                '1 cup cooked quinoa',
                '1 cup roasted sweet potatoes',
                '1 cup chickpeas, roasted or fresh',
                '1 cup steamed kale',
                '1/2 avocado, sliced',
                '2 tbsp tahini dressing'
            ],
            instructions: [
                'Prepare quinoa according to package.',
                'Roast sweet potato cubes and chickpeas at 400°F for 20 mins.',
                'Steam kale until bright green.',
                'Assemble bowl with quinoa as base.',
                'Arrange sweet potatoes, chickpeas, kale, and avocado on top.',
                'Drizzle with tahini dressing.',
                'Sprinkle with seeds if desired.'
            ]
        },
        'Chocolate Avocado Mousse': {
            name: 'Chocolate Avocado Mousse',
            subtitle: 'Creamy and guilt-free dessert',
            description: 'Creamy and healthy chocolate mousse made with avocado. A rich and decadent treat with healthy fats.',
            image: 'chocolate avocado mousse.jpg',
            macros: { calories: 200, protein: 3, carbs: 15, fat: 15 },
            ingredients: [
                '2 ripe avocados',
                '1/4 cup cocoa powder',
                '1/4 cup maple syrup or honey',
                '1 tsp vanilla extract',
                '1/4 cup almond milk (if needed for blending)'
            ],
            instructions: [
                'Scoop avocado flesh into a blender or food processor.',
                'Add cocoa powder, sweetener, vanilla, and milk.',
                'Blend until completely smooth and creamy.',
                'Taste and adjust sweetness if needed.',
                'Spoon into serving dishes and refrigerate for 30 mins.',
                'Serve chilled.'
            ]
        },
        'Fruit Tart': {
            name: 'Fruit Tart',
            subtitle: 'Sweet and seasonal dessert',
            description: 'A sweet tart topped with fresh seasonal fruits and a light glaze. A beautiful and refreshing dessert.',
            image: 'fruit tart.jpg',
            macros: { calories: 280, protein: 4, carbs: 40, fat: 12 },
            ingredients: [
                '1 pre-baked tart shell',
                '1 cup vanilla custard or Greek yogurt',
                '1 cup mixed fruit (strawberries, kiwi, blueberries, mango)',
                '1 tbsp apricot jam (diluted with water for glaze)'
            ],
            instructions: [
                'Fill the tart shell with custard or yogurt.',
                'Slice the fruit into decorative shapes.',
                'Arrange fruit beautifully on top of the filling.',
                'Brush fruit with apricot glaze for shine.',
                'Refrigerate until ready to serve.',
                'Best enjoyed fresh.'
            ]
        },
        'Greek Salad': {
            name: 'Greek Salad',
            subtitle: 'Classic Mediterranean salad',
            description: 'Classic Greek salad with tomatoes, cucumbers, olives, and feta cheese. A refreshing and authentic Mediterranean dish.',
            image: 'greek salad.jpg',
            macros: { calories: 180, protein: 6, carbs: 12, fat: 14 },
            ingredients: [
                '2 large tomatoes, cut into wedges',
                '1 cucumber, sliced',
                '1/2 red onion, thinly sliced',
                '1/2 cup Kalamata olives',
                '1/2 cup feta cheese, crumbled',
                '3 tbsp olive oil',
                '1 tbsp red wine vinegar',
                '1 tsp dried oregano',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Cut tomatoes into wedges and slice cucumber.',
                'Thinly slice red onion.',
                'Combine tomatoes, cucumber, onion, and olives in a large bowl.',
                'Top with crumbled feta cheese.',
                'Whisk together olive oil, vinegar, and oregano.',
                'Drizzle dressing over salad.',
                'Season with salt and pepper.',
                'Toss gently and serve immediately.'
            ]
        },
        'Cesar Salad': {
            name: 'Cesar Salad',
            subtitle: 'Classic Caesar with creamy dressing',
            description: 'Crispy romaine lettuce with creamy Caesar dressing and parmesan. A timeless classic salad.',
            image: 'cesar salad.jpg',
            macros: { calories: 220, protein: 8, carbs: 10, fat: 18 },
            ingredients: [
                '1 head romaine lettuce, chopped',
                '1/2 cup Caesar dressing',
                '1/2 cup parmesan cheese, shaved',
                '1 cup croutons',
                '2 tbsp lemon juice',
                'Black pepper to taste'
            ],
            instructions: [
                'Wash and dry romaine lettuce thoroughly.',
                'Chop lettuce into bite-sized pieces.',
                'Place lettuce in a large bowl.',
                'Add Caesar dressing and toss to coat.',
                'Add croutons and toss again.',
                'Top with shaved parmesan cheese.',
                'Drizzle with lemon juice.',
                'Season with black pepper and serve immediately.'
            ]
        },
        'Fig Toast': {
            name: 'Fig Toast',
            subtitle: 'Sweet and savory toast',
            description: 'Delicious toast topped with fresh figs, honey, and ricotta cheese. A perfect balance of sweet and savory.',
            image: 'fig toast.jpg',
            macros: { calories: 280, protein: 10, carbs: 38, fat: 10 },
            ingredients: [
                '2 slices whole grain bread',
                '1/2 cup ricotta cheese',
                '4-6 fresh figs, sliced',
                '2 tbsp honey',
                '1 tbsp chopped walnuts',
                'Fresh thyme leaves (optional)',
                'Pinch of sea salt'
            ],
            instructions: [
                'Toast bread slices until golden brown.',
                'Spread ricotta cheese evenly on each slice.',
                'Slice fresh figs and arrange on top of ricotta.',
                'Drizzle with honey.',
                'Sprinkle with chopped walnuts.',
                'Add fresh thyme leaves if desired.',
                'Finish with a pinch of sea salt.',
                'Serve immediately and enjoy.'
            ]
        },
        'Breakfast Smoothie Bowl': {
            name: 'Breakfast Smoothie Bowl',
            subtitle: 'Thick and creamy breakfast bowl',
            description: 'A thick and creamy smoothie bowl topped with fresh fruits and granola. Perfect for a nutritious breakfast.',
            image: 'breakfast smoothie bowl.jpg',
            macros: { calories: 320, protein: 12, carbs: 52, fat: 8 },
            ingredients: [
                '1 frozen banana',
                '1/2 cup frozen berries',
                '1/2 cup Greek yogurt',
                '1/4 cup milk or plant-based milk',
                '1/4 cup granola',
                '1/4 cup fresh berries',
                '1 tbsp chia seeds',
                '1 tbsp honey',
                'Sliced fruit for topping'
            ],
            instructions: [
                'Add frozen banana, frozen berries, yogurt, and milk to blender.',
                'Blend until thick and creamy (should be thicker than a regular smoothie).',
                'Pour into a bowl.',
                'Top with granola, fresh berries, and chia seeds.',
                'Drizzle with honey.',
                'Add sliced fruit for decoration.',
                'Serve immediately with a spoon.'
            ]
        },
        'Smoothie Bowl': {
            name: 'Smoothie Bowl',
            subtitle: 'Colorful and nutritious bowl',
            description: 'A colorful and delicious smoothie bowl topped with fresh fruits and nuts. A beautiful and healthy breakfast option.',
            image: 'SMOOTHIEBOWLS.jpg',
            macros: { calories: 290, protein: 10, carbs: 48, fat: 9 },
            ingredients: [
                '1 frozen banana',
                '1 cup frozen mixed berries',
                '1/2 cup Greek yogurt',
                '1/4 cup almond milk',
                'Toppings: sliced banana, berries, granola, coconut flakes, nuts',
                '1 tbsp honey (optional)'
            ],
            instructions: [
                'Blend frozen banana, berries, yogurt, and almond milk until thick.',
                'Pour into a bowl.',
                'Arrange toppings in sections or rows for a beautiful presentation.',
                'Add sliced banana, fresh berries, and granola.',
                'Sprinkle with coconut flakes and nuts.',
                'Drizzle with honey if desired.',
                'Serve immediately and enjoy with a spoon.'
            ]
        }
    };

    
    return recipes[name] || null;
}






function addRecipeToWeek(recipeName, recipeImage) {
    
    var weekRecipesStr = localStorage.getItem('weekRecipes') || '[]';
    var weekRecipes = JSON.parse(weekRecipesStr);

    
    var lastReset = localStorage.getItem('weekRecipesResetDate');
    var now = new Date().getTime(); 

    
    
    
    if (lastReset) {
        
        
        var daysSinceReset = (now - parseInt(lastReset)) / (1000 * 60 * 60 * 24);

        
        if (daysSinceReset >= 7) {
            weekRecipes = []; 
            localStorage.setItem('weekRecipesResetDate', now.toString()); 
        }
    } else {
        
        localStorage.setItem('weekRecipesResetDate', now.toString());
    }

    
    
    
    
    if (weekRecipes.length >= 7) {
        alert('You can only add up to 7 recipes for the week. Please clear some first.');
        return; 
    }

    
    var recipeAlreadyAdded = false;
    for (var i = 0; i < weekRecipes.length; i++) {
        if (weekRecipes[i].name === recipeName) {
            recipeAlreadyAdded = true;
            break; 
        }
    }

    if (recipeAlreadyAdded) {
        alert('This recipe is already in your week recipes.');
        return; 
    }

    
    
    
    
    weekRecipes.push({ name: recipeName, image: recipeImage });

    
    localStorage.setItem('weekRecipes', JSON.stringify(weekRecipes));

    
    alert('Recipe added to week recipes!');
}






function initRecipeDetailPage() {
    
    
    
    
    var url = window.location.search;
    var recipeName = 'Recipe'; 
    var source = ''; 
    var category = 'Healthy'; 

    
    
    if (url.indexOf('name=') !== -1) {
        var nameStart = url.indexOf('name=') + 5; 
        var nameEnd = url.indexOf('&', nameStart); 
        if (nameEnd === -1) nameEnd = url.length; 
        recipeName = decodeURIComponent(url.substring(nameStart, nameEnd)); 
    }

    
    if (url.indexOf('source=') !== -1) {
        var sourceStart = url.indexOf('source=') + 7; 
        var sourceEnd = url.indexOf('&', sourceStart); 
        if (sourceEnd === -1) sourceEnd = url.length; 
        source = decodeURIComponent(url.substring(sourceStart, sourceEnd)); 
    }

    
    if (url.indexOf('category=') !== -1) {
        var categoryStart = url.indexOf('category=') + 9; 
        var categoryEnd = url.indexOf('&', categoryStart); 
        if (categoryEnd === -1) categoryEnd = url.length; 
        category = decodeURIComponent(url.substring(categoryStart, categoryEnd)); 
    }

    
    
    
    var recipeData = getRecipeData(recipeName);

    
    
    
    var backButton = document.getElementById('back-button');
    if (backButton) {
        if (source === 'nutrition') {
            
            backButton.href = 'recipes.html?category=' + encodeURIComponent(category) + '&source=nutrition';
            backButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back to Recipes';
        } else {
            
            backButton.href = 'dashboard.html';
            backButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back to Dashboard';
        }
    }

    
    
    
    if (recipeData) {
        
        var titleEl = document.getElementById('recipe-title');
        var subtitleEl = document.getElementById('recipe-subtitle');
        var descEl = document.getElementById('recipe-description-text');

        if (titleEl) titleEl.textContent = recipeData.name;
        if (subtitleEl) subtitleEl.textContent = recipeData.subtitle || 'Delicious and nutritious meal';
        if (descEl) descEl.textContent = recipeData.description;

        
        
        
        if (recipeData.macros) {
            var caloriesEl = document.getElementById('macro-calories');
            var proteinEl = document.getElementById('macro-protein');
            var carbsEl = document.getElementById('macro-carbs');
            var fatEl = document.getElementById('macro-fat');

            if (caloriesEl) caloriesEl.textContent = recipeData.macros.calories;
            if (proteinEl) proteinEl.textContent = recipeData.macros.protein + 'g';
            if (carbsEl) carbsEl.textContent = recipeData.macros.carbs + 'g';
            if (fatEl) fatEl.textContent = recipeData.macros.fat + 'g';
        }

        
        
        
        if (recipeData.ingredients) {
            var ingredientsList = document.getElementById('recipe-ingredients-list');
            if (ingredientsList) {
                ingredientsList.innerHTML = ''; 

                
                for (var i = 0; i < recipeData.ingredients.length; i++) {
                    var ingredient = recipeData.ingredients[i];
                    var li = document.createElement('li'); 
                    li.textContent = ingredient; 
                    ingredientsList.appendChild(li); 
                }
            }
        }

        
        
        
        if (recipeData.instructions) {
            var instructionsContent = document.getElementById('recipe-instructions-content');
            if (instructionsContent) {
                
                var ol = document.createElement('ol');
                ol.className = 'instructions-list';

                
                for (var i = 0; i < recipeData.instructions.length; i++) {
                    var instruction = recipeData.instructions[i];
                    var li = document.createElement('li'); 
                    li.textContent = instruction; 
                    ol.appendChild(li); 
                }

                instructionsContent.innerHTML = ''; 
                instructionsContent.appendChild(ol); 
            }
        }
    } else {
        
        console.error('Recipe data not found for:', recipeName);
        var titleEl = document.getElementById('recipe-title');
        var subtitleEl = document.getElementById('recipe-subtitle');
        var descEl = document.getElementById('recipe-description-text');
        var caloriesEl = document.getElementById('macro-calories');
        var proteinEl = document.getElementById('macro-protein');
        var carbsEl = document.getElementById('macro-carbs');
        var fatEl = document.getElementById('macro-fat');
        var ingredientsList = document.getElementById('recipe-ingredients-list');
        var instructionsContent = document.getElementById('recipe-instructions-content');

        if (titleEl) titleEl.textContent = 'Recipe Not Found';
        if (subtitleEl) subtitleEl.textContent = 'Please go back and select another recipe.';
        if (descEl) descEl.textContent = '';
        if (caloriesEl) caloriesEl.textContent = 'N/A';
        if (proteinEl) proteinEl.textContent = 'N/A';
        if (carbsEl) carbsEl.textContent = 'N/A';
        if (fatEl) fatEl.textContent = 'N/A';
        if (ingredientsList) ingredientsList.innerHTML = '<li>No ingredients available.</li>';
        if (instructionsContent) instructionsContent.innerHTML = '<ol class="instructions-list"><li>No instructions available.</li></ol>';
    }

    
    
    
    var addToWeekBtn = document.getElementById('add-to-week-btn');
    if (addToWeekBtn) {
        addToWeekBtn.onclick = function () {
            
            var currentRecipeData = getRecipeData(recipeName);
            if (currentRecipeData) {
                
                addRecipeToWeek(recipeName, currentRecipeData.image);
            }
        };
    }
}






if (document.readyState === 'loading') {
    
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            initRecipeDetailPage(); 
        }
    };
} else {
    
    initRecipeDetailPage();
}

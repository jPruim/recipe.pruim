import { Recipe , Book, IngredientList} from "src/app/interfaces/recipe";


export const RecipeData : Recipe[] = [
    {
        title: "Basic White Loaves",
        originalBookID: 1,
        recipeNumber: 1,
        intro: "Unpretentious. Goes with any topping. And makes good toast.",
        description: "This is the family’s basic white bread. It has a fairly soft crust but still the texture and substance of an oblong loaf baked outside"+
        "a bread pan so it gets nicely baked sides. You can use a mix of white and whole wheat flours, "+
        "though you run the risk of being asked why you’re trying to make comfort food healthy. ",
        outro: "There are few pleasures as basic and lovely as a slice of homemade bread, warm from the oven.",
        steps: [
            {
                instruction: "Mix together",
                ingredients: [
                    "12 1/4 cups warm water",
                    "4 1/2 t dry yeast",
                    "1 T melted bu tter or olive oil",
                    "1 T salt",
                ],
            },
            {
                instruction: "Add and mix for a couple minutes until a dough forms. If using a mixer, use the dough hook until a soft dough forms.",
                ingredients: [
                    "6-7 cups flour",
                ],
            },
            {
                instruction: "Place dough in a greased bowl and cover with a plastic wrap, a non-fuzzy towel, or a silicon cover. Let rise until double, about 1 hour.",
            },
            {
                instruction: "Punch down dough. Knead or roll out the air bubbles. Shape into two oblong loaves. "+
                "Place on a cookie sheet that has been greased and dusted with corn meal. Cover with a towel and let rise for about 40 minutes total. "+
                "Turn on your oven to preheat to 425, 20 minutes before you want to start baking.",
            },
            {
                instruction: "Before baking, make 3-4 slices across your loaves with a sharp knife. You can slice someone’s initials in the top of the loaves, if it’s their birthday … just for fun. "+
                "Bake for 20-23 minutes until light brown. Cool on wire racks. ",
            }
        ]
    },
    {
        title: "Flour Tortillas",
        originalBookID: 1,
        recipeNumber: 2,
        intro: "Perfect for soft tacos or excellent when dripping with honey.",
        description: "Warning: There’s one big problem with introducing homemade tortillas to your family: "+
        "no one is happy eating store-bought tortillas any longer. Everyone in my family agrees that store-bought tortillas have a funny texture and some odd chemically flavor. "+
        "It’s hard to compare tortillas baked who knows when in a factory and packaged in plastic for more than a couple days with fresh, soft, homemade tortillas, warm from the griddle."+
        "\n\n2021: Please make extra tortillas. I usually double this batch. Everyone likes to have at least one last tortilla drizzled with honey as a dessert. And if you have leftovers, "+
        "keep them in a Ziploc in the fridge, in order to make scrambled eggs burritos tomorrow for breakfast or quesadillas for lunch. "+
        "Just warm your tortillas oh-so-briefly in the microwave to soften them up. Alternately, you can use a leftover tortilla to make a tortilla pizza. "+
        "A little pizza sauce and some parmesan on top. Then warm it on a griddle, in the microwave, or briefly in the toaster oven. With so many possibilities for leftover tortillas, "+
        "maybe you should make a triple batch to begin with.",
        outro: "Homemade tortillas make taco night special "+
        "--less frequent than we would like, but worth the wait.",
        steps: [
            {
                instruction: "Mix flour, salt, and baking powder. "+
                "Cut in Crisco with a pastry blender."+
                "Honestly just make a double batch. Everyone will thank you."
                ,
                ingredients: [
                    "2 cups flour",
                    "1 t salt",
                    "1 t baking powder",
                    "¼ cup Crisco",
                ],
            },
            {
                instruction: "Add water gradually to make a moderately stiff dough.",
                ingredients: [
                    "½ - 2/3 cup lukewarm water",
                ],
            },
            {
                instruction: "2021: If you have time, wrap the dough in wax paper and let it sit on the counter for an hour. "+
                "This makes the dough softer, the tortillas a little easier to roll out and possibly yummier. "+
                "But if you’re in a rush, you can just continue directly to rolling out your tortillas. "+
                "Divide dough into 10 pieces. Roll thin on floured surface. Drop onto hot ungreased griddle. Allow to cook/bake until freckled (30-50 seconds). Turn over and repeat. ",
            },
        ]
    },
    {
        title: "Soft Dinner Rolls",
        originalBookID: 1,
        recipeNumber: 3,
        intro: "Sometimes you just need some squishy bread thing to mop up the gravy.",
        description: "For decades I avoided making dinner rolls. I just put out homemade bread and, of course, no one complained. "+
        "Then there was that cool autumn evening when I wanted soup but had no bread in the house. Usually we opt for biscuits, but I really wanted something soft and yeasty. Guess what! Dinner rolls don’t have a long rising stage. "+
        "They go from “wish I had that” to “warm and yummy” amazingly quickly. So don’t wait until you’re 50-something to give this recipe a try. "+
        "\n\n2021: When COVID-19 forced us all to venture to grocery stores as seldom as possible, I realized that this dinner roll recipe makes great hamburg and hotdog buns. "+
        "No need to run quick to the grocer to pick up fresh buns; make them from scratch. "+
        "The result is a soft, slightly sweet and very pleasant white-carb-bun for your grilled meat or un-meat, barbecue,"+
        "pulled pork, brats, or other sandwich creations. These are more substantial and flavorful than the mushy, flavorless "+
        "store-bought bun varieties which are nothing more than a way to keep your topping together without getting too much ketchup on your fingers."+
        "Using this recipe, divide your dough into 12 portions. You can shape these portions into hamburg or hotdog bun shapes (or some of each) and arrange them in a greased 9x13 pan. "+
        "When your bun shapes have risen and before you put them in the oven to bake, press them down a little so that the buns are wider and shorter (and easier to load up and still fit into your mouth). Enjoy! ",
        outro: "If you bake enough bread to regularly sustain your family, "+
        "then it will be easy to offer this basic comfort to others when needed. ",
        steps: [
            {
                instruction: "Mix together",
                ingredients: [
                    "1 ½ cup flour",
                    "4 ½ t dry yeast",
                    "4 T sugar",
                    "1 t salt"
                ],
            },
            {
                instruction: "Heat together till slightly warm (120-130 degrees).",
                ingredients: [
                    "1 cup milk",
                    "1/2 cup water",
                    "4 T butter or margarine",
                ],
            },
            {
                instruction: "Add liquids to flour mixture. Beat 2 minutes scraping bowl occasionally. "+
                "Add the additional 2 ½ cups flour - ¼ cup at a time until a soft dough forms. "+
                "Knead 8-10 minutes. Cover and let rest 10 minutes. Yes. just 10",
                ingredients: [
                    "2 1/2 cups flour",
                ],
            },
            {
                instruction: "Divide dough into 24 pieces. Shape into balls and place in a greased 9x13 pan. (6 rows of 4 small buns) "+
                "Cover and let rise about 30 minutes or until double in size. You can halve the recipe and bake an 8-inch square pan full but, honestly, "+
                "just make the bigger batch. If you have any leftovers, these make good breakfast carbs the next morning, unless someone has stolen them for a midnight snack.",
            },
            {
                instruction: "Bake in preheated oven at 375 for 20 minutes or until light brown. You can brush the tops of the warm rolls with a "+
                "little butter if you wish because the true healthy eaters probably won’t be eating these shamelessly unnecessary white carbs.",
            }
        ]
    },    {
        title: "Soda Bread",
        originalBookID: 1,
        recipeNumber: 4,
        intro: "Dear Michiganders: “Soda” in this recipe refers to what you call “pop.” You can use any appropriate carbonated beverage. My recommendations are in the recipe below. ",
        description: "This was a recipe I used to make when I was home a lot but still didn’t have a lot of time for making yeast breads. "+
        "This mixes up more quickly than biscuits though it bakes lots longer.  This loaf satisfies that need for something both chewy and a "+
        "little crumbly to hold your homemade strawberry jam, or honey, or butter, or even a nice slice of cheese. "+
        "\n\n2021: If you want a quick cheer-up gift for someone in your life right now and don’t have an hour but do have about 15 minutes, give them a Happy Soda Bread Mix. "+
        "\n\t 1. Mix together all the dry ingredients and pour into a Ziploc. "+
        "\n\t 2. Write a note like this: "+
        "In a large bowl, stir together your soda-bread mix, 1 Tablespoon vegetable oil, and 1 can of ginger ale or beer. "+
        "Pour into a lightly greased bread pan. Bake for 50-55 minutes or until a toothpick comes out dry. Remove from the pan and serve warm. "+
        "\n\t 3. Put the recipe note, the Ziploc of bread mix, and an appropriate can of carbonated beverage into a small gift bag. Then deliver the Joy. "
        ,
        outro: "Quick breads aren’t always as quick as you’d like, "+
        "but they let you have bready goodness without babysitting a yeast dough. ",
        steps: [
            {
                instruction: "Preheat oven to 375. Lightly grease a bread pan.",

            },
            {
                instruction: "Mix all ingredients in a large bowl in the order given, until moist." +
                "Turn the batter-dough into your bread pan. " +
                "This was originally called “Beer Bread” but we so seldom have beer in the house, we were forced into making Soda Bread. " +
                "(I’ve even made it with root beer, when that was the only soda I had in the house.)",
                ingredients: [
                    "3 ½ cups flour",
                    "3 ½ t baking powder",
                    "1 t salt",
                    "1 T sugar",
                    "1 T vegetable oil",
                    "1 (12 oz) can ginger ale, lemon-lime soda, or beer (this means 1 ½ cups)"
                ],
            },
            {
                instruction: "Bake for 50-55 minutes or until a toothpick comes out pretty dry. Remove from pan and serve warm, if possible.",
            },
        ]
    },{
        title: "Fry Bread",
        originalBookID: 1,
        recipeNumber: 5,
        intro: "Like a bread-ier version of elephant ears.",
        description: "Serving suggestions: " +
        "\n\tUse as the carb for you next taco night."+
        "\n\tDrizzle with honey."+
        "\n\tSprinkle with cinnamon and sugar."+
        "\n I learned to make these in sixth grade, deep frying them in a cleaned-out coffee can over an open fire in the woods as part of camping week at the Zoo School. We had to make them one night and then survive the whole next day on day-old fry breads. It’s much easier to make these in a wok in a kitchen. Fry Breads are best fresh, so I don’t recommend stuffing them in your backpack for tomorrow. Eat them now, while they’re still warm.",
        outro: "Indulging in fried foods is what you need to make your high fiber, health food days worth it.",
        steps: [
            {
                instruction: "Make sure you have enough vegetable oil to deep fry these babies.",

            },
            {
                instruction: "Mix all ingredients together.",
                ingredients: [
                    "2 cups flour",
                    "2 t baking powder",
                    "1/2 cup sugar or honey",
                    "1/2 t salt",
                ],
            },
            {
                instruction: "Add water a little at a time until a stiff dough forms. Tear off small pieces. Knead and press flat, the flatter the better. Drop into at least ½ inch hot oil. Turn once. If your oil is not hot enough, your dough will just sop up fat and never turn brown. Been there. If your oil is too hot, your dough will burn to dark brown too quickly. When your oil is just right, your dough will bubble or sizzle when you drop it in and steadily turn a pleasant brown color in about 1-2 minutes per side."+
                "\nRemove when browned but not too browned. " +
                "\nAllow to rest a minute or two on paper towel. Serve warm.",
            },
        ]
    },{
        title: "Dad's Soft Breadsticks",
        originalBookID: 1,
        recipeNumber: 6,
        intro: "Pizza night? We knead these. We need them, too.",
        description: "Dad’s been making pizza as long as the kids remember which makes sense since he began making pizza in high school. Bread sticks are always part of pizza night because until recently one of the kids didn’t do tomato sauce. Even if it’s not pizza night, these bread sticks are a great, comforting addition to many meals, soups, and pasta nights. Thanks, Dad!" +
        "\n2021: Dad’s soft breadsticks are so yummy that they have become their own menu item. No longer just a part of pizza night, these get requested for some of our soup evenings, for Bible study potlucks, and for watching films or the Green Bay Packers. These are not the dry crackers shaped like sticks; they are soft and delicious usually sprinkled with herbs and parmesan. Because these breadsticks are soft, consider putting out dipper bowls and options like balsamic vinegar or olive oils with extra herbs and parmesan to sprinkle in. The soft texture is perfect for soaking up oil and vinegars. Alternately serve with thick pizza sauce, a cheese sauce, or toum, a Mediterranean garlic dip",
        outro: "'All sorrows are less with bread.' – Miguel de Cervantes",
        steps: [
            {
                instruction: "In a medium bowl, mix together and let stand until frothy.",
                ingredients: [
                    "1 ¾ cups warm water",
                    "1 ½ T dry yeast",
                    "1 1/2 T sugar",
                ],
            },{
                instruction: "Add oil to yeast mixture. Then mix in dry ingredients until a dough forms. Knead 10 minutes or more, adding flour if needed to make a fairly soft but not sticky dough.",
                ingredients: [
                    "1/8 cup olive oil ",
                    "8 cups flour",
                    "1 1/2 t salt",
                    "1/6 cup corn meal",
                ],
            },
            {
                instruction: "Place dough in a lightly oiled bowl. Turn the dough over so the top is slightly oiled. Cover with plastic wrap or a silicon cover and allow to rise until doubled, about 1 hour. If you have time, let it rise twice, punching it down in between. If you’re hungry, just skip the second rising.",
            },
            {
                instruction: "Roll, stretch, and smoosh (I’m sure this is a real baking term.) the dough into desired shapes and thickness.  This recipe makes several rounds or sheets of flat bread, bread sticks, or pizza crusts. "+
                "\nRoll the dough fairly thick. Season and slice into bread stick shapes, if that’s what you’re going for. Then let them rise some. For bread sticks Dad often uses basil, salt, pepper, garlic, and parmesan cheese -- you can also knead things right into the dough if you like.",
            },
            {
                instruction: "Bake in an oven preheated to 465 degrees, preferable on a baking stone, until it looks done. (This isn’t very specific, and yet … it is.)",
            },
            {
                instruction: "Options: " +
                "\n\tAdd 1/6 cup flax seed meal to the dough." +
                "\n\tSubstitute some whole wheat flour for some of the regular flour. "+
                "\n\tUse the dough as pizza dough. But only use some of it, because you must always make bread sticks too.",
            }
        ]
    },{
        title: "Mom's Artisan Bread",
        originalBookID: 1,
        recipeNumber: 7,
        intro: "Keep some of this dough on hand, ready to bake as often as possible.",
        description: "2021: I wanted good bread more often. I wanted to avoid quick runs to the bakery. I wanted this bread to take even less time to make. So, this recipe got simpler. Win-win!" +
        "\nThis is the crusty, chewy loaf you might occasionally spend $10 on at the gourmet bake shop, but with this recipe you can have it almost any time.  While there are several steps spread out over a day, each step goes quickly. If you make it a habit, it really doesn’t seem like so much work. The only problem is that everyone gobbles it up while it’s still fresh, and then you find you have to start making another loaf almost right away. ",
        outro: "'Artisan' bread doesn’t take an artist’s touch, just a good recipe and your commitment to try.",
        steps: [
            {
                instruction: "Mix dry ingredients in a very large container or bowl. Add the water and stir until there are no dry spots, about 2 minutes. Put a lid on the container or cover the bowl with a silicon cover. Let the dough sit on the counter at least 4 hours or overnight. Then either use the dough OR put it in the refrigerator until ready to use.",
                ingredients: [
                    "6 cups flour",
                    "1 ½ t dry yeast",
                    "2 t salt",
                    "3 cups lukewarm water",
                ],
            },{
                instruction: "On baking day: "+
                "\nIf you’re baking bread from some dough that was in the fridge, let the dough come to room temperature before proceeding with the “On baking day” instructions." +
                "\nTwenty minutes before baking time, oil your cast-iron Dutch oven OR your stoneware baker(s) and place them into a cold oven. Preheat to 435 F. After 20 minutes, remove your bakeware from the oven (with oven mitts on!). Optional: sprinkle a small amount of cornmeal into the bottom of your baking pan/pot. "+
                "\nStir down your dough. If you’re making a small loaf, save half the dough to a covered container in the fridge for another day and proceed. Otherwise the whole recipe works well in a 5-quart Dutch oven. Scrap your dough into your hot-from-the oven pot or baker. Pat the dough into a nice shape.",
            },
            {
                instruction: "If using a Dutch oven, put your dough in the Dutch oven pot. Put the lid back on and reposition the pot in the oven. Bake a smaller loaf 30 minutes or a larger loaf for 35 minutes. Remove the lid and bake another 10-15 minutes",
                ingredients: [
                    "If using stone bakeware without a lid, put an empty broiler pan or rectangle cake pan on the bottom shelf of the oven when you pre-heat. After you place your dough loaves into the oven, pour 1 ¼ cups of lukewarm water onto the hot broiler pan and shut the door quickly. Be careful not to get burned by any pans, shelves, or steam. For smaller loaves bake 30-35 minutes and remove from oven. Larger loaves 30-40 minutes."
                ]
            },
            {
                instruction: "Tip the crusty, baked loaves out onto the counter and allow to cool on a wire rack. ",
            }
        ]
    },{
        title: "Mom's White Sauce",
        originalBookID: 1,
        recipeNumber: 8,
        intro: "The base of so much comfort!",
        description: "Variations: " +
        "\n\tUse different bouillon flavors: chicken, beef, or Vegeta OR your own homemade stock. (Look for tips on easy homemade stock in a future family cookbook.)"+
        "\n\tCheese sauce. After the white sauce has thickened, add 1 ½ cups of shredded cheese or bits of cheese cut into small chunks. Stir over very low heat until the cheese is melted and mixed in well. This is a chance to use up the little ends of cheese in the fridge, unless you live with a cheese-a-holic in which case use the cheese you’ve been hiding in an unmarked bag in the back of the fridge."+
        "\n\tLactose-free? Use LF milk and LF cheese options."+
        "\n\t2021: Vegan? Use vegan milk and vegan cheese options. Stirring in some nutritional yeast will lend your sauce a delicious cheesy, umami flavor without animal products.",
        outro: "Mom’s white sauce was developed as an alternative to pricey and overly salty canned cream-of-X soups in various recipes. Years later this became a household staple recipe as, one-by-one, family members became lactose intolerant. Home is now the best place for creamy, cheesy, comfort food that is friendly to those who normally can’t order such things in restaurants. And no one misses the lactose.",
        steps: [
            {
                instruction: "Melt margarine over low heat in a saucepan. Add oil. "+
                "\nWhisk in flour. "+
                "\nContinue cooking while whisking for about 1 minute. The mixture will be a fairly clumpy, thick mush in the bottom of your pan, but it should be moist throughout. " +
                "\nAdd milk and water and cook over low-medium heat, stirring constantly until mixture is smooth, bubbles gently, and is thickened.",
                ingredients: [
                    "1/4 cup butter",
                    "2 T oil",
                    "1/2 cup flour",
                    "3 cups milk",
                    "1 cup water or soup stock (water +bouillon)",
                ],
            }
        ]
    },{
        title: "Mac & Cheese",
        originalBookID: 1,
        recipeNumber: 9,
        intro: "",
        description: "Mix a cheese sauce variation of the white sauce with your favorite cooked pasta (makes enough sauce for one pound of dry pasta). Add sprinkles of granulated dried onion, garlic powder, black pepper, and dried basil, and possibly a dash of hot sauce to the cheesy sauce. "+
        "Add cooked bacon bits, because how could bacon not make homemade mac & cheese be amazing?",
        outro: "'You're telling me the white sauce recipe doesn't have cheese in it? -Jason",
       links: [{originalBookID:1, recipeNumber: 8}],
    },{
        title: "Tuna Noodle Casserole",
        originalBookID: 1,
        recipeNumber: 10,
        intro: "",
        description: "Make the plain or cheesy white sauce. Mix your sauce with 1 pound of cooked pasta and 1 large or 2 small cans of tuna, drained. Spoon into a lightly greased 3-quart casserole dish. Cover and bake at 350 for 30-40 minutes, if your casserole is still warm from preparing, or bake 50-60 minutes, if the ingredients cooled off before baking. Options: "+
        "\nIn the last 10 minutes, uncover the casserole and sprinkle with crunchy chow mein noodles, crushed potato chips, or more shredded cheese."+
        "\nBefore baking, mix in 1 cup frozen, thawed peas, unless certain eaters will consider this addition of a possibly healthy green element as an affront to the concept of comfort food.",
        outro: "Tuna is a simple source of protein, perfectly suited to college life -Jason",
       links: [{originalBookID:1, recipeNumber: 8}],
    },{
        title: "Broccoli-chicken Lasagna/Casserole",
        originalBookID: 1,
        recipeNumber: 11,
        intro: "",
        description: "Mix or layer white sauce (using chicken stock), 2 cups cooked chicken cut into bite-sized pieces, 2 cups steamed or frozen and then thawed broccoli chopped into small bits, 2 cups shredded mozzarella cheese, and cooked lasagna noodles. "+
        "\nNeed more rules? Use a 9x13 pan and layer in this order:" +
        "\n\tthin layer of sauce" +
        "\n\tcooked lasagna noodles" +
        "\n\t1 cup chicken + 1 cup broccoli + 1 cup mozzarella* + 1 cup sauce" +
        "\n\tcooked lasagna noodles" +
        "\n\t1 cup chicken + 1 cup broccoli + 1 cup mozzarella* + 1 cup sauce" +
        "\n\tcooked lasagna noodles" +
        "\n\ttop with remaining sauce" +
        "\nAlternately substitute your favorite variety of cooked pasta for the lasagna noodles. Mix all the ingredients together to make a pasta casserole. Spoon the mixture into a lightly greased 3-quart casserole dish and bake at 350 for 45-60 minutes."+
        "\n*The best lactose-free substitute for mozzarella is to mix Trader Joe’s almond shreds with shredded or grated parmesan.",
        outro: "What makes comfort food comforting is its primary goal: Yum and love.",
       links: [{originalBookID:1, recipeNumber: 8}],
    },{
        title: "Gravy for All",
        originalBookID: 1,
        recipeNumber: 12,
        intro: "",
        description:"Gravy is so yummy and liked by all that even when we went through a low-meat phase or when we have no meat around at all, someone will get a hankering. That’s why we developed the cheater recipe. Comfort doesn’t wait for the perfect pot roast."+
        "\n2021: If you make enough gravy to have some leftover, then it will be available to throw together homemade poutine creations (combinations of potatoes, cheese, and gravy). Leftover gravy stirred into many types of broth-based soups becomes the “What is this great flavor?” secret ingredient. Plus, if you make enough extra gravy now, then it will take less time to make the Shepherd’s Pie or the Meat Pies (Recipe 13 and 14) later in the week.",
        outro: "“I come from a family where gravy is considered a beverage.” – Erma Bombeck",
        steps: [
            {
                instruction: "When you have meat juices..."
            },{
                instruction: "Gather up 2 cups of cooked meat juices from the bottom of your roasting pan (after you’ve taken out the chicken or the pot roast) OR create 2 cups of yummy liquid by mixing  meat juices with additional broth (or hot water and bouillon). Put them in a pan on the stove.",
                ingredients: [
                    "2 cups meat juices/broth",
                ]
            },{
                instruction: "In a small bowl whisk together ½ cup flour and 1 cup cold water. Then whisk in ½ cup of the hot meat juices. Whisk your flour mixture into the pan on the stove with the warm meat juices and bring to a bubbling simmer, stirring constantly. Voila! Adjust the thickness by adding a bit more broth if needed to thin it out.",
                ingredients: [
                    "1/2 cup flour (a wee bit more if you like thick gravy)",

                ]
            },{
                instruction: "When you have pan fried or sautéed meats …"
            },{
                instruction: "Remove the meats from the fry pan with a slotted spoon, leaving any grease, juices, or even little bits of meat. You want 3-4 Tablespoons of oil and drippings. If needed, add vegetable oil so you have a total of 3-4 T in your pan. Whisk in flour and cook on medium for 1-2 minutes.",
                ingredients: [
                    "Pan drippings",
                    "1/2 cup flour",
                ]
            },{
                instruction: "Whisk in the broth and bring to a bubbly simmer.",
                ingredients: [
                    "2 cups of broth or bouillon + water",
                ]
            },{
                instruction: "When you seriously need to cheat …"+
                "\nIf you have no meat, buy or create 2 cups of broth. Whisk in ½ cup flour. Bring the entire mixture to a bubbly simmer. –Not quite as flavorful as gravy made from real meat juices, but it works. The boys never complain.",
            }
        ]
    },
    {
        title: "Cottage Pie",
        originalBookID: 1,
        recipeNumber: 13,
        intro: "Shepherd’s pie traditionally is made with lamb. If you use beef, you call it “Cottage Pie.”",
        description: "If your meal contains mashed potatoes and gravy, it’s comfort food. So, shepherd’s pie is the perfect comforting meal to put together with Sunday leftovers. The only problem with that plan is that it’s really difficult to make too much mashed potatoes and gravy. Somehow, even when you peel and cook an extra six potatoes, you don’t end up with enough leftovers to make this recipe. People see the extra potatoes and help themselves to generous seconds or even thirds. My tip: make extra potatoes and extra gravy and keep them hidden in pots in the kitchen and do NOT give in to anyone at the table scraping the potato bowl clean and sighing longingly. Be strong! When you make this cottage pie a few days later, they’ll thank you.",
        outro: "'Artisan' bread doesn’t take an artist’s touch, just a good recipe and your commitment to try.",
        steps: [
            {
                instruction: "Mix dry ingredients in a very large container or bowl. Add the water and stir until there are no dry spots, about 2 minutes. Put a lid on the container or cover the bowl with a silicon cover. Let the dough sit on the counter at least 4 hours or overnight. Then either use the dough OR put it in the refrigerator until ready to use.",
                ingredients: [
                    "6 cups flour",
                    "1 ½ t dry yeast",
                    "2 t salt",
                    "3 cups lukewarm water",
                ],
            },{
                instruction: "On baking day: "+
                "\nIf you’re baking bread from some dough that was in the fridge, let the dough come to room temperature before proceeding with the “On baking day” instructions." +
                "\nTwenty minutes before baking time, oil your cast-iron Dutch oven OR your stoneware baker(s) and place them into a cold oven. Preheat to 435 F. After 20 minutes, remove your bakeware from the oven (with oven mitts on!). Optional: sprinkle a small amount of cornmeal into the bottom of your baking pan/pot. "+
                "\nStir down your dough. If you’re making a small loaf, save half the dough to a covered container in the fridge for another day and proceed. Otherwise the whole recipe works well in a 5-quart Dutch oven. Scrap your dough into your hot-from-the oven pot or baker. Pat the dough into a nice shape.",
            },
            {
                instruction: "If using a Dutch oven, put your dough in the Dutch oven pot. Put the lid back on and reposition the pot in the oven. Bake a smaller loaf 30 minutes or a larger loaf for 35 minutes. Remove the lid and bake another 10-15 minutes",
                ingredients: [
                    "If using stone bakeware without a lid, put an empty broiler pan or rectangle cake pan on the bottom shelf of the oven when you pre-heat. After you place your dough loaves into the oven, pour 1 ¼ cups of lukewarm water onto the hot broiler pan and shut the door quickly. Be careful not to get burned by any pans, shelves, or steam. For smaller loaves bake 30-35 minutes and remove from oven. Larger loaves 30-40 minutes."
                ]
            },
            {
                instruction: "Tip the crusty, baked loaves out onto the counter and allow to cool on a wire rack. ",
            }
        ]
    },
    

]

export const BookData : Book[] = [
    {
        title: "Comfort Foods",
        id: 1,
        imageLink: "",
        intro: "For Jason who has been asking for the family recipes for years",
        edition: 2,
    }
]

// title: string; 
// intro?: string;
// outro?: string;
// originalBookID?: number;
// recipeNumber?: number;
// steps?: Step[];
// imageLink?: string; 
// categoryID?: number;
// lastEdit?: string;

// export interface IngredientList {
//     [key: string]: string
// }

// export interface Book {
//     name: string;
//     id: number;
//     imageLink?: string;
//     edition?: number;
// }

// export interface Category {
//     id: number,
//     name: string,
//     blurb: string,
//     imageLink?: string,
// }

// export interface Step {
//     instruction: string;
//     ingredients?: string[];
// }

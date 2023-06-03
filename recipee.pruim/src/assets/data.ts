import { Recipe , Book, IngredientList} from "src/app/interfaces/recipe";

export const RecipeData : Recipe[] = [
    {
        title: "Basic White Loaves",
        originalBookID: 1,
        recipeeNumber: 1,
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
        recipeeNumber: 2,
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
        recipeeNumber: 3,
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
        recipeeNumber: 4,
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
    },
    

]

export const BookData : Book[] = [
    {
        name: "Comfort Foods",
        id: 1,
        imageLink: "",
        edition: 2,
    }
]

// title: string; 
// intro?: string;
// outro?: string;
// originalBookID?: number;
// recipeeNumber?: number;
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

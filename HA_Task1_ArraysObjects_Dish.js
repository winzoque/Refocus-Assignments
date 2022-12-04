//=================================================//

dishObject = {
    "dishes" : [
        {
            "dishID" : "Dish A",
            "dishName" : "Chicken Ramen",
            "dishPrice" : 275,
            "dishIngredients" : [
                '*2 chicken breasts (boneless, skin-on)',
                '\n*kosher salt and freshly-ground black pepper, to season',
                '\n*1 Tbsp unsalted butter',
                '\n*2 tsp sesame or vegetable oil',
                '\n*2 tsp fresh ginger, minced',
                '\n*1 Tbsp fresh garlic, minced',
                '\n*3 Tbsp low-sodium soy sauce',
                '\n*2 Tbsp mirin',
                '\n*4 cups rich chicken stock',
                '\n*1 oz dried shitake mushrooms (or 1/2 cup fresh)',
                '\n*1 to 2 tsp sea salt, to taste',
                '\n*2 large eggs',
                '\n*1/2 cup scallions, sliced',
                '\n*2 (3 oz) packs dried ramen noodles',
                '\n*optional: fresh jalapeño or chili slices, for serving'
            ]
        },
        {
            "dishID" : "Dish B",
            "dishName" : "Crispy Fried Chicken",
            "dishPrice" : 120,
            "dishIngredients" : [
                '*4 cups all-purpose flour, divided',
                '\n*2 tablespoons garlic salt',
                '\n*1 tablespoon paprika',
                '\n*3 teaspoons pepper, divided',
                '\n*2-1/2 teaspoons poultry seasoning',
                '\n*2 large eggs',
                '\n*1-1/2 cups water',
                '\n*1 teaspoon salt',
                '\n*2 broiler/fryer chickens (3-1/2 to 4 pounds each), cut up',
                '\n*Oil for deep-fat frying',

            ]
        },
        {
            "dishID" : "Dish C",
            "dishName" : "Chicken Burger",
            "dishPrice" : 79,
            "dishIngredients" : [
                '*1 pound extra-lean ground chicken',
                '\n*½ cup Italian-seasoned bread crumbs, divided',
                '\n*½ small onion, finely grated',
                '\n*1 egg',
                '\n*2 cloves garlic, minced',
                '\n*salt and ground black pepper to taste',
                '\n*2 teaspoons olive oil',
            ]
        }
    ],
    "displayDish" : function(){
        for(dish of this.dishes){
            console.log('Please select your recipe for your dish:\n' + dish.dishID + '\n' + dish.dishName + '\nfor only ₱' + dish.dishPrice + '\nwith the following ingredient:\n' + dish.dishIngredients + '\n\n');
            
        }
    }
}


//for display
dishObject.displayDish();
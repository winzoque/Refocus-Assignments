//=================================================//

menu = {
    "restoName" : "\n~Di Restaurant~\n\n",
    "dishes" : [
        {
            
            "dishName" : "Chicken Ramen",
            "dishPrice" : 275,
            "dishIngredients" : [
                ' Grilled Chicken Fillet',
                ' Japanese Noodles',
                ' Rich Miso Based Soup',
                ' House Blend Iced Tea',
                ' Vegetable Gyoza',
                ' Dried Shitake Mushrooms',
                ' Fresh Jalapeño or Chili slices, for serving'
            ]
        },
        {
            
            "dishName" : "Crispy Fried Chicken",
            "dishPrice" : 120,
            "dishIngredients" : [
                ' Crispy Fried Chicken',
                ' Egg',
                ' Sliced Cucumbers',
                ' Fresh Tomatoes',
                ' Lettuce',
                ' Lemonade Juice'

            ]
        },
        {
            
            "dishName" : "Chicken Burger",
            "dishPrice" : 99,
            "dishIngredients" : [
                ' Crispy Chicken Fillet',
                ' Egg',
                ' Pineapple Juice',
                ' Fries'

            ]
        }
    ],
    "displayRestoName" : function(){
        console.log(this.restoName);
    },
    "displayDish" : function(){
        for(dish of this.dishes){
            console.log('*' + dish.dishName + ', ₱' + dish.dishPrice + ',\nContains' + dish.dishIngredients + '\n\n');
            
        }
    }
}


//for display
menu.displayRestoName();
console.log('Menu:\n');
menu.displayDish();
import BasicButton from "@/components/ui/buttons/BasicButton";
import {useState} from "react";
import classes from "../GardeningHome.module.scss";

import {getFoodData} from "@/pages/api/gardening/food";

import FoodCard from "@/components/gardening/food/FoodCard";

const FoodHomePage = ({ allFood}) => {
    // sort food by name and put into state
    const [foodItems, setFoodItems] = useState(allFood.sort((a, b) => a.plant > b.plant ? 1 : -1));
    // maintenance mode should be default after testing and everything is planted
    const [showMaintenance, setShowMaintenance] = useState(false);

    const sortFoodItems = sortBy => {
        let newFoodItems;
        if (sortBy === "harvest") {
            newFoodItems = foodItems.slice().sort((a, b) => a.lifecycle.grow.daysToHarvest > b.lifecycle.grow.daysToHarvest ? 1 : -1);
        } else if (sortBy === "name") {
            newFoodItems = foodItems.slice().sort((a, b) => a.plant > b.plant ? 1 : -1);
        } else {
            newFoodItems = foodItems.slice();
        }
        setFoodItems(newFoodItems);
    };

    const showTypeHandler = () => setShowMaintenance(!showMaintenance);

    const foodCards = foodItems.map(foodItem =>
        <FoodCard
            key={ foodItem.slug }
            food={ foodItem }
            showMaintenance={ showMaintenance }
        />
    );

    return (
        <article className={ classes.food__container }>
            <h1 className={ "heading-1 center-text" }>Food</h1>
            <div className={ "food-buttons" }>
                <BasicButton onClick={ showTypeHandler }>
                    { showMaintenance ? "Planting Deets" : "Maintenance Deets" }
                </BasicButton>
                { showMaintenance &&
                    <BasicButton onClick={ () => sortFoodItems("harvest") }>
                        Sort by Days to Harvest
                    </BasicButton>
                }
                <BasicButton onClick={ () => sortFoodItems("name") }>
                    Sort by Name
                </BasicButton>
            </div>
            <div className={ classes.food_grid }>
                { foodCards }
            </div>
        </article>
    );
};


export async function getStaticProps() {
    // const response = await fetch(`http://localhost:3000/api/gardening/food`);
    // const data = await response.json();
    const data = await getFoodData();

    // if (!data) return;
    return { props: { allFood: data} };
}

export default FoodHomePage;
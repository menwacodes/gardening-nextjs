import BasicButton from "@/components/ui/buttons/BasicButton";
import {useState} from "react";
import classes from "../GardeningHome.module.scss";

import FoodCard from "@/components/gardening/food/FoodCard";

const GardeningHomePage = ({ allFood, count }) => {
    const [foodItems, setFoodItems] = useState(allFood.sort((a, b) => a.plant > b.plant ? 1 : -1));
    //food.sort((a, b) => {return a.plant > b.plant ? 1 : -1})

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

    const foodCards = foodItems.map(foodItem => <FoodCard key={ foodItem.slug } food={ foodItem }/>);

    return (
        <article className={ classes.food__container }>
            <h1 className={ "heading-1 center-text" }>Food</h1>
            <div className={ "page-buttons" }>
                <BasicButton onClick={ () => sortFoodItems("harvest") }>
                    Sort by Days to Harvest
                </BasicButton>
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
    const response = await fetch(`http://localhost:3000/api/gardening/food`);
    const data = await response.json();
    return { props: { allFood: data.data, count: data.count } };
}

export default GardeningHomePage;
import classes from "./GardeningHome.module.scss"

import FoodCard from "@/components/gardening/food/FoodCard";

const GardeningHomePage = ({allFood, count}) => {

    const foodCards = allFood.map(foodItem => <FoodCard key={foodItem.slug} food={foodItem}/>);
    return (
        <div className={classes.food_grid}>
            {foodCards}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/api/gardening/food`);
    const data = await response.json();
    return {props: {allFood: data.data, count: data.count}};

}

export default GardeningHomePage;
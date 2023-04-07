import FlowerCard from "@/components/gardening/flowers/FlowerCard";
import BasicButton from "@/components/ui/buttons/BasicButton";
import {useState} from "react";
import classes from "../GardeningHome.module.scss";

import {getFlowerData} from "@/pages/api/gardening/flowers";

const FlowersHomePage = ({ allFlowers}) => {
    // sort flowers and put into state
    const [flowerItems, setFlowerItems] = useState(allFlowers.sort((a, b) => a.plant > b.plant ? 1 : -1));

    // maintenance mode should be default after testing and everything is planted
    const [showMaintenance, setShowMaintenance] = useState(false);

    const showTypeHandler = () => setShowMaintenance(!showMaintenance);

    // create cards
    const flowerCards = flowerItems.map(flower =>
        <FlowerCard
            key={ flower.slug }
            flower={ flower }
            showMaintenance={ showMaintenance }
        />
    );

    return (
        <article className={classes.food__container}>
            <h1 className={"heading-1 center-text"}>Flowers</h1>
            <div className={ "food-buttons" }>
                <BasicButton onClick={ showTypeHandler }>
                    { showMaintenance ? "Planting Deets" : "Maintenance Deets" }
                </BasicButton>
            </div>
            <div className={classes.food_grid}>
                {flowerCards}
            </div>
        </article>
    );
};

export async function getStaticProps() {
    // const response = await fetch(`http://localhost:3000/api/gardening/flowers`);
    // const data = await response.json();
    const data = await getFlowerData();

    // if (!data) return;
    return { props: { allFlowers: data} };
}

export default FlowersHomePage;
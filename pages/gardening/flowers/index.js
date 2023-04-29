import FlowerCard from "@/components/gardening/flowers/FlowerCard";
import BasicButton from "@/components/ui/buttons/BasicButton";
// import {isAdmin} from "@/pages/api/auth/get-role";
import {useState} from "react";
import classes from "../GardeningHome.module.scss";

import {getFlowers} from "@/pages/api/gardening/flowers";

// /**
//  * Function takes in an array of flowers and returns by specific sort
//  * @param flowers: Array of flowers from state
//  * @param sortBy: What flowers should be sorted by
//  * @return: Sorted array
//  */
// const sortFlowers = (flowers, sortBy) => {
//     console.log(flowers)
//     console.log(sortBy)
//     let returnedFlowers = flowers.slice();
//     if (sortBy === "seasonality") {
//         returnedFlowers = flowers.sort((a, b) => a.attributes.seasonality > b.attributes.seasonality ? 1 : -1)
//     }
//     console.log(returnedFlowers)
//
//     return returnedFlowers;
// }

const FlowersHomePage = ({ allFlowers }) => {

    // put flowers into state
    const [flowerItems, setFlowerItems] = useState(allFlowers);

    // maintenance mode should be default after testing and everything is planted
    const [showMaintenance, setShowMaintenance] = useState(false);

    const showTypeHandler = () => setShowMaintenance(!showMaintenance);

    const sortFlowerItems = sortBy => {

        // const sortedFlowers = sortFlowers(flowerItems, "seasonality")
        // setFlowerItems(sortedFlowers)

        let newFlowerItems;
        if (sortBy === "seasonality") {
            newFlowerItems = flowerItems
                .slice()
                .sort((a, b) => a.attributes.seasonality > b.attributes.seasonality ? 1 : -1);
        }

        if (sortBy === "rootDepth")  {
            newFlowerItems = flowerItems
                .slice()
                .sort((a, b) => a.attributes.root.minDepth > b.attributes.root.minDepth ? 1 : -1)
        }

        setFlowerItems(newFlowerItems);
    };

    // create cards
    const flowerCards = flowerItems.map(flower =>
        <FlowerCard
            key={ flower.slug }
            flower={ flower }
            showMaintenance={ showMaintenance }
        />
    );

    return (
        <article className={ classes.food__container }>
            <h1 className={ "heading-1 center-text" }>Flowers</h1>
            <div className={ "food-buttons" }>
                <BasicButton onClick={ showTypeHandler }>
                    { showMaintenance ? "Planting Deets" : "Maintenance Deets" }
                </BasicButton>
                <BasicButton onClick={ () => sortFlowerItems("seasonality") }>
                    Sort Season
                </BasicButton>
                <BasicButton onClick={ () => sortFlowerItems("rootDepth") }>
                    Sort Root Depth
                </BasicButton>
            </div>
            <div className={ classes.food_grid }>
                { flowerCards }
            </div>
        </article>
    );
};

export async function getStaticProps() {
    const data = await getFlowers();
    return { props: { allFlowers: JSON.parse(JSON.stringify(data)) } };
}

export default FlowersHomePage;
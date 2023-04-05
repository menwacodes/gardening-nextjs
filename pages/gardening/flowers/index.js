import BasicButton from "@/components/ui/buttons/BasicButton";
import {useState} from "react";
import classes from "../GardeningHome.module.scss";

const FlowersHomePage = ({ allFlowers, count }) => {
    // sort flowers and put into state
    const [flowerItems, setFlowerItems] = useState(allFlowers.sort((a, b) => a.plant > b.plant ? 1 : -1))

    // maintenance mode should be default after testing and everything is planted
    const [showMaintenance, setShowMaintenance] = useState(false);



    return (
        <>
            flower page
        </>
    );
};

export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/api/gardening/flowers`);
    const data = await response.json();
    return { props: { allFlowers: data.data, count: data.count } };
}

export default FlowersHomePage;
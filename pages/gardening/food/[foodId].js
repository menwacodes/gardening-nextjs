import {useRouter} from "next/router";

const HerbById = () => {
    return (
        <>
            <svg className={``}>
                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
            </svg>
            <svg style={{transform: "rotate(90deg)"}}>
                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
            </svg>
            <svg>
                <use href={"/img/sprite.svg#icon-stopwatch"}></use>
            </svg>
            <svg>
                <use href={"/img/sprite.svg#icon-calendar"}></use>
            </svg>
            <svg>
                <use href={"/img/sprite.svg#icon-pencil"}></use>
            </svg>
        </>
    );
};

export default HerbById;
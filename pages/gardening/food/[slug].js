import Image from "next/image";
import classes from "./FoodPage.module.scss";

const FoodById = ({food}) => {

    return (
        <div className={"container"}>
            <header className={classes.header}>
                <h1 className={classes.header__main}>{food.plant}</h1>
                <h2 className={classes.header__secondary}>~ {food.fullName} ~</h2>
                <Image
                    className={classes.header__image}
                    src={`/img/gardening/${food.image}`}
                    width={"1920"}
                    height={"1080"}
                    alt={`Image of ${food.plant}`}
                />
            </header>
            <article className={classes.lifecycle}>
                <section className={classes.lifecycle__section}>
                    <h2 className={classes.lifecycle__title}>Sow</h2>
                    <ul className={classes.lifecycle__item}>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={`${classes.lifecycle__item__icon} ${classes.rotate90}`}>
                                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                            </svg>
                            <span>Planting Depth: {food.lifecycle.sow.plantingDepth}&quot;</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={classes.lifecycle__item__icon}>
                                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                            </svg>
                            <span>Start Spacing: {food.lifecycle.sow.startSpacing}&quot;</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={classes.lifecycle__item__icon} style={{strokeWidth: "4"}}>
                                <use href={"/img/sprite.svg#icon-shovel"}></use>
                            </svg>
                            <span>Direct Sow: {food.lifecycle.sow.directSow}&quot;</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={classes.lifecycle__item__icon} style={{strokeWidth: "4"}}>
                                <use href={"/img/sprite.svg#icon-calendar"}></use>
                            </svg>
                            <span>Indoor Start Days: {food.lifecycle.sow.indoorStartTimingDays}</span>
                        </li>
                    </ul>
                </section>

                <section className={classes.lifecycle__section}>
                    <h2 className={classes.lifecycle__title}>Seedling</h2>
                    <ul className={classes.lifecycle__item}>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={classes.lifecycle__item__icon}>
                                <use href={"/img/sprite.svg#icon-calendar"}></use>
                            </svg>
                            <span>Days to Sprout: {food.lifecycle.seedling.daysToGermination}</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={classes.lifecycle__item__icon}>
                                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                            </svg>
                            <span>Thinning: {food.lifecycle.seedling.thinning}</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={classes.lifecycle__item__icon} style={{strokeWidth: "4"}}>
                                <use href={"/img/sprite.svg#icon-calendar"}></use>
                            </svg>
                            <span>Transplanting: {food.lifecycle.seedling.transplanting}</span>
                        </li>
                    </ul>
                </section>

                <section className={classes.lifecycle__section}>
                    <h2 className={classes.lifecycle__title}>Grow</h2>
                    <ul className={classes.lifecycle__item}>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={classes.lifecycle__item__icon}>
                                <use href={"/img/sprite.svg#icon-calendar"}></use>
                            </svg>
                            <span>Days to Harvest: {food.lifecycle.grow.daysToHarvest}</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={`${classes.lifecycle__item__icon} ${classes.rotate90}`}>
                                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                            </svg>
                            <span>Height Min: {food.lifecycle.grow.height.min}&quot;</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={`${classes.lifecycle__item__icon} ${classes.rotate90}`}
                                 style={{strokeWidth: "4"}}>
                                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                            </svg>
                            <span>Height Max: {food.lifecycle.grow.height.max}&quot;</span>
                        </li>
                    </ul>
                </section>
            </article>
            {food.notes.length > 0 &&
                <>
                    <h2 className={classes.header__notes}>Notes</h2>
                    <article className={classes.notes} dangerouslySetInnerHTML={{__html: food.notes}}/>
                </>
            }
            {food.url.length > 0 &&
            <p>See also <a href={ food.url } target={"_blank"} rel="noreferrer">{food.url}</a></p>
            }

        </div>
    );
};

export async function getStaticPaths() {
    const response = await fetch(`http://localhost:3000/api/gardening/food`); // data
    const data = await response.json();

    const pathParams = data.data.map(datum => ({params: {slug: datum.slug}})); // component-specific id

    return {paths: pathParams, fallback: false};
}


export async function getStaticProps({params}) {
    const response = await fetch(`http://localhost:3000/api/gardening/food`); // data
    const data = await response.json();

    const food = data.data.find(f => f.slug === params.slug);

    return {props: {food}, revalidate: 10};
}

export default FoodById;
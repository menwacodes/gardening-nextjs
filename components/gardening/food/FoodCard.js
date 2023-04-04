import Link from "next/link";

import Image from "next/image";
import classes from "./FoodCard.module.scss";

const FoodCard = ({ food, showMaintenance }) => {
    return (
        <Link href={ `/gardening/food/${ food.slug }` }>
            <article className={ classes.card }>
                <Image className={ classes.card__img } src={ `/img/gardening/${ food.image }` } width={ "1920" }
                       height={ "1080" }
                       alt={ "" }/>
                <div className={ classes.card__content }>
                    <p className={ classes.card__title }>{ food.plant }</p>
                    <ul className={ classes.card__items }>

                        {/*
                                PLANTING ITEMS
                        */ }

                        { !showMaintenance &&
                            <>
                                <li className={ classes.card__item }>
                                    <svg className={ `${ classes.card__icon } ${ classes.rotate90 }` }>
                                        <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                                    </svg>
                                    <span
                                        className={ classes.card__text }>Root Depth: { food.attributes.root.depth.min }-{ food.attributes.root.depth.max }&quot;</span>
                                </li>
                                <li className={ classes.card__item }>
                                    <svg className={ `${ classes.card__icon } ${ classes.rotate90 }` }>
                                        <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                                    </svg>
                                    <span
                                        className={ classes.card__text }>Planting Depth: { food.lifecycle.sow.plantingDepth }&quot;</span>
                                </li>
                                <li className={ classes.card__item }>
                                    <svg className={ classes.card__icon }>
                                        <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                                    </svg>
                                    <span
                                        className={ classes.card__text }>Start Spacing: { food.lifecycle.sow.startSpacing }&quot;</span>
                                </li>
                            </>
                        }
                        {/*
                                MAINTENANCE ITEMS
                        */ }
                        { showMaintenance &&
                            <>
                                <li className={ classes.card__item }>
                                    <svg className={ classes.card__icon }>
                                        <use href={ "/img/sprite.svg#icon-calendar" }></use>
                                    </svg>
                                    <span
                                        className={ classes.card__text }>Days to Germination: { food.lifecycle.seedling.daysToGermination }</span>
                                </li>
                                <li className={ classes.card__item }>
                                    <svg className={ classes.card__icon }>
                                        <use href={ "/img/sprite.svg#icon-calendar" }></use>
                                    </svg>
                                    <span
                                        className={ classes.card__text }>Days to Harvest: { food.lifecycle.grow.daysToHarvest }</span>
                                </li>
                            </> }
                    </ul>
                </div>
            </article>
        </Link>
    );
};

export default FoodCard;
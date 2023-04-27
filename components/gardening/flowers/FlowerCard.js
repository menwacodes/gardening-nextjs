import {numToFrac} from "@/lib/numberHelper";
import Link from "next/link";
import Image from "next/image";
import classes from "../food/FoodCard.module.scss";

const FlowerCard = ({ flower, showMaintenance }) => {
    return (
        <Link href={ `/gardening/flowers/${ flower.slug }` }>
            <article className={ classes.card }>
                <Image
                    className={ classes.card__img }
                    src={ `/img/gardening/${ flower.image }` }
                    alt={ "" }
                    width={ "1920" }
                    height={ "1000" }
                />
                <div className={ classes.card__content }>
                    <p className={ classes.card__title }>{ flower.plant }</p>
                    <ul className={ classes.card__items }>
                        {/*
                                PLANTING ITEMS
                     */ }

                        { !showMaintenance &&
                            <>
                                <li className={ classes.card__item }>
                                    <svg className={ `${ classes.card__icon }` }>
                                        <use href={ "/img/sprite.svg#icon-calendar" }></use>
                                    </svg>
                                    <span className={ classes.card__text }>
                                    Seasonality: { flower.attributes.seasonality }
                                    </span>
                                </li>
                                <li className={ classes.card__item }>
                                    <svg className={ `${ classes.card__icon } ${ classes.rotate90 }` }>
                                        <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                                    </svg>
                                    <span className={ classes.card__text }>
                                    Root Depth: { flower.attributes.root.minDepth }&quot;
                                    </span>
                                </li>
                                <li className={ classes.card__item }>
                                    <svg className={ `${ classes.card__icon } ${ classes.rotate90 }` }>
                                        <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                                    </svg>
                                    <span className={ classes.card__text }>
                                    Planting Depth: { numToFrac(flower.lifecycle.sow.plantingDepth) }&quot;
                                </span>
                                </li>
                                <li className={ classes.card__item }>
                                    <svg className={ classes.card__icon }>
                                        <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                                    </svg>
                                    <span className={ classes.card__text }>
                                    Start Spacing: { flower.lifecycle.sow.startSpacing }&quot;
                                </span>
                                </li>
                                <li className={ classes.card__item }>
                                    <svg className={ classes.card__icon }>
                                        <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                                    </svg>
                                    <span className={ classes.card__text }>
                                    Direct Sow: { flower.lifecycle.sow.directSow }
                                </span>
                                </li>
                                {
                                    flower.wherePlanted &&
                                    <li className={ classes.card__item }>

                                <span className={ classes.card__text }>
                                    Where: { flower.wherePlanted }
                                </span>
                                    </li>
                                }
                            </>

                        }

                        {/*
                                MAINTENANCE ITEMS
                     */ }

                        {
                            showMaintenance &&
                            <>
                                <li className={ classes.card__item }>
                                    <svg className={ classes.card__icon }>
                                        <use href={ "/img/sprite.svg#icon-water-drop" }></use>
                                    </svg>
                                    <span className={ classes.card__text }>
                                    Water: { flower.lifecycle.grow.water }
                                </span>
                                </li>
                                <li className={ classes.card__item }>
                                <span className={ classes.card__text }>
                                    Fertilizer:<br/> { flower.lifecycle.grow.fertilizer }
                                </span>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </article>
        </Link>
    );
};

export default FlowerCard;
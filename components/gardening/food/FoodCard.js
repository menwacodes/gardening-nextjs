import Image from "next/image";
import classes from "./FoodCard.module.scss"

const FoodCard = ({food}) => {
  return (
        <article className={classes.card}>
            <Image className={classes.card__img} src={`/img/gardening/${food.image}`} width={"1920"} height={"1080"} alt={""}/>
            <div className={classes.card__content}>
                <p className={classes.card__title}>{food.plant}</p>
                <ul className={classes.card__items}>
                    <li className={classes.card__item}>
                        <svg className={`${classes.card__icon} ${classes.rotate90}`}>
                            <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                        </svg>
                        <span>Planting Depth: {food.lifecycle.sow.plantingDepth}&quot;</span>
                    </li>
                    <li className={classes.card__item}>
                        <svg className={classes.card__icon}>
                            <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                        </svg>
                        <span>Start Spacing: {food.lifecycle.sow.startSpacing}&quot;</span>
                    </li>
                    <li className={classes.card__item}>
                        <svg className={classes.card__icon}>
                            <use href={"/img/sprite.svg#icon-calendar"}></use>
                        </svg>
                        <span>Days to Germination: {food.lifecycle.seedling.daysToGermination}</span>
                    </li>
                    <li className={classes.card__item}>
                        <svg className={classes.card__icon}>
                            <use href={"/img/sprite.svg#icon-calendar"}></use>
                        </svg>
                        <span>Days to Harvest: {food.lifecycle.grow.daysToHarvest}</span>
                    </li>
                </ul>
            </div>
        </article>
  )
}

export default FoodCard
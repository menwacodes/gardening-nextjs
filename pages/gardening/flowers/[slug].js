import Image from "next/image";
import classes from "../food/FoodPage.module.scss";

const FlowersById = ({ flower }) => {

    return (
        <article className={ "container" }>
            <header className={ classes.header }>
                <h1 className={ classes.header__main }>{ flower.plant }</h1>
                <h2 className={ classes.header__secondary }>~ { flower.fullName } ~</h2>
                <figure className={ classes.header__figure }>
                    <Image
                        className={ classes.header__image }
                        src={ `/img/gardening/${ flower.image }` }
                        width={ "1920" }
                        height={ "1080" }
                        alt={ `Image of ${ flower.plant }` }
                    />
                    <figcaption className={ classes.header__figure__caption }>

                        <span className={ classes.header__figure__caption__left }>Attracts:</span>
                        <span>{ flower.attributes.attracts }</span>

                        <span className={ classes.header__figure__caption__left }>Blooms:</span>
                        <span>{ flower.blooms }</span>

                        <span className={ classes.header__figure__caption__left }>Fertilizer:</span>
                        <span> { flower.lifecycle.grow.fertilizer }</span>

                        <span className={ classes.header__figure__caption__left }>pH Range:</span>
                        <span>{ flower.attributes.soil.pH.min } - { flower.attributes.soil.pH.max }</span>

                        <span className={ classes.header__figure__caption__left }>Soil Conditions:</span>
                        <span>{ flower.attributes.soil.conditions }</span>

                        <span className={ classes.header__figure__caption__left }>Sun Exposure:</span>
                        <span>{ flower.attributes.sun.exposure }</span>

                        <span className={ classes.header__figure__caption__left }>Water:</span>
                        <span>{ flower.lifecycle.grow.water }</span>

                    </figcaption>
                </figure>
            </header>
            { flower.notes.length > 0 &&
                <section className={ classes.section__notes }>
                    <h2 className={ classes.header__notes }>Notes</h2>
                    <div className={ classes.notes } dangerouslySetInnerHTML={ { __html: flower.notes } }></div>
                </section>
            }

            <h2 className={ classes.header__notes }>Lifecycle</h2>
            <article className={ classes.lifecycle }>
                <section className={ classes.lifecycle__section }>
                    <h2 className={ classes.lifecycle__title }>Sow</h2>
                    <ul className={ classes.lifecycle__item }>
                        <li className={ classes.lifecycle__item__line }>
                            <svg className={ `${ classes.lifecycle__item__icon } ${ classes.rotate90 }` }>
                                <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                            </svg>
                            <span>Planting Depth: { flower.lifecycle.sow.plantingDepth }&quot;</span>
                        </li>
                        <li className={ classes.lifecycle__item__line }>
                            <svg className={ classes.lifecycle__item__icon }>
                                <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                            </svg>
                            <span>Start Spacing: { flower.lifecycle.sow.startSpacing }&quot;</span>
                        </li>
                        <li className={ classes.lifecycle__item__line }>
                            <svg className={ classes.lifecycle__item__icon } style={ { strokeWidth: "4" } }>
                                <use href={ "/img/sprite.svg#icon-calendar" }></use>
                            </svg>
                            <span>Indoor Start Days: { flower.lifecycle.sow.indoorStartTimingDays }</span>
                        </li>
                        <li className={ classes.lifecycle__item__line }>
                            <svg className={ classes.lifecycle__item__icon } style={ { strokeWidth: "4" } }>
                                <use href={ "/img/sprite.svg#icon-shovel" }></use>
                            </svg>
                            <span>Direct Sow: { flower.lifecycle.sow.directSow }</span>
                        </li>
                        { flower.wherePlanted &&
                            <li className={ classes.lifecycle__item__line }>
                                <span>Where: <br/>{ flower.wherePlanted }</span>
                            </li>
                        }
                    </ul>
                </section>

                <section className={ classes.lifecycle__section }>
                    <h2 className={ classes.lifecycle__title }>Seedling</h2>
                    <ul className={ classes.lifecycle__item }>
                        <li className={ classes.lifecycle__item__line }>
                            <svg className={ classes.lifecycle__item__icon }>
                                <use href={ "/img/sprite.svg#icon-calendar" }></use>
                            </svg>
                            <span>Days to Sprout: { flower.lifecycle.seedling.daysToGermination }</span>
                        </li>
                        <li className={ classes.lifecycle__item__line }>
                            <svg className={ classes.lifecycle__item__icon }>
                                <use href={ "/img/sprite.svg#icon-horiz-ruler" }></use>
                            </svg>
                            <span>Thinning: { flower.lifecycle.seedling.thinning }</span>
                        </li>
                        <li className={ classes.lifecycle__item__line }>
                            <span>Transplanting: <br/> { flower.lifecycle.seedling.transplanting }</span>
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
                            <span>Days to Harvest: {flower.lifecycle.grow.daysToHarvest}</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={`${classes.lifecycle__item__icon} ${classes.rotate90}`}>
                                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                            </svg>
                            <span>Height Min: {flower.lifecycle.grow.height.min}&quot;</span>
                        </li>
                        <li className={classes.lifecycle__item__line}>
                            <svg className={`${classes.lifecycle__item__icon} ${classes.rotate90}`}
                                 style={{strokeWidth: "4"}}>
                                <use href={"/img/sprite.svg#icon-horiz-ruler"}></use>
                            </svg>
                            <span>Height Max: {flower.lifecycle.grow.height.max}&quot;</span>
                        </li>
                    </ul>
                </section>
                
            </article>
        </article>
    );
};

export async function getStaticPaths() {
    const response = await fetch(`http://localhost:3000/api/gardening/flowers`); // data
    const data = await response.json();

    const pathParams = data.data.map(datum => ({ params: { slug: datum.slug } }));

    return { paths: pathParams, fallback: false };
}


export async function getStaticProps({ params }) {
    const response = await fetch(`http://localhost:3000/api/gardening/flowers`); // data
    const data = await response.json();

    const flower = data.data.find(f => f.slug === params.slug);

    return { props: { flower }, revalidate: 10 };
}

export default FlowersById;
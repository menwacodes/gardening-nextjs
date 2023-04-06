import Image from "next/image";
import classes from "../food/FoodPage.module.scss";

const FlowersById = ({ flower }) => {

    return (
        <div className={ "container" }>
            <header className={ classes.header }>
                <h1 className={ classes.header__main }>{ flower.plant }</h1>
                <h2 className={ classes.header__secondary }>~ { flower.fullName } ~</h2>
                <figure className={classes.header__figure}>
                    <Image
                        className={ classes.header__image }
                        src={ `/img/gardening/${ flower.image }` }
                        width={ "1920" }
                        height={ "1080" }
                        alt={ `Image of ${ flower.plant }` }
                    />
                    <figcaption className={classes.header__figure__caption}>

                            <span className={classes.header__figure__caption__left}>Attracts:</span>
                            <span className={classes.header__figure__caption__right}>{ flower.attributes.attracts }</span>


                            <span className={classes.header__figure__caption__left}>Blooms:</span>
                            <span className={classes.header__figure__caption__right}>{ flower.blooms }</span>


                            <span className={classes.header__figure__caption__left}>Fertilizer:</span>
                            <span className={classes.header__figure__caption__right}> { flower.lifecycle.grow.fertilizer }</span>


                            <span className={classes.header__figure__caption__left}>pH Range:</span>
                            <span className={classes.header__figure__caption__right}>{ flower.attributes.soil.pH.min } - { flower.attributes.soil.pH.max }</span>


                            <span className={classes.header__figure__caption__left}>Soil Conditions:</span>
                            <span className={classes.header__figure__caption__right}>{ flower.attributes.soil.conditions }</span>


                            <span className={classes.header__figure__caption__left}>Sun Exposure:</span>
                            <span className={classes.header__figure__caption__right}>{ flower.attributes.sun.exposure }</span>


                            <span className={classes.header__figure__caption__left}>Water:</span>
                            <span className={classes.header__figure__caption__right}>{ flower.lifecycle.grow.water }</span>

                    </figcaption>
                </figure>
            </header>

        </div>
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
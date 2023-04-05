// import packages
// import files with relative reference

const FlowersById = ({flower}) => {

  return (
    <>
      slug page
    </>
  )
}

export async function getStaticPaths() {
    const response = await fetch(`http://localhost:3000/api/gardening/flowers`); // data
    const data = await response.json();

    const pathParams = data.data.map(datum => ({params: {slug: datum.slug}}));

    return {paths: pathParams, fallback: false};
}


export async function getStaticProps({params}) {
    const response = await fetch(`http://localhost:3000/api/gardening/flowers`); // data
    const data = await response.json();

    const flower = data.data.find(f => f.slug === params.slug);

    return {props: {flower}, revalidate: 10};
}

export default FlowersById
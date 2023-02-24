// import packages
// import files with relative reference

const GardeningHomePage = ({allHerbs, count}) => {
    console.log(count)
    console.log(allHerbs)
  return (
    <>
      Gardening Home Page
    </>
  )
}

export async function getStaticProps(){
    const response = await fetch(`http://localhost:3000/api/gardening/herbs`);
    const data = await response.json();
    return {props: {allHerbs: data.data, count:data.count}}

}

export default GardeningHomePage
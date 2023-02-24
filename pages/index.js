
export default function Home() {
  return (
    <>
      Home Page
    </>
  )
}

export async function getStaticProps() {
  return {redirect: {destination: "/gardening/staticherbs", permanent: true}}
}

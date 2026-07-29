import MainSidebar from "@/widgets/MainSidebar";
import './Home.scss'
import Hero from "@/widgets/Hero";

const Home = () => {


  return (
    <main
      className='home'
    >
      <MainSidebar />
      <Hero />
    </main>
  )
}

export default Home
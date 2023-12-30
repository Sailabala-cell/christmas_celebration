import Navbar from "./layout/Navbar"
import HeroSection from "./layout/HeroSection"
import GivingSection from "./layout/GivingSection"
import GiftSection from "./layout/GiftSection"
import MessaeSection from "./layout/MessaeSection"
import NewGiftSection from "./layout/NewGiftSection"
import Celebration from "./layout/Celebration"
import Footer from "./layout/Footer"


export default function Home() {
  return (
    <main>
       <Navbar/>
       <HeroSection/>
       <GivingSection/>
       <Celebration/>
       <GiftSection/>
       <NewGiftSection/>
       <MessaeSection/>
       <Footer/>
       
    </main>
  )
}

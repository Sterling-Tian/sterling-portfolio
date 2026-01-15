
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { SectionResume } from "../components/SectionResume";
import { SectionAbout } from "../components/SectionAbout";
import { SectionArt } from "../components/SectionArt";
import { SectionArt2 } from "../components/SectionArt2";
import { SectionMusic } from "../components/SectionMusic";
import { SectionContact } from "../components/SectionContact";
import { Footer } from "../components/Footer";
import { SectionMusic2 } from "../components/SectionMusic2";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            {/* <ThemeToggle /> */}
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
            <NavBar/>
        {/* Main Content*/}
        <main>
            
            
            <SectionResume/>
            <SectionAbout/>
            <SectionArt2  />
            <SectionMusic2/>
            <SectionContact/>
        </main>
        {/* Footer*/}
            <Footer/>


    </div>;
}
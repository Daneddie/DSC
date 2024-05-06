
import FooterComponent from "./footer";
import HeaderComponent from "./header";
import HeroSection from "./hero";
import StatisticsSection from "./statistics";
import WhyChooseUsSection from "./whychooseus";


export default function IndexPage() {
    
    return (
        <main>
            <section id="header">
                <HeaderComponent />
            </section>
                
            <section id="body-context">
                <HeroSection />
                <WhyChooseUsSection /> 
                <StatisticsSection /> 
            </section>
                
            <section id="footer">
                <FooterComponent />
            </section>
        </main>
    );
}
import BrandElevationSection from "components/MainPageSections/BrandElevationSection";
import AboutUsSection from "components/MainPageSections/AboutUsSection";
import ServicesSection from "components/MainPageSections/ServicesSection";
import PortfolioSection from "components/MainPageSections/PortfolioSection";
import FormSection from "components/MainPageSections/FormSection";
import FAQSection from "components/MainPageSections/FAQSection";
import ContactUsSection from "components/MainPageSections/ContactUsSection";



export default function Page() {
    return (
        <div>
            <section className="sidebar">
                <div className="sidebar-wrapper">
                <div className="sidebar-level"><a href="#section1">1</a></div>
                <div className="sidebar-level"><a href="#section2">2</a></div>
                <div className="sidebar-level"><a href="#section3">3</a></div>
                <div className="sidebar-level"><a href="#section4">4</a></div>
                <div className="sidebar-level"><a href="#section5">5</a></div>
                <div className="sidebar-level"><a href="#section6">6</a></div>
                <div className="sidebar-level"><a href="#section7">7</a></div>
                </div>
            </section>

            <BrandElevationSection />

            <AboutUsSection />

            <ServicesSection />

            <PortfolioSection />

            <FormSection />

            <FAQSection />

            <ContactUsSection />
        </div>
    );
}

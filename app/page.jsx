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
            {/* <div>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="style/general.css" />
                <link rel="stylesheet" href="style/body.css" />
                <link rel="stylesheet" href="style/responsive.css" />
                <link rel="stylesheet" href="style/animation.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </div> */}
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

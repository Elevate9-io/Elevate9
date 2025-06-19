import BrandElevationSection from "components/MainPageSections/BrandElevationSection";
import AboutUsSection from "components/MainPageSections/AboutUsSection";
import ServicesSection from "components/MainPageSections/ServicesSection";
import PortfolioSection from "components/MainPageSections/PortfolioSection";
import FormSection from "components/MainPageSections/FormSection";
import FAQSection from "components/MainPageSections/FAQSection";
import ContactUsSection from "components/MainPageSections/ContactUsSection";
import Sidebar from "components/Sidebar";



export default function Page() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow md:ml-0">
                <BrandElevationSection />

                <AboutUsSection />

                <ServicesSection />

                <PortfolioSection />

                <FormSection />

                <FAQSection />

                <ContactUsSection />
            </div>
        </div>
    );
}

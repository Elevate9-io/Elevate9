

export default function FAQSection() {
    return (
        <section id="section6" className="content-section">
            <div className="section-wrapper">
            <div className="section6-banner">
                <div className="section6-content">
                <div className="section6-text">
                    <h1 className="section6-h1">FAQs</h1>
                    <p className="section6-p">Clarity That Builds Confidence</p>
                </div>
                <div className="section6-accordion-wrapper">
                    <ul className="section6-accordion">
                    <li className="section6-accordion-list">
                        <input type="radio" className="section6-accordion-input" id="first" name="accordion" defaultChecked />
                        <label htmlFor="first" className="section6-accordion-label">What Makes Elevate9 Different?</label>
                        <div className="section6-accordion-content">
                            <p className="section6-accordion-p">We combine creative branding, data-driven SEO, and expert web development to deliver tailored digital strategies that drive real results.</p>
                        </div>
                    </li>
                    <li className="section6-accordion-list">
                        <input type="radio" className="section6-accordion-input" id="second" name="accordion" />
                        <label htmlFor="second" className="section6-accordion-label">Why do I need branding?</label>
                        <div className="section6-accordion-content">
                            <p className="section6-accordion-p">Branding builds recognition, trust, and loyalty. It helps you stand out and connect with your ideal audience.</p>
                        </div>
                    </li>
                    <li className="section6-accordion-list">
                        <input type="radio" className="section6-accordion-input" id="third" name="accordion" />
                        <label htmlFor="third" className="section6-accordion-label">What is search engine optimization (SEO)?</label>
                        <div className="section6-accordion-content">
                            <p className="section6-accordion-p">SEO improves your website's visibility on search engines, helping more people find your business online.</p>
                        </div>
                    </li>
                    <li className="section6-accordion-list">
                        <input type="radio" className="section6-accordion-input" id="fourth" name="accordion" />
                        <label htmlFor="fourth" className="section6-accordion-label">Why do I need SEO marketing for my website?</label>
                        <div className="section6-accordion-content">
                            <p className="section6-accordion-p">SEO drives organic traffic, increases your credibility, and leads to more conversions over time without paid ads.</p>
                        </div>
                    </li>
                    <li className="section6-accordion-list">
                        <input type="radio" className="section6-accordion-input" id="fifth" name="accordion" />
                        <label htmlFor="fifth" className="section6-accordion-label">Why do I need a custom brand identity?</label>
                        <div className="section6-accordion-content">
                            <p className="section6-accordion-p">A custom identity reflects your unique value and ensures consistency across all channels, making your brand memorable.</p>
                        </div>
                    </li>
                    <li className="section6-accordion-list">
                        <input type="radio" className="section6-accordion-input" id="sixth" name="accordion" />
                        <label htmlFor="sixth" className="section6-accordion-label">How does web development work?</label>
                        <div className="section6-accordion-content">
                            <p className="section6-accordion-p">We plan, design, build, and launch websites tailored to your goals—ensuring they're fast, secure, and mobile-friendly.</p>
                        </div>
                    </li>
                    <li className="section6-accordion-list">
                    <input type="radio" className="section6-accordion-input" id="seventh" name="accordion" />
                    <label htmlFor="seventh" className="section6-accordion-label">How often will I receive SEO reports?</label>
                    <div className="section6-accordion-content">
                        <p className="section6-accordion-p">We provide detailed SEO reports monthly, with insights on performance, rankings, and recommendations.</p>
                    </div>
                    </li>
                    <li className="section6-accordion-list">
                        <input type="radio" className="section6-accordion-input" id="eigth" name="accordion" />
                        <label htmlFor="eigth" className="section6-accordion-label">How do you ensure that my brand's identity is unique?</label>
                        <div className="section6-accordion-content">
                            <p className="section6-accordion-p">We research your industry, analyze competitors, and craft a strategy that reflects your values, voice, and vision.</p>
                        </div>
                    </li>
                </ul>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

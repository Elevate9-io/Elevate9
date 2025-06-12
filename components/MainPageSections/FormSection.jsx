import { Box } from "@mui/material";

export default function FormSection() {
    return (
        <section id="section5" className="content-section">
            <div className="section-wrapper">
                <div className="section5-banner">
                    <div className="section5-content">
                        <div className="section5-text">
                            <h1 className="section5-h1">Contact Us</h1>
                            <p className="section5-p">
                                Let&apos;s take your brand to the next level? <strong>Elevate with us!</strong>
                            </p>
                        </div>
                        <div className="section5-form w-full max-w-xl mx-auto bg-white bg-opacity-20 p-8 rounded-3xl shadow-lg">
                            <form
                                action="https://formsubmit.co/info@elevate9.io"
                                method="POST"
                                className="flex flex-col gap-4"
                            >
                                <Box display="flex" gap={2} flexWrap="wrap">
                                    <div className="flex flex-col flex-1 min-w-[180px]">
                                        <label htmlFor="name" className="text-white font-semibold mb-1">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Your Name"
                                            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-white bg-opacity-80 mb-4"
                                        />
                                        <label htmlFor="email" className="text-white font-semibold mb-1">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Your Email"
                                            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-white bg-opacity-80"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-1 min-w-[180px]">
                                        <label htmlFor="company" className="text-white font-semibold mb-1">Company</label>
                                        <input
                                            id="company"
                                            type="text"
                                            name="company"
                                            required
                                            placeholder="Company"
                                            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-white bg-opacity-80 mb-4"
                                        />
                                        <label htmlFor="phone" className="text-white font-semibold mb-1">Phone</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="Phone"
                                            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-white bg-opacity-80"
                                        />
                                    </div>
                                </Box>
                                <label htmlFor="message" className="text-white font-semibold mt-4 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="How can we help you?"
                                    rows={5}
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-white bg-opacity-80 resize-none"
                                />
                                <button
                                    type="submit"
                                    className="mt-4 bg-black text-white font-bold py-3 rounded-xl hover:bg-white hover:text-black border border-black transition-colors"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

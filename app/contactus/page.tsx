'use client';
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import Gradient from "@/components/gradient";
import HeaderComponent from "@/components/header";



const ContactHomePage = () => {

    return (<>

        <div>
            <HeaderComponent />
            <section
                data-header-theme="light"
                className="styles_hero__XVQM0 h-screen"
                data-slice-type="home_hero"
                data-slice-variation="homeHero"
            >
                <div className="styles_container__YgRn2">
                    <h2
                        className="styles_subheading__W7b9Z accent accent-40 animate-fadeinup"
                        style={{ translate: 'none', rotate: 'none', scale: 'none', letterSpacing: '0vw', transform: 'translate(0px, 0px)', opacity: 1 }}
                    >
                        Reach
                        <br />Us
                    </h2>
                    <h1
                        className="styles_headline__ceRGE headline animate-headline"
                        style={{ opacity: 1, paddingBottom: '5rem', fontSize: '19vw' }}
                    >
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>C</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>o</div>

                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>n</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>t</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>a</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>C</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>t</div>

                    </h1>

                    <p className="p-10" style={{ order: '4' }}>Contact us for any questions, assistance, or feedback—we’re here to help! Reach out via email, phone, or our online form, and we'll get back to you promptly. Let’s connect and ensure you have the best experience possible.</p>
                    <div className="styles_bottom__zJSuB">
                        <div className="styles_scroll__X10_m styles_scroll__W_lzX">
                            <svg
                                viewBox="0 0 20 59"
                                fill="none"
                                style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
                            >
                                <path
                                    d="M1 1.264V55.2c0 1.786 2.163 2.676 3.42 1.408L19 41.9"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <p
                                style={{
                                    transform: 'translate(0px, 0px)',
                                    opacity: 1,
                                }}
                            >
                                Scroll
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            <section
                data-v-58b40ead
                className="section styles_section__wwoJW  grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 gap-3 h-screen"
            >
                <div className=" bg-white p-9 rounded-lg lg:col-span-2">
                    <h3 className="styles_left__heading__VK6df title title-60">Follow us</h3>
                    <p className="text pl-10">
                        <a
                            data-v-0f5d0200
                            data-v-c4f161bc
                            href="https://www.instagram.com/hiend_lights/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="cta inline-flex items-center"
                        >
                            Instagram
                        </a>
                    </p>
                </div>
                <div className=" bg-white p-9 rounded-lg lg:row-span-2 flex flex-col ">

                    <div data-v-31c4c69f className="richtext mt-4">
                        <div>
                            <h3 className="h3 title title-60">Contact</h3>
                            <p className="text py-5 pl-10">
                                <a href="tel:+17802434531">+1(306) 580-0911</a>
                                <br />
                                <a href="mailto:hiendcurbing@gmail.com">hiendlights@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="h3 title title-60 py-5">Location</h3>
                        <p className="text pl-10">1213 29 St NW, Edmonton, AB T6T 1A9, Canada</p>
                    </div>
                </div>
                <div className=" bg-white p-9 rounded-lg lg:col-span-2 lg:row-start-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d152103.8460562492!2d-113.383945!3d53.439456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01bd6226d342b%3A0x8cf80eb3ad840a31!2s1213%2029%20St%20NW%2C%20Edmonton%2C%20AB%20T6T%201A9%2C%20Canada!5e0!3m2!1sen!2sus!4v1732579889115!5m2!1sen!2sus"
                        width="1000"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>


            </section >
            <section className="section mt-40">
                <h3 className="h3 title lg:title-60 title-130  text-center py-5 headline headline-outline">Get In Touch</h3>
                <ContactForm color={'white'} />
            </section>


            < Gradient />
            <Footer />
        </div >
    </>
    );
}
export default ContactHomePage;
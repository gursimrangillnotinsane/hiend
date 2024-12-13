import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';
const ClientsSection = () => {
    const testimonials = [
        {
            name: "Faheem Rashid",
            text: `I recently had a set of new lights installed in my home, and I couldn't be more pleased with the results. From the moment I contacted the company, the process was seamless. The technician arrived on time, was professional, and took great care in explaining the options available.
           
            The installation itself was quick and efficient, and they made sure everything was set up correctly. The lights look amazing, and the quality is top-notch. They also made sure to clean up after the installation, leaving no mess behind.

            Overall, I'm very satisfied with the service and would highly recommend them for any lighting installation needs. It's truly transformed the space and added a great ambiance.`
        },
        {
            name: "Navneet Kaur",
            text: `I recently got hiend lights Installed on my home, and I absolutely love them!  There are plenty of pre programmed colors and patterns, and a ton of customization options.  These are a fantastic and lovely way to decorate your home! Such a great experience.  The installers were efficient and professional.  The lights work great and the app is so user friendly. The installers sit down with you and explain everything and are happy to answer any questions.  I highly recommend  Hiend Lights`
        }
        ,
        {
            name: "Portia & Paige",
            text: `Got our permanent lights installed by Hiend lights company. Professionally done, awesome team. Reasonably priced.

Lights looked really great. Jag came back and explained how the app works.

Highly recommend.`}
        ,
        {
            name: "Rick McFadyen",
            text: `I am very pleased with recent service.  Had lights installed a few years ago and had some issues with the product more than with the Company.  Recently the fellows have taken ownership of the issue and made everything right.  Well done guys,  Wish you continued success`
        }
        ,
        {
            name: "Karan Karan",
            text: `Hiend Lights did a fantastic job through the entire process. The estimator Jag came by and broke down the quote section by section with detailed photographs which made it extremely easy to come to an understanding before install. When they came to do the job it was completed in a very efficient and professional manner. There was no mess left behind. what so ever and every question I had about the product itself or the function of the lights was explained very well. Thank you for that Hiend lights

            10/10 would recommend.`
        }
        // Add more testimonials as needed
    ];

    return (
        <section className="styles_clients__0Fl_N">
            <header
                data-header-theme="light"
                className="styles_header__0xhVU"
                style={{ position: 'relative' }}
            >
                <h4 className="accent accent-40">Hear it from our</h4>
                <div style={{ width: '100%' }}>
                    <div style={{ whiteSpace: 'nowrap', display: 'inline-block', fontSize: '20vw' }}>
                        <h2 className="headline headline-outline animate-headline" style={{ opacity: 1 }}>
                            <div style={{ position: 'relative', display: 'inline-block' }}>C</div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>l</div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>i</div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>e</div>
                            <br />
                            <div style={{ position: 'relative', display: 'inline-block' }}>n</div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>t</div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>s</div>
                        </h2>
                    </div>
                </div>
            </header>

            <Swiper
                modules={[Navigation, A11y]}
                navigation
                // pagination={{ clickable: true }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                className="slideshow_slideshow__s7R92 "
                style={{ padding: '5rem' }}
            >

                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="slideshow_slideshow-content__Drjo_  ">
                        <header className="slideshow_slideshow-contentHeader__2NgXs section ">
                            <h4 className="slideshow_slideshow-articleTitle__OckzX title title-60 ">
                                <div>{testimonial.name}</div>
                            </h4>
                        </header>
                        <div className="slideshow_slideshow-articles__sjzQn  mx-72">
                            <article className="slideshow_slideshow-article__ztzrb" style={{ opacity: 1 }}>
                                <div className="slideshow_slideshow-articleText__4F5E0 text">
                                    <div>{testimonial.text}</div>
                                </div>
                            </article>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    );
};

export default ClientsSection;

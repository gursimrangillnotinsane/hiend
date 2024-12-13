'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ color }: { color: string }) => {
    const form = useRef<HTMLFormElement>(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // State to track validation messages
    const [nameError, setnameError] = useState('');
    const [emailError, setemailError] = useState('');
    const [messageError, setmessageError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    // Handle form submission
    const sendEmail = (e: { preventDefault: () => void; }) => {
        console.log('sendEmail');
        e.preventDefault(); // Prevent default form submission
        setnameError(''); // Clear previous errors
        setemailError(('')); // Clear previous errors
        setmessageError(''); // Clear previous errors
        setFormSuccess(''); // Clear success message

        let hasError = false;

        if (!name.trim()) {
            setnameError("Full name is required.");
            hasError = true;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setemailError("Email is required.");
            hasError = true;
        } else if (!emailRegex.test(email)) {
            setemailError("Email is invalid.");
            hasError = true;
        }
        if (!message.trim()) {
            setmessageError("Message is required.");
            hasError = true;

        }
        console.log(hasError);
        if (hasError) {
            console.log('error');
            return;

        } else {
            if (form.current && !hasError) {
                emailjs
                    .sendForm('service_r3hx8aj', 'template_jaqzod9', form.current, 'BNYx2BsJ-s1E9oy_o')
                    .then(
                        () => {
                            console.log('SUCCESS!');
                            setFormSuccess('Your message has been sent successfully.');
                            setName('');
                            setEmail('');
                            setMessage('');
                        },
                        (error) => {
                            console.log('FAILED...', error.text);
                        },
                    );
            }
        }
    };
    return (
        <form className="formkit-form" id="input_00" name="form_1" ref={form} onSubmit={sendEmail}>
            <div className="formkit-outer" data-family="text" data-type="text">
                <div className="formkit-wrapper">
                    <div className="formkit-inner">
                        <input
                            placeholder="Full name"
                            className="formkit-input"
                            type="text"
                            name="fullname"
                            id="input_1"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {nameError && nameError.length > 0 && (
                        <div className="formkit-messages">

                            <div className="formkit-message" data-message-type="error" style={{ color: "#ff3a28" }}>
                                {nameError}
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <div className="formkit-outer" data-family="text" data-type="email">
                <div className="formkit-wrapper">
                    <div className="formkit-inner">
                        <input
                            placeholder="E-mail*"
                            className="formkit-input"
                            type="email"
                            name="email"
                            id="input_2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {emailError.length > 0 && (
                        <div className="formkit-messages">
                            <div className="formkit-message" data-message-type="error" style={{ color: "#ff3a28" }}>
                                {emailError}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div
                className="formkit-outer"
                data-family="text"
                // contentEditable="true"
                data-type="text"
            >
                <div className="formkit-wrapper">
                    <div className="formkit-inner">
                        <textarea
                            name="body"
                            placeholder="Your message"
                            className="formkit-input"
                            id="input_3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}

                        ></textarea>
                    </div>
                    {messageError.length > 0 && (
                        <div className="formkit-messages">
                            <div className="formkit-message" data-message-type="error" style={{ color: "#ff3a28" }}>
                                {messageError}
                            </div>
                        </div>
                    )}
                    <div className="styles_button__DwtwR button-text styles_border-white__RlPY7 py-3">
                        <button className='styles_button__labelContainer__P9ZGZ border-radius' type="submit">
                            <span data-v-d6855d32 className="uppercase">
                                Request a Quote
                            </span>
                        </button>
                    </div>
                    {/* <div className="mt-3 md:mt-2 md:text-right rtl:md:text-left">
                        <div className="styles_button__labelContainer__P9ZGZ border-radius">
                            <button
                                data-v-d6855d32
                                type="submit"
                                className="styles_button__container__kKhYm border-radius"
                            >
                                <span
                                    data-v-d6855d32
                                    className="cta-content flex items-center justify-center text-center"
                                >
                                    <span data-v-d6855d32 className="uppercase">
                                        Request a Quote
                                    </span>

                                </span>
                            </button>
                        </div>
                    </div> */}

                    {/* Show success message */}
                    {formSuccess && (
                        <div className="formkit-message" data-message-type="success" style={{ color: "#28a745" }}>
                            {formSuccess}
                        </div>
                    )}
                </div>
            </div>
        </form>
    )


};

export default ContactForm;
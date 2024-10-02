import Link from "next/link";
import React, { useEffect } from "react";

const ContentArea = () => {
    useEffect(() => {
        // Dynamically load the script
        const script = document.createElement('script');
        script.src = "https://formaloo.me/istatic/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="contact-inner-area pt-60 pb-50">
            <div className="container">
                <div className="row gx-0">
                    <div className="col-12">
                        <div id="formz-wrapper" data-formz-slug="Y9txWfhw" data-formz-type="simple"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentArea;

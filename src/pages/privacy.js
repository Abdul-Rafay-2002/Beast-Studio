import React from "react";
import Image from "next/image";

const privacy = () => {
  return (
    <div className="privacy-main">
      <div className="privacy-container">
        <div className="privacy-inner">
          <h2>Privacy Policy</h2>
          <div className="privacy-row-1">
            <Image
              src={"/privacy.svg"}
              alt="privacy-img"
              width={400}
              height={400}
            ></Image>
          </div>
          <div className="privacy-row-2">
           <p> Thank you for visiting our website. We take your privacy seriously
            and are committed to protecting your personal information. This
            privacy policy outlines the types of data we collect, how we use it,
            and the measures we take to safeguard your information. We collect
            certain information when you visit our site, such as your IP
            address, browser type, and pages you access, to analyze trends and
            improve our services. We may also collect personal information, such
            as your name and email address, when you voluntarily provide it for
            purposes such as subscribing to our newsletter or contacting us.
            Rest assured that we will never sell or share your personal
            information with third parties without your consent, except when
            required by law or to fulfill a service you requested. We implement
            industry-standard security measures to protect your data from
            unauthorized access or disclosure. While we strive to protect your
            information, please understand that no method of transmission over
            the internet or electronic storage is 100% secure. By using our
            website, you consent to the collection and use of your information
            as described in this privacy policy. If you have any questions or
            concerns regarding your privacy or our practices, please don't
            hesitate to contact us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default privacy;

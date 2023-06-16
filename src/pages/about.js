import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="about-main">
      <div className="about-container">
        <div className="about-heading">
          <h2>About Us</h2>
          <p>
            Our mission is to empower you to express yourself through fashion.
            We aim to be your go-to destination for trendy and personalized
            t-shirts that reflect your passions, hobbies, and beliefs.
          </p>
        </div>
        <div className="about-inner">
          <div className="about-row">
            <div className="about-image-col">
              <Image
                src={"/welldone.svg"}
                alt="about-image"
                width={400}
                height={400}
              ></Image>
            </div>
            <div className="about-content-col">
              <h3>Customer Satisfaction:</h3>
              <p>
                Your satisfaction is our top priority. We value your feedback
                and strive to exceed your expectations with every order. If you
                have any questions, concerns, or suggestions, our friendly
                customer support team is here to assist you.
              </p>
            </div>
          </div>
          <div className="about-row-reverse">
            <div className="about-image-col">
              <Image
                src={"/addtocart.svg"}
                alt="about-image"
                width={400}
                height={400}
              ></Image>
            </div>
            <div className="about-content-col">
              <h3>Diverse Collection:</h3>
              <p>
                Our diverse collection of t-shirts caters to a wide range of
                interests and styles. From pop culture references to artistic
                designs, from funny slogans to motivational quotes, we have
                something for everyone. Whether you're a music enthusiast, a
                sports fan, an animal lover, or a nature enthusiast, you'll find
                a t-shirt that speaks to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

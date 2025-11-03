import React from "react";
import "./about.css";
import SectionTitle from "../components/SectionTitle";
import profileImg from "../../../public/assests/images/profile-img.png";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle
          title="about"
          brief={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.`}
        />

        {/* align-items-start ensures the columns align at the top */}
        <div className="row align-items-start">
          <div className="col-lg-4">
            {/* With Next/Image, give explicit width/height or use style to keep layout stable */}
            <div className="profile-image-wrapper">
              <Image
                src={profileImg}
                alt="Profile Image"
                width={400} // set appropriate width/height for your image
                height={400}
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* removed `pt-4` so heading sits flush with top of image */}
          <div className="col-lg-8 pr-lg-0 content">
            <h3>UI/UX Designer &amp; Full Stack Web Developer</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>4 Feb 1991</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>My City, State</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>34</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Bachelor’s</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

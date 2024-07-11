import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Create your account to access job listings, apply easily,
               and connect with top employers.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Find your ideal job quickly by browsing listings and applying
               directly on our user-friendly website.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Recruit top candidates effortlessly by posting jobs and 
              searching our extensive candidate database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
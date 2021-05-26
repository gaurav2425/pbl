import React, { useEffect } from "react";
import "../css/Imagecontainer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Imgcontainer() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className="main_container">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="container_flex"
        >
          <div className="container_data" data-aos="fade-right">
            <h1>What is BMI ?</h1>
            <h2>
              Body mass index (BMI) is a value derived from the mass (weight)
              and height of a person. The BMI is defined as the body mass
              divided by the square of the body height, and is expressed in
              units of kg/m2, resulting from mass in kilograms and height in
              metres. The BMI may be determined using a table[note or chart
              which displays BMI as a function of mass and height using contour
              lines or colours for different BMI categories, and which may use
              other units of measurement (converted to metric units for the
              calculation).
            </h2>
            <div className="btn_bmi">
              <Link to="bmi-calculator">
                <button>Check BMI</button>
              </Link>
            </div>
          </div>
          <div className="img_container">
            <div className="img_container_sub" data-aos="zoom-in">
              <img src="https://media.gettyimages.com/photos/doctor-wearing-eyeglasses-on-white-background-picture-id1139666077?k=6&m=1139666077&s=612x612&w=0&h=7EqZxj3j_y47EwR4G1xBgQFQ5-v6DbYzM6Scb4txeVA="></img>
            </div>
          </div>
        </div>

        <div className="container_data2">
          <div className="container_data" data-aos="fade-left">
            <h1>Useful Exercises For Daily Routine</h1>
            <h2>
              Exercise is any bodily activity that enhances or maintains
              physical fitness and overall health and wellness.It is performed
              for various reasons, to aid growth and improve strength,
              preventing aging, developing muscles and the cardiovascular
              system, honing athletic skills, weight loss or maintenance,
              improving health and also for enjoyment. Many individuals choose
              to exercise outdoors where they can congregate in groups,
              socialize, and enhance well-being.In terms of health benefits, the
              amount of recommended exercise depends upon the goal, the type of
              exercise, and the age of the person. Even doing a small amount of
              exercise is healthier than doing none
            </h2>
            <div className="btn_bmi">
              <Link to="/exercise">
                <button>Exercise</button>
              </Link>
            </div>
          </div>
          <div className="img_container">
            <div
              className="img_container_sub"
              data-aos="zoom-out-right"
              data-aos-duration="6000"
            >
              <img src="https://media.gettyimages.com/photos/young-man-runs-on-mountain-ridge-at-sunrise-picture-id1191744336?k=6&m=1191744336&s=612x612&w=0&h=S_Mn1BIsHKCPcpUYRG4wberApc2MSZ4IYrr_sgYdW9k="></img>
            </div>
          </div>
        </div>

        <div className="container_data3">
          <div
            className="container_data container_data3_data"
            data-aos="fade-right"
          >
            <h1>Symptoms</h1>
            <h2>
              Signs and symptoms are the observed or detectable signs, and
              experienced symptoms of an illness, injury, or condition. A sign
              for example may be a higher or lower temperature than normal,
              raised or lowered blood pressure or an abnormality showing on a
              medical scan. A symptom is something out of the ordinary that is
              experienced by an individual such as feeling feverish, a headache
              or other pain or pains in the body
            </h2>
            <div className="btn_bmi">
              <Link to="/symptoms">
                <button>Check Symptoms</button>
              </Link>
            </div>
          </div>
          <div className="img_container">
            <div
              className="img_container_sub"
              data-aos="zoom-out-down"
              // data-aos="slide-right"
              data-aos-duration="6000"
            >
              <img src="https://media.gettyimages.com/photos/should-have-totally-gotten-that-flu-shot-picture-id1187332619?k=6&m=1187332619&s=612x612&w=0&h=pcDHuKfzt34upnFnW_3ALnruj7iHrgK-ltNEOH1mOO8="></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imgcontainer;

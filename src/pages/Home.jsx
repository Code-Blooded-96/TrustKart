// src/pages/Home.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Slide, Zoom } from "react-awesome-reveal";
import { MagnifyingGlass } from "react-loader-spinner";

import ProductItem from "../ProductList/ProductItem";
import FAQ from "./FooterElements/Faq";

// Image Imports
import slider1 from "../images/slide-1.jpg";
import abouticon from "../images/about-icons-1.svg";
import slider2 from "../images/slider-2.jpg";
import adbanner1 from "../images/ad-banner-1.jpg";
import adbanner2 from "../images/ad-banner-2.jpg";
import adbanner3 from "../images/ad-banner-3.jpg";
import dairybreadeggs from "../images/dairy-bread-eggs.png";
import fruitsvegetables from "../images/fruits-vegetables.png";
import snackmunchies from "../images/snack-munchies.png";
import bakerybiscuits from "../images/bakery-biscuits.png";
import instantfood from "../images/instant-food.png";
import teacoffeedrinks from "../images/tea-coffee-drinks.png";
import colddrinksjuices from "../images/cold-drinks-juices.png";
import chickenmeatfish from "../images/chicken-meat-fish.png";
import babycare from "../images/baby-care.png";
import cleaningessentials from "../images/cleaning-essentials.png";
import petcare from "../images/pet-care.png";
import attaricedal from "../images/atta-rice-dal.png";
import grocerybanner from "../images/grocery-banner.png";
import grocerybanner2 from "../images/grocery-banner-2.jpg";
import map from "../images/map.png";
import iphone from "../images/iphone-2.png";
import googleplay from "../images/googleplay-btn.svg";
import appstore from "../images/appstore-btn.svg";
import bannerdeal from "../images/banner-deal1.jpg";
import clock from "../images/clock.svg";
import gift from "../images/gift.svg";
import package1 from "../images/package.svg";
import refresh from "../images/refresh-cw.svg";

const Home = () => {
  // --- 1. ALL HOOKS MUST GO FIRST ---
  const [isVisible, setIsVisible] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    // Scroll to top button visibility
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    // Page loader
    const timer = setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  // --- 2. YOUR OTHER FUNCTIONS AND VARIABLES GO NEXT ---
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 600, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 900, settings: { slidesToShow: 3 } },
        { breakpoint: 600, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const teamMembers = [
    {
      name: 'Shashank B',
      linkedinUrl: 'http://linkedin.com/in/shashank-bhavihalli'
    },
    {
      name: 'C Hemadri',
      linkedinUrl: 'http://linkedin.com/in/c-hemadri'
    },
    {
      name: 'Aditya B P',
      linkedinUrl: 'http://linkedin.com/in/aditya-b-223bb932b'
    }
  ];

  // --- 3. THE RETURN STATEMENT IS LAST ---
  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperclassName="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <div className="scroll-to-top">
            <button
              onClick={scrollToTop}
              className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
            >
              ↑
            </button>
          </div>

          <section className="hero-section">
            <div className="container mt-8">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div
                      style={{
                        background: `url(${slider1}) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: ".5rem",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                        <span className="badge text-bg-warning">Opening Sale Discount 50%</span>
                        <h2 className="text-dark display-5 fw-bold mt-4">Wholesale B2B Supply <br /> 24/7 Delivery</h2>
                        <p className="lead">An E-commerce platform which supplies necessary Raw Materials to Street vendors on demand with ease and guaranatee.</p>
                        <Link to="#!" className="btn btn-dark mt-3">Shop Now{" "}<i className="feather-icon icon-arrow-right ms-1" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      style={{
                        background: `url(${slider2}) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: ".5rem",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                        <span className="badge text-bg-warning">Free Shipping - orders over $100</span>
                        <h2 className="text-dark display-5 fw-bold mt-4">Free Shipping on <br /> orders over{" "}<span className="text-primary">$100</span></h2>
                        <p className="lead">Free Shipping to First-Time Customers Only, After promotions and discounts are applied.</p>
                        <Link to="#!" className="btn btn-dark mt-3">Shop Now{" "}<i className="feather-icon icon-arrow-right ms-1" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link className="carousel-control-prev" to="#carouselExampleFade" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </Link>
                <Link className="carousel-control-next" to="#carouselExampleFade" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Other sections of your homepage can go here */}
          
          <ProductItem />
          
          <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-container">
              {teamMembers.map((member, index) => (
                <div className="team-member-card" key={index}>
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <h3>{member.name}</h3>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <FAQ/>

          {/* ... any other components/sections ... */}
        </>
      )}
    </div>
  );
};

export default Home;
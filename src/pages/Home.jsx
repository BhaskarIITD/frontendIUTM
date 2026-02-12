import React from 'react';
import './Home.css';
import heroImg from '../assets/IITD.webp';
import splitImg1 from '../assets/splitImg1.jpeg';
import splitImg2 from '../assets/splitImg2.jpeg';
import iitdlogo from '../assets/IITD-logo.png';
import iutamLogo from '../assets/IUTAM-Logo-Site-.png';

const Home = () => {
  return (
    <div className="home">

      {/* HERO SPLIT */}
      <section className="hero-split">

        {/* LEFT IMAGE */}
        <div
          className="hero-left"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        {/* RIGHT INFO */}
        <div className="hero-right">

          {/* Top-right logo */}
          <div className="hero-logo-top">
            <img src={iitdlogo} alt="IIT Delhi" />
          </div>

          {/* Event Label */}
          <div className="hero-label">
            IUTAM Symposium 2026
          </div>

          <div className="hero-divider" />

          <h1 className="hero-topic">
            Rate Dependent Mechanics and Multiscale Modelling of Materials
          </h1>

          <p className="hero-date">
            Indian Institute of Technology, New Delhi, India |
            September 2–4, 2026
          </p>

        </div>

      </section>



      {/* INTRO */}
      <section className="container split">
        <div className="split-text">
          <h3>IIT Delhi Symposium 2026</h3>

          <p>
            International Symposium on <span className="title">Rate Dependent Mechanics and Multiscale Modelling of Materials</span>.
            Join leading global experts at IIT Delhi to explore frontier research in mechanics,
            materials science, and multi-physics modelling.
          </p>
        </div>

        <div className="split-images">
          <img src={splitImg1} alt="campus1"/>
          <img src={splitImg2} alt="campus2"/>
        </div>
      </section>


      {/* ABOUT SUMMARY */}
      <section className="container about">

        <div className="about-text">

          <p>
            The proposed symposium, titled “Rate Dependent Mechanics and Multiscale Modelling of Materials,” aims to address an emerging and cross-disciplinary domain within solid mechanics that has high societal relevance but has not been traditionally covered in IUTAM symposia. Rate-dependent mechanical behaviour governs the performance of a broad class of advanced materials—including metallic foams, granular materials, glasses, ceramics, polymer and metal composites, and metamaterials—especially when subjected to extreme environments such as high strain rates, impact, blast, and elevated temperatures. Many of these architected materials are now being realised through additive manufacturing and laser-based fabrication techniques, enabling origami- and kirigami-inspired designs with unprecedented control over mechanical response. Understanding, modelling, and optimising these materials are essential for developing resilient and sustainable systems in civil, aerospace, automotive, and defence applications.

          </p>

          <p>
            Recent developments in experimental and computational capabilities have opened new pathways to explore such phenomena from a multiscale perspective. Advanced techniques such as high-speed imaging, digital image correlation (DIC), and in-situ microscopy now permit direct observation of deformation and failure mechanisms across spatial and temporal scales. In parallel, the evolution of phase-field models, nonlocal and gradient continuum theories, and stochastic formulations has provided rigorous frameworks to bridge microscale mechanisms with macroscale behaviour. Data-driven methodologies, including machine learning and physics-informed neural networks, are further revolutionising this field by enabling hybrid models that integrate experimental data with physics-based principles, enhance predictive capability, and quantify uncertainty in dynamic systems.This symposium will offer a timely and inclusive platform for researchers spanning theoretical, computational, and experimental mechanics to exchange insights, identify open challenges, and foster cross-disciplinary collaborations. The discussions will encompass constitutive and multiscale modelling, dynamic fracture and failure, multi-physics coupling, uncertainty quantification, digital twins for dynamic behaviour, and the mechanics of architected and metamaterials for energy absorption, wave control, and impact protection.
          </p>

          <p>
            By bringing together experts from diverse research areas and geographical regions, the symposium will promote a holistic understanding of rate-dependent phenomena and their implications for sustainable design and manufacturing. The topic directly aligns with IUTAM's diversity objectives by bridging multiple disciplines—mechanics, materials science, and data science—and by engaging a globally diverse community, including researchers from emerging and underrepresented regions. The expected outcome is a shared roadmap for advancing the mechanics of next-generation materials towards safer, more efficient, and resource-conscious technologies.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-divider" />

        <div className="footer-logos">
          <img src={iitdlogo} alt="IIT Delhi"/>
          <img src={iutamLogo} alt="IUTAM"/>
        </div>

        <p className="footer-text">
          © 2026 IUTAM Symposium — Indian Institute of Technology Delhi
        </p>

      </footer>

    </div>
  );
};

export default Home;

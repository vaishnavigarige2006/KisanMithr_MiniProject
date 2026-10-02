import React from "react";
import "./App.css";

function App() {
  const services = [
    {
      icon: "🛒",
      title: "Market",
      text: "Check nearby crop prices and find the best market.",
      color: "green",
    },
    {
      icon: "🚜",
      title: "Vehicles",
      text: "Find tractors, harvesters and farm vehicles nearby.",
      color: "blue",
    },
    {
      icon: "👨‍🌾",
      title: "Labour",
      text: "Find skilled and unskilled agricultural workers.",
      color: "orange",
    },
    {
      icon: "🌦️",
      title: "Weather",
      text: "Get local weather updates for better farm planning.",
      color: "sky",
    },
    {
      icon: "🏛️",
      title: "Government Schemes",
      text: "Explore useful government schemes and benefits.",
      color: "purple",
    },
    {
      icon: "🌱",
      title: "Crop Calculation",
      text: "Calculate crop requirements, yield and farm needs.",
      color: "lightgreen",
    },
    {
      icon: "🔍",
      title: "Disease Information",
      text: "Identify crop diseases and learn possible solutions.",
      color: "pink",
    },
    {
      icon: "📚",
      title: "More",
      text: "Explore additional tools and farmer resources.",
      color: "lavender",
    },
  ];

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

        <div className="logo-area">
          <div className="logo-icon">🌱</div>

          <div>
            <h2>KisanMithr</h2>
            <p>Better Farming • Brighter Future</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#community">Community</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <button className="location-btn">
            📍 Location
          </button>

          <button className="login-btn">
            Login / Register
          </button>
        </div>

      </header>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-content">

          <span className="welcome-badge">
            🌾 Welcome to KisanMithr
          </span>

          <h1>
            Your Smart
            <span> Farming Companion</span>
          </h1>

          <p>
            Everything a farmer needs — market prices, farm vehicles,
            labour, weather, government schemes and useful agricultural
            information, all in one place.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started →
            </button>

            <button className="secondary-btn">
              Explore Services
            </button>
          </div>

          <div className="hero-points">
            <span>✓ Farmer Friendly</span>
            <span>✓ Local Information</span>
            <span>✓ Multiple Languages</span>
          </div>

        </div>


        {/* FARM ILLUSTRATION */}
        <div className="hero-image">

          <div className="sun">☀️</div>

          <div className="mountain mountain1"></div>
          <div className="mountain mountain2"></div>

          <div className="field field1"></div>
          <div className="field field2"></div>

          <div className="farmer">
            👨‍🌾
          </div>

          <div className="crop crop1">🌾</div>
          <div className="crop crop2">🌾</div>
          <div className="crop crop3">🌾</div>

        </div>

      </section>


      {/* ================= LOCATION ================= */}
      <section className="location-section">

        <div className="location-card">

          <div className="location-icon">
            📍
          </div>

          <div className="location-text">
            <small>Your Location</small>
            <h3>Find agricultural services near you</h3>
            <p>
              Allow location access to discover nearby markets,
              vehicles and labour.
            </p>
          </div>

          <button className="location-main-btn">
            📍 Use My Location
          </button>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="services-section" id="services">

        <div className="section-heading">

          <span>OUR SERVICES</span>

          <h2>
            Everything You Need for
            <strong> Better Farming</strong>
          </h2>

          <p>
            Useful agricultural services brought together in one place.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className={`service-card ${service.color}`}
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button className="card-arrow">
                Explore →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* ================= NEARBY SERVICES ================= */}
      <section className="nearby-section">

        <div className="nearby-content">

          <div>
            <span className="small-heading">
              📍 NEAR YOU
            </span>

            <h2>
              Find What You Need,
              <br />
              <span>Right Around You</span>
            </h2>

            <p>
              KisanMithr uses your location to help you discover
              nearby markets, farm vehicles and available labour.
            </p>

            <button className="primary-btn">
              Find Nearby Services →
            </button>
          </div>


          <div className="nearby-preview">

            <div className="map-header">
              <span>📍 Your Location</span>
              <span>Basar</span>
            </div>

            <div className="map-area">

              <div className="map-road road1"></div>
              <div className="map-road road2"></div>

              <div className="map-pin farmer-pin">
                📍
              </div>

              <div className="map-item market-pin">
                🛒
                <small>Market</small>
              </div>

              <div className="map-item vehicle-pin">
                🚜
                <small>Tractor</small>
              </div>

              <div className="map-item labour-pin">
                👷
                <small>Labour</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= COMMUNITY ================= */}
      <section className="community-section" id="community">

        <div className="community-text">

          <span className="small-heading">
            👨‍🌾 KISAN TALK
          </span>

          <h2>
            Ask. Share.
            <span> Learn. Grow.</span>
          </h2>

          <p>
            Connect with fellow farmers, ask questions, share your
            farming experience and learn from the agricultural community.
          </p>

          <div className="community-buttons">
            <button className="primary-btn">
              Ask a Question
            </button>

            <button className="secondary-btn">
              View Discussions
            </button>
          </div>

        </div>


        <div className="discussion-card">

          <div className="discussion-user">
            <div className="avatar">👨‍🌾</div>

            <div>
              <strong>Ramesh Kumar</strong>
              <small>Farmer • 2 hours ago</small>
            </div>
          </div>

          <h3>
            Which fertilizer is suitable for my cotton crop?
          </h3>

          <p>
            My cotton plants are showing slow growth.
            Can anyone suggest what I should do?
          </p>

          <div className="discussion-footer">
            <span>💬 8 Answers</span>
            <span>👍 14</span>
            <button>View Discussion →</button>
          </div>

        </div>

      </section>


      {/* ================= WHY KISANMITHR ================= */}
      <section className="why-section">

        <div className="section-heading">

          <span>WHY KISANMITHR?</span>

          <h2>
            Made With Farmers
            <strong> in Mind</strong>
          </h2>

        </div>


        <div className="why-grid">

          <div className="why-card">
            <div>📍</div>
            <h3>Local Information</h3>
            <p>
              Discover services and information relevant to your area.
            </p>
          </div>

          <div className="why-card">
            <div>🌐</div>
            <h3>Multiple Languages</h3>
            <p>
              Access information in a language that is comfortable for you.
            </p>
          </div>

          <div className="why-card">
            <div>🤝</div>
            <h3>Farmer Community</h3>
            <p>
              Learn and share experiences with other farmers.
            </p>
          </div>

          <div className="why-card">
            <div>📱</div>
            <h3>Easy to Use</h3>
            <p>
              Simple design created with farmers and rural users in mind.
            </p>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">

        <div className="about-image">
          🌾
        </div>

        <div className="about-content">

          <span className="small-heading">
            ABOUT KISANMITHR
          </span>

          <h2>
            Technology That
            <span> Supports Farmers</span>
          </h2>

          <p>
            KisanMithr is designed as an all-in-one digital platform
            to help farmers access useful agricultural information,
            local resources and community support.
          </p>

          <p>
            Our goal is simple — make important farming information
            easier to find, understand and use.
          </p>

          <button className="primary-btn">
            Learn More →
          </button>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <section className="faq-section">

        <div className="section-heading">

          <span>FAQ</span>

          <h2>
            Frequently Asked
            <strong> Questions</strong>
          </h2>

        </div>


        <div className="faq-list">

          <details>
            <summary>
              How can I find nearby tractors?
            </summary>

            <p>
              Open the Vehicles section and allow location access
              to find available farm vehicles near you.
            </p>
          </details>


          <details>
            <summary>
              How can I check crop market prices?
            </summary>

            <p>
              Open Market and select your crop to view available
              market information.
            </p>
          </details>


          <details>
            <summary>
              Can I ask questions to other farmers?
            </summary>

            <p>
              Yes. Use Kisan Talk to ask questions and participate
              in farmer discussions.
            </p>
          </details>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">

        <div className="contact-info">

          <span className="small-heading">
            CONTACT US
          </span>

          <h2>
            We're Here to
            <span> Help</span>
          </h2>

          <p>
            Have a question, suggestion or problem?
            Get in touch with the KisanMithr team.
          </p>

          <div className="contact-item">
            📞
            <div>
              <strong>Phone</strong>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="contact-item">
            📧
            <div>
              <strong>Email</strong>
              <p>support@kisanmithr.com</p>
            </div>
          </div>

          <div className="contact-item">
            📍
            <div>
              <strong>Location</strong>
              <p>RGUKT Basar, Telangana</p>
            </div>
          </div>

        </div>


        <form className="contact-form">

          <h3>Send us a Message</h3>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="text"
            placeholder="Mobile Number / Email"
          />

          <textarea
            placeholder="Write your message..."
            rows="5"
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message →
          </button>

        </form>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <h2>🌱 KisanMithr</h2>

            <p>
              Better Farming • Brighter Future
            </p>

            <p className="footer-description">
              Empowering farmers with useful information,
              local resources and digital tools.
            </p>

          </div>


          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#community">Community</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>

          </div>


          <div className="footer-column">

            <h3>Farmer Services</h3>

            <a href="#services">Market</a>
            <a href="#services">Vehicles</a>
            <a href="#services">Labour</a>
            <a href="#services">Weather</a>
            <a href="#services">Schemes</a>

          </div>


          <div className="footer-column">

            <h3>Support</h3>

            <a href="#faq">FAQ</a>
            <a href="#contact">Help Center</a>
            <a href="#contact">Report a Problem</a>
            <a href="#contact">Feedback</a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 KisanMithr. All Rights Reserved.
          </p>

          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>

          <p>
            Made with ❤️ for Farmers 🌱
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;
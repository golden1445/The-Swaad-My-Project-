import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <div className="branding">
            <h1 className="restaurant-name">The-Swaad</h1>
            <p className="tagline">Delicious Happiness in Every Bite</p>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button className="reservation-btn">Make Reservation</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Authentic Flavors</h2>
          <p>Experience culinary magic with our seasonal specialties</p>
          <button className="order-online-btn">Order Online</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🍗</div>
          <h3>Non Vegan Options</h3>
          <p>Savor the bold flavors of our delicious non-vegan specialties</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌿</div>
          <h3>Vegan Options</h3>
          <p>Where plants take the spotlight & flavor steals the show</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🍨</div>
          <h3>Desserts</h3>
          <p>Every meal deserves a sweet ending.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>The-Swaad</h4>
            <p>Bringing joy through authentic flavors and warm hospitality since 2010.</p>
            <div className="social-icons">
              <img src=""></img>
              <a href="#twitter"></a>
              <a href="#tiktok"></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Testy Street New Delhi</p>
            <p>New Delhi(110067)</p>
            <p>Phone: (+91) 9945670890</p>
            <p>Email: hello@the-swaad.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Opening Hours</h4>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday: 10am - 11pm</p>
            <p>Sunday: 10am - 9pm</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} The-Swaad. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

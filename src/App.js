import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './App.css';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [collectionsDropdown, setCollectionsDropdown] = useState(false);
  const [activeCollection, setActiveCollection] = useState('photography');
  const [viewMode, setViewMode] = useState('home'); // 'home', 'carousel', or 'grid'
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [showContactForm, setShowContactForm] = useState(false);
  // const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  // const [contactForm, setContactForm] = useState({
  //   name: '',
  //   country: '',
  //   address: '',
  //   city: '',
  //   hearAbout: '',
  //   email: '',
  //   message: ''
  // });
  // const [feedbackForm, setFeedbackForm] = useState({
  //   name: '',
  //   country: '',
  //   address: '',
  //   city: '',
  //   hearAbout: '',
  //   email: '',
  //   message: '',
  //   navigationEase: '',
  //   artRating: '',
  //   photographyRating: ''
  // });
  // const [feedbackFormTouched, setFeedbackFormTouched] = useState({});
  // const [feedbackFormSubmitted, setFeedbackFormSubmitted] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
  }, []);

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.nav-dropdown');
      if (collectionsDropdown && dropdown && !dropdown.contains(event.target)) {
        setCollectionsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [collectionsDropdown]);

  // Handle URL changes
  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/') {
      // setShowContactForm(false);
      // setShowFeedbackForm(false);
      setCollectionsDropdown(false);
      setViewMode('home');
    } else if (path === '/contact') {
      // setShowContactForm(true);
      // setShowFeedbackForm(false);
      setCollectionsDropdown(false);
      setViewMode('home');
    } else if (path === '/feedback') {
      // setShowFeedbackForm(true);
      // setShowContactForm(false);
      setCollectionsDropdown(false);
      setViewMode('home');
    } else if (path.startsWith('/collection/')) {
      const collection = path.split('/')[2];
      setActiveCollection(collection);
      // setShowContactForm(false);
      // setShowFeedbackForm(false);
      setCollectionsDropdown(false);
      setViewMode('grid');
    }
  }, [location.pathname]);

  // Sample wildlife photography images - you can replace these with actual images
  const photographyImages = [
    {
      id: 1,
      src: '/photos/ Blue Striped Spider.jpeg',
      alt: 'Blue Striped Spider in its natural habitat',
      title: 'Phintella Vittata'
    },
    {
      id: 2,
      src: '/photos/ants.jpeg',
      alt: 'Ants working together in nature',
      title: 'Ants'
    },
    {
      id: 3,
      src: '/photos/Butterfly_1.jpeg',
      alt: 'Beautiful butterfly with colorful wings',
      title: 'Butterfly Beauty'
    },
    {
      id: 4,
      src: '/photos/Butterfly_2.jpeg',
      alt: 'Butterfly with delicate wings in natural setting',
      title: 'Butterfly Wings'
    },
    {
      id: 5,
      src: '/photos/little egret.jpeg',
      alt: 'Little Egret bird in its natural habitat',
      title: 'Little Egret'
    },
    {
      id: 6,
      src: '/photos/Egret Bird.jpeg',
      alt: 'Egret bird in its natural habitat',
      title: 'Egret In The Wild'
    },
    {
      id: 7,
      src: '/photos/white bengal tiger.jpeg',
      alt: 'White Bengal Tiger in its natural habitat',
      title: 'White Bengal Tiger'
    },
    {
      id: 8,
      src: '/photos/Lioness.jpeg',
      alt: 'Lioness in its natural habitat',
      title: 'Lion Queen Of India'
    },
    {
      id: 9,
      src: '/photos/Indian Tiger.jpeg',
      alt: 'Indian Tiger in its natural habitat',
      title: 'Indian Tiger'
    },
    {
      id: 10,
      src: '/photos/Kingfisher Bird.jpeg',
      alt: 'Kingfisher bird in its natural habitat',
      title: 'The Kingfisher'
    },
    {
      id: 11,
      src: '/photos/House sparrow.jpeg',
      alt: 'House sparrow in its natural habitat',
      title: 'House Sparrow'
    },
    {
      id: 12,
      src: '/photos/moon.jpeg',
      alt: 'Beautiful moon in the night sky',
      title: 'Lunar Beauty'
    },
    {
      id: 13,
      src: '/photos/Mule Deer.jpeg',
      alt: 'Mule deer in its natural habitat',
      title: 'Mule Deer'
    },
    {
      id: 14,
      src: '/photos/Panther.jpeg',
      alt: 'Panther in its natural habitat',
      title: 'Panther In The Wild'
    },
    {
      id: 15,
      src: '/photos/Passer.jpeg',
      alt: 'Passer bird in its natural habitat',
      title: 'Passer'
    },
    {
      id: 16,
      src: '/photos/Screenshot 2025-08-19 at 3.01.32 PM.png',
      alt: 'Sloth Bear in its natural habitat',
      title: 'Sloth Bear'
    },
    {
      id: 17,
      src: '/photos/Squirewl.jpeg',
      alt: 'Squirrel in its natural habitat',
      title: 'Squirrel'
    },
    {
      id: 18,
      src: '/photos/Tides.jpeg',
      alt: 'Ocean tides',
      title: 'Oceanic Tides'
    },
    {
      id: 19,
      src: '/photos/Water crow.jpeg',
      alt: 'Water crow in its natural habitat',
      title: 'Water Crow'
    }
  ];

  // Sample art images
  const artImages = [
    {
      id: 1,
      src: '/art/Screenshot 2025-07-28 at 4.23.40 PM.png',
      alt: 'elephant in its natural habitat',
      title: 'Elephant'
    },
    {
      id: 2,
      src: '/art/WhatsApp Image 2025-07-27 at 16.40.40.jpeg',
      alt: 'ben10',
      title: 'Ben 10 Four Arms'
    },
    {
      id: 3,
      src: '/art/WhatsApp Image 2025-07-28 at 13.44.02.jpeg',
      alt: 'Iron Man',
      title: 'Iron Man'
    },
    {
      id: 4,
      src: '/art/Screenshot 2025-08-19 at 3.33.16 PM.png',
      alt: 'Air Force plane',
      title: 'Air Force Plane'
    },
    {
      id: 5,
      src: '/art/WhatsApp Image 2025-07-28 at 16.42.32.jpeg',
      alt: 'jsja',
      title: 'Vintage Telephone'
    },
    {
      id: 6,
      src: '/art/Screenshot 2025-08-19 at 3.36.19 PM.png',
      alt: 'Watercolor painting',
      title: 'Mr.Bean'
    },
    {
      id: 7,
      src: '/art/Screenshot 2025-08-19 at 3.37.58 PM.png',
      alt: 'War Zone',
      title: 'War Zone'
    },
    {
      id: 8,
      src: '/art/WhatsApp Image 2025-07-28 at 16.44.08.jpeg',
      alt: 'Ceramic art piece',
      title: 'Cricketer'
    },
    {
      id: 9,
      src: '/art/WhatsApp Image 2025-07-28 at 16.43.50.jpeg',
      alt: 'Statue of Liberty',
      title: 'Statue of Liberty'
    },
    {
      id: 10,
      src: '/art/anime.jpeg',
      alt: 'anime',
      title: 'Anime'
    },
    {
      id: 11,
      src: '/art/archer.jpeg',
      alt: 'Archer',
      title: 'Archer'
    },
    {
      id: 12,
      src: '/art/dino.jpeg',
      alt: 'T-Rex',
      title: 'T-Rex'
    },
    {
      id: 13,
      src: '/art/bumbelbee.jpeg',
      alt: 'Bumble Bee',
      title: 'Bumble Bee'
    },
    {
      id: 14,
      src: '/art/samurai.jpeg',
      alt: 'Samurai Warrior',
      title: 'Samurai Warrior'
    },
    {
      id: 15,
      src: '/art/ben 10.jpeg',
      alt: 'Ben 10',
      title: 'Ben 10'
    },
    {
      id: 16,
      src: '/art/spiderman.jpeg',
      alt: 'Spiderman',
      title: 'Spider Man'
    },
    
    
    

  ];

  // Home carousel images from Google
  const homeCarouselImages = [
    {
      id: 1,
      src: '/photos/little egret.jpeg',
      alt: 'Little Egret bird in its natural habitat',
      title: 'Little Egret'
    },
    {
      id: 2,
      src: '/photos/Water crow.jpeg',
      alt: 'Water crow in its natural habitat',
      title: 'Water Crow'
    },
    {
      id: 3,
      src: '/art/archer.jpeg',
      alt: 'Archer',
      title: 'Archer'
    }
  ];

  const images = activeCollection === 'photography' ? photographyImages : artImages;

  // Carousel navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === homeCarouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? homeCarouselImages.length - 1 : prevIndex - 1
    );
  };

  // Updated tab handlers to always open the correct tab and close others
  // const handleContactClick = (e) => {
  //   e.preventDefault();
  //   setPreviousViewMode(viewMode); // Store current view before opening form
  //   // setShowContactForm(true);
  //   // setShowFeedbackForm(false);
  //   setCollectionsDropdown(false);
  //   setViewMode('home');
  //   navigate('/contact');
  // };

  // const handleFeedbackClick = (e) => {
  //   e.preventDefault();
  //   setPreviousViewMode(viewMode); // Store current view before opening form
  //   setShowFeedbackForm(true);
  //   setShowContactForm(false);
  //   setCollectionsDropdown(false);
  //   setViewMode('home');
  //   navigate('/feedback');
  // };

  const goBackToHome = () => {
    // setShowContactForm(false);
    // setShowFeedbackForm(false);
    setCollectionsDropdown(false);
    setViewMode('home');
    navigate('/');
  };

  const toggleCollectionsDropdown = () => {
    // setShowContactForm(false);
    // setShowFeedbackForm(false);
    setCollectionsDropdown((prev) => !prev);
    // If coming from contact or feedback forms, hide all content until collection is selected
    // if (showContactForm || showFeedbackForm) {
    //   setViewMode('none');
    // }
    // Otherwise keep the current view (carousel or grid)
  };

  const selectCollection = (collection) => {
    setActiveCollection(collection);
    setCollectionsDropdown(false);
    // setShowContactForm(false);
    // setShowFeedbackForm(false);
    setViewMode('grid'); // Switch to grid view when selecting a collection
    navigate(`/collection/${collection}`);
  };

  // const handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   // setContactForm((prev) => ({ ...prev, [name]: value }));
  //   setFormTouched((prev) => ({ ...prev, [name]: true }));
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   setFormSubmitted(true);
  //   
  //   // Check if all fields are filled
  //   const allFilled = Object.values(contactForm).every((v) => v.trim() !== '');
  //   
  //   if (allFilled) {
  //     // Prepare email template parameters
  //     const templateParams = {
  //       to_email: 'akshmalik.am@gmail.com',
  //       from_name: contactForm.name,
  //       from_email: contactForm.email,
  //       country: contactForm.country,
  //       address: contactForm.address,
  //       city: contactForm.city,
  //       hear_about: contactForm.hearAbout,
  //       message: contactForm.message,
  //       reply_to: contactForm.email
  //     };

  //     // Send email using EmailJS
  //     emailjs.send(
  //       'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  //       'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  //       templateParams
  //     )
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //       alert('Thank you for contacting me! I will get back to you soon.');
  //       setShowContactForm(false);
  //       setContactForm({
  //         name: '', country: '', address: '', city: '', hearAbout: '', email: '', message: ''
  //       });
  //       setFormTouched({});
  //       setFormSubmitted(false);
  //     })
  //     .catch((error) => {
  //       console.log('FAILED...', error);
  //       alert('Sorry, there was an error sending your message. Please try again or contact me directly at akshmalik.am@gmail.com');
  //     });
  //   }
  // };

  // const handleCloseForm = () => {
  //   // setShowContactForm(false);
  //   setFormSubmitted(false);
  // };

  // const handleFeedbackFormChange = (e) => {
  //   const { name, value } = e.target;
  //   setFeedbackForm((prev) => ({ ...prev, [name]: value }));
  //   setFeedbackFormTouched((prev) => ({ ...prev, [name]: true }));
  // };

  // const handleFeedbackFormSubmit = (e) => {
  //   e.preventDefault();
  //   setFeedbackFormSubmitted(true);
  //   
  //   // Check if all fields are filled
  //   const allFilled = Object.values(feedbackForm).every((v) => v.trim() !== '');
  //   
  //   if (allFilled) {
  //     // Prepare email template parameters
  //     const templateParams = {
  //       to_email: 'akshmalik.am@gmail.com',
  //       from_name: feedbackForm.name,
  //       from_email: feedbackForm.email,
  //       country: feedbackForm.country,
  //       address: feedbackForm.address,
  //       city: feedbackForm.city,
  //       hear_about: feedbackForm.hearAbout,
  //       message: feedbackForm.message,
  //       navigation_ease: feedbackForm.navigationEase,
  //       art_rating: feedbackForm.artRating,
  //       photography_rating: feedbackForm.photographyRating,
  //       reply_to: feedbackForm.email,
  //       subject: 'New Feedback Submission'
  //     };

  //     // Send email using EmailJS
  //     emailjs.send(
  //       'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  //       'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  //       templateParams
  //     )
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //       alert('Thank you for your feedback! I appreciate your input.');
  //       setShowFeedbackForm(false);
  //       setFeedbackForm({
  //         name: '', country: '', address: '', city: '', hearAbout: '', email: '', comment: '',
  //         navigationEase: '', artRating: '', photographyRating: ''
  //       });
  //       setFeedbackFormTouched({});
  //       setFeedbackFormSubmitted(false);
  //     })
  //     .catch((error) => {
  //       console.log('FAILED...', error);
  //       alert('Sorry, there was an error sending your feedback. Please try again or contact me directly at akshmalik.am@gmail.com');
  //     });
  //   }
  // };

  // const handleCloseFeedbackForm = () => {
  //   setShowFeedbackForm(false);
  //   setFeedbackFormSubmitted(false);
  // };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="name">Aksh Malik</h1>
          <nav className="navigation">
            <button onClick={goBackToHome} className="nav-link">HOME</button>
            <div className="nav-dropdown">
              <button 
                className="nav-link dropdown-toggle" 
                onClick={toggleCollectionsDropdown}
              >
                COLLECTIONS ▼
              </button>
              {collectionsDropdown && (
                <div className="dropdown-menu">
                  <button 
                    className="dropdown-item"
                    onClick={() => selectCollection('photography')}
                  >
                    Photography
                  </button>
                  <button 
                    className="dropdown-item"
                    onClick={() => selectCollection('art')}
                  >
                    Art
                  </button>
                </div>
              )}
            </div>
            {/* <button onClick={handleContactClick} className="nav-link">CONTACT</button> */}
            {/* <button onClick={handleFeedbackClick} className="nav-link">FEEDBACK</button> */}
          </nav>
        </div>
      </header>

      {/* Contact Form Modal */}
      {/* {showContactForm && (
        <div className="contact-form-modal">
          <div className="contact-form-container">
            <button className="close-form" onClick={handleCloseForm}>&times;</button>
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={contactForm.name} onChange={handleFormChange} required />
                {formSubmitted && !contactForm.name && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" name="country" value={contactForm.country} onChange={handleFormChange} required />
                {formSubmitted && !contactForm.country && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" value={contactForm.address} onChange={handleFormChange} required />
                {formSubmitted && !contactForm.address && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" value={contactForm.city} onChange={handleFormChange} required />
                {formSubmitted && !contactForm.city && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>How did you hear about me?</label>
                <input type="text" name="hearAbout" value={contactForm.hearAbout} onChange={handleFormChange} required />
                {formSubmitted && !contactForm.hearAbout && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={contactForm.email} onChange={handleFormChange} required />
                {formSubmitted && !contactForm.email && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={contactForm.message} onChange={handleFormChange} required />
                {formSubmitted && !contactForm.message && <span className="form-error">Required</span>}
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )} */}

      {/* Feedback Form Modal */}
      {/* {showFeedbackForm && (
        <div className="contact-form-modal">
          <div className="contact-form-container">
            <button className="close-form" onClick={handleCloseFeedbackForm}>&times;</button>
            <h2>Feedback</h2>
            <form className="contact-form" onSubmit={handleFeedbackFormSubmit} noValidate>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={feedbackForm.name} onChange={handleFeedbackFormChange} required />
                {feedbackFormSubmitted && !feedbackForm.name && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" name="country" value={feedbackForm.country} onChange={handleFeedbackFormChange} required />
                {feedbackFormSubmitted && !feedbackForm.country && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" value={feedbackForm.address} onChange={handleFeedbackFormChange} required />
                {feedbackFormSubmitted && !feedbackForm.address && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" value={feedbackForm.city} onChange={handleFeedbackFormChange} required />
                {feedbackFormSubmitted && !feedbackForm.city && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>How did you hear about me?</label>
                <input type="text" name="hearAbout" value={feedbackForm.hearAbout} onChange={handleFeedbackFormChange} required />
                {feedbackFormSubmitted && !feedbackForm.hearAbout && <span className="form-error">Required</span>}
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={feedbackForm.email} onChange={handleFeedbackFormChange} required />
                {feedbackFormSubmitted && !feedbackForm.email && <span className="form-error">Required</span>}
              </div>
              
              <div className="form-group">
                <label>Did you find my website easy to navigate?</label>
                <select name="navigationEase" value={feedbackForm.navigationEase} onChange={handleFeedbackFormChange} required>
                  <option value="">Select an option</option>
                  <option value="very easy">Very Easy</option>
                  <option value="fairly easy">Fairly Easy</option>
                  <option value="difficult">Difficult</option>
                </select>
                {feedbackFormSubmitted && !feedbackForm.navigationEase && <span className="form-error">Required</span>}
              </div>
              
              <div className="form-group">
                <label>How will you rate my art?</label>
                <select name="artRating" value={feedbackForm.artRating} onChange={handleFeedbackFormChange} required>
                  <option value="">Select a rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
                {feedbackFormSubmitted && !feedbackForm.artRating && <span className="form-error">Required</span>}
              </div>
              
              <div className="form-group">
                <label>How will you rate my photography skills?</label>
                <select name="photographyRating" value={feedbackForm.photographyRating} onChange={handleFeedbackFormChange} required>
                  <option value="">Select a rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
                {feedbackFormSubmitted && !feedbackForm.photographyRating && <span className="form-error">Required</span>}
              </div>
              
              <div className="form-group">
                <label>Comment</label>
                <textarea name="message" value={feedbackForm.message} onChange={handleFeedbackFormChange} required />
                {feedbackFormSubmitted && !feedbackForm.message && <span className="form-error">Required</span>}
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )} */}

      {/* Main Content */}
      {/* !showContactForm && !showFeedbackForm && */ viewMode !== 'none' && (
        <main className="main-content">
          {viewMode === 'home' && (
            <div className="home-content">
              <h2 className="recent-updates-title">Recent Updates</h2>
              <div className="image-carousel">
                <button className="carousel-button prev" onClick={prevImage}>
                  ‹
                </button>
                
                <div className="image-container">
                  <div 
                    className="blurred-background"
                    style={{
                      backgroundImage: `url(${homeCarouselImages[currentImageIndex].src})`
                    }}
                  ></div>
                  <a 
                    href={homeCarouselImages[currentImageIndex].src} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="image-link"
                  >
                    <img 
                      src={homeCarouselImages[currentImageIndex].src} 
                      alt={homeCarouselImages[currentImageIndex].alt}
                      className="main-image"
                    />
                    <div className="image-title">
                      {homeCarouselImages[currentImageIndex].title}
                    </div>
                  </a>
                </div>
                
                <button className="carousel-button next" onClick={nextImage}>
                  ›
                </button>
              </div>
            </div>
          )}
          
          {viewMode === 'grid' && (
            <div className="grid-view">
              <div className="collection-header">
                <h2 className="collection-title">
                  {activeCollection === 'photography' ? 'Photography Collection' : 'Art Collection'}
                </h2>
                <p className="collection-subtitle">
                  {activeCollection === 'photography' 
                    ? 'Disclamer: All images are taken by me and are property of Aksh Malik'
                     + '.You may click on a specific image to view it in full size.'
                    : 'Disclamer: All Drawings are created by me and are property of Aksh Malik'
                     + '.You may click on a specific image to view it in full size'
                  }
                </p>
              </div>
              <div className="image-grid">
                {images.map((image) => (
                  <div key={image.id} className="grid-item">
                    <a 
                      href={image.src} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="grid-image-link"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="grid-image"
                      />
                      <div className="grid-image-overlay">
                        <h3 className="grid-image-title">{image.title}</h3>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-name">Aksh Malik</h3>
          </div>
          <div className="footer-right">
            
            <div className="social-icons">
              <a href="/" className="social-icon" title="Home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </a>
              <a href="mailto:akshmalik.am@gmail.com" className="social-icon" title="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://instagram.com/akshmalik07" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://github.com/aksh-m07" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aksh-malik-35a881360" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; Aksh Malik 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;

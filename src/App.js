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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
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
      src: '/photos/slothbear.png',
      alt: 'Sloth Bear in its natural habitat',
      title: 'Sloth Bear'
    },
    {
      id: 17,
      src: '/photos/squirrel.jpeg',
      alt: 'Squirrel in its natural habitat',
      title: 'squirrel'
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
      src: '/art/elephant.png',
      alt: 'elephant in its natural habitat',
      title: 'Elephant'
    },
    {
      id: 2,
      src: '/art/ben10fourarms.jpeg',
      alt: 'ben10',
      title: 'Ben 10 Four Arms'
    },
    {
      id: 3,
      src: '/art/ironman.jpeg',
      alt: 'Iron Man',
      title: 'Iron Man'
    },
    {
      id: 4,
      src: '/art/airforce.png',
      alt: 'Air Force plane',
      title: 'Air Force Plane'
    },
    {
      id: 5,
      src: '/art/vintagephone.jpeg',
      alt: 'jsja',
      title: 'Vintage Telephone'
    },
    {
      id: 6,
      src: '/art/bean.png',
      alt: 'Watercolor painting',
      title: 'Mr.Bean'
    },
    {
      id: 7,
      src: '/art/warzone.png',
      alt: 'War Zone',
      title: 'War Zone'
    },
    {
      id: 8,
      src: '/art/cricketer.jpeg',
      alt: 'Ceramic art piece',
      title: 'Cricketer'
    },
    {
      id: 9,
      src: '/art/statueofliberty.jpeg',
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
    {
      id: 17,
      src: '/art/greekwarrior.jpeg',
      alt: 'gw',
      title: 'Greek Warrior'
    },
    {
      id: 18,
      src: '/art/Scorpian.jpeg',
      alt: 'scorpian',
      title: 'Scorpian'
    },
    {
      id: 19,
      src: '/art/Spider Man.jpeg',
      alt: 'spiderman 2',
      title: 'Spider Man 2'
    },  
    {
      id: 20,
      src: '/art/young man.jpeg',
      alt: 'young man',
      title: 'Young Man'
    },  
    {
      id: 21,
      src: '/art/hen.jpeg',
      alt: 'hen',
      title: 'Hen'
    },  
    {
      id: 22,
      src: '/art/duckling.jpeg',
      alt: 'duckling',
      title: 'Duckling'
    },  
    {
      id: 23,
      src: '/art/dog.jpeg',
      alt: 'dog',
      title: 'Dog'
    },  
    {
      id: 24,
      src: '/art/Balloon Dog.jpeg',
      alt: 'balloon dog',
      title: 'Balloon Dog'
    },  
    {
      id: 25,
      src: '/art/Buzz Lightyear.jpeg',
      alt: 'Buzz Lightyear',
      title: 'Buzz Lightyear'
    },
    {
      id: 26,
      src: '/art/Love_1.jpeg',
      alt: 'Love_1',
      title: 'Love_1' 
    },
    {
      id: 27,
      src: '/art/Love_2.jpeg',
      alt: 'Love_2',
      title: 'Love_2'
    }
    
    
    
    

  ];

  // Home carousel images from Google
  const homeCarouselImages = [
    {
      id: 1,
      src: '/art/Buzz Lightyear.jpeg',
      alt: 'Buzz Lightyear',
      title: 'Buzz Lightyear'
    },
    {
      id: 2,
      src: '/art/Love_1.jpeg',
      alt: 'Love_1',
      title: 'Love_1' 
    },
    {
      id: 3,
      src: '/art/Love_2.jpeg',
      alt: 'Love_2',
      title: 'Love_2'
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

  // Swipe functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  

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

      {/* Main Content */}
      {/* !showContactForm && !showFeedbackForm && */ viewMode !== 'none' && (
        <main className="main-content">
          {viewMode === 'home' && (
            <div className="home-content">
              <h2 className="recent-updates-title">Recent Updates</h2>
              <div 
                className="image-carousel"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <button className="carousel-button prev desktop-only" onClick={prevImage}>
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
                
                <button className="carousel-button next desktop-only" onClick={nextImage}>
                  ›
                </button>
              </div>
              
              {/* Carousel Dots */}
              <div className="carousel-dots">
                {homeCarouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
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
              <a href="https://akshmalik.me/" className="social-icon" title="Home">
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

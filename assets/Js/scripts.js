// Wait for page to load
// Ensure preloader shows for a minimum time
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      // Track when page started loading
      const startTime = new Date().getTime();
      const minDisplayTime = 3000; // Minimum display time in milliseconds
  
      window.addEventListener("load", function () {
        // Calculate how long page took to load
        const loadTime = new Date().getTime() - startTime;
        // Calculate remaining time to show preloader
        const remainingTime = Math.max(0, minDisplayTime - loadTime);
  
        // Wait the remaining time before hiding preloader
        setTimeout(function () {
          preloader.style.opacity = "0";
          setTimeout(function () {
            preloader.style.display = "none";
          }, 500);
        }, remainingTime);
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      // Optional: Add a progress element to your preloader HTML
      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      preloader.appendChild(progressBar);
  
      // Simulate loading progress
      let progress = 0;
      const interval = setInterval(function () {
        progress += Math.random() * 10;
        if (progress >= 100) {
          clearInterval(interval);
          progress = 100;
  
          // Hide preloader
          setTimeout(function () {
            preloader.style.opacity = "0";
            setTimeout(function () {
              preloader.style.display = "none";
            }, 500);
          }, 500);
        }
  
        progressBar.style.width = progress + "%";
      }, 300);
    }
  });
  
  // Initialize animations
  initAnimations();
  
  // Initialize scroll functions
  initScrollFunctions();
  
  // Initialize portfolio filters
  initPortfolioFilters();
  
  // Setup form validation
  setupFormValidation();
  
  // Hide preloader when everything is loaded
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      // Wait 3 seconds (3000ms) before starting to fade out
      setTimeout(function () {
        preloader.style.opacity = "0";
        setTimeout(function () {
          preloader.style.display = "none";
        }, 500);
      }, 3000); // Adjust this value to control how long the preloader shows
    }
  });
  
  // Initialize animations with GSAP if available, fallback to CSS animations
  function initAnimations() {
    // Check if GSAP is available
    if (typeof gsap !== "undefined") {
      // GSAP is available, use GSAP animations
  
      // Register ScrollTrigger plugin if available
      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }
  
      // Hero section animations
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
  
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
  
      gsap.from(".hero-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
  
      gsap.from(".hero-btn-group", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.9,
        ease: "power3.out",
      });
  
      gsap.from(".hero-image-container", {
        opacity: 0,
        x: 100,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });
  
      // Floating elements animation
      gsap.to(".floating-shape", {
        y: 20,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
  
      gsap.to(".hero-dots", {
        opacity: 0.1,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
  
      // Section animations with ScrollTrigger
      if (typeof ScrollTrigger !== "undefined") {
        const sections = document.querySelectorAll("section:not(.hero)");
  
        sections.forEach((section) => {
          // Section title animation
          const title = section.querySelector(".section-title");
          if (title) {
            gsap.from(title, {
              scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              opacity: 0,
              y: 50,
              duration: 0.8,
              ease: "power3.out",
            });
          }
  
          // Section subtitle animation
          const subtitle = section.querySelector(".section-subtitle");
          if (subtitle) {
            gsap.from(subtitle, {
              scrollTrigger: {
                trigger: subtitle,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              opacity: 0,
              y: 50,
              duration: 0.8,
              delay: 0.2,
              ease: "power3.out",
            });
          }
        });
      }
      // Animate fade elements based on classes
      const fadeElements = document.querySelectorAll(
        ".fade-up, .fade-left, .fade-right, .fade-in"
      );
  
      if (typeof ScrollTrigger !== "undefined") {
        fadeElements.forEach((element) => {
          let delay = 0.2;
  
          if (element.classList.contains("delay-1")) delay = 0.3;
          if (element.classList.contains("delay-2")) delay = 0.4;
          if (element.classList.contains("delay-3")) delay = 0.5;
          if (element.classList.contains("delay-4")) delay = 0.6;
          if (element.classList.contains("delay-5")) delay = 0.7;
  
          if (element.classList.contains("fade-up")) {
            gsap.from(element, {
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 0,
              y: 50,
              duration: 0.8,
              delay: delay,
              ease: "power3.out",
            });
          } else if (element.classList.contains("fade-left")) {
            gsap.from(element, {
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 0,
              x: -50,
              duration: 0.8,
              delay: delay,
              ease: "power3.out",
            });
          } else if (element.classList.contains("fade-right")) {
            gsap.from(element, {
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 0,
              x: 50,
              duration: 0.8,
              delay: delay,
              ease: "power3.out",
            });
          } else if (element.classList.contains("fade-in")) {
            gsap.from(element, {
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 0,
              duration: 0.8,
              delay: delay,
              ease: "power3.out",
            });
          }
        });
      }
  
      // Service card hover effect
      const serviceCards = document.querySelectorAll(".service-card");
  
      serviceCards.forEach((card) => {
        const icon = card.querySelector(".service-icon");
        if (icon) {
          card.addEventListener("mouseenter", function () {
            gsap.to(icon, {
              rotationY: 360,
              duration: 0.8,
              ease: "power3.out",
            });
          });
  
          card.addEventListener("mouseleave", function () {
            gsap.to(icon, {
              rotationY: 0,
              duration: 0.8,
              ease: "power3.out",
            });
          });
        }
      });
  
      // Portfolio item hover effect
      const portfolioItems = document.querySelectorAll(".portfolio-wrapper");
  
      portfolioItems.forEach((item) => {
        const overlay = item.querySelector(".portfolio-overlay");
        const title = item.querySelector(".portfolio-title");
        const category = item.querySelector(".portfolio-category");
  
        if (overlay && title && category) {
          item.addEventListener("mouseenter", function () {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.4,
              ease: "power3.out",
            });
  
            gsap.to(title, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.1,
              ease: "power3.out",
            });
  
            gsap.to(category, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.2,
              ease: "power3.out",
            });
          });
  
          item.addEventListener("mouseleave", function () {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.4,
              ease: "power3.out",
            });
  
            gsap.to(title, {
              opacity: 0,
              y: 20,
              duration: 0.3,
              ease: "power3.out",
            });
  
            gsap.to(category, {
              opacity: 0,
              y: 20,
              duration: 0.3,
              ease: "power3.out",
            });
          });
        }
      });
    } else {
      // Fallback to CSS-based animations using Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );
  
      fadeElements.forEach((element) => {
        observer.observe(element);
      });
    }
  }
  
  // Initialize scroll functions
  function initScrollFunctions() {
    // Add scrolled class to navbar on scroll
    const navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
  
      // Show/hide back to top button
      const backToTop = document.querySelector(".back-to-top");
  
      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.classList.add("show");
        } else {
          backToTop.classList.remove("show");
        }
      }
  
      // Active menu item on scroll
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-link");
  
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
  
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
  
        if (target) {
          // Close mobile menu if open
          const navbarToggler = document.querySelector(".navbar-toggler");
          const navbarCollapse = document.querySelector(".navbar-collapse");
  
          if (navbarCollapse && navbarCollapse.classList.contains("show") && navbarToggler) {
            navbarToggler.click();
          }
  
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Back to top button click event
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
      backToTop.addEventListener("click", function (e) {
        e.preventDefault();
  
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }
  
  // Initialize portfolio filters
  function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll(".portfolio-filter");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
  
    if (filterButtons.length && portfolioItems.length) {
      filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"));
  
          // Add active class to clicked button
          this.classList.add("active");
  
          // Get filter value
          const filterValue = this.getAttribute("data-filter");
  
          // Check if GSAP is available for animated filtering
          if (typeof gsap !== "undefined") {
            // Filter portfolio items with animation
            if (filterValue === "*") {
              portfolioItems.forEach((item) => {
                gsap.to(item, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.4,
                  delay: Math.random() * 0.2,
                  ease: "power3.out",
                  onStart: function () {
                    item.style.display = "block";
                  },
                });
              });
            } else {
              portfolioItems.forEach((item) => {
                if (item.classList.contains(filterValue.replace(".", ""))) {
                  gsap.to(item, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    delay: Math.random() * 0.2,
                    ease: "power3.out",
                    onStart: function () {
                      item.style.display = "block";
                    },
                  });
                } else {
                  gsap.to(item, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.4,
                    ease: "power3.out",
                    onComplete: function () {
                      item.style.display = "none";
                    },
                  });
                }
              });
            }
          } else {
            // Fallback to simple show/hide without animation
            portfolioItems.forEach((item) => {
              if (filterValue === "*") {
                item.style.display = "block";
              } else if (item.classList.contains(filterValue.replace(".", ""))) {
                item.style.display = "block";
              } else {
                item.style.display = "none";
              }
            });
          }
        });
      });
    }
  }
  
  // Form validation functions
  function setupFormValidation() {
    const contactForm = document.querySelector(".contact-form form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Get form inputs
        const nameInput = this.querySelector('input[placeholder*="الاسم"]');
        const emailInput = this.querySelector('input[placeholder*="البريد"]');
        const subjectInput = this.querySelector('input[placeholder*="عنوان"]');
        const messageInput = this.querySelector("textarea");
  
        // Validate inputs
        let isValid = true;
  
        if (nameInput && !nameInput.value.trim()) {
          markInvalid(nameInput, "الرجاء إدخال الاسم الكامل");
          isValid = false;
        } else if (nameInput) {
          markValid(nameInput);
        }
  
        if (emailInput && !emailInput.value.trim()) {
          markInvalid(emailInput, "الرجاء إدخال البريد الإلكتروني");
          isValid = false;
        } else if (emailInput && !isValidEmail(emailInput.value)) {
          markInvalid(emailInput, "الرجاء إدخال بريد إلكتروني صحيح");
          isValid = false;
        } else if (emailInput) {
          markValid(emailInput);
        }
  
        if (subjectInput && !subjectInput.value.trim()) {
          markInvalid(subjectInput, "الرجاء إدخال عنوان الرسالة");
          isValid = false;
        } else if (subjectInput) {
          markValid(subjectInput);
        }
  
        if (messageInput && !messageInput.value.trim()) {
          markInvalid(messageInput, "الرجاء إدخال نص الرسالة");
          isValid = false;
        } else if (messageInput) {
          markValid(messageInput);
        }
  
        // If all inputs are valid, submit the form
        if (isValid) {
          // Show success message
          showFormSuccess(contactForm);
  
          // Here you would typically submit the form data via AJAX
          // For now, we'll just reset the form
          setTimeout(() => {
            this.reset();
            // Remove success message after a delay
            setTimeout(() => {
              const successMessage = contactForm.querySelector(".form-success");
              if (successMessage) {
                successMessage.remove();
              }
            }, 3000);
          }, 1000);
        }
      });
    }
  }
  
  // Helper function to mark form field as invalid
  function markInvalid(input, message) {
    input.classList.add("is-invalid");
  
    // Check if error message already exists
    let errorDiv = input.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains("invalid-feedback")) {
      errorDiv = document.createElement("div");
      errorDiv.className = "invalid-feedback";
      input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
  
    errorDiv.textContent = message;
  }
  
  // Helper function to mark form field as valid
  function markValid(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  
    // Remove error message if it exists
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains("invalid-feedback")) {
      errorDiv.textContent = "";
    }
  }
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to show form success message
  function showFormSuccess(form) {
    // Create success message
    const successDiv = document.createElement("div");
    successDiv.className = "alert alert-success mt-4 form-success";
    successDiv.textContent =
      "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.";
  
    // Check if success message already exists
    const existingSuccess = form.querySelector(".form-success");
    if (existingSuccess) {
      existingSuccess.remove();
    }
  
    // Add success message after form
    form.appendChild(successDiv);
  
    // Scroll to success message
    successDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  
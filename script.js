// Debug loading
console.log('Script loaded successfully');

// Language translations
let currentLang = 'es'; // Default language

// Comprehensive project data structure
const projectsData = {
  mtco: {
    id: 'mtco',
    images: [], // Will be populated when images are available
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Hostinger'],
    scope: 'Landing page profesional para estudio de tatuajes',
    features: ['Diseño responsivo', 'Formulario de contacto', 'Optimización SEO', 'Hospedaje en Hostinger'],
    liveUrl: 'https://mtco.cl'
  },
  makimotion: {
    id: 'makimotion',
    images: [], // MakiMotion folder exists but is empty
    technologies: ['Django', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'SQLite'],
    scope: 'Aplicación web para gestión de pacientes médicos',
    features: ['Dashboard personalizado', 'Gestión de citas', 'Resúmenes de pacientes', 'Acceso rápido a información médica']
  },
  gestiontareas: {
    id: 'gestiontareas',
    images: ['cliente_show.png', 'clientes.png', 'login.png', 'main.png', 'reporte_cliente.png', 'tarea_new.png', 'tarea_show.png', 'tareas.png'],
    imageDescriptions: {
      es: {
        'cliente_show.png': 'Vista detallada de un cliente específico con información completa y historial de servicios',
        'clientes.png': 'Lista principal de clientes registrados en el sistema con opciones de gestión',
        'login.png': 'Pantalla de inicio de sesión del sistema con autenticación de usuarios',
        'main.png': 'Dashboard principal con resumen de actividades y accesos rápidos',
        'reporte_cliente.png': 'Reporte detallado generado para un cliente específico en formato PDF',
        'tarea_new.png': 'Formulario para crear una nueva tarea con campos personalizables',
        'tarea_show.png': 'Vista detallada de una tarea específica con comentarios e imágenes',
        'tareas.png': 'Lista completa de tareas con filtros y opciones de gestión'
      },
      en: {
        'cliente_show.png': 'Detailed view of a specific client with complete information and service history',
        'clientes.png': 'Main list of registered clients in the system with management options',
        'login.png': 'System login screen with user authentication',
        'main.png': 'Main dashboard with activity summary and quick access',
        'reporte_cliente.png': 'Detailed report generated for a specific client in PDF format',
        'tarea_new.png': 'Form to create a new task with customizable fields',
        'tarea_show.png': 'Detailed view of a specific task with comments and images',
        'tareas.png': 'Complete task list with filters and management options'
      }
    },
    technologies: ['Ruby on Rails', 'Ruby', 'HTML5', 'CSS3', 'JavaScript', 'PostgreSQL'],
    scope: 'Sistema de gestión para jardineros y clientes',
    features: ['Gestión de usuarios', 'Sistema de materiales', 'Comentarios en tareas', 'Generación de reportes PDF', 'Carga de imágenes']
  },
  ecommerce: {
    id: 'ecommerce',
    images: ['acercade.png', 'carro.png', 'main.png', 'product.png'],
    imageDescriptions: {
      es: {
        'acercade.png': 'Página "Acerca de" con información detallada sobre la empresa y sus valores',
        'carro.png': 'Carrito de compras con productos seleccionados y opciones de pago',
        'main.png': 'Página principal de la tienda con productos destacados y navegación',
        'product.png': 'Vista detallada de un producto individual con descripción y opciones de compra'
      },
      en: {
        'acercade.png': 'About page with detailed information about the company and its values',
        'carro.png': 'Shopping cart with selected products and payment options',
        'main.png': 'Store homepage with featured products and navigation',
        'product.png': 'Detailed view of an individual product with description and purchase options'
      }
    },
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Hostinger'],
    scope: 'Tienda en línea completa con gestión de productos',
    features: ['Catálogo de productos', 'Carrito de compras', 'Gestión de pedidos', 'Panel de administración', 'Páginas informativas']
  }
};

const translations = {
  en: {
    mtco_title: "mtco.cl Tattoo Studio",
    ecom_title: "E-commerce Demo",
    patient_title: "Patient Management App - MakiMotion",
    gardener_title: "Task Management App",
    webapps: "Web Applications",
    ai: "AI",
    contact: "Contact",
    name: "José Tomás Anabalón Díaz",
    about: "Computer Science Engineer. Passionate about artificial intelligence and software development, with experience in generative models, full stack development, and data analysis.",
    
    // Enhanced detailed descriptions
    mtco_desc: "Professional landing page for tattoo studio developed with HTML, CSS and JavaScript, hosted on Hostinger. Features responsive design, implemented contact form functionality, and SEO optimization.",
    mtco_technologies: "Technologies: HTML5, CSS3, JavaScript, Hostinger",
    mtco_scope: "Scope: Complete website with implemented contact functionality",
    mtco_features: "Features: Responsive design, Contact form implementation, SEO optimization, Hostinger hosting",
    
    ecom_desc: "Complete e-commerce store developed with WordPress WooCommerce on Hostinger. Includes product catalog, shopping cart, order management, and administrative panel.",
    ecom_technologies: "Technologies: WordPress, WooCommerce, PHP, MySQL, Hostinger",
    ecom_scope: "Scope: Complete online store with product management",
    ecom_features: "Features: Product catalog, Shopping cart, Order management, Admin panel, Informational pages",
    
    patient_desc: "Django application for medical patient management with appointment summaries and easy access to patient information. Custom dashboard with tracking features.",
    patient_technologies: "Technologies: Django, Python, HTML5, CSS3, JavaScript, SQLite",
    patient_scope: "Scope: Web application for medical patient management",
    patient_features: "Features: Custom dashboard, Appointment management, Patient summaries, Quick access to medical information",
    
    gardener_desc: "Ruby on Rails application for organizing gardeners and clients with material system, task comments, and user management. Includes PDF report generation and image uploads.",
    gardener_technologies: "Technologies: Ruby on Rails, Ruby, HTML5, CSS3, JavaScript, PostgreSQL",
    gardener_scope: "Scope: Management system for gardeners and clients",
    gardener_features: "Features: User management, Material system, Task comments, PDF report generation, Image uploads",
    
    thesis_title: "Thesis: Sketch-to-Dress with Generative Models",
    thesis_desc: "Creative approach to multimodal AI focusing on knowledge transfer from sketches to realistic dress images. Explores drawing as a creative form of model evaluation using various generative models.",
    thesis_enhanced_desc: "This thesis presents a creative and multimodal vision for AI, focusing on the transfer of knowledge from sketches to realistic images of dresses. The work explores the use of drawing as a creative form of model evaluation, comparing various generative approaches including Pix2Pix, CycleGAN, ControlNet, BBDM, DDIM, and VQGan.",
    thesis_github_ref: "Complete version available at GitHub repository: AnabalonJT/latex-doc",
    thesis_link: "View Thesis (PDF)",
    send: "Send",
    click_to_view: "Click to view images"
  },
  es: {
    mtco_title: "Estudio de Tatuajes mtco.cl",
    ecom_title: "Demo E-commerce",
    patient_title: "App de Gestión de Pacientes - MakiMotion",
    gardener_title: "App de Gestión de Tareas",
    webapps: "Aplicaciones Web",
    ai: "IA",
    contact: "Contacto",
    name: "José Tomás Anabalón Díaz",
    about: "Ingeniero en ciencias de la computación. Apasionado por la inteligencia artificial y el desarrollo de software, con experiencia en modelos generativos, desarrollo full stack y análisis de datos.",
    
    // Enhanced detailed descriptions
    mtco_desc: "Landing page profesional para estudio de tatuajes desarrollada con HTML, CSS y JavaScript, hospedada en Hostinger. Incluye diseño responsivo, funcionalidad de formulario de contacto implementada y optimización SEO.",
    mtco_technologies: "Tecnologías: HTML5, CSS3, JavaScript, Hostinger",
    mtco_scope: "Alcance: Sitio web completo con funcionalidad de contacto implementada",
    mtco_features: "Características: Diseño responsivo, Formulario de contacto implementado, Optimización SEO, Hospedaje en Hostinger",
    
    ecom_desc: "Tienda en línea completa desarrollada con WordPress WooCommerce en Hostinger. Incluye catálogo de productos, carrito de compras, gestión de pedidos y panel administrativo.",
    ecom_technologies: "Tecnologías: WordPress, WooCommerce, PHP, MySQL, Hostinger",
    ecom_scope: "Alcance: Tienda en línea completa con gestión de productos",
    ecom_features: "Características: Catálogo de productos, Carrito de compras, Gestión de pedidos, Panel administrativo, Páginas informativas",
    
    patient_desc: "Aplicación Django para gestión de pacientes médicos con resúmenes de citas y acceso fácil a información de pacientes. Dashboard personalizado con funciones de seguimiento.",
    patient_technologies: "Tecnologías: Django, Python, HTML5, CSS3, JavaScript, SQLite",
    patient_scope: "Alcance: Aplicación web para gestión de pacientes médicos",
    patient_features: "Características: Dashboard personalizado, Gestión de citas, Resúmenes de pacientes, Acceso rápido a información médica",
    
    gardener_desc: "Aplicación Ruby on Rails para organizar jardineros y clientes con sistema de materiales, comentarios en tareas y gestión de usuarios. Incluye generación de reportes PDF y carga de imágenes.",
    gardener_technologies: "Tecnologías: Ruby on Rails, Ruby, HTML5, CSS3, JavaScript, PostgreSQL",
    gardener_scope: "Alcance: Sistema de gestión para jardineros y clientes",
    gardener_features: "Características: Gestión de usuarios, Sistema de materiales, Comentarios en tareas, Generación de reportes PDF, Carga de imágenes",
    
    thesis_title: "Tesis: Boceto a Vestido con Modelos Generativos",
    thesis_desc: "Enfoque creativo hacia la IA multimodal enfocado en la transferencia de conocimiento de bocetos a imágenes realistas de vestidos. Explora el dibujo como forma creativa de evaluación de modelos usando varios modelos generativos.",
    thesis_enhanced_desc: "Esta tesis presenta una visión creativa y multimodal para la IA, enfocándose en la transferencia de conocimiento de bocetos a imágenes realistas de vestidos. El trabajo explora el uso del dibujo como forma creativa de evaluación de modelos, comparando varios enfoques generativos incluyendo Pix2Pix, CycleGAN, ControlNet, BBDM, DDIM y VQGan.",
    thesis_github_ref: "Versión completa disponible en el repositorio GitHub: AnabalonJT/latex-doc",
    thesis_link: "Ver Tesis (PDF)",
    send: "Enviar",
    click_to_view: "Click para ver imágenes"
  }
};

function setLanguage(newLang) {
  currentLang = newLang;
  document.documentElement.lang = newLang;
  
  // Translate main elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[newLang][key]) {
      // If the element is an input or textarea, set placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', translations[newLang][key]);
      } else {
        el.textContent = translations[newLang][key];
      }
    }
  });

  // Translate project descriptions
  document.querySelectorAll('[data-i18n-desc]').forEach(el => {
    const key = el.getAttribute('data-i18n-desc');
    if (translations[newLang][key]) {
      el.textContent = translations[newLang][key];
    }
  });

  // Translate detailed project content (technologies, scope, features)
  document.querySelectorAll('[data-i18n-tech]').forEach(el => {
    const key = el.getAttribute('data-i18n-tech');
    if (translations[newLang][key]) {
      el.textContent = translations[newLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-scope]').forEach(el => {
    const key = el.getAttribute('data-i18n-scope');
    if (translations[newLang][key]) {
      el.textContent = translations[newLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-features]').forEach(el => {
    const key = el.getAttribute('data-i18n-features');
    if (translations[newLang][key]) {
      el.textContent = translations[newLang][key];
    }
  });

  // Translate enhanced thesis description
  document.querySelectorAll('[data-i18n-enhanced]').forEach(el => {
    const key = el.getAttribute('data-i18n-enhanced');
    if (translations[newLang][key]) {
      el.textContent = translations[newLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-github]').forEach(el => {
    const key = el.getAttribute('data-i18n-github');
    if (translations[newLang][key]) {
      el.textContent = translations[newLang][key];
    }
  });

  // Update clickable project tooltips
  document.querySelectorAll('.project[data-click-text]').forEach(el => {
    el.setAttribute('data-click-text', translations[newLang]['click_to_view']);
  });

  // Update modal content if it's open
  if (modalManager && modalManager.modal && modalManager.modal.classList.contains('show')) {
    modalManager.updateModalLanguage();
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const esFlag = document.getElementById('es-flag');
    const enFlag = document.getElementById('en-flag');
    
    if (esFlag && enFlag) {
        console.log('Language flags found');
        esFlag.addEventListener('click', () => {
            console.log('Switching to Spanish');
            setLanguage('es');
        });
        enFlag.addEventListener('click', () => {
            console.log('Switching to English');
            setLanguage('en');
        });
    } else {
        console.error('Language flags not found');
    }
    
    // Initialize modal manager first
    try {
      console.log('Attempting to initialize ModalManager...');
      modalManager = new ModalManager();
      console.log('ModalManager initialized successfully:', !!modalManager);
    } catch (error) {
      console.error('Error initializing modal manager:', error);
    }
    
    // Then initialize project carousels
    initializeProjectCarousels();
    
    // Preload all project images
    preloadAllProjectImages();
    
    // Verify translations in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      verifyTranslations();
    }
});

// Carousel Manager Class
class CarouselManager {
  constructor(containerId, images) {
    this.container = document.getElementById(containerId);
    this.images = images || [];
    this.currentIndex = 0;
    this.imageContainer = null;
    this.prevButton = null;
    this.nextButton = null;
    
    console.log(`CarouselManager created for ${containerId}:`, {
      containerFound: !!this.container,
      imageCount: this.images.length,
      images: this.images
    });
    
    if (this.container && this.images.length > 0) {
      this.init();
    } else if (this.container) {
      this.container.innerHTML = '<div class="no-images">No images to display</div>';
    }
  }
  
  init() {
    this.hasInitialized = false;
    this.createCarouselStructure();
    this.createNavigationControls();
    this.bindEvents();
    this.showImage(0);
    this.updateResponsiveBehavior();
    this.hasInitialized = true;
  }
  
  createCarouselStructure() {
    // Clear existing content
    this.container.innerHTML = '';
    
    // Create carousel wrapper
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    
    // Create image container
    this.imageContainer = document.createElement('div');
    this.imageContainer.className = 'carousel-images';
    
    // Add images to container
    this.images.forEach((imageSrc, index) => {
      const img = document.createElement('img');
      
      // Implement lazy loading for non-first images
      if (index === 0) {
        img.src = imageSrc;
      } else {
        img.dataset.src = imageSrc;
        img.classList.add('lazy-load');
      }
      
      img.alt = `Project image ${index + 1}`;
      img.className = 'carousel-image';
      img.style.display = index === 0 ? 'block' : 'none';
      
      // Add active class to first image
      if (index === 0) {
        img.classList.add('active');
      }
      
      // Add loading attribute for modern browsers
      img.loading = index === 0 ? 'eager' : 'lazy';
      
      // Images are no longer individually clickable
      // The entire project div will be clickable instead
      
      // Add error handling for images
      img.onerror = () => {
        console.error(`Failed to load image: ${imageSrc}`);
        this.handleImageError(img, imageSrc, index);
      };
      
      img.onload = () => {
        console.log(`Successfully loaded image: ${imageSrc}`);
        img.classList.remove('lazy-load');
      };
      
      this.imageContainer.appendChild(img);
    });
    
    carouselWrapper.appendChild(this.imageContainer);
    this.container.appendChild(carouselWrapper);
  }
  
  createNavigationControls() {
    if (this.images.length <= 1) return;
    
    // Create navigation container
    const navContainer = document.createElement('div');
    navContainer.className = 'carousel-nav';
    
    // Create previous button
    this.prevButton = document.createElement('button');
    this.prevButton.className = 'carousel-btn carousel-prev';
    this.prevButton.innerHTML = '&#8249;'; // Left arrow
    this.prevButton.setAttribute('aria-label', 'Previous image');
    this.prevButton.setAttribute('type', 'button');
    
    // Create next button
    this.nextButton = document.createElement('button');
    this.nextButton.className = 'carousel-btn carousel-next';
    this.nextButton.innerHTML = '&#8250;'; // Right arrow
    this.nextButton.setAttribute('aria-label', 'Next image');
    this.nextButton.setAttribute('type', 'button');
    
    navContainer.appendChild(this.prevButton);
    navContainer.appendChild(this.nextButton);
    this.container.appendChild(navContainer);
    
    // Create dot indicators
    this.createDotIndicators();
  }
  
  createDotIndicators() {
    if (this.images.length <= 1) return;
    
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    
    this.dots = [];
    
    this.images.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to image ${index + 1} of ${this.images.length}`);
      dot.setAttribute('type', 'button');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      
      dot.addEventListener('click', () => {
        this.showImage(index);
        this.announceImageChange();
      });
      
      // Add keyboard support for dots
      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.showImage(index);
          this.announceImageChange();
        }
      });
      
      this.dots.push(dot);
      dotsContainer.appendChild(dot);
    });
    
    // Set role for dots container
    dotsContainer.setAttribute('role', 'tablist');
    dotsContainer.setAttribute('aria-label', 'Image selection');
    
    this.container.appendChild(dotsContainer);
  }
  
  bindEvents() {
    if (this.prevButton) {
      this.prevButton.addEventListener('click', () => this.previousImage());
    }
    
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => this.nextImage());
    }
    
    // Enhanced keyboard navigation
    this.container.addEventListener('keydown', (e) => {
      // Only handle keyboard events when carousel is focused
      if (document.activeElement === this.container || this.container.contains(document.activeElement)) {
        switch(e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            this.previousImage();
            this.announceImageChange();
            break;
          case 'ArrowRight':
            e.preventDefault();
            this.nextImage();
            this.announceImageChange();
            break;
          case 'Home':
            e.preventDefault();
            this.showImage(0);
            this.announceImageChange();
            break;
          case 'End':
            e.preventDefault();
            this.showImage(this.images.length - 1);
            this.announceImageChange();
            break;
          case 'Enter':
          case ' ':
            if (e.target.classList.contains('carousel-dot')) {
              e.preventDefault();
              // Dot click is handled by its own event listener
            }
            break;
        }
      }
    });
    
    // Touch and gesture support
    this.bindTouchEvents();
    
    // Make container focusable for keyboard navigation
    this.container.setAttribute('tabindex', '0');
    this.container.setAttribute('role', 'region');
    this.container.setAttribute('aria-label', 'Image carousel');
    this.container.setAttribute('aria-live', 'polite');
  }
  
  bindTouchEvents() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let isSwiping = false;
    
    const minSwipeDistance = 50; // Minimum distance for a swipe
    const maxVerticalDistance = 100; // Maximum vertical movement to still be considered a horizontal swipe
    
    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });
    
    this.container.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      
      touchEndX = e.touches[0].clientX;
      touchEndY = e.touches[0].clientY;
      
      // Calculate distances
      const deltaX = Math.abs(touchEndX - touchStartX);
      const deltaY = Math.abs(touchEndY - touchStartY);
      
      // If horizontal movement is significant and vertical movement is minimal
      if (deltaX > 20 && deltaY < maxVerticalDistance) {
        // Prevent default scrolling behavior
        e.preventDefault();
      }
    }, { passive: false });
    
    this.container.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      
      isSwiping = false;
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = Math.abs(touchEndY - touchStartY);
      
      // Check if it's a valid horizontal swipe
      if (Math.abs(deltaX) >= minSwipeDistance && deltaY <= maxVerticalDistance) {
        // Mark as interacted to hide swipe indicator
        this.container.classList.add('interacted');
        
        if (deltaX > 0) {
          // Swipe right - go to previous image
          this.previousImage();
        } else {
          // Swipe left - go to next image
          this.nextImage();
        }
      }
      
      // Reset values
      touchStartX = 0;
      touchStartY = 0;
      touchEndX = 0;
      touchEndY = 0;
    }, { passive: true });
    
    // Handle touch cancel
    this.container.addEventListener('touchcancel', () => {
      isSwiping = false;
      touchStartX = 0;
      touchStartY = 0;
      touchEndX = 0;
      touchEndY = 0;
    }, { passive: true });
  }
  
  showImage(index) {
    if (index < 0 || index >= this.images.length) return;
    
    // Hide all images
    const images = this.imageContainer.querySelectorAll('.carousel-image');
    images.forEach((img, i) => {
      img.style.display = 'none';
      img.classList.remove('active');
    });
    
    // Show current image with fade effect
    if (images[index]) {
      const currentImg = images[index];
      
      // Load image if it hasn't been loaded yet (lazy loading)
      if (currentImg.dataset.src && !currentImg.src) {
        currentImg.src = currentImg.dataset.src;
        delete currentImg.dataset.src;
      }
      
      currentImg.style.display = 'block';
      currentImg.classList.add('active');
      
      // Preload next and previous images for better UX
      this.preloadAdjacentImages(index, images);
    }
    
    this.currentIndex = index;
    this.updateNavigationState();
    this.updateDotIndicators();
    
    // Announce change for screen readers (but not on initial load)
    if (this.hasInitialized) {
      this.announceImageChange();
    }
  }
  
  preloadAdjacentImages(currentIndex, images) {
    // Preload next image
    const nextIndex = (currentIndex + 1) % this.images.length;
    if (images[nextIndex] && images[nextIndex].dataset.src) {
      images[nextIndex].src = images[nextIndex].dataset.src;
      delete images[nextIndex].dataset.src;
    }
    
    // Preload previous image
    const prevIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    if (images[prevIndex] && images[prevIndex].dataset.src) {
      images[prevIndex].src = images[prevIndex].dataset.src;
      delete images[prevIndex].dataset.src;
    }
  }
  
  handleImageError(img, imageSrc, index) {
    console.error(`Failed to load image: ${imageSrc}`);
    
    // Create fallback content
    img.alt = `Project image ${index + 1} - Unable to load`;
    img.className = 'carousel-image carousel-error';
    
    // Remove src to prevent further error attempts
    img.removeAttribute('src');
    
    // Create error content container
    const errorContainer = document.createElement('div');
    errorContainer.className = 'image-error-container';
    errorContainer.innerHTML = `
      <div class="error-icon">📷</div>
      <div class="error-text">Image unavailable</div>
      <div class="error-filename">${imageSrc.split('/').pop()}</div>
    `;
    
    // Replace image with error container
    img.style.display = 'none';
    img.parentNode.appendChild(errorContainer);
    
    // Update the images array to mark this as failed
    this.failedImages = this.failedImages || new Set();
    this.failedImages.add(index);
  }
  
  announceImageChange() {
    // Create or update screen reader announcement
    if (!this.srAnnouncer) {
      this.srAnnouncer = document.createElement('div');
      this.srAnnouncer.className = 'sr-only';
      this.srAnnouncer.setAttribute('aria-live', 'polite');
      this.srAnnouncer.setAttribute('aria-atomic', 'true');
      this.container.appendChild(this.srAnnouncer);
    }
    
    const currentImageNumber = this.currentIndex + 1;
    const totalImages = this.images.length;
    const announcement = `Image ${currentImageNumber} of ${totalImages}`;
    
    this.srAnnouncer.textContent = announcement;
    
    // Also update the container's aria-label
    this.container.setAttribute('aria-label', `Image carousel, ${announcement}`);
  }
  
  updateDotIndicators() {
    if (!this.dots) return;
    
    this.dots.forEach((dot, index) => {
      if (index === this.currentIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
        dot.setAttribute('tabindex', '0');
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
        dot.setAttribute('tabindex', '-1');
      }
    });
  }
  
  nextImage() {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage(nextIndex);
  }
  
  previousImage() {
    const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showImage(prevIndex);
  }
  
  updateNavigationState() {
    // Update button states if needed (for future enhancements)
    if (this.prevButton && this.nextButton) {
      // For now, always enable both buttons since we loop
      this.prevButton.disabled = false;
      this.nextButton.disabled = false;
    }
  }
  
  // Method to update responsive behavior
  updateResponsiveBehavior() {
    if (!this.container) return;
    
    const isMobile = isMobileDevice();
    const isTablet = isTabletDevice();
    
    // Update container classes for responsive styling
    this.container.classList.toggle('mobile-carousel', isMobile);
    this.container.classList.toggle('tablet-carousel', isTablet);
    
    // Adjust navigation visibility based on device
    if (this.prevButton && this.nextButton) {
      if (isMobile && this.images.length <= 2) {
        // Hide navigation buttons on mobile for small image sets
        this.prevButton.style.display = 'none';
        this.nextButton.style.display = 'none';
      } else {
        this.prevButton.style.display = 'flex';
        this.nextButton.style.display = 'flex';
      }
    }
  }
  
  // Method to update images dynamically
  updateImages(newImages) {
    this.images = newImages || [];
    this.currentIndex = 0;
    this.dots = null;
    
    if (this.images.length > 0) {
      this.createCarouselStructure();
      this.createNavigationControls();
      this.bindEvents();
      this.showImage(0);
      this.updateResponsiveBehavior();
    } else {
      this.container.innerHTML = '<div class="no-images">No images available</div>';
    }
  }
}

// Utility function to get project data
function getProjectData(projectId) {
  return projectsData[projectId] || null;
}

// Utility function to get project images path
function getProjectImagesPath(projectId) {
  const project = getProjectData(projectId);
  if (!project || !project.images.length) {
    console.log(`No images found for project ${projectId}`);
    return [];
  }
  
  const folderName = getProjectFolderName(projectId);
  const imagePaths = project.images.map(image => `images/${folderName}/${image}`);
  console.log(`Generated image paths for ${projectId}:`, imagePaths);
  
  return imagePaths;
}

// Helper function to get correct folder name for each project
function getProjectFolderName(projectId) {
  const folderMap = {
    'mtco': 'mtco', // Will be created when images are available
    'makimotion': 'MakiMotion',
    'gestiontareas': 'GestionTareas', 
    'ecommerce': 'Ecommerce'
  };
  return folderMap[projectId] || projectId;
}

// Carousel instances storage
const carouselInstances = {};

// Image preloading cache
const imagePreloadCache = new Map();

// Modal Manager Class
class ModalManager {
  constructor() {
    console.log('ModalManager constructor called');
    this.modal = document.getElementById('imageModal');
    console.log('Modal element found:', !!this.modal);
    
    if (!this.modal) {
      console.error('Modal element not found!');
      throw new Error('Modal element not found');
    }
    
    this.modalImage = document.getElementById('modalImage');
    this.modalImageInfo = document.getElementById('modalImageInfo');
    this.modalImageDescription = document.getElementById('modalImageDescription');
    this.modalClose = this.modal.querySelector('.modal-close');
    this.modalPrev = this.modal.querySelector('.modal-prev');
    this.modalNext = this.modal.querySelector('.modal-next');
    this.modalDotsContainer = this.modal.querySelector('.modal-dots-container');
    
    console.log('Modal elements:', {
      image: !!this.modalImage,
      info: !!this.modalImageInfo,
      description: !!this.modalImageDescription,
      close: !!this.modalClose,
      prev: !!this.modalPrev,
      next: !!this.modalNext,
      dots: !!this.modalDotsContainer
    });
    
    if (!this.modalImage || !this.modalImageInfo || !this.modalImageDescription || !this.modalClose || !this.modalPrev || !this.modalNext || !this.modalDotsContainer) {
      console.error('Some modal elements not found!');
      throw new Error('Modal elements not found');
    }
    
    this.currentImages = [];
    this.currentIndex = 0;
    this.currentProjectId = '';
    
    this.bindEvents();
    console.log('ModalManager constructor completed');
  }
  
  bindEvents() {
    // Close modal events
    this.modalClose.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });
    
    // Navigation events
    this.modalPrev.addEventListener('click', () => this.previousImage());
    this.modalNext.addEventListener('click', () => this.nextImage());
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
      if (this.modal && this.modal.classList.contains('show')) {
        switch(e.key) {
          case 'Escape':
            this.closeModal();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            this.previousImage();
            break;
          case 'ArrowRight':
            e.preventDefault();
            this.nextImage();
            break;
        }
      }
    });
  }
  
  openModal(projectId, imageIndex = 0) {
    console.log('openModal called with:', projectId, imageIndex);
    
    try {
      const project = getProjectData(projectId);
      console.log('Project data:', project);
      
      if (!project || !project.images.length) {
        console.log('No project or no images');
        return;
      }
      
      this.currentProjectId = projectId;
      this.currentImages = getProjectImagesPath(projectId);
      this.currentIndex = imageIndex;
      
      console.log('Current images:', this.currentImages);
      
      if (this.currentImages.length === 0) {
        console.log('No images to display');
        return;
      }
      
      this.createDots();
      this.showImage(imageIndex);
      
      if (this.modal) {
        this.modal.classList.add('show');
        console.log('Modal should be visible now');
      }
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
    } catch (error) {
      console.error('Error opening modal:', error);
    }
  }
  
  closeModal() {
    this.modal.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  createDots() {
    this.modalDotsContainer.innerHTML = '';
    
    if (this.currentImages.length <= 1) return;
    
    this.currentImages.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'modal-dot';
      dot.setAttribute('aria-label', `Go to image ${index + 1} of ${this.currentImages.length}`);
      dot.addEventListener('click', () => this.showImage(index));
      
      if (index === this.currentIndex) {
        dot.classList.add('active');
      }
      
      this.modalDotsContainer.appendChild(dot);
    });
  }
  
  showImage(index) {
    if (index < 0 || index >= this.currentImages.length) return;
    
    this.currentIndex = index;
    const imageSrc = this.currentImages[index];
    
    this.modalImage.src = imageSrc;
    this.modalImage.alt = `${this.currentProjectId} - Image ${index + 1}`;
    
    // Update image info
    const project = getProjectData(this.currentProjectId);
    const titleKey = this.currentProjectId === 'gestiontareas' ? 'gardener_title' : 
                     this.currentProjectId === 'ecommerce' ? 'ecom_title' : 
                     this.currentProjectId === 'makimotion' ? 'patient_title' : 
                     this.currentProjectId + '_title';
    
    const projectTitle = translations[currentLang][titleKey] || (project ? project.id : this.currentProjectId);
    this.modalImageInfo.textContent = `${projectTitle} - ${index + 1} of ${this.currentImages.length}`;
    
    // Update image description
    const imageName = this.currentImages[index].split('/').pop();
    const imageDescription = this.getImageDescription(project, imageName, currentLang);
    this.modalImageDescription.textContent = imageDescription;
    
    // Update dots
    this.modalDotsContainer.querySelectorAll('.modal-dot').forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
    
    // Update navigation buttons visibility
    this.modalPrev.style.display = this.currentImages.length > 1 ? 'flex' : 'none';
    this.modalNext.style.display = this.currentImages.length > 1 ? 'flex' : 'none';
  }
  
  previousImage() {
    const prevIndex = (this.currentIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.showImage(prevIndex);
  }
  
  nextImage() {
    const nextIndex = (this.currentIndex + 1) % this.currentImages.length;
    this.showImage(nextIndex);
  }
  
  getImageDescription(project, imageName, language) {
    if (project && project.imageDescriptions && project.imageDescriptions[language] && project.imageDescriptions[language][imageName]) {
      return project.imageDescriptions[language][imageName];
    }
    
    // Fallback descriptions
    const fallbacks = {
      es: 'Vista de la aplicación',
      en: 'Application view'
    };
    
    return fallbacks[language] || fallbacks['es'];
  }
  
  updateModalLanguage() {
    if (!this.currentProjectId || this.currentIndex < 0) return;
    
    const project = getProjectData(this.currentProjectId);
    const titleKey = this.currentProjectId === 'gestiontareas' ? 'gardener_title' : 
                     this.currentProjectId === 'ecommerce' ? 'ecom_title' : 
                     this.currentProjectId === 'makimotion' ? 'patient_title' : 
                     this.currentProjectId + '_title';
    
    // Update project title
    const projectTitle = translations[currentLang][titleKey] || (project ? project.id : this.currentProjectId);
    this.modalImageInfo.textContent = `${projectTitle} - ${this.currentIndex + 1} of ${this.currentImages.length}`;
    
    // Update image description
    const imageName = this.currentImages[this.currentIndex].split('/').pop();
    const imageDescription = this.getImageDescription(project, imageName, currentLang);
    this.modalImageDescription.textContent = imageDescription;
  }
}

// Global modal instance
let modalManager;

// Function to initialize project carousels
function initializeProjectCarousels() {
  console.log('Initializing project carousels...');
  
  // Initialize carousels for projects with images
  Object.keys(projectsData).forEach(projectId => {
    const project = projectsData[projectId];
    const containerId = `carousel-${projectId}`;
    const container = document.getElementById(containerId);
    
    console.log(`Checking project ${projectId}:`, {
      hasImages: project.images && project.images.length > 0,
      imageCount: project.images ? project.images.length : 0,
      containerExists: !!container
    });
    
    if (container) {
      if (project.images && project.images.length > 0) {
        const imagePaths = getProjectImagesPath(projectId);
        console.log(`Creating carousel for ${projectId} with images:`, imagePaths);
        
        carouselInstances[projectId] = new CarouselManager(containerId, imagePaths);
        
        // Add click listener to the entire project div
        const projectDiv = container.closest('.project');
        if (projectDiv && modalManager) {
          projectDiv.style.cursor = 'pointer';
          projectDiv.setAttribute('data-click-text', translations[currentLang]['click_to_view']);
          
          projectDiv.addEventListener('click', (e) => {
            // Prevent opening modal if clicking on carousel controls
            if (e.target.classList.contains('carousel-btn') || 
                e.target.classList.contains('carousel-dot') ||
                e.target.closest('.carousel-nav') ||
                e.target.closest('.carousel-dots')) {
              return;
            }
            
            console.log(`Project ${projectId} clicked, opening modal`);
            const currentIndex = carouselInstances[projectId] ? carouselInstances[projectId].currentIndex : 0;
            modalManager.openModal(projectId, currentIndex);
          });
        }
      } else {
        // Show appropriate placeholder for projects without images
        const placeholderText = getPlaceholderText(projectId);
        container.innerHTML = `<div class="no-images">${placeholderText}</div>`;
        container.classList.add('media-placeholder');
      }
    }
  });
}

// Function to get appropriate placeholder text for each project
function getPlaceholderText(projectId) {
  const placeholders = {
    'mtco': '[Video: mtco.cl landing page]',
    'makimotion': '[Screenshots: Patient management app]',
    'gestiontareas': 'Task Management Screenshots',
    'ecommerce': 'E-commerce Screenshots'
  };
  
  return placeholders[projectId] || `[${projectId} media]`;
}

// Global image preloading function
function preloadImage(src) {
  return new Promise((resolve, reject) => {
    // Check if already in cache
    if (imagePreloadCache.has(src)) {
      resolve(imagePreloadCache.get(src));
      return;
    }
    
    const img = new Image();
    
    img.onload = () => {
      imagePreloadCache.set(src, { status: 'loaded', element: img });
      resolve({ status: 'loaded', element: img });
    };
    
    img.onerror = () => {
      imagePreloadCache.set(src, { status: 'error', element: null });
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    img.src = src;
  });
}

// Preload all project images on page load
function preloadAllProjectImages() {
  const allImages = [];
  
  Object.keys(projectsData).forEach(projectId => {
    const project = projectsData[projectId];
    if (project.images && project.images.length > 0) {
      const imagePaths = getProjectImagesPath(projectId);
      allImages.push(...imagePaths);
    }
  });
  
  // Preload first image of each project immediately
  const firstImages = [];
  Object.keys(projectsData).forEach(projectId => {
    const project = projectsData[projectId];
    if (project.images && project.images.length > 0) {
      const imagePaths = getProjectImagesPath(projectId);
      if (imagePaths[0]) {
        firstImages.push(imagePaths[0]);
      }
    }
  });
  
  // Preload first images immediately
  firstImages.forEach(src => {
    preloadImage(src).catch(err => console.warn('Failed to preload first image:', err));
  });
  
  // Preload remaining images with delay
  setTimeout(() => {
    allImages.forEach(src => {
      if (!firstImages.includes(src)) {
        preloadImage(src).catch(err => console.warn('Failed to preload image:', err));
      }
    });
  }, 1000);
}

// Device detection utilities
function isMobileDevice() {
  return window.innerWidth <= 700 || ('ontouchstart' in window);
}

function isTabletDevice() {
  return window.innerWidth > 700 && window.innerWidth <= 1024;
}

// Function to handle window resize for carousels
function handleCarouselResize() {
  Object.values(carouselInstances).forEach(carousel => {
    if (carousel && carousel.container) {
      // Trigger a re-layout of the carousel
      const currentIndex = carousel.currentIndex;
      carousel.showImage(currentIndex);
      
      // Update carousel behavior based on device type
      carousel.updateResponsiveBehavior();
    }
  });
}

// Add window resize listener
window.addEventListener('resize', debounce(handleCarouselResize, 250));

// Final optimization after page load
window.addEventListener('load', () => {
  // Remove will-change properties after animations are complete
  setTimeout(() => {
    document.querySelectorAll('.carousel-image, .carousel-btn, .carousel-dot').forEach(el => {
      el.style.willChange = 'auto';
    });
  }, 2000);
  
  // Log performance info in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Portfolio enhancement loaded successfully');
    console.log('Active carousels:', Object.keys(carouselInstances).length);
    console.log('Preloaded images:', imagePreloadCache.size);
  }
});

// Debounce function to limit resize event frequency
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Function to verify translations
function verifyTranslations() {
  const missingTranslations = [];
  
  // Check all translation keys exist in both languages
  const englishKeys = Object.keys(translations.en);
  const spanishKeys = Object.keys(translations.es);
  
  englishKeys.forEach(key => {
    if (!spanishKeys.includes(key)) {
      missingTranslations.push(`Missing Spanish translation for: ${key}`);
    }
  });
  
  spanishKeys.forEach(key => {
    if (!englishKeys.includes(key)) {
      missingTranslations.push(`Missing English translation for: ${key}`);
    }
  });
  
  // Check all HTML elements with translation attributes have corresponding keys
  document.querySelectorAll('[data-i18n], [data-i18n-desc], [data-i18n-tech], [data-i18n-scope], [data-i18n-features], [data-i18n-enhanced], [data-i18n-github]').forEach(el => {
    const key = el.getAttribute('data-i18n') || 
                el.getAttribute('data-i18n-desc') || 
                el.getAttribute('data-i18n-tech') || 
                el.getAttribute('data-i18n-scope') || 
                el.getAttribute('data-i18n-features') || 
                el.getAttribute('data-i18n-enhanced') || 
                el.getAttribute('data-i18n-github');
    
    if (key && !translations.en[key]) {
      missingTranslations.push(`Missing translation key in HTML: ${key}`);
    }
  });
  
  if (missingTranslations.length > 0) {
    console.warn('Translation issues found:', missingTranslations);
  } else {
    console.log('All translations verified successfully');
  }
  
  return missingTranslations.length === 0;
}





// Set default language
setLanguage('es');

// Contact form handler with Formspree
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  const currentLang = document.documentElement.lang;
  
  formStatus.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
  
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      formStatus.textContent = currentLang === 'es' ? '¡Mensaje enviado!' : 'Message sent!';
      form.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          formStatus.textContent = data['errors'].map(error => error['message']).join(', ');
        } else {
          formStatus.textContent = currentLang === 'es' ? 'Oops! Hubo un error al enviar el mensaje' : 'Oops! There was an error sending your message';
        }
      });
    }
  }).catch(error => {
    formStatus.textContent = currentLang === 'es' ? 'Oops! Hubo un error al enviar el mensaje' : 'Oops! There was an error sending your message';
  });
});

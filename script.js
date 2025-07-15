// Language translations
const translations = {
  en: {
    webapps: "Web Applications",
    ai: "AI",
    contact: "Contact",
    name: "José Tomás Anabalón Díaz",
    about: "Computer Science Engineer. Passionate about artificial intelligence and software development, with experience in generative models, full stack development, and data analysis.",
    mtco_desc: "Landing page and contact form with email notifications. Hosted on Hostinger.",
    ecom_desc: "Demo e-commerce built with WordPress and Hostinger.",
    patient_desc: "App for tracking patients and activities. Custom dashboard and tracking features.",
    gardener_desc: "Task assignment, image uploads, and PDF generation for client reports.",
    thesis_title: "Thesis: Sketch-to-Dress with Generative Models",
    thesis_desc: "Comparison of Pix2Pix, CycleGAN, ControlNet, BBDM, DDIM, and VQGan for translating sketches to real dresses. Metrics: FID, LPIPS, SSIM.",
    thesis_link: "View Thesis (PDF)",
    send: "Send"
  },
  es: {
    webapps: "Aplicaciones Web",
    ai: "IA",
    contact: "Contacto",
    name: "José Tomás Anabalón Díaz",
    about: "Ingeniero en ciencias de la computación. Apasionado por la inteligencia artificial y el desarrollo de software, con experiencia en modelos generativos, desarrollo full stack y análisis de datos.",
    mtco_desc: "Landing page y formulario de contacto con notificaciones por correo. Hospedado en Hostinger.",
    ecom_desc: "Demo de e-commerce hecho con WordPress y Hostinger.",
    patient_desc: "App para seguimiento de pacientes y actividades. Dashboard personalizado y funciones de seguimiento.",
    gardener_desc: "Asignación de tareas, carga de imágenes y generación de PDF para reportes a clientes.",
    thesis_title: "Tesis: Boceto a Vestido con Modelos Generativos",
    thesis_desc: "Comparación de Pix2Pix, CycleGAN, ControlNet, BBDM, DDIM y VQGan para traducir bocetos a vestidos reales. Métricas: FID, LPIPS, SSIM.",
    thesis_link: "Ver Tesis (PDF)",
    send: "Enviar"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // If the element is an input or textarea, set placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', translations[lang][key]);
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}
  // Also translate project descriptions inside .desc
  document.querySelectorAll('.desc [data-i18n-desc]').forEach(el => {
    const key = el.getAttribute('data-i18n-desc');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

document.getElementById('es-flag').addEventListener('click', () => setLanguage('es'));
document.getElementById('en-flag').addEventListener('click', () => setLanguage('en'));

// Set default language
setLanguage('en');

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

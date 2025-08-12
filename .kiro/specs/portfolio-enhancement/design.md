# Design Document

## Overview

El diseño se enfoca en transformar el portafolio existente agregando carruseles interactivos de imágenes y descripciones detalladas de proyectos, manteniendo la arquitectura actual y el sistema de internacionalización. La solución será implementada usando JavaScript vanilla para los carruseles y CSS para el styling responsivo, aprovechando la estructura existente del proyecto.

## Architecture

### Current Architecture
- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Styling**: CSS Grid y Flexbox para layout responsivo
- **Internationalization**: Sistema de traducciones basado en objetos JavaScript
- **Assets**: Estructura de carpetas organizada por proyecto en `/images`

### Enhanced Architecture
- **Carousel Component**: Componente JavaScript reutilizable para navegación de imágenes
- **Project Data Layer**: Estructura de datos para información detallada de proyectos
- **Responsive Image Handling**: Sistema de carga y redimensionamiento automático
- **Touch/Gesture Support**: Integración de eventos táctiles para dispositivos móviles

## Components and Interfaces

### 1. Carousel Component (`CarouselManager`)

```javascript
class CarouselManager {
  constructor(containerId, images, options = {})
  nextImage()
  prevImage()
  goToImage(index)
  setupTouchEvents()
  updateIndicators()
}
```

**Responsibilities:**
- Gestionar navegación entre imágenes
- Manejar eventos de teclado y táctiles
- Actualizar indicadores visuales
- Precargar imágenes para mejor rendimiento

### 2. Project Data Structure

```javascript
const projectsData = {
  mtco: {
    id: 'mtco',
    images: ['mtco1.jpg', 'mtco2.jpg'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Hostinger'],
    scope: 'Landing page profesional',
    features: ['Diseño responsivo', 'Formulario de contacto', 'Optimización SEO']
  },
  // ... otros proyectos
}
```

### 3. Enhanced Translation System

Extensión del sistema actual para incluir descripciones detalladas:

```javascript
const translations = {
  es: {
    // ... traducciones existentes
    mtco_detailed_desc: "Landing page profesional para estudio de tatuajes...",
    mtco_technologies: "Tecnologías: HTML5, CSS3, JavaScript, Hostinger",
    mtco_scope: "Alcance: Sitio web completo con formulario de contacto"
  },
  en: {
    // ... traducciones existentes  
    mtco_detailed_desc: "Professional landing page for tattoo studio...",
    mtco_technologies: "Technologies: HTML5, CSS3, JavaScript, Hostinger",
    mtco_scope: "Scope: Complete website with contact form"
  }
}
```

## Data Models

### Project Model
```javascript
{
  id: string,           // Identificador único del proyecto
  title: string,        // Título del proyecto
  images: string[],     // Array de nombres de archivos de imágenes
  technologies: string[], // Tecnologías utilizadas
  scope: string,        // Descripción del alcance
  features: string[],   // Características principales
  description: string,  // Descripción detallada
  liveUrl?: string,     // URL del proyecto en vivo (opcional)
  githubUrl?: string    // URL del repositorio (opcional)
}
```

### Carousel State Model
```javascript
{
  currentIndex: number,    // Índice de imagen actual
  totalImages: number,     // Total de imágenes
  isTransitioning: boolean, // Estado de transición
  touchStartX: number,     // Posición inicial del toque
  touchEndX: number        // Posición final del toque
}
```

## Error Handling

### Image Loading Errors
- **Fallback Images**: Imagen placeholder si falla la carga
- **Lazy Loading**: Carga progresiva para mejorar rendimiento
- **Error Logging**: Console warnings para debugging

### Carousel Navigation Errors
- **Boundary Checks**: Prevenir navegación fuera de límites
- **Touch Event Validation**: Validar gestos táctiles válidos
- **Graceful Degradation**: Funcionalidad básica si JavaScript falla

### Translation Errors
- **Missing Keys**: Fallback a idioma por defecto
- **Dynamic Content**: Validación de claves de traducción existentes

## Testing Strategy

### Unit Testing
- **Carousel Logic**: Navegación, indicadores, eventos
- **Translation System**: Cambio de idiomas, claves faltantes
- **Project Data**: Validación de estructura de datos

### Integration Testing
- **Carousel + Translation**: Funcionamiento conjunto
- **Responsive Behavior**: Diferentes tamaños de pantalla
- **Touch Events**: Gestos en dispositivos móviles

### Manual Testing
- **Cross-browser**: Chrome, Firefox, Safari, Edge
- **Device Testing**: Desktop, tablet, móvil
- **Accessibility**: Navegación por teclado, screen readers

## Implementation Approach

### Phase 1: Data Structure Setup
1. Crear estructura de datos para proyectos
2. Organizar imágenes en carpetas existentes
3. Extender sistema de traducciones

### Phase 2: Carousel Implementation
1. Desarrollar componente carousel base
2. Implementar navegación con botones
3. Agregar indicadores visuales

### Phase 3: Enhanced Descriptions
1. Reemplazar descripciones simples con detalladas
2. Integrar información de tecnologías y alcance
3. Actualizar traducciones

### Phase 4: Responsive & Touch Support
1. Implementar gestos táctiles
2. Optimizar para dispositivos móviles
3. Ajustar CSS para diferentes pantallas

### Phase 5: Polish & Optimization
1. Optimizar carga de imágenes
2. Mejorar transiciones y animaciones
3. Testing final y ajustes

## Technical Considerations

### Performance
- **Image Optimization**: Compresión y formatos modernos (WebP)
- **Lazy Loading**: Carga bajo demanda
- **CSS Animations**: Hardware acceleration con `transform`

### Accessibility
- **Keyboard Navigation**: Soporte completo para navegación por teclado
- **ARIA Labels**: Etiquetas descriptivas para screen readers
- **Focus Management**: Indicadores visuales claros

### Browser Compatibility
- **Modern Browsers**: Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
- **Fallbacks**: Funcionalidad básica para navegadores antiguos
- **Progressive Enhancement**: Mejoras graduales según capacidades

### Mobile Optimization
- **Touch Events**: `touchstart`, `touchmove`, `touchend`
- **Viewport Meta**: Configuración adecuada para móviles
- **Performance**: Optimización para conexiones lentas
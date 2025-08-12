# Requirements Document

## Introduction

Este proyecto busca mejorar el portafolio web existente de José Tomás Anabalón Díaz, un estudiante de ingeniería en ciencias de la computación. El objetivo es transformar los placeholders actuales en carruseles interactivos de imágenes y agregar descripciones detalladas de cada proyecto, incluyendo tecnologías utilizadas, alcance y características específicas. El portafolio debe mantener su funcionalidad bilingüe (español/inglés) y diseño responsivo actual.

## Requirements

### Requirement 1

**User Story:** Como visitante del portafolio, quiero ver imágenes reales de los proyectos en lugar de placeholders, para poder evaluar visualmente la calidad del trabajo realizado.

#### Acceptance Criteria

1. WHEN un usuario visita la sección de aplicaciones web THEN el sistema SHALL mostrar carruseles de imágenes para cada proyecto en lugar de placeholders
2. WHEN un usuario interactúa con un carrusel THEN el sistema SHALL permitir navegación entre imágenes usando controles de navegación
3. WHEN se carga una página THEN el sistema SHALL mostrar automáticamente la primera imagen de cada carrusel
4. WHEN las imágenes se cargan THEN el sistema SHALL mantener proporciones adecuadas y calidad visual

### Requirement 2

**User Story:** Como visitante del portafolio, quiero leer descripciones detalladas de cada proyecto, para entender el alcance, tecnologías y funcionalidades implementadas.

#### Acceptance Criteria

1. WHEN un usuario lee la descripción de mtco.cl THEN el sistema SHALL mostrar que es una landing page para estudio de tatuajes desarrollada con HTML, CSS y JavaScript, hospedada en Hostinger
2. WHEN un usuario lee la descripción de MakiMotion THEN el sistema SHALL mostrar que es una aplicación Django para gestión de pacientes con resúmenes de citas y acceso fácil a información
3. WHEN un usuario lee la descripción de Gestión de Tareas THEN el sistema SHALL mostrar que es una aplicación Ruby on Rails para organizar jardineros/clientes con sistema de materiales, comentarios y gestión de usuarios
4. WHEN un usuario lee la descripción de E-commerce THEN el sistema SHALL mostrar que es una tienda desarrollada con WordPress WooCommerce en Hostinger
5. WHEN un usuario lee cada descripción THEN el sistema SHALL incluir las tecnologías específicas utilizadas en cada proyecto

### Requirement 3

**User Story:** Como visitante del portafolio, quiero que las descripciones y carruseles funcionen correctamente en ambos idiomas (español e inglés), para poder entender el contenido en mi idioma preferido.

#### Acceptance Criteria

1. WHEN un usuario cambia el idioma THEN el sistema SHALL traducir todas las descripciones detalladas de proyectos
2. WHEN se cambia el idioma THEN el sistema SHALL mantener la funcionalidad de los carruseles sin interrupciones
3. WHEN se navega entre idiomas THEN el sistema SHALL preservar el estado actual de los carruseles (imagen mostrada)

### Requirement 4

**User Story:** Como visitante del portafolio, quiero que los carruseles sean responsivos y funcionen bien en dispositivos móviles, para poder explorar los proyectos desde cualquier dispositivo.

#### Acceptance Criteria

1. WHEN un usuario accede desde un dispositivo móvil THEN el sistema SHALL mostrar carruseles que se adapten al tamaño de pantalla
2. WHEN se usan controles táctiles THEN el sistema SHALL permitir navegación por gestos de deslizamiento en dispositivos móviles
3. WHEN se redimensiona la ventana THEN el sistema SHALL ajustar automáticamente el tamaño de los carruseles

### Requirement 5

**User Story:** Como visitante del portafolio, quiero información específica sobre el proyecto de tesis de IA, para entender mejor el enfoque creativo y multimodal propuesto.

#### Acceptance Criteria

1. WHEN un usuario lee la sección de IA THEN el sistema SHALL mostrar una descripción actualizada que explique el enfoque creativo del proyecto de tesis
2. WHEN se describe la tesis THEN el sistema SHALL mencionar el objetivo de transferencia de conocimiento de bocetos a imágenes realistas de vestidos
3. WHEN se presenta la tesis THEN el sistema SHALL explicar la visión multimodal y el uso del dibujo como forma creativa de evaluación de modelos
4. WHEN se muestra la información de tesis THEN el sistema SHALL incluir referencia al repositorio GitHub AnabalonJT/latex-doc para la versión más completa

### Requirement 6

**User Story:** Como visitante del portafolio, quiero que la información sobre el formulario oculto de mtco.cl sea manejada apropiadamente, para entender las capacidades completas del proyecto sin confusión.

#### Acceptance Criteria

1. WHEN se describe el proyecto mtco.cl THEN el sistema SHALL mencionar que incluye funcionalidad de formulario de contacto (aunque no esté visible públicamente)
2. WHEN se presenta mtco.cl THEN el sistema SHALL enfocar la descripción en las características visibles y funcionales del sitio web
3. IF se menciona el formulario THEN el sistema SHALL indicar que es una característica implementada pero no desplegada públicamente
# Unidas, Fuertes y Protagonistas

Landing page de una comunidad de mujeres en Concepción, Chile. Sitio construido con **Next.js 16.4.6** y **React 19**, utilizando una paleta de colores fucsia (`#E91E8F`), morado (`#6A1B9A`), dorado (`#D4AF37`) y blanco (`#FFFFFF`).

## Estructura

- **app/** — rutas y componentes de Next.js (app router)
- **components/** — doodles, polaroids, encabezados, marcas, formulario de testimonios
- **landing-sections/** — About, EventGallery, Testimonials, FaqSection
- **globals.css** — variables de paleta y estilos completos

## Scripts

```bash
npm run dev    # iniciar servidor de desarrollo (Turbopack)
npm run build  # construir producción
npm run start  # iniciar servidor de producción
```

## Paleta

- Fucsia: `#E91E8F`
- Morado: `#6A1B9A`
- Dorado: `#D4AF37`
- Blanco: `#FFFFFF`

## Cambios recientes

- Paleta global aplicada en `app/globals.css`
- Sección **Quiénes ahora** con tarjetas de Misión y Visión (texto placeholder)
- Eventos con etiqueta "Próximo" y botón **Inscribirme**
- Formulario de testimonios (escrito o video) que abre un correo a `hola@unidasfuertes.cl`
- Navegación y footer actualizados
- Sección "Te guardamos un lugar" removida
- Banner principal con una sola imagen (removido taller de octubre y próximo encuentro)
- Preguntas frecuentes con texto placeholder

## Nota

El envío de testimonios usa `mailto`, ya que el sitio es estático (sin backend).
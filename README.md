# LD SmartLab — Servicios Informáticos

Sitio web de ventas de servicios informáticos de **LD SmartLab**, negocio privado de Luis Daniel Ramos Corona. Ofrece reparación de computadoras, redes empresariales y domésticas, desarrollo web y de software a medida, ciberseguridad, recuperación de datos, soporte IT, servicios en la nube, mantenimiento de servidores, apps móviles, asesoría de tesis, marketing digital y consultoría en IA.

## Estructura del proyecto

- `index.html`: página principal (servicios, misión y visión, testimonios, contacto, carrito).
- `descargas.html`: descarga de apps de LD SmartLab.
- `admin.html`: panel de administración. El acceso está desactivado temporalmente por seguridad (las credenciales que estaban escritas en el código se eliminaron).
- `css/style.css`: estilos del sitio.
- `js/script.js`: servicios, precios, testimonios, carrito y pedidos (los pedidos se envían por WhatsApp; no hay backend y los datos se guardan solo en el navegador de cada visitante).
- `assets/img/`: logo e imágenes de servicios y contacto.
- `legal/`: aviso legal, política de privacidad y términos de servicio.
- `robots.txt`, `sitemap.xml`: SEO e indexación.
- `googled9b38b6a4af525f5.html`: verificación de Google Search Console.

## Cómo verlo en local

Abrir `index.html` en el navegador, o servir el proyecto con:

```bash
python3 -m http.server
```

Y abrir <http://localhost:8000>.

## Publicación

El sitio está publicado en GitHub Pages: <https://ldaniel91.github.io/ldsmartlab-servicios/>

## Contacto

- WhatsApp: +53 54693190 — <https://wa.me/5354693190>
- Correo: ldsmartlabmipc@outlook.com
- Horario: lunes a sábado, 8:00 AM - 12:00 PM
- Ubicación: Cuba, servicio a domicilio disponible

## Qué falta por completar

- Poner las URLs reales de Facebook e Instagram en el pie de página (hoy son enlaces vacíos).
- Confirmar precios base y rangos de cada servicio, y aclarar que son precios "desde".
- Confirmar los testimonios y las cifras de proyectos, clientes, años de experiencia y satisfacción.
- Confirmar que los enlaces de descarga de APK en `descargas.html` apuntan a releases existentes.
- Volver a habilitar el acceso de administración con un mecanismo seguro (sin credenciales en el código) y cambiar las credenciales que estaban publicadas.

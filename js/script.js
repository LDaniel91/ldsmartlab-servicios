// ============================================================
//  DATOS DE SERVICIOS (precios actualizados 2026)
// ============================================================
const services = [
    {
        id: 1,
        name: "Reparación de Computadoras",
        description: "Diagnóstico y reparación completa de equipos de escritorio y laptops. Precio base sin cambio de piezas. Si se requiere cambio de piezas, el costo adicional se cotiza según el tipo de pieza. Incluye limpieza interna, optimización del sistema y garantía de 30 días.",
        price: 4500,
        currency: "CUP",
        image: "assets/img/reparacion-pc.jpg"
    },
    {
        id: 2,
        name: "Instalación de Redes Empresariales",
        description: "Diseño e instalación de redes cableadas e inalámbricas para empresas de cualquier tamaño. Configuración de routers, switches, access points y cableado estructurado. Solución integral para conexiones de alta demanda, puede llegar hasta $120,000 CUP dependiendo de la complejidad (número de puntos, switches, etc.).",
        price: 80000,
        currency: "CUP",
        image: "assets/img/redes-empresariales.jpg"
    },
    {
        id: 3,
        name: "Instalación de Redes Domésticas",
        description: "Instalación de redes WiFi para hogares, cobertura total y configuración de routers y repetidores. Ideal para mejorar la conectividad en tu casa.",
        price: 10000,
        currency: "CUP",
        image: "assets/img/redes-domesticas.jpg"
    },
    {
        id: 4,
        name: "Desarrollo Web Profesional",
        description: "Creación de sitios web modernos, responsivos y optimizados para SEO. El precio puede variar según la complejidad del proyecto. Incluye diseño personalizado, panel administrativo, hosting y dominio por un año.",
        price: 200000,
        currency: "CUP",
        image: "assets/img/desarrollo-web.jpg"
    },
    {
        id: 5,
        name: "Ciberseguridad Empresarial",
        description: "Auditoría de seguridad, protección contra malware, firewall, VPN, análisis de vulnerabilidades y capacitación en seguridad informática para tu equipo para un nivel de auditoria básica",
        price: 50000,
        currency: "CUP",
        image: "assets/img/ciberseguridad.jpg"
    },
    {
        id: 6,
        name: "Recuperación de Datos",
        description: "Recuperación profesional de archivos eliminados o dañados de discos duros, memorias USB, tarjetas SD y otros dispositivos de almacenamiento. (Para casos simples)",
        price: 10000,
        currency: "CUP",
        image: "assets/img/recuperacion-datos.jpg"
    },
    {
        id: 7,
        name: "Soporte IT Remoto",
        description: "Asistencia técnica remota 24/7 para resolver problemas de software, virus, configuraciones, actualizaciones y cualquier incidencia informática. Si es cobro por incidencia $10,000 CUP. Si es por hora, $5,000 CUP/horas",
        price: 5000,
        currency: "CUP",
        image: "assets/img/soporte-remoto.jpg"
    },
    {
        id: 8,
        name: "Desarrollo de Software a Medida",
        description: "Aplicaciones personalizadas para tu negocio: sistemas de gestión, inventarios, facturación, CRM y cualquier solución que necesites. Precio desde $200,000 hasta $500,000 según requerimientos ya que un software a medida es un proyecto complejo.",
        price: 200000,
        currency: "CUP",
        image: "assets/img/software-medida.jpg"
    },
    {
        id: 9,
        name: "Servicios en la Nube",
        description: "Migración a la nube, configuración de servidores cloud, respaldos automáticos, almacenamiento seguro y acceso remoto a tus archivos desde cualquier lugar. (Para configuración y migración, con una cuota mensual de mantenimiento.)",
        price: 50000,
        currency: "CUP",
        image: "assets/img/servicios-nube.jpg"
    },
    {
        id: 10,
        name: "Mantenimiento de Servidores",
        description: "Monitoreo, actualización, respaldo y optimización de servidores físicos y virtuales. Garantizamos el 99.9% de uptime para tu infraestructura. Si es por visita, $8,500 CUP. Si es mensual, seran entre $15,000 - $25,000 CUP/mes.",
        price: 8500,
        currency: "CUP",
        image: "assets/img/mantenimiento-servidores.jpg"
    },
    {
        id: 11,
        name: "Desarrollo de Apps Móviles",
        description: "Aplicaciones nativas y multiplataforma para Android e iOS. Diseño UI/UX moderno, publicación en stores y soporte post-lanzamiento. El precio puede variar según la complejidad, ya que una app móvil básica puede costar $150,000 - $300,000 CUP.",
        price: 100000,
        currency: "CUP",
        image: "assets/img/apps-moviles.jpg"
    },
    {
        id: 12,
        name: "Asesoría y Diseño de Tesis",
        description: "Apoyo integral en la elaboración de tesis de grado y posgrado. Incluye asesoría metodológica, estructuración, análisis de datos, corrección de estilo y preparación para la defensa. Si es un paquete completo $15,000 CUP - básico $7,000 (informe de tesis y PowerPoint)",
        price: 7000,
        currency: "CUP",
        image: "assets/img/asesoria-tesis.jpg"
    },
    {
        id: 13,
        name: "Marketing Digital",
        description: "Estrategias de marketing para potenciar tu negocio en línea: gestión de redes sociales, publicidad en Google y Facebook, SEO, email marketing y análisis de métricas. El precio puede variar según el plan. (Si es un plan mensual, $20,000 CUP/Mes Si es un paquete semanal, $8,500 CUP/semanal.",
        price: 20000,
        currency: "CUP",
        image: "assets/img/marketing-digital.jpg"
    },
    {
        id: 14,
        name: "Consultoría y Capacitación en IA",
        description: "Instalación y configuración de herramientas de Inteligencia Artificial. Curso básico e intermedio sobre IA y sus aplicaciones en la vida cotidiana y empresarial. El precio puede variar según el nivel de capacitación. La capacitación en IA es un servicio de alta demanda. $20,000 CUP para el curso básico y $50,000 CUP para el intermedio.",
        price: 20000,
        currency: "CUP",
        image: "assets/img/consultoria-ia.jpg"
    }
];

// ============================================================
//  TESTIMONIALS
// ============================================================
const testimonials = [
    { name: "Carlos Mendoza", role: "Dueño de Restaurante", text: "Excelente servicio. Repararon mi sistema de punto de venta en menos de 24 horas. Muy profesionales y precios justos. Los recomiendo al 100%.", rating: 5, initials: "CM" },
    { name: "Ana María López", role: "Empresaria", text: "Contraté el servicio de redes para mi oficina y quedé impresionada con la calidad del trabajo. Todo quedó perfectamente organizado y funcionando a la perfección.", rating: 5, initials: "AL" },
    { name: "Roberto Fernández", role: "Estudiante Universitario", text: "Me recuperaron todos los archivos de mi tesis de grado que pensé había perdido para siempre. Un servicio verdaderamente salvavidas. Muchas gracias.", rating: 5, initials: "RF" },
    { name: "Diana Torres", role: "Gerente de Marketing", text: "El desarrollo web que hicieron para nuestra agencia superó todas nuestras expectativas. Moderno, rápido y con un diseño espectacular.", rating: 5, initials: "DT" },
    { name: "Luis Herrera", role: "Contador", text: "El soporte IT remoto es increíble. Cualquier problema que tengo lo resuelven en minutos sin necesidad de moverme de mi oficina.", rating: 5, initials: "LH" },
    { name: "Patricia Vega", role: "Directora de Clínica", text: "Implementaron un sistema de seguridad robusto para proteger los datos de nuestros pacientes. Muy satisfecha con el profesionalismo del equipo.", rating: 5, initials: "PV" },
    { name: "Jorge Castillo", role: "Ingeniero Civil", text: "Desarrollaron una app de gestión de proyectos que ha revolucionado la forma en que trabajamos. Increíble atención al detalle.", rating: 5, initials: "JC" },
    { name: "María Elena Ruiz", role: "Dueña de Tienda Online", text: "Migraron mi tienda a la nube y ahora todo funciona mucho más rápido y seguro. El servicio al cliente es excepcional.", rating: 5, initials: "MR" },
    { name: "Fernando Díaz", role: "Abogado", text: "El mantenimiento de nuestros servidores ha sido impecable. Cero caídas en 6 meses. Un equipo verdaderamente confiable.", rating: 5, initials: "FD" },
    { name: "Carmen Sánchez", role: "Profesora", text: "Repararon mi laptop que no encendía y ahora funciona como nueva. Precio muy accesible y trabajo garantizado.", rating: 5, initials: "CS" },
    { name: "Alberto Reyes", role: "Emprendedor", text: "Desde que contraté sus servicios de ciberseguridad, duermo tranquilo sabiendo que mi negocio está protegido contra cualquier amenaza.", rating: 5, initials: "AR" },
    { name: "Isabel Morales", role: "Diseñadora Gráfica", text: "La red WiFi que instalaron en mi estudio tiene una cobertura perfecta en todos los rincones. Sin interferencias ni caídas.", rating: 5, initials: "IM" },
    { name: "Héctor Vargas", role: "Administrador de Empresa", text: "El software a medida que desarrollaron para nuestra gestión de inventarios nos ha ahorrado horas de trabajo manual cada semana.", rating: 5, initials: "HV" },
    { name: "Natalia Ortega", role: "Médico", text: "Servicio puntual, profesional y con garantía. Repararon mi computadora el mismo día que la llevé. Definitivamente volveré.", rating: 5, initials: "NO" },
    { name: "Ricardo Silva", role: "Arquitecto", text: "La página web que crearon para mi firma de arquitectura es simplemente espectacular. He recibido muchos elogios de mis clientes.", rating: 5, initials: "RS" },
    { name: "Laura Jiménez", role: "Estudiante", text: "Me ayudaron a recuperar fotos familiares muy importantes de un disco dañado. No tengo palabras para agradecerles.", rating: 5, initials: "LJ" },
    { name: "Miguel Ángel Cruz", role: "Comerciante", text: "El soporte técnico es rápido y efectivo. Cualquier problema que surge lo solucionan de inmediato. Muy recomendados.", rating: 5, initials: "MC" },
    { name: "Sofía Martínez", role: "Consultora", text: "Contraté el servicio de nube para mi consultora y ha sido la mejor decisión. Accedo a mis archivos desde cualquier lugar del mundo.", rating: 5, initials: "SM" },
    { name: "Daniel Pérez", role: "Técnico Electrónico", text: "Profesionales de verdad. Instalaron una red completa en mi taller con cableado organizado y etiquetado. Trabajo de primera calidad.", rating: 5, initials: "DP" },
    { name: "Gabriela Flores", role: "Empresaria", text: "He trabajado con varias empresas de tecnología y LD SmartLab es sin duda la mejor. Calidad, precio y atención impecables.", rating: 5, initials: "GF" },
    { name: "Eduardo Ramos", role: "Fotógrafo", text: "Configuraron mi servidor de archivos para almacenar mis portfolios. El acceso es rápido y seguro. Excelente servicio.", rating: 5, initials: "ER" },
    { name: "Valentina Castro", role: "Estudiante de Ingeniería", text: "Me instalaron un sistema operativo dual en mi laptop y optimizaron todo el equipo. Ahora funciona perfectamente para mis clases.", rating: 5, initials: "VC" }
];

// ============================================================
//  CARRITO
// ============================================================
let cart = JSON.parse(localStorage.getItem('ldsmartlab_cart')) || [];

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = services.map((service, index) =>
        `<div class="service-card animate" style="animation-delay:${index * 0.1}s">
            <img src="${service.image}" alt="${service.name}" class="service-img" loading="lazy">
            <div class="service-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-price">$${service.price.toFixed(2)} <span>${service.currency}</span></div>
                <button class="add-to-cart" onclick="addToCart(${service.id},this)" id="btn-${service.id}">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        </div>`
    ).join('');
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = testimonials.map((t, index) =>
        `<div class="testimonial-card animate" style="animation-delay:${index * 0.05}s">
            <div class="stars">${'<i class="fas fa-star"></i>'.repeat(t.rating)}</div>
            <p class="testimonial-text">${t.text}</p>
            <div class="testimonial-author">
                <div class="author-avatar">${t.initials}</div>
                <div class="author-info">
                    <h4>${t.name}</h4>
                    <p>${t.role}</p>
                </div>
            </div>
        </div>`
    ).join('');
}

function addToCart(serviceId, btn) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return;
    if (cart.some(item => item.id === serviceId)) {
        showToast('Este servicio ya está en tu carrito', 'warning');
        return;
    }
    cart.push({ ...service });
    saveCart();
    updateCartUI();
    btn.innerHTML = '<i class="fas fa-check"></i> Agregado';
    btn.classList.add('added');
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-cart-plus"></i> Agregar al Carrito';
        btn.classList.remove('added');
    }, 2000);
    showToast(`${service.name} agregado al carrito`);
}

function removeFromCart(serviceId) {
    cart = cart.filter(item => item.id !== serviceId);
    saveCart();
    updateCartUI();
    showToast('Servicio eliminado del carrito');
}

function saveCart() {
    localStorage.setItem('ldsmartlab_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const count = document.getElementById('cartCount');
    const itemsContainer = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    count.textContent = cart.length;
    if (cart.length === 0) {
        itemsContainer.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-basket"></i><p>Tu carrito está vacío</p><p style="font-size:0.85rem;margin-top:10px">Agrega servicios para comenzar</p></div>`;
        totalEl.textContent = '$0.00 CUP';
        checkoutBtn.disabled = true;
    } else {
        itemsContainer.innerHTML = cart.map(item =>
            `<div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} ${item.currency}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>`
        ).join('');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalEl.textContent = `$${total.toFixed(2)} CUP`;
        checkoutBtn.disabled = false;
    }
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartSidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartSidebar').classList.remove('active');
    document.body.style.overflow = '';
}

function openCheckout() {
    if (cart.length === 0) return;
    closeCart();
    const summary = document.getElementById('orderSummary');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    summary.innerHTML =
        `<h4><i class="fas fa-receipt"></i> Resumen del Pedido</h4>` +
        cart.map(item =>
            `<div class="order-item"><span>${item.name}</span><span>$${item.price.toFixed(2)} ${item.currency}</span></div>`
        ).join('') +
        `<div class="order-total"><span>TOTAL:</span><span>$${total.toFixed(2)} CUP</span></div>`;
    document.getElementById('checkoutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================================
//  ENVÍO DE PEDIDO POR WHATSAPP
// ============================================================
function sendWhatsAppOrder(e) {
    e.preventDefault();
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const email = document.getElementById('clientEmail').value.trim();
    const address = document.getElementById('clientAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;
    const notes = document.getElementById('clientNotes').value.trim();
    if (!name || !phone || !email || !address || !payment) {
        showToast('Por favor completa todos los campos obligatorios', 'error');
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    let message = `🛒 *NUEVO PEDIDO - LD SMARTLAB*\n\n`;
    message += `👤 *DATOS DEL CLIENTE*\n`;
    message += `Nombre: ${name}\n`;
    message += `Teléfono: ${phone}\n`;
    message += `Email: ${email}\n`;
    message += `Dirección: ${address}\n`;
    message += `Método de Pago: ${payment.toUpperCase()}\n`;
    if (notes) message += `Notas: ${notes}\n`;
    message += `\n📋 *SERVICIOS SOLICITADOS*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Precio: $${item.price.toFixed(2)} ${item.currency}\n`;
        message += `   Descripción: ${item.description.substring(0, 60)}...\n\n`;
    });
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL A PAGAR: $${total.toFixed(2)} CUP*\n\n`;
    message += `📅 Fecha: ${new Date().toLocaleDateString('es-ES')}\n`;
    message += `⏰ Hora: ${new Date().toLocaleTimeString('es-ES')}\n\n`;
    message += `Gracias por confiar en LD SmartLab. Nos pondremos en contacto contigo para confirmar tu pedido.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5354693190?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckout();
    showToast('Pedido enviado a WhatsApp Business');
    document.getElementById('checkoutForm').reset();
}

// ============================================================
//  CONTACTO POR WHATSAPP
// ============================================================
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();
    if (!name || !email || !phone || !subject || !message) {
        showToast('Por favor completa todos los campos obligatorios', 'error');
        return;
    }
    let whatsappMessage = `📩 *NUEVO MENSAJE DE CONTACTO*\n\n`;
    whatsappMessage += `👤 Nombre: ${name}\n`;
    whatsappMessage += `📧 Email: ${email}\n`;
    whatsappMessage += `📱 Teléfono: ${phone}\n`;
    whatsappMessage += `📝 Asunto: ${subject.toUpperCase()}\n\n`;
    whatsappMessage += `💬 Mensaje:\n${message}\n\n`;
    whatsappMessage += `📅 Enviado el: ${new Date().toLocaleString('es-ES')}`;
    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5354693190?text=${encoded}`, '_blank');
    showToast('Mensaje enviado a WhatsApp Business');
    document.getElementById('contactForm').reset();
}

// ============================================================
//  TOAST
// ============================================================
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toastMessage');
    const icon = toast.querySelector('i');
    msgEl.textContent = msg;
    if (type === 'error') { icon.className = 'fas fa-exclamation-circle'; icon.style.color = '#ef4444'; }
    else if (type === 'warning') { icon.className = 'fas fa-info-circle'; icon.style.color = '#f59e0b'; }
    else { icon.className = 'fas fa-check-circle'; icon.style.color = 'var(--primary)'; }
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
//  TEMA CLARO / OSCURO (switch tipo píldora)
// ============================================================
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('#themeToggle .switch-thumb i');
    const label = document.querySelector('#themeToggle .switch-label');
    if (document.body.classList.contains('light-mode')) {
        icon.className = 'fas fa-sun';
        if (label) label.textContent = 'OFF';
    } else {
        icon.className = 'fas fa-moon';
        if (label) label.textContent = 'ON';
    }
    localStorage.setItem('ldsmartlab_theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

function loadTheme() {
    const saved = localStorage.getItem('ldsmartlab_theme');
    const icon = document.querySelector('#themeToggle .switch-thumb i');
    const label = document.querySelector('#themeToggle .switch-label');
    if (saved === 'light') {
        document.body.classList.add('light-mode');
        if (icon) icon.className = 'fas fa-sun';
        if (label) label.textContent = 'OFF';
    } else {
        document.body.classList.remove('light-mode');
        if (icon) icon.className = 'fas fa-moon';
        if (label) label.textContent = 'ON';
    }
}

// ============================================================
//  ANIMACIONES, PARTICULAS, NAVBAR, MENU MÓVIL
// ============================================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.animate, .animate-left, .animate-right').forEach(el => observer.observe(el));
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });
}

function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 6 + 's';
        p.style.animationDuration = (4 + Math.random() * 4) + 's';
        p.style.width = (2 + Math.random() * 4) + 'px';
        p.style.height = p.style.width;
        container.appendChild(p);
    }
}

function toggleMobileMenu() {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '70px';
        links.style.left = '0';
        links.style.right = '0';
        links.style.background = 'rgba(10,14,26,0.98)';
        links.style.padding = '20px';
        links.style.gap = '15px';
        links.style.borderBottom = '1px solid var(--border-color)';
    }
}

// ============================================================
//  AÑO DINÁMICO Y FECHA DE ACTUALIZACIÓN EN EL FOOTER
// ============================================================
function initFooterDates() {
    const yearEl = document.getElementById('currentYear');
    const updateEl = document.getElementById('lastUpdate');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (updateEl) {
        const now = new Date();
        updateEl.textContent = now.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
    }
}

// ============================================================
//  SEGURIDAD BÁSICA Y AVISO LEGAL
// ============================================================
(function() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
        }
    });
    console.log('%c🔒 LD SmartLab', 'color:#2563eb;font-size:24px;font-weight:bold');
    console.log('%c© 2026 LD SmartLab. Todos los derechos reservados.', 'color:#888;font-size:14px');
    console.log('%cEste sitio web, su código fuente, diseño y contenidos están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización por escrito del titular.', 'color:#888;font-size:12px');
})();

// ============================================================
//  DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderTestimonials();
    updateCartUI();
    initScrollAnimations();
    initNavbar();
    initParticles();
    initFooterDates();
    loadTheme();
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
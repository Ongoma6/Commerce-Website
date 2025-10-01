// Product data array - matches HTML product cards exactly
const products = [
    {
        name: "Orange Scandal",
        price: "Kshs. 250",
        img: "/Img/Orange-scandal.jpg",
        desc: "Serenity Gold envelops you with its blend of citrus top notes, golden woods, and a delicate touch of vanilla for enduring sophistication.",
        features: [
            { icon: "fa-clock", text: "Long-lasting, all-day wear" },
            { icon: "fa-oil-can", text: "Premium essential oils" },
            { icon: "fa-bottle-droplet", text: "Gold-embellished bottle" }
        ]
    },
    {
        name: "Mon Paris",
        price: "Kshs. 250",
        img: "/Img/Mon-paris.jpg",
        desc: "Noir Élégance is a seductive masterpiece with notes of amber, musk, and black rose, fit for evening allure.",
        features: [
            { icon: "fa-clock", text: "12-hour persistence" },
            { icon: "fa-oil-can", text: "Ultra-concentrated oils" },
            { icon: "fa-bottle-droplet", text: "Opulent matte black bottle" }
        ]
    },
    {
        name: "Poison Girl",
        price: "Kshs. 250",
        img: "/Img/Poison-girl.jpg",
        desc: "Velvet Whisper flourishes with white florals and smooth sandalwood for a dreamy, gentle presence.",
        features: [
            { icon: "fa-clock", text: "Elegant day-to-night scent" },
            { icon: "fa-oil-can", text: "Refined, gentle formula" },
            { icon: "fa-bottle-droplet", text: "Crystal-clear flacon" }
        ]
    },
    {
        name: "Burberry Her",
        price: "Kshs. 250",
        img: "/Img/Burberry-her.jpg",
        desc: "Aurora Luxe excites with hints of bergamot, iris, and creamy tonka, elevating any moment with flair.",
        features: [
            { icon: "fa-clock", text: "Rich, enduring fragrance" },
            { icon: "fa-oil-can", text: "Signature premium blend" },
            { icon: "fa-bottle-droplet", text: "Sculpted-glass presentation" }
        ]
    },
    {
        name: "Invictus",
        price: "Kshs. 250",
        img: "/Img/Invictus.jpg",
        desc: "A radiant blend of vibrant citrus and warm spices ignites passion and confidence with every spray.",
        features: [
            { icon: "fa-clock", text: "Vibrant lasting scent" },
            { icon: "fa-oil-can", text: "Spicy essential oils" },
            { icon: "fa-bottle-droplet", text: "Decorative flame bottle" }
        ]
    },
    {
        name: "My Way",
        price: "Kshs. 250",
        img: "/Img/My-way.jpg",
        desc: "Celebrate light and clarity with luminous floral accords and subtle musk for an effortlessly elegant scent.",
        features: [
            { icon: "fa-clock", text: "Fresh, clean aroma" },
            { icon: "fa-oil-can", text: "Floral musk blend" },
            { icon: "fa-bottle-droplet", text: "Elegant clear bottle" }
        ]
    },
    {
        name: "Amber Silk",
        price: "Kshs. 250",
        img: "/Img/Amber.jpg",
        desc: "Rich amber and smooth silk notes envelop the skin, offering a warm and sensual fragrance experience.",
        features: [
            { icon: "fa-clock", text: "Warm and sensual" },
            { icon: "fa-oil-can", text: "Amber oil infusion" },
            { icon: "fa-bottle-droplet", text: "Silk textured bottle" }
        ]
    },
    {
        name: "Olimpiya",
        price: "Kshs. 250",
        img: "/Img/Olimpiya.jpg",
        desc: "Regal iris flowers blended with hints of vanilla and musk create a luxurious and lasting scent.",
        features: [
            { icon: "fa-clock", text: "Rich, lasting luxury" },
            { icon: "fa-oil-can", text: "Vanilla musk blend" },
            { icon: "fa-bottle-droplet", text: "Regal iris bottle" }
        ]
    },
    {
        name: "Mon Paris Edition",
        price: "Kshs. 250",
        img: "/Img/Mon-paris1.jpg",
        desc: "Mysterious oceanic notes and refreshing herbs blend to evoke the elegance of the sea breeze.",
        features: [
            { icon: "fa-clock", text: "Oceanic freshness" },
            { icon: "fa-oil-can", text: "Herbal infusion" },
            { icon: "fa-bottle-droplet", text: "Sleek blue bottle" }
        ]
    },
    {
        name: "Red Scandal",
        price: "Kshs. 250",
        img: "/Img/Red-scandal.jpg",
        desc: "Delicate jasmine petals layered with warm amber and soft musk for a romantic floral fragrance.",
        features: [
            { icon: "fa-clock", text: "Romantic jasmine" },
            { icon: "fa-oil-can", text: "Amber warm notes" },
            { icon: "fa-bottle-droplet", text: "Floral glass bottle" }
        ]
    },
    {
        name: "Si Perfume",
        price: "Kshs. 250",
        img: "/Img/Si-p.jpg",
        desc: "Light and airy notes of fresh rain, blue florals, and white musk create a serene and uplifting aura.",
        features: [
            { icon: "fa-clock", text: "Serene freshness" },
            { icon: "fa-oil-can", text: "Blue floral essence" },
            { icon: "fa-bottle-droplet", text: "Elegant blue bottle" }
        ]
    },
    {
        name: "Valiame",
        price: "Kshs. 250",
        img: "/Img/Valiame.jpg",
        desc: "Bold and elegant, Rouge Grace combines ruby berries, rose petals, and rich sandalwood to captivate the senses.",
        features: [
            { icon: "fa-clock", text: "Bold elegance" },
            { icon: "fa-oil-can", text: "Ruby berry notes" },
            { icon: "fa-bottle-droplet", text: "Sophisticated bottle" }
        ]
    }
];

// Modal elements
const productCards = document.querySelectorAll('.product-card');
const modalOverlay = document.getElementById('modalOverlay');
const modalPopup = document.getElementById('modalPopup');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');

// Add click and keyboard events to product cards
productCards.forEach((card, i) => {
    card.addEventListener('click', () => openModal(i));
    card.addEventListener('keydown', (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(i);
        }
    });
});

// Randomize animation for dancing cards
document.querySelectorAll('.product-card.dancing').forEach((card) => {
    card.style.animationDuration = (2.5 + Math.random() * 2) + "s";
    card.style.animationDelay = (Math.random() * 2) + "s";
});

// Open modal function
function openModal(i) {
    const prod = products[i];
    modalImg.src = prod.img;
    modalImg.alt = prod.name + " details";
    modalName.textContent = prod.name;
    modalPrice.textContent = prod.price;
    modalDesc.textContent = prod.desc;
    modalFeatures.innerHTML = "";
    prod.features.forEach(f =>
        modalFeatures.innerHTML += `<li><i class="fa-solid ${f.icon}"></i> ${f.text}</li>`
    );
    modalOverlay.style.display = 'flex';
    setTimeout(() => modalPopup.classList.add('open'), 30);
    modalPopup.focus();
    document.body.style.overflow = 'hidden';
}

// Close modal on overlay click or close button
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay || e.target.classList.contains('close') || e.target.parentNode.classList.contains('close')) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if(e.key === "Escape" && modalOverlay.style.display === 'flex') {
        closeModal();
    }
});

// Close button keyboard support
document.querySelector('.close').addEventListener('keydown', function(e) {
    if(e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        closeModal();
    }
});

function closeModal() {
    modalPopup.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => modalOverlay.style.display = 'none', 260);
}

// Testimonials Carousel
const carousel = document.getElementById('carousel');
const testimonials = carousel.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(n) {
    testimonials.forEach((t) => t.classList.remove('active'));
    testimonials[n].classList.add('active');
}

showTestimonial(currentTestimonial);

// Previous testimonial
document.querySelector('.carousel-controls .prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Next testimonial
document.querySelector('.carousel-controls .next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 6000);

// Keyboard support for carousel controls
document.querySelectorAll('.carousel-controls span').forEach(control => {
    control.addEventListener('keydown', (e) => {
        if(e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            control.click();
        }
    });
});

// Fade-in on scroll animation
const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(f => {
    appearOnScroll.observe(f);
});

// Dark Mode Toggle
function setDarkMode(on) {
    document.body.classList.toggle('dark', on);
    try {
        localStorage.setItem('darkmode', on ? '1' : '0');
    } catch(e) {
        console.log('LocalStorage not available');
    }
    document.querySelectorAll('.darkmode-toggle i').forEach(i => {
        i.className = on ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
}

function toggleDarkMode() {
    setDarkMode(!document.body.classList.contains('dark'));
}

document.getElementById('darkToggle').onclick = toggleDarkMode;
document.getElementById('darkToggleFooter').onclick = toggleDarkMode;

// Load dark mode preference
try {
    if (localStorage.getItem('darkmode') === '1') {
        setDarkMode(true);
    }
} catch(e) {
    console.log('LocalStorage not available');
}

// Newsletter form handling
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const successMsg = document.getElementById('successMsg');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailVal = emailInput.value.trim();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    if (!emailRegex.test(emailVal)) {
        emailInput.style.borderColor = "red";
        emailInput.value = "";
        emailInput.placeholder = "Enter a valid email!";
        setTimeout(() => {
            emailInput.style.borderColor = "var(--gold)";
            emailInput.placeholder = "Enter your email...";
        }, 2000);
        return false;
    }
    
    // Show success message
    emailInput.value = "";
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 3000);
});

// Multiline typing animation
function multilineTyping(container, lines, speeds = {type: 35, erase: 13, hold: 900}) {
    let row = 0, charIdx = 0, direction = 1;
    let elements = Array.from(container.querySelectorAll('.typing-row'));
    
    function animate() {
        // Clear all lines except the current
        elements.forEach((el, idx) => {
            if (idx < row) el.textContent = lines[idx];
            else if (idx > row) el.textContent = '';
        });
        
        // Animate current line
        let text = lines[row];
        elements[row].classList.add('typing');
        elements[row].textContent = text.substring(0, charIdx);

        if (direction === 1 && charIdx <= text.length) {
            charIdx++;
            setTimeout(animate, speeds.type);
        } else if (direction === 1 && charIdx > text.length) {
            direction = -1;
            setTimeout(animate, speeds.hold);
        } else if (direction === -1 && charIdx > 0) {
            charIdx--;
            setTimeout(animate, speeds.erase);
        } else if (direction === -1 && charIdx === 0) {
            elements[row].classList.remove('typing');
            row = (row + 1) % lines.length;
            charIdx = 0;
            direction = 1;
            setTimeout(animate, speeds.hold * 0.7);
        }
    }
    animate();
}

// Single line typing animation for logo
function loopTypingEffect(elem, text, typeSpeed = 90, eraseSpeed = 32, pause = 840) {
    let i = 0, mode = 'type';
    
    function run() {
        elem.textContent = text.substr(0, i);
        
        if (mode === 'type') {
            if (i < text.length) {
                i++;
                setTimeout(run, typeSpeed);
            } else {
                mode = 'erase';
                setTimeout(run, pause);
            }
        } else {
            if (i > 0) {
                i--;
                setTimeout(run, eraseSpeed);
            } else {
                mode = 'type';
                setTimeout(run, pause);
            }
        }
    }
    run();
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Hero typing animation
    const lines = [
        "Unleash Your Scent. Define Your Story.",
        "Luxury fragrances designed to last."
    ];
    const typingContainer = document.getElementById('typing-multiline');
    if (typingContainer) {
        multilineTyping(typingContainer, lines, {type: 32, erase: 13, hold: 950});
    }
    
    // Logo typing animation
    const logoTyping = document.getElementById('logo-typing');
    if (logoTyping) {
        loopTypingEffect(logoTyping, "Abinje Perfume Shop", 88, 34, 1100);
    }
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', function() {
        document.querySelector('.silky-navbar').classList.toggle('open');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.silky-navbar').classList.remove('open');
    });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
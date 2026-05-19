// Navigation scroll effect
const nav = document.getElementById('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Mobile menu
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

function openMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

// Site-wide smart search suggestions
const siteSearchPages = [
    {
        title: 'Home',
        url: 'index.html',
        category: 'Overview',
        description: 'Hollyspower Construction overview, company promise, featured services, project highlights, and quote links.',
        keywords: 'home homepage hollyspower construction building power precision integrity quality safety client centered residential commercial industrial pharmaceutical hospitality transportation religious spaces featured projects quote services about'
    },
    {
        title: 'About Hollyspower',
        url: 'about.html',
        category: 'Company',
        description: 'Company background, values, industries served, relationship-first approach, and construction expertise.',
        keywords: 'about us company values relationships quality quantity integrity industries pharmaceutical industrial hospitality transportation commercial religious spaces experience mission'
    },
    {
        title: 'Services',
        url: 'services.html',
        category: 'Services',
        description: 'All construction services including commercial, residential, concrete, structural repair, renovations, and project management.',
        keywords: 'services construction services commercial residential concrete structural repair project management renovations maintenance upgrades tenant improvements foundations slabs roofing additions remodeling budget scheduling subcontractor coordination'
    },
    {
        title: 'Commercial Construction',
        url: 'commercial-construction.html',
        category: 'Service',
        description: 'Durable, code-compliant commercial spaces, offices, retail, mixed-use, warehouses, industrial, and tenant improvements.',
        keywords: 'commercial construction office buildings retail mixed use warehouses light industrial tenant improvements business spaces code compliant maintenance upgrades'
    },
    {
        title: 'Concrete & Structural Repair',
        url: 'concrete-structural.html',
        category: 'Service',
        description: 'Concrete foundations, footings, slabs, flatwork, sidewalks, decorative concrete, retaining walls, and structural repairs.',
        keywords: 'concrete structural repair foundations footings slabs flatwork sidewalks decorative concrete retaining walls cranes durability structural solutions'
    },
    {
        title: 'Residential Construction',
        url: 'residential-construction.html',
        category: 'Service',
        description: 'Home construction, additions, remodeling, renovations, roofing, exterior work, and structural repair for homeowners.',
        keywords: 'residential construction homes homeowners new construction home additions extensions remodeling renovations roofing exterior works structural repair framing'
    },
    {
        title: 'Our Process',
        url: 'process.html',
        category: 'Planning',
        description: 'How projects move from consultation and planning through construction, quality control, and final delivery.',
        keywords: 'process consultation planning design estimate scheduling construction project management quality control final walkthrough delivery phases'
    },
    {
        title: 'Projects',
        url: 'projects.html',
        category: 'Portfolio',
        description: 'Featured project portfolio including RCCG Victory Temple Knightdale Church Auditorium in Wendell, North Carolina.',
        keywords: 'projects portfolio RCCG Victory Temple Knightdale Church Auditorium Wendell North Carolina ground up construction church auditorium site preparation foundation exterior finishes interior build out community worship'
    },
    {
        title: 'Careers',
        url: 'careers.html',
        category: 'Employment',
        description: 'Employment opportunities and application form for construction positions with Hollyspower Construction.',
        keywords: 'careers employment jobs application construction jobs concrete finishers carpenters rod busters superintendent finisher laborer estimator work hiring'
    },
    {
        title: 'Contact',
        url: 'contact.html',
        category: 'Contact',
        description: 'Contact Hollyspower Construction by phone or email and find business hours.',
        keywords: 'contact phone email call message info hollyspower 919 885 7828 business hours Monday Friday'
    },
    {
        title: 'Get a Quote',
        url: 'quote.html',
        category: 'Quote',
        description: 'Request a free quote or detailed construction estimate for residential, commercial, concrete, or renovation work.',
        keywords: 'quote free quote estimate request project details budget timeline residential commercial concrete renovation construction estimate'
    },
    {
        title: 'Experienced Team',
        url: 'experienced-team.html',
        category: 'Why Choose Us',
        description: 'Skilled construction professionals with practical experience across multiple project types.',
        keywords: 'experienced team skilled professionals expertise construction managers trades coordination leadership'
    },
    {
        title: 'Quality Assurance',
        url: 'quality-assurance.html',
        category: 'Why Choose Us',
        description: 'Quality standards, inspections, workmanship checks, and construction practices built around durable results.',
        keywords: 'quality assurance quality control inspections workmanship standards durable results compliance'
    },
    {
        title: 'Safety Driven',
        url: 'safety-driven.html',
        category: 'Why Choose Us',
        description: 'Safety-focused construction planning, jobsite practices, compliance, and risk awareness.',
        keywords: 'safety driven safety focused jobsite compliance risk prevention planning safe work'
    },
    {
        title: 'On-Time Delivery',
        url: 'on-time-delivery.html',
        category: 'Why Choose Us',
        description: 'Scheduling discipline, coordination, and project delivery practices focused on dependable timelines.',
        keywords: 'on time delivery schedule timeline punctual deadlines coordination project management planning'
    },
    {
        title: 'Customer Satisfaction',
        url: 'customer-satisfaction.html',
        category: 'Why Choose Us',
        description: 'Client-centered communication, reliable service, and construction outcomes aligned with project goals.',
        keywords: 'customer satisfaction client centered service communication relationships trust project goals'
    }
];

function createSiteSearch(location) {
    const form = document.createElement('form');
    form.className = `site-search site-search-${location}`;
    form.setAttribute('role', 'search');
    form.setAttribute('aria-label', 'Search Hollyspower Construction');
    form.innerHTML = `
        <label class="site-search-label">
            <span class="sr-only">Search this website</span>
            <svg class="site-search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
            <input class="site-search-input" type="search" placeholder="Search this site" autocomplete="off" aria-autocomplete="list" aria-expanded="false">
        </label>
        <button class="site-search-submit" type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </button>
        <div class="site-search-results" role="listbox"></div>
    `;

    const input = form.querySelector('.site-search-input');
    const results = form.querySelector('.site-search-results');
    let activeIndex = -1;
    let currentMatches = [];

    function scorePage(page, query) {
        const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
        const title = page.title.toLowerCase();
        const category = page.category.toLowerCase();
        const content = `${page.title} ${page.category} ${page.description} ${page.keywords}`.toLowerCase();

        return terms.reduce((score, term) => {
            if (title === term) return score + 60;
            if (title.includes(term)) return score + 36;
            if (category.includes(term)) return score + 20;
            if (content.includes(term)) return score + 10;
            return score;
        }, 0);
    }

    function getMatches(query) {
        if (!query.trim()) {
            return siteSearchPages.slice(0, 6);
        }

        return siteSearchPages
            .map(page => ({ ...page, score: scorePage(page, query) }))
            .filter(page => page.score > 0)
            .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
            .slice(0, 7);
    }

    function setActiveResult(index) {
        const items = results.querySelectorAll('.site-search-result');
        items.forEach(item => item.classList.remove('active'));
        activeIndex = index;

        if (items[activeIndex]) {
            items[activeIndex].classList.add('active');
            input.setAttribute('aria-activedescendant', items[activeIndex].id);
        } else {
            input.removeAttribute('aria-activedescendant');
        }
    }

    function renderResults() {
        const query = input.value;
        currentMatches = getMatches(query);
        activeIndex = -1;
        input.setAttribute('aria-expanded', 'true');

        if (!currentMatches.length) {
            results.innerHTML = '<div class="site-search-empty">No matches found. Try services, quote, concrete, projects, or contact.</div>';
            form.classList.add('open');
            return;
        }

        results.innerHTML = currentMatches.map((page, index) => `
            <a class="site-search-result" id="site-search-${location}-${index}" href="${page.url}" role="option">
                <span>
                    <strong>${page.title}</strong>
                    <small>${page.description}</small>
                </span>
                <em>${page.category}</em>
            </a>
        `).join('');
        form.classList.add('open');
    }

    function closeResults() {
        form.classList.remove('open');
        input.setAttribute('aria-expanded', 'false');
        input.removeAttribute('aria-activedescendant');
        activeIndex = -1;
    }

    input.addEventListener('focus', renderResults);
    input.addEventListener('input', renderResults);
    input.addEventListener('keydown', event => {
        if (!form.classList.contains('open')) return;

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActiveResult(Math.min(activeIndex + 1, currentMatches.length - 1));
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActiveResult(Math.max(activeIndex - 1, 0));
        } else if (event.key === 'Enter' && activeIndex >= 0 && currentMatches[activeIndex]) {
            event.preventDefault();
            window.location.href = currentMatches[activeIndex].url;
        } else if (event.key === 'Escape') {
            closeResults();
            input.blur();
        }
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        const destination = currentMatches[activeIndex] || getMatches(input.value)[0];
        if (destination) {
            window.location.href = destination.url;
        }
    });

    document.addEventListener('click', event => {
        if (!form.contains(event.target)) closeResults();
    });

    return form;
}

function initSiteSearch() {
    const navCta = document.querySelector('.nav-cta');
    const mobileMenu = document.getElementById('mobileMenu');

    if (navCta && !document.querySelector('.site-search-desktop')) {
        navCta.insertAdjacentElement('beforebegin', createSiteSearch('desktop'));
    }

    if (mobileMenu && !document.querySelector('.site-search-mobile')) {
        const mobileSearch = createSiteSearch('mobile');
        const mobileLinksList = mobileMenu.querySelector('.mobile-menu-links');
        if (mobileLinksList) {
            mobileMenu.insertBefore(mobileSearch, mobileLinksList);
        }
    }
}

initSiteSearch();

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Scroll to top button
const scrollTop = document.getElementById('scrollTop');
if (scrollTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll for anchor links (only for same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Email form submissions
const recipientEmail = 'info@hollyspower.com';

function getFormFieldLabel(form, fieldName) {
    const field = form.elements[fieldName];
    if (!field || !field.id) return fieldName;

    const label = form.querySelector(`label[for="${field.id}"]`);
    return label ? label.textContent.replace(/\s*\*$/, '') : fieldName;
}

function getFormFieldValue(field) {
    if (!field) return '';

    if (field.type === 'file') {
        return field.files && field.files.length ? Array.from(field.files).map(file => file.name).join(', ') : '';
    }

    if (field.tagName === 'SELECT' && field.selectedIndex >= 0) {
        return field.options[field.selectedIndex].text.trim();
    }

    return field.value.trim();
}

function openEmailFromForm(form, subjectPrefix) {
    const formData = new FormData(form);
    const name = formData.get('name') || 'Website Visitor';
    const subject = `${subjectPrefix} - ${name}`;
    const lines = [];

    formData.forEach((value, key) => {
        const field = form.elements[key];
        const fieldValue = getFormFieldValue(field) || value;
        if (!fieldValue) return;

        lines.push(`${getFormFieldLabel(form, key)}: ${fieldValue}`);
    });

    const body = [
        `${subjectPrefix} submitted from hollyspower.com`,
        '',
        ...lines
    ].join('\n');

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        openEmailFromForm(this, 'New Contact Message');
    });
}

// Quote form submission
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        openEmailFromForm(this, 'New Quote Request');
    });
}

const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = this.elements.email ? this.elements.email.value.trim() : '';
        const confirmEmail = this.elements.confirm_email ? this.elements.confirm_email.value.trim() : '';
        if (email && confirmEmail && email.toLowerCase() !== confirmEmail.toLowerCase()) {
            alert('Email addresses must match before submitting your application.');
            return;
        }

        const firstName = this.elements.first_name ? this.elements.first_name.value.trim() : '';
        const lastName = this.elements.last_name ? this.elements.last_name.value.trim() : '';
        const nameInput = document.createElement('input');
        nameInput.type = 'hidden';
        nameInput.name = 'name';
        nameInput.value = `${firstName} ${lastName}`.trim() || 'Employment Applicant';
        this.appendChild(nameInput);
        openEmailFromForm(this, 'New Employment Application');
        nameInput.remove();
    });
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Mobile nav links
    document.querySelectorAll('.mobile-menu-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

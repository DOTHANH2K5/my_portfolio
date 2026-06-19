document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initContactForm();
    initActiveNav();
});

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Active nav highlight on scroll
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.header__nav a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(a => a.style.color = '');
                const active = document.querySelector(`.header__nav a[href="#${entry.target.id}"]`);
                if (active) active.style.color = 'var(--text)';
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));
}

// Contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name    = form.name.value.trim();
        const email   = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            showToast('すべての項目を入力してください。', 'error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('有効なメールアドレスを入力してください。', 'error');
            return;
        }

        // Replace this with actual submission (e.g. FormSubmit, EmailJS)
        console.log({ name, email, message });
        showToast('送信しました。ありがとうございます！', 'success');
        form.reset();
    });
}

function showToast(msg, type) {
    const toast = document.createElement('div');
    toast.textContent = msg;
    Object.assign(toast.style, {
        position:        'fixed',
        bottom:          '28px',
        right:           '28px',
        padding:         '14px 22px',
        borderRadius:    '8px',
        fontFamily:      'Inter, sans-serif',
        fontSize:        '0.875rem',
        fontWeight:      '600',
        color:           '#fff',
        background:      type === 'success' ? '#1A7F4A' : '#C53030',
        boxShadow:       '0 4px 16px rgba(0,0,0,0.15)',
        zIndex:          '9999',
        animation:       'fadeInUp 0.3s ease',
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

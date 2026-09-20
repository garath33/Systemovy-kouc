(function () {
    var path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav ul a').forEach(function (link) {
        var href = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
        if (href && href === path) link.classList.add('is-active');
        if (path === '' && href === 'index.html') link.classList.add('is-active');
    });

    var root = document.getElementById('quotes');
    if (!root) return;
    var slides = Array.prototype.slice.call(root.querySelectorAll('.slide'));
    if (!slides.length) return;

    root.classList.add('js-enabled');
    var dotsWrap = root.querySelector('.slide-dots');
    var current = 0;
    var timer = null;

    var dots = slides.map(function (_, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'slide-dot' + (i === 0 ? ' active' : '');
        b.setAttribute('aria-label', 'Ohlas ' + (i + 1));
        b.addEventListener('click', function () { show(i); restart(); });
        dotsWrap.appendChild(b);
        return b;
    });

    function show(n) {
        slides[current].classList.remove('active');
        if (dots[current]) dots[current].classList.remove('active');
        current = (n + slides.length) % slides.length;
        slides[current].classList.add('active');
        if (dots[current]) dots[current].classList.add('active');
    }

    function next() { show(current + 1); }
    function prev() { show(current - 1); }
    function start() { timer = window.setInterval(next, 8000); }
    function restart() { window.clearInterval(timer); start(); }

    var nextBtn = root.querySelector('.slide-arrow.next');
    var prevBtn = root.querySelector('.slide-arrow.prev');
    if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });
    root.addEventListener('mouseenter', function () { window.clearInterval(timer); });
    root.addEventListener('mouseleave', start);
    start();
})();

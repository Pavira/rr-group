/* RR Group - shared scripts (menu, slideshows, showcase, tabs, strip, reveal, sub-nav, form) */
(function () {
    var $ = function (s, r) { return (r || document).querySelector(s); };
    var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

    /*$$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });*/


    /* Shared footer loading */
    var footerPlaceholder = $('#footer-placeholder');

    if (footerPlaceholder) {
        fetch('footer.html')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Footer could not be loaded');
                }
                return response.text();
            })
            .then(function (html) {
                footerPlaceholder.innerHTML = html;

                // Update copyright year after footer loads
                $$('[data-year]', footerPlaceholder).forEach(function (el) {
                    el.textContent = new Date().getFullYear();
                });
            })
            .catch(function (error) {
                console.error('Footer loading error:', error);
            });
    } else {
        $$('[data-year]').forEach(function (el) {
            el.textContent = new Date().getFullYear();
        });
    }

    /* menu */
    var burger = $('#burger'), mnav = $('#mnav');
    if (burger && mnav) burger.addEventListener('click', function () { mnav.classList.toggle('open'); });
    document.addEventListener('click', function (e) {
        var dd = e.target.closest('[data-dd]');
        if (dd) dd.parentNode.classList.toggle('open');
        else if (!e.target.closest('.has-dd')) $$('.has-dd').forEach(function (x) { x.classList.remove('open'); });
        if (e.target.closest('[data-top]')) window.scrollTo({ top: 0, behavior: 'smooth' });
        var g = e.target.closest('[data-goto]');
        if (g) { var el = document.getElementById(g.getAttribute('data-goto')); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });

    /* slideshows: [data-slideshow] > (.s | img), optional .dots button + .capt */
    $$('[data-slideshow]').forEach(function (box) {
        var items = $$('.s', box); if (!items.length) items = $$('img', box);
        if (items.length < 2) return;
        var dots = $$('.dots button', box), cap = $('.capt', box), i = 0, t;
        var ms = parseInt(box.getAttribute('data-interval'), 10) || 5000;
        function go(n) {
            i = (n + items.length) % items.length;
            items.forEach(function (x, k) { x.classList.toggle('on', k === i); });
            dots.forEach(function (x, k) { x.classList.toggle('on', k === i); });
            if (cap && items[i].getAttribute('data-cap')) cap.textContent = items[i].getAttribute('data-cap');
        }
        function reset() { clearInterval(t); t = setInterval(function () { go(i + 1); }, ms); }
        dots.forEach(function (b, k) { b.addEventListener('click', function () { go(k); reset(); }); });
        reset();
    });

    /* company showcase (home) */
    $$('[data-showcase]').forEach(function (box) {
        var it = $$('.sc-item', box), pn = $$('.sc-panel', box);
        function on(n) {
            it.forEach(function (x, k) { x.classList.toggle('on', k === n); });
            pn.forEach(function (x, k) { x.classList.toggle('on', k === n); });
        }
        it.forEach(function (b, k) {
            b.addEventListener('click', function () { on(k); });
            b.addEventListener('mouseenter', function () { if (window.matchMedia('(hover:hover)').matches) on(k); });
        });
    });

    /* milestones strip (home) */
    $$('[data-strip]').forEach(function (b) {
        b.addEventListener('click', function () {
            var box = $('[data-strip-box]');
            if (box) box.scrollBy({ left: parseInt(b.getAttribute('data-strip'), 10) * 260, behavior: 'smooth' });
        });
    });

    /* product tabs (company pages) */
    $$('[data-tabs]').forEach(function (group) {
        var buttons = $$('.vt-b', group), panels = $$('.vt-p', group);
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var target = btn.getAttribute('data-tab-target');
                buttons.forEach(function (b) { var on = b === btn; b.classList.toggle('on', on); b.classList.toggle('active', on); });
                panels.forEach(function (p) { var on = p.getAttribute('data-tab-panel') === target; p.classList.toggle('on', on); p.classList.toggle('active', on); });
            });
        });
    });

    /* reveal on scroll */
    var items = $$('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (en) {
            en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
        }, { threshold: 0.08 });
        items.forEach(function (x) { io.observe(x); });
    } else { items.forEach(function (x) { x.classList.add('in'); }); }

    /* sub-nav scroll spy */
    var links = $$('.subnav a');
    if (links.length) {
        var secs = $$('[data-sec]');
        var spy = function () {
            var idx = 0;
            secs.forEach(function (s, k) { if (s.getBoundingClientRect().top < 160) idx = k; });
            links.forEach(function (a, k) { a.classList.toggle('on', k === idx); });
        };
        window.addEventListener('scroll', spy, { passive: true }); spy();
    }

    /* contact form -> mail client */
    var f = $('#contact-form');
    if (f) f.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var g = function (i) { var x = $('#' + i, f); return x ? x.value : ''; };
        var subject = encodeURIComponent(g('subject') || 'Website Enquiry');
        var body = encodeURIComponent('Name: ' + g('name') + '\nEmail: ' + g('email') + '\nPhone: ' + g('phone') + '\n\n' + g('message'));
        var n = $('.fnote', f); if (n) n.textContent = 'Thank you! Opening your email client to send the message\u2026';
        window.location.href = 'mailto:contact@rrgroup.com?subject=' + subject + '&body=' + body; f.reset();
    });
})();

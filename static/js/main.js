// main.js — students will add JavaScript here as features are built

// "See how it works" — play the YouTube video in a popup on the landing page
(function () {
    var btn = document.getElementById('how-it-works-btn');
    var modal = document.getElementById('video-modal');
    if (!btn || !modal) return;

    var frame = document.getElementById('video-frame');
    var closeBtn = document.getElementById('video-modal-close');

    function open() {
        var id = frame.getAttribute('data-video-id');
        frame.innerHTML =
            '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" ' +
            'title="How Spendly works" allow="autoplay; encrypted-media; picture-in-picture" ' +
            'allowfullscreen></iframe>';
        modal.hidden = false;
        closeBtn.focus();
    }

    function close() {
        modal.hidden = true;
        frame.innerHTML = '';   // removing the iframe stops playback
        btn.focus();
    }

    btn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) close();
    });
})();

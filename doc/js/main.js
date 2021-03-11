(function() {
    // Back-to-top button
    let backtotop = document.getElementById("back-to-top");

    backtotop.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    // Scrollspy
    let anchor = document.getElementsByTagName("section"),
    anchors = {};

    Array.prototype.forEach.call(anchor, function(e) {
        anchors[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollPosition > 50) {
            backtotop.style.display = "block";
        } else {
            backtotop.style.display = "none";
        }

        for (const [id, top] of Object.entries(anchors)) {
            if (0.85*top <= scrollPosition) {
                document.querySelector('aside .active').setAttribute('class', ' ');
                document.querySelector('aside a[href*=' + id + ']').setAttribute('class', 'active');
            }
        }
    };
})();
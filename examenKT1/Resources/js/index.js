$(document).ready(function () {
    $(function () {
        var firstPathSegment = location.pathname.split("/")[1];

        if (firstPathSegment === "") {
            firstPathSegment = "/";
        }

        $('.nav-link').removeClass('active');

        // Special handling for the homepage
        if (firstPathSegment === "/") {
            $('.nav-link[href="/"]').addClass('active');
        } else {
            $('.nav-link[href^="/' + firstPathSegment + '"]').addClass('active');
        }
    });



    //@ Navigation menu mobile
    $(".toggle-nav").click(function () {
        if ($(".mobile-nav").hasClass('hidden')) {
            $(".mobile-nav").toggleClass('hidden');

            setTimeout(function () {
                $(".mobile-nav").removeClass('opacity-0');
                $(".mobile-nav").addClass('opacity-1');
            }, 10);
        } else {
            $(".mobile-nav").removeClass('opacity-1');
            $(".mobile-nav").addClass('opacity-0');

            setTimeout(function () {
                $(".mobile-nav").toggleClass('hidden');
            }, 300);
        }
    });
});

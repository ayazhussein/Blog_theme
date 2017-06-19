$(function () {
  mobileNav()
});
function mobileNav() {
    $('.nav-toggler').on('click', function () {
        console.log("clicked");
        var status = $(this).hasClass('is-open');
        if (status) {
            $('.nav-toggler, .main-nav').removeClass('is-open');
        }
        else {
            $('.nav-toggler, .main-nav').addClass('is-open');
        }
    });
}
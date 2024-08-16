
console.log ("script.js is linked");

$(document).ready(function() {
    // show modal when the page loads
    $("#popup").fadeIn();

    // when the user clicks onm(x) close the modal
    $(".close").click(function() {
        $("#popup").fadeOut();
    });

    // close the modal when the user clicks anywhere outside of it
    $(window).click(function(event) {
        if ($(event.target).is("#popup")) {
            $("#popup").fadeOut();
        }
    });
});

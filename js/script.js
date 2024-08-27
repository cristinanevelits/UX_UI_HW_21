// check for console functionality
console.log ("script.js is linked");

//create modal for pop up message

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


// email form

document.addEventListener("DOMContentLoaded", function () {
    const emailButton = document.getElementById("emailButton");
    const emailModal = document.getElementById("emailModal");
    const emailForm = document.getElementById("emailForm");

    // show the modal when the button is clicked
    emailButton.addEventListener("click", function () {
        emailModal.style.display = "block";
    });

    // hide the modal when clicking outside 
    window.addEventListener("click", function (event) {
        if (event.target === emailModal) {
            emailModal.style.display = "none";
        }
    });

    // form submission
    emailForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission (which refreshes the page)

        // email sending logic 
        alert("Email sent successfully!");

        // hide the modal after sending
        emailModal.style.display = "none";

        // reset the form fields
        emailForm.reset();
    });
});


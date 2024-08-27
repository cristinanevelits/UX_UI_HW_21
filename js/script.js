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

// create email form

// Get modal element
const modal = document.getElementById("emailModal");
// Get button that opens the modal
const btn = document.getElementById("sendEmailBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// Get the form element
const form = document.getElementById("emailForm");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
form.onsubmit = function (event) {
    event.preventDefault(); // Prevent page refresh

    // Here you can handle the email sending logic
    // For now, we'll just display a message
    alert("Email sent!");

    // Close the modal after submission
    modal.style.display = "none";
}

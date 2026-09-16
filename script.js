const buttons = document.querySelectorAll("a");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Navigation clicked");
    });
});
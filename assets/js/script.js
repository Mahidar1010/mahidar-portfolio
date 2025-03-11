document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Mahidar's Portfolio!");

    // Smooth scroll
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

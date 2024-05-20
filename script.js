// script.js
document.addEventListener('DOMContentLoaded', function () {
    const contentPlaceholder = document.getElementById('content-placeholder');
    const navLinks = document.querySelectorAll('nav a');

    // Load initial content
    loadContent('content/home.html', contentPlaceholder);

    // Handle navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const contentPath = this.getAttribute('href');
            loadContent(`content/${contentPath}`, contentPlaceholder);
        });
    });

    // Load content function
    function loadContent(path, placeholder) {
        fetch(path)
            .then(response => response.text())
            .then(data => {
                placeholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});







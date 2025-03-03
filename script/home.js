function addNavigation(id, url) {
    document.getElementById(id).addEventListener('click', function () {
        window.location.href = url;
    });
}

addNavigation("web-dev", "./wordpress.html");
addNavigation("home-index", "./index.html");
addNavigation("site-name", "./index.html");
addNavigation("digital-marketing", "./digital-marketing.html");
addNavigation("email-template", "./email-template.html");
addNavigation("hand-painted-item", "./hand-painted-item.html");
addNavigation("projects", "./projects.html");
addNavigation("about", "./about.html");
addNavigation("contact", "./contact.html");

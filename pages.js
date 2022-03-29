function loadNav() {
    let navContent = `
    <a href="#maincontent" class="invisible">Skip to Content</a>
    <nav>
        <table>
            <tr>
            <td>
                <a href="index.html">Home</a>
            </td>
            <td>
                <a href="viewer.html">Code</a>
            </td>
            </tr>
        </table>
    </nav>
    `;
    let navElements = document.getElementsByTagName('navigation');
    for (element of navElements) {
        element.innerHTML = navContent;
    }
}
function loadFooter() {
    let year = new Date().getFullYear();
    let footerContent = `
    <p>&copy; ${year} Jett Thompson</p>
    `;
    let footerElements = document.getElementsByTagName('footer');
    for (element of footerElements) {
        element.innerHTML = footerContent;
    }
}

window.onload = function () {
    loadNav();
    loadFooter();
}
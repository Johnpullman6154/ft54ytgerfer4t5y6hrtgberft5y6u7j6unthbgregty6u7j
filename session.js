// session.js
function checkLogin() {
    const rememberedUsername = getCookie("username");

    // If the user is not logged in (no cookie), redirect to the login page
    if (!rememberedUsername) {
        window.location.href = "index.html"; // Redirect to login page if not logged in
    }
}

// Function to get cookie value
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Call this function on page load for protected pages
checkLogin();

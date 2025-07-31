document.addEventListener("DOMContentLoaded", function () {
    // breadcrumb

    let menu = "";
    if (!document.querySelector(".l_main")) {
        if (window.location.href.indexOf("/login") > -1) {
            menu = "로그인";
        } else if (window.location.href.indexOf("/join") > -1) {
            menu = "회원가입";
        }
    }

    document.getElementById("menu").innerText = menu;
    document.getElementById("title").innerText = menu;
});

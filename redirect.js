document.addEventListener("DOMContentLoaded", function() {
    let countdownElement = document.getElementById("countdown");
    let countdown = 5;

    let interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = "index.html";
        }
    }, 1000);

    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.textContent = `© ${currentYear} Neko: Online. Все права защищены.`;
});
});

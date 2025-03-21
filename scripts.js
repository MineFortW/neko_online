document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section-content');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto', // Автоматическое определение количества видимых слайдов
        centeredSlides: true, // Центрирование слайдов
        spaceBetween: 20, // Пространство между слайдами
        loop: true, // Повторение слайдов
        pagination: {
            el: '.swiper-pagination', // Элемент пагинации
            clickable: true, // Возможность кликать по пагинации
        },
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Массив с именами файлов изображений
    const logoImages = [
        "logo-placeholder.svg",
        // Добавьте здесь остальные имена файлов, которые у вас есть в директории img/cats/
    ];

    // Выбор случайного изображения
    const randomIndex = Math.floor(Math.random() * logoImages.length);
    const randomImage = logoImages[randomIndex];

    // Устанавливаем src для изображения логотипа
    const logoImg = document.getElementById('logo-img');
    logoImg.src = `img/cats/${randomImage}`;

    // IntersectionObserver код оставляем без изменений
    const sections = document.querySelectorAll('.section-content');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
    
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.textContent = `© ${currentYear} Neko: Online. Все права защищены.`;
});

document.addEventListener("DOMContentLoaded", function() {
    function checkServerStatus() {
        fetch('https://92.246.76.191:2222', { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    document.getElementById('server-status-text').textContent = 'В сети';
                    document.getElementById('server-status-indicator').classList.add('online');
                    document.getElementById('server-status-indicator').classList.remove('offline');
                } else {
                    document.getElementById('server-status-text').textContent = 'Не в сети';
                    document.getElementById('server-status-indicator').classList.add('offline');
                    document.getElementById('server-status-indicator').classList.remove('online');
                }
            })
            .catch(error => {
                document.getElementById('server-status-text').textContent = 'Не в сети';
                document.getElementById('server-status-indicator').classList.add('offline');
                document.getElementById('server-status-indicator').classList.remove('online');
            });
    }

    // Проверяем статус сервера при загрузке страницы
    checkServerStatus();
    
    // Можно добавить периодическую проверку
    setInterval(checkServerStatus, 60000); // Проверка каждые 60 секунд
});

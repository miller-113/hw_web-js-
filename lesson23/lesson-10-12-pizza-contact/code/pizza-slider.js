$(document).ready(function () {
    // Находим все изображения в слайдере
    var images = $('.slider img');
    // Устанавливаем первому изображению класс 'active'
    images.first().addClass('active');
    // Запускаем таймер, который меняет активное изображение каждые 5 секунд
    setInterval(function () {
        // Находим текущее активное изображение
        var current = $('.slider img.active');
        // Если текущее изображение последнее в списке, переключаемся на первое изображение, иначе - на следующее
        var next = (current.next().length > 0) ? current.next() : images.first();
        // Делаем активным следующее изображение
        current.removeClass('active');
        next.addClass('active');
    }, 3000);
});
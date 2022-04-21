document.addEventListener("DOMContentLoaded", () => {
  // инициализация слайдера
  const slider = new ItcSimpleSlider("#quotes-slider", {
    loop: true,
    swipe: true,
  });
  // назначим обработчик при нажатии на кнопку .btn-prev
  document.querySelector(".btn-prev").onclick = () => {
    // перейдём к предыдущему слайду
    slider.prev();
  };
  // назначим обработчик при нажатии на кнопку .btn-next
  document.querySelector(".btn-next").onclick = () => {
    // перейдём к следующему слайду
    slider.next();
  };
});

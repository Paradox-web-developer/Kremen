$(document).ready(function() {
  $('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true,
    slidesToShow:2,
    slidesToScroll:2,
    speed:1000,
    easing:'ease',
    infinity:true,
    autoplay:false,
    autoplaySpeed:1500,
    
     responsive: [
      {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          slidesToScroll: 2
          }
      },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


  });
})







/*let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    
    let width = 400; // ширина картинки
    let count = 2; // видимое количество изображений


    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
*/

    let btnPopup = document.querySelectorAll('#btn_popup');
    let popup = document.querySelector('.popup');
    let popupClosed = document.querySelector('.popup__close');
  

    for (let i = 0; i < btnPopup.length; i++) {
      btnPopup[i].addEventListener("click", function () {
        popup.style.display = 'block';
      })
    }

    popupClosed.addEventListener("click", function() {
     popup.style.display = 'none';
     
    });

    
   

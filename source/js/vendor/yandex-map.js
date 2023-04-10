const isMobile = {
  android() {
    return navigator.userAgent.match(/Android/i);
  },
  blackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any() {
    return (isMobile.android() || isMobile.blackBerry() || isMobile.iOS() || isMobile.opera() || isMobile.windows());
  },
};

function init() {
  const map = new ymaps.Map('map', {
    center: [59.93844, 30.3230],
    zoom: 16,
    controls: [],
  },
    { suppressMapOpenBlock: true });

  let marker = new ymaps.Placemark(
    [59.9375, 30.3225], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/map-pin.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  }
  );
  map.geoObjects.add(marker);

  if (isMobile.any()) {
    map.behaviors.disable('drag');
  }
}

setTimeout(() => {
  const elem = document.createElement('script');
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=980ff082-308c-4468-804a-142a99788d78&lang=ru_RU';
  elem.type = 'text/javascript';
  document.querySelector('body').appendChild(elem);
  elem.onload = () => ymaps.ready(init);
}, 3000)

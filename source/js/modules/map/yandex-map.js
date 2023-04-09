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

function init(ymaps) {
  const map = new ymaps.Map('map', {
    center: [59.93866023164109, 30.32317630118681],
    zoom: 16,
    controls: [],
  },
  {suppressMapOpenBlock: true});

  let marker = new ymaps.Placemark(
      [59.93750345190682, 30.322547392311055], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/svg/map-pin.svg',
        iconImageSize: [18, 22],
        iconImageOffset: [-9, -22],
      }
  );
  map.geoObjects.add(marker);
  map.behaviors.disable('scrollZoom');

  if (isMobile.any()) {
    map.behaviors.disable('drag');
  }
}

const elem = document.createElement('script');
elem.type = 'text/javascript';
elem.async = true;
elem.src = 'https://api-maps.yandex.ru/2.1?apikey=980ff082-308c-4468-804a-142a99788d78&lang=ru_RU';
document.getElementsByTagName('body')[0].appendChild(elem);

export function initMap() {
  // eslint-disable-next-line
  ymaps.ready(init);
}

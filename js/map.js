const types = ["palace", "flat", "house", "bungalo"];
const rooms = [1, 2, 3, 4, 5];
const checkTime = ["12:00", "13:00", "14:00"];
const features = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];
const photos = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
];

const map = document.querySelector(".map");

// Возращает случайное число в диапазоне
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// Обрезает массив features на случайную длину
function randomLengthFeatures() {
  newFeatures = features;
  newFeatures.length = getRandomIntInclusive(1, features.length - 1);
  return newFeatures;
}

// Перемешивает массив
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// Данные для объявлений
let adsNearby = [
  {
    author: {
      avatar: "img/avatars/user01.png",
    },
    offer: {
      title: "Большая уютная квартира",
      address: "{{location.x}}, {{location.y}}",
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: shuffle(photos),
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  },

  {
    author: {
      avatar: "img/avatars/user02.png",
    },
    offer: {
      title: "Маленькая неуютная квартира",
      address: "{{location.x}}, {{location.y}}",
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: shuffle(photos),
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  },

  {
    author: {
      avatar: "img/avatars/user03.png",
    },
    offer: {
      title: "Огромный прекрасный дворец",
      address: "{{location.x}}, {{location.y}}",
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: shuffle(photos),
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  },

  {
    author: {
      avatar: "img/avatars/user04.png",
    },
    offer: {
      title: "Маленький ужасный дворец",
      address: "{{location.x}}, {{location.y}}",
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: shuffle(photos),
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  },

  {
    author: {
      avatar: "img/avatars/user05.png",
    },
    offer: {
      title: "Красивый гостевой домик",
      address: "{{location.x}}, {{location.y}}",
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: shuffle(photos),
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  },

  {
    author: {
      avatar: "img/avatars/user06.png",
    },
    offer: {
      title: "Некрасивый негостеприимный домик",
      address: "{{location.x}}, {{location.y}}",
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: shuffle(photos),
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  },

  {
    author: {
      avatar: "img/avatars/user07.png",
    },
    offer: {
      title: "Уютное бунгало далеко от моря",
      address: "{{location.x}}, {{location.y}}",
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: shuffle(photos),
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  },

  {
    author: {
      avatar: "img/avatars/user08.png",
    },
    offer: {
      title: "Неуютное бунгало по колено в воде",
      address: "{{location.x}}, {{location.y}}",
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: shuffle(photos),
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  },
];

// Создание меток на карте
let mapPins = document.querySelector(".map__pins");
let fragment = document.createDocumentFragment();

for (let i = 0; i < adsNearby.length; i++) {
  let newPin = document.createElement("button");
  newPin.className = "map__pin";
  newPin.style.cssText = `left: ${adsNearby[i].location.x}px; top: ${adsNearby[i].location.y}px`;
  newPin.innerHTML = `<img src="${adsNearby[i].author.avatar}" alt="${adsNearby[i].offer.title}" width="40" height="40"
  draggable="false">`;

  fragment.appendChild(newPin);
}

mapPins.appendChild(fragment);

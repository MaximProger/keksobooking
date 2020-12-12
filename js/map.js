// Возращает случайное число в диапазоне
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// Обрезает массив features на случайную длину
function randomLengthFeatures() {
  let newFeaturesLength = getRandomIntInclusive(1, features.length);
  let newFeatures = [];

  for (let i = 0; i < newFeaturesLength; i++) {
    newFeatures.push(features[i]);
  }

  return newFeatures;
}

// Перемешивает массив
function shuffle(array) {
  newArray = array;
  return newArray.sort(() => Math.random() - 0.5);
}

let numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8]);

const titles = [
  "Большая уютная квартира",
  "Маленькая неуютная квартира",
  "Огромный прекрасный дворец",
  "Маленький ужасный дворец",
  "Красивый гостевой домик",
  "Некрасивый негостеприимный домик",
  "Уютное бунгало далеко от моря",
  "Неуютное бунгало по колено в воде",
];

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

const photos = shuffle([
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
]);

// Создание новых объявлений
const map = document.querySelector(".map");
map.classList.remove("map--faded");

let pins = [];

function createPin(i) {
  return {
    author: {
      avatar: "img/avatars/user0" + numbers[i] + ".png",
    },
    offer: {
      title: titles[numbers[i] - 1],
      address: `${getRandomIntInclusive(100, 1000)}, ${getRandomIntInclusive(
        100,
        1000
      )}`,
      price: getRandomIntInclusive(1000, 1000000),
      type: types[getRandomIntInclusive(0, types.length - 1)],
      rooms: rooms[getRandomIntInclusive(0, rooms.length - 1)],
      guests: getRandomIntInclusive(1, 10),
      checkin: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      checkout: checkTime[getRandomIntInclusive(0, checkTime.length - 1)],
      features: randomLengthFeatures(),
      description: "",
      photos: photos,
    },
    location: {
      x: getRandomIntInclusive(40, map.offsetWidth - 40),
      y: getRandomIntInclusive(130, 630),
    },
  };
}

for (let i = 0; i < 8; i++) {
  pins.push(createPin(i));
}

// Вывод новых меток
const mapPins = document.querySelector(".map__pins");
const mapPinTemplate = document
  .querySelector("template")
  .content.querySelector(".map__pin");

function renderPin(mapPin) {
  let mapPinElement = mapPinTemplate.cloneNode(true);

  mapPinElement.querySelector("img").src = mapPin.author.avatar;
  mapPinElement.querySelector("img").alt = mapPin.offer.title;
  mapPinElement.style.left = mapPin.location.x + "px";
  mapPinElement.style.top = mapPin.location.y + "px";

  return mapPinElement;
}

let fragment = document.createDocumentFragment();
for (let i = 0; i < pins.length; i++) {
  fragment.appendChild(renderPin(pins[i]));
}

mapPins.appendChild(fragment);

// Вывод первого объявления
const mapCardTemplate = document
  .querySelector("template")
  .content.querySelector(".map__card");

function getType(type) {
  switch (type) {
    case "flat":
      return "Квартира";

    case "bungalo":
      return "Бунгало";

    case "house":
      return "Дом";

    case "palace":
      return "Дворец";

    default:
      return "";
  }
}

// Выводит фотографии
function printPhotos(mapCardElement, pin) {
  let mapPhoto = mapCardElement.querySelector(".popup__photos li");

  for (let i = 0; i < photos.length; i++) {
    let mapPhotoElement = mapPhoto.cloneNode(true);
    mapPhotoElement.querySelector("img").src = pin.offer.photos[i];

    fragment.appendChild(mapPhotoElement);
  }

  mapPhoto.remove();

  mapCardElement.querySelector(".popup__photos").appendChild(fragment);
}

// Вывод приемуществ
function printFeatures(mapCardElement, pin) {
  const mapFeaturesList = mapCardElement.querySelector(".popup__features");

  for (let i = 0; i < pin.offer.features.length; i++) {
    let mapFeature = document.createElement("li");
    mapFeature.classList.add("feature");
    mapFeature.classList.add("feature--" + pin.offer.features[i]);
    fragment.appendChild(mapFeature);
  }

  mapFeaturesList.appendChild(fragment);
}

function createCard(pin) {
  let mapCardElement = mapCardTemplate.cloneNode(true);
  mapCardElement.querySelector(".popup__title").textContent = pin.offer.title;
  mapCardElement.querySelector(".popup__text--address").textContent =
    pin.offer.address;
  mapCardElement.querySelector(".popup__text--price").textContent =
    pin.offer.price + " ₽/ночь";
  mapCardElement.querySelector(".popup__type").textContent = getType(
    pin.offer.type
  );
  mapCardElement.querySelector(".popup__text--capacity").textContent =
    pin.offer.rooms + "комнаты для" + pin.offer.guests + "гостей";
  mapCardElement.querySelector(".popup__text--time").textContent =
    "Заезд после" + pin.offer.checkin + ", выезд до" + pin.offer.checkout;

  mapCardElement.querySelector(".popup__description").textContent =
    pin.offer.description;

  printFeatures(mapCardElement, pin);

  printPhotos(mapCardElement, pin);

  mapCardElement.querySelector(".popup__avatar").src = pin.author.avatar;

  return mapCardElement;
}

fragment.appendChild(createCard(pins[0]));
map.appendChild(fragment);

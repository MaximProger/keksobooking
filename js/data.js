(function () {
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

  window.photos = shuffle([
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
  ]);

  window.pins = [];

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
})();

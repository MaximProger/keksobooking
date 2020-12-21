(function () {
  // Вывод информации об объявления
  window.createFirstApply = function (pin) {
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

      for (let i = 0; i < window.photos.length; i++) {
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
      mapCardElement.querySelector(".popup__title").textContent =
        pin.offer.title;
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

    fragment.appendChild(createCard(pin));
    map.appendChild(fragment);
  };
})();

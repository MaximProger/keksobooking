(function () {
  function clickOnPin() {
    const mapPinList = document.querySelectorAll(".map__pin--item");
    for (let i = 0; i < mapPinList.length; i++) {
      mapPinList.item(i).addEventListener("click", function () {
        window.createFirstApply(pins[i]);
      });
    }
  }

  window.mapPinMain = document.querySelector(".map__pin--main");

  let onOpenApp = function (evt) {
    evt.preventDefault();

    map.classList.remove("map--faded");

    setPins();
    clickOnPin();
    mapPinMain.removeEventListener("mouseup", onOpenApp);
  };

  mapPinMain.addEventListener("mouseup", onOpenApp);

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
    mapPinElement.classList.add("map__pin--item");

    return mapPinElement;
  }

  function setPins() {
    for (let i = 0; i < window.pins.length; i++) {
      window.fragment.appendChild(renderPin(pins[i]));
    }

    mapPins.appendChild(fragment);
  }
})();

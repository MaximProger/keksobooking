(function () {
  function clickOnPin(pins) {
    const mapPinList = document.querySelectorAll(".map__pin--item");
    for (let i = 0; i < mapPinList.length; i++) {
      mapPinList.item(i).addEventListener("click", function () {
        window.createFirstApply(pins[i]);
      });
    }
  }

  window.mapPinMain = document.querySelector(".map__pin--main");
  window.noticeForm = document.querySelector(".notice__form");

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
    window.backend.load(function (pins) {
      for (let i = 0; i < pins.length; i++) {
        window.fragment.appendChild(renderPin(pins[i]));
      }

      mapPins.appendChild(fragment);

      clickOnPin(pins);
    });
  }

  const mapPinItem = document.querySelector(".map__pin");

  let onOpenApp = function (evt) {
    evt.preventDefault();

    map.classList.remove("map--faded");
    window.noticeForm.classList.remove("notice__form--disabled");
    setPins();
    mapPinMain.removeEventListener("mouseup", onOpenApp);
    window.mapPinMain.addEventListener("mousedown", window.DndDialog);
  };

  mapPinMain.addEventListener("mouseup", onOpenApp);
})();

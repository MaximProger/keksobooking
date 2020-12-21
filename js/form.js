(function () {
  const inputAddress = document.querySelector("#address");
  const computedMapPinMain = getComputedStyle(mapPinMain);

  window.refreshInputValue = function () {
    inputAddress.value =
      +mapPinMain.style.top.replace(/[^+\d]/g, "") +
      36 +
      "; " +
      (+mapPinMain.style.left.replace(/[^+\d]/g, "") + 31) +
      ";";
  };

  // Устанавливает адресс в инпупе, при загрузке
  function setAdress() {
    inputAddress.value =
      +computedMapPinMain.top.replace(/[^+\d]/g, "") +
      36 +
      "; " +
      (+computedMapPinMain.left.replace(/[^+\d]/g, "") + 31) +
      ";";
  }

  setAdress();

  // Валидация полей количество комнат и количество гостей
  const roomNumber = document.querySelector("#room_number");
  const capacity = document.querySelector("#capacity");

  if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity(
      "Количество гостей не должно превышать число комнат"
    );
  }

  capacity.addEventListener("change", function (evt) {
    evt.preventDefault();

    if (roomNumber.value < capacity.value) {
      capacity.setCustomValidity(
        "Количество гостей не должно превышать число комнат"
      );
    } else {
      capacity.setCustomValidity("");
    }
  });
})();

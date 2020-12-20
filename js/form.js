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
})();

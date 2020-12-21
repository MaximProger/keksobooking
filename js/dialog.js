(function () {
  // Перетаскивание окна диалога
  window.DndDialog = function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    let dragged = false;

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      window.mapPinMain.style.top =
        window.mapPinMain.offsetTop - shift.y + "px";
      window.mapPinMain.style.left =
        window.mapPinMain.offsetLeft - shift.x + "px";

      window.refreshInputValue();
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      if (dragged) {
        let onClickPreventDefault = function (evt) {
          evt.preventDefault();
          window.mapPinMain.removeEventListener("click", onClickPreventDefault);
        };
        window.mapPinMain.addEventListener("click", onClickPreventDefault);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };
})();

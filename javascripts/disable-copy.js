(function () {

  // ==========================================
  // 1. 우클릭 방지
  // ==========================================

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });


  // ==========================================
  // 2. 텍스트 선택 방지
  // ==========================================

  document.addEventListener("selectstart", function (event) {
    event.preventDefault();
  });


  // ==========================================
  // 3. Drag 방지
  // ==========================================

  document.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });


  // ==========================================
  // 4. Ctrl+C / Ctrl+X 방지
  // ==========================================

  document.addEventListener("keydown", function (event) {

    if (
      (event.ctrlKey || event.metaKey) &&
      (event.key === "c" || event.key === "x")
    ) {
      event.preventDefault();
    }

  });


})();
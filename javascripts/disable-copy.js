/*
 * =========================================================
 * MkDocs Material - Copy Protection
 *
 * 일반 본문:
 *   - 우클릭 금지
 *   - 드래그 금지
 *   - 복사 금지
 *   - 잘라내기 금지
 *
 * 코드 블록:
 *   - 선택 허용
 *   - 복사 허용
 *   - Material 복사 버튼 사용 가능
 * =========================================================
 */


(function () {

  // -------------------------------------------------------
  // 우클릭 방지
  // -------------------------------------------------------

  document.addEventListener("contextmenu", function (event) {

    event.preventDefault();

  });


  // -------------------------------------------------------
  // 텍스트 선택 방지
  //
  // 단, 코드 블록 내부는 허용
  // -------------------------------------------------------

  document.addEventListener("selectstart", function (event) {

    const target = event.target;

    // 코드 영역이면 선택 허용
    if (
      target.closest("pre") ||
      target.closest("code") ||
      target.closest(".highlight")
    ) {
      return;
    }

    event.preventDefault();

  });


  // -------------------------------------------------------
  // 드래그 방지
  //
  // 단, 코드 영역은 허용
  // -------------------------------------------------------

  document.addEventListener("dragstart", function (event) {

    const target = event.target;

    // 코드 영역이면 드래그 허용
    if (
      target.closest("pre") ||
      target.closest("code") ||
      target.closest(".highlight")
    ) {
      return;
    }

    event.preventDefault();

  });


  // -------------------------------------------------------
  // 복사 방지
  //
  // 코드 영역은 복사 허용
  // -------------------------------------------------------

  document.addEventListener("copy", function (event) {

    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) {
      return;
    }

    const range = selection.getRangeAt(0);

    const container = range.commonAncestorContainer;

    const element =
      container.nodeType === Node.ELEMENT_NODE
        ? container
        : container.parentElement;


    // 코드 영역이면 복사 허용
    if (
      element &&
      (
        element.closest("pre") ||
        element.closest("code") ||
        element.closest(".highlight")
      )
    ) {
      return;
    }

    // 일반 본문은 복사 금지
    event.preventDefault();

  });


  // -------------------------------------------------------
  // 잘라내기 방지
  // -------------------------------------------------------

  document.addEventListener("cut", function (event) {

    const target = event.target;

    // 코드 영역에서는 잘라내기 허용
    if (
      target.closest("pre") ||
      target.closest("code") ||
      target.closest(".highlight")
    ) {
      return;
    }

    event.preventDefault();

  });


})();
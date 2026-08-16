
(function () {

  document.addEventListener("contextmenu", function (event) {

    event.preventDefault();

  });

  document.addEventListener("selectstart", function (event) {

    const target = event.target;

    if (
      target.closest("pre") ||
      target.closest("code") ||
      target.closest(".highlight")
    ) {
      return;
    }

    event.preventDefault();

  });

  document.addEventListener("dragstart", function (event) {

    const target = event.target;

    if (
      target.closest("pre") ||
      target.closest("code") ||
      target.closest(".highlight")
    ) {
      return;
    }

    event.preventDefault();

  });


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

    event.preventDefault();

  });


  document.addEventListener("cut", function (event) {

    const target = event.target;

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
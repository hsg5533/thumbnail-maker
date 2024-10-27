"use strict";
const produceImageBtn = document.querySelector("#export"),
  captureModal = document.querySelector(".capture_modal"),
  mod = document.querySelectorAll(".mod"),
  overlay = document.querySelector(".overlay"),
  captureExport = function () {
    html2canvas(document.querySelector("#capture"), {
      logging: !0,
      letterRendering: 1,
      allowTaint: !0,
      useCORS: !0,
    }).then((e) => {
      captureModal.appendChild(e).classList.add("canvas");
    }),
      mod.forEach((e) => e.classList.remove("hidden"));
  },
  removeCapture = function () {
    captureModal.removeChild(captureModal.firstElementChild),
      mod.forEach((e) => e.classList.add("hidden"));
  };
produceImageBtn.addEventListener("click", captureExport),
  overlay.addEventListener("click", removeCapture),
  window.addEventListener("keydown", (e) => {
    "Escape" === e.key && removeCapture();
  });
const inputFields = document.querySelectorAll(".input__field"),
  updateInputValue = function (e) {
    let t = e.target.dataset.set;
    document.querySelector(`.${t}`).textContent = e.target.value;
  };
inputFields.forEach((e) => {
  e.addEventListener("input", updateInputValue);
});
const randomSolidBtn = document.querySelector(".random__solid"),
  randomGradientBtn = document.querySelector(".random__gradient"),
  domBody = document.body,
  preview = document.querySelector(".preview"),
  backgroundBtns = document.querySelector(
    "#background__btn__container"
  ).children,
  componentsBtns = document.querySelectorAll(".component__opt"),
  randomRGB = function () {
    let e = "";
    return (
      (e += (Math.floor(90 * Math.random() + 1) + 150)
        .toString(16)
        .padStart(2, "0")),
      (e += (Math.floor(90 * Math.random() + 1) + 150)
        .toString(16)
        .padStart(2, "0")),
      (e += (Math.floor(90 * Math.random() + 1) + 150)
        .toString(16)
        .padStart(2, "0"))
    );
  },
  changeBackground = function () {
    let e = randomRGB();
    [...backgroundBtns].forEach((e) => {
      e.classList.remove("selected");
    }),
      randomSolidBtn.classList.add("selected"),
      (domBody.style.background = preview.style.background = ""),
      (domBody.style.backgroundColor = preview.style.backgroundColor = `#${e}`);
  };
randomSolidBtn.addEventListener("click", changeBackground);
const changeGradient = function () {
  let e = randomRGB(),
    t = randomRGB();
  [...backgroundBtns].forEach((e) => {
    e.classList.remove("selected");
  }),
    randomGradientBtn.classList.add("selected"),
    (domBody.style.background = `linear-gradient(to bottom, #${e}, #${t})`),
    (preview.style.background = `linear-gradient(to bottom, #${e}, #${t})`);
};
randomGradientBtn.addEventListener("click", changeGradient);
const composition = document.querySelector(".components"),
  changeLayout = function (e) {
    let t = e.target.dataset.set;
    (document.querySelector(".components").id = t),
      componentsBtns.forEach((e) => {
        e.classList.remove("selected");
      }),
      e.target.classList.add("selected");
  };
componentsBtns.forEach((e) => {
  e.addEventListener("click", changeLayout);
});
const imgBtn = document.querySelector(".img__url"),
  imageBackground = function () {
    let e = prompt("이미지 주소를 입력하세요 \uD83D\uDE07");
    if (null !== e) {
      if (
        !e.match(
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
        )
      ) {
        alert("올바르지 않은 URL입니다 \uD83D\uDE28");
        return;
      }
      (domBody.style.background = preview.style.background = `url('${e}')`),
        (domBody.style.backgroundSize = preview.style.backgroundSize = "cover"),
        (domBody.style.backgroundRepeat = preview.style.backgroundRepeat =
          "no-repeat"),
        (domBody.style.backgroundPosition = preview.style.backgroundPosition =
          "center"),
        [...backgroundBtns].forEach((e) => {
          e.classList.remove("selected");
        }),
        imgBtn.classList.add("selected");
    }
  };
imgBtn.addEventListener("click", imageBackground);
const prevTitle = document.querySelector(".title"),
  prevSubtitle = document.querySelector(".subtitle"),
  prevCategory = document.querySelector(".category"),
  allBtns = document.querySelectorAll(".btn"),
  initBtn = document.querySelector("#initialize"),
  textstyleContainer = document.querySelector(".text__style"),
  textShadowBtn = document.querySelector(".text__shadow"),
  textInvertBtn = document.querySelector(".text__invert"),
  textSizeBtn = document.querySelector(".text__size"),
  textstyleBtns = document.querySelectorAll(".text__btn"),
  renderTxt = document.querySelectorAll(".render");
textstyleBtns.forEach((e) => {
  e.addEventListener("click", (e) => {
    let t = e.target;
    t.classList.toggle("selected");
  });
});
const textInvertFn = function (e) {
    renderTxt.forEach((t) => {
      e.target.classList.contains("selected")
        ? ((t.style.color = "black"),
          (prevSubtitle.style.borderTop = "1px solid #000000"))
        : ((t.style.color = "#ffffff"),
          (prevSubtitle.style.borderTop = "1px solid #ffffff"));
    });
  },
  textShadowFn = function (e) {
    renderTxt.forEach((t) => {
      e.target.classList.contains("selected")
        ? (t.style.textShadow = "2px 2px 4px rgba(0,0,0,0.4)")
        : (t.style.textShadow = "");
    });
  },
  textSizeFn = function (e) {
    renderTxt.forEach((t) => {
      e.target.classList.contains("selected")
        ? ((prevTitle.style.fontSize = "46px"),
          (prevSubtitle.style.fontSize = "22px"),
          (prevCategory.style.fontSize = "22px"))
        : ((prevTitle.style.fontSize = "54px"),
          (prevSubtitle.style.fontSize = "24px"),
          (prevCategory.style.fontSize = "24px"));
    });
  };
textInvertBtn.addEventListener("click", textInvertFn),
  textShadowBtn.addEventListener("click", textShadowFn),
  textSizeBtn.addEventListener("click", textSizeFn);
const init = function () {
  (domBody.style.background =
    "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat"),
    (preview.style.background =
      "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat"),
    (domBody.style.backgroundColor = preview.style.backgroundColor = "#78aaf9"),
    (prevTitle.textContent = "제목을 입력하세요"),
    (prevSubtitle.textContent = "부제목을 입력하세요"),
    (prevCategory.textContent = "분류를 입력하세요"),
    allBtns.forEach((e) => {
      e.classList.remove("selected");
    }),
    inputFields.forEach((e) => {
      e.value = "";
    }),
    renderTxt.forEach((e) => {
      (e.style.textShadow = ""), (e.style.color = "#ffffff");
    }),
    (prevSubtitle.style.borderTop = "1px solid #ffffff"),
    (prevTitle.style.fontSize = "54px"),
    (prevSubtitle.style.fontSize = "24px"),
    (prevCategory.style.fontSize = "24px"),
    componentsBtns[0].classList.add("selected"),
    inputFields[0].focus(),
    (document.querySelector(".components").id = "comp__opt1");
};
initBtn.addEventListener("click", init), init();
const msg = "%cWonkook Lee ⓒ oneook",
  css =
    "font-size: 2em; color: #FEDC45; background-color: #000;font-family: 'Noto Sans KR';";
console.log(
  "%cWonkook Lee ⓒ oneook",
  "font-size: 2em; color: #FEDC45; background-color: #000;font-family: 'Noto Sans KR';"
);

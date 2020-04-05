const mainKeys = [
  [
    { code: "Escape", label: "Esc", type: "s" },
    { code: "F1", label: "F1", type: "s" },
    { code: "F2", label: "F2", type: "s" },
    { code: "F3", label: "F3", type: "s" },
    { code: "F4", label: "F4", type: "s" },
    { code: "F5", label: "F5", type: "s" },
    { code: "F6", label: "F6", type: "s" },
    { code: "F7", label: "F7", type: "s" },
    { code: "F8", label: "F8", type: "s" },
    { code: "F9", label: "F9", type: "s" },
    { code: "F10", label: "F10", type: "s" },
    { code: "F11", label: "F11", type: "s" },
    { code: "F12", label: "F12", type: "s" },
    { code: "Delete", label: "Delete", type: "s" }
  ],
  [
    {
      code: "Backquote",
      layout: { ru: ["Ё", "ё"], en: ["~", "`"] },
      type: "s"
    },
    { code: "Digit1", layout: { ru: ["!", "1"], en: ["!", "1"] }, type: "s" },
    { code: "Digit2", layout: { ru: ['"', "2"], en: ["@", "2"] }, type: "s" },
    { code: "Digit3", layout: { ru: ["№", "3"], en: ["#", "3"] }, type: "s" },
    { code: "Digit4", layout: { ru: [";", "4"], en: ["$", "4"] }, type: "s" },
    { code: "Digit5", layout: { ru: ["%", "5"], en: ["%", "5"] }, type: "s" },
    { code: "Digit6", layout: { ru: [":", "6"], en: ["^", "6"] }, type: "s" },
    { code: "Digit7", layout: { ru: ["?", "7"], en: ["&", "7"] }, type: "s" },
    { code: "Digit8", layout: { ru: ["*", "8"], en: ["*", "8"] }, type: "s" },
    { code: "Digit9", layout: { ru: ["(", "9"], en: ["(", "9"] }, type: "s" },
    { code: "Digit0", layout: { ru: [")", "0"], en: [")", "0"] }, type: "s" },
    { code: "Minus", layout: { ru: ["_", "-"], en: ["_", "-"] }, type: "s" },
    { code: "Equal", layout: { ru: ["+", "="], en: ["+", "="] }, type: "s" },
    { code: "Backspace", label: "Backspace", type: "r" },
    { code: "Home", label: "Home", type: "s" }
  ],
  [
    {
      code: "Tab",
      layout: { ru: ["Tab", "Tab"], en: ["Tab", "Tab"] },
      type: "r"
    },
    { code: "KeyQ", layout: { ru: ["Й", "й"], en: ["Q", "q"] }, type: "s" },
    { code: "KeyW", layout: { ru: ["Ц", "ц"], en: ["W", "w"] }, type: "s" },
    { code: "KeyE", layout: { ru: ["У", "у"], en: ["E", "e"] }, type: "s" },
    { code: "KeyR", layout: { ru: ["К", "к"], en: ["R", "r"] }, type: "s" },
    { code: "KeyT", layout: { ru: ["Е", "е"], en: ["T", "t"] }, type: "s" },
    { code: "KeyY", layout: { ru: ["Н", "н"], en: ["Y", "y"] }, type: "s" },
    { code: "KeyU", layout: { ru: ["Г", "г"], en: ["U", "u"] }, type: "s" },
    { code: "KeyI", layout: { ru: ["Ш", "ш"], en: ["I", "i"] }, type: "s" },
    { code: "KeyO", layout: { ru: ["Щ", "щ"], en: ["O", "o"] }, type: "s" },
    { code: "KeyP", layout: { ru: ["З", "з"], en: ["P", "p"] }, type: "s" },
    {
      code: "BracketLeft",
      layout: { ru: ["Х", "х"], en: ["{", "["] },
      type: "s"
    },
    {
      code: "BracketRight",
      layout: { ru: ["Ъ", "ъ"], en: ["}", "]"] },
      type: "s"
    },
    {
      code: "Backslash",
      layout: { ru: ["/", "\\"], en: ["|", "\\"] },
      type: "r"
    },

    { code: "PageUp", label: "Page<br>Up", type: "s" }
  ],
  [
    { code: "CapsLock", label: "Caps<br>Lock", type: "r" },
    { code: "KeyA", layout: { ru: ["Ф", "ф"], en: ["A", "a"] }, type: "s" },
    { code: "KeyS", layout: { ru: ["Ы", "ы"], en: ["S", "s"] }, type: "s" },
    { code: "KeyD", layout: { ru: ["В", "в"], en: ["D", "d"] }, type: "s" },
    { code: "KeyF", layout: { ru: ["А", "а"], en: ["F", "f"] }, type: "s" },
    { code: "KeyG", layout: { ru: ["П", "п"], en: ["G", "g"] }, type: "s" },
    { code: "KeyH", layout: { ru: ["Р", "р"], en: ["H", "h"] }, type: "s" },
    { code: "KeyJ", layout: { ru: ["О", "о"], en: ["J", "j"] }, type: "s" },
    { code: "KeyK", layout: { ru: ["Л", "л"], en: ["K", "k"] }, type: "s" },
    { code: "KeyL", layout: { ru: ["Д", "д"], en: ["L", "l"] }, type: "s" },
    {
      code: "Semicolon",
      layout: { ru: ["Ж", "ж"], en: [":", ";"] },
      type: "s"
    },
    { code: "Quote", layout: { ru: ["Э", "э"], en: ['"', "'"] }, type: "s" },
    {
      code: "Enter",
      layout: { ru: ["Enter", "Enter"], en: ["Enter", "Enter"] },
      type: "r"
    },

    { code: "PageDown", label: "Page Down", type: "s" }
  ],
  [
    { code: "ShiftLeft", label: "Shift", type: "r" },
    { code: "KeyZ", layout: { ru: ["Я", "я"], en: ["Z", "z"] }, type: "s" },
    { code: "KeyX", layout: { ru: ["Ч", "ч"], en: ["X", "x"] }, type: "s" },
    { code: "KeyC", layout: { ru: ["С", "с"], en: ["C", "c"] }, type: "s" },
    { code: "KeyV", layout: { ru: ["М", "м"], en: ["V", "v"] }, type: "s" },
    { code: "KeyB", layout: { ru: ["И", "и"], en: ["B", "b"] }, type: "s" },
    { code: "KeyN", layout: { ru: ["Т", "т"], en: ["N", "n"] }, type: "s" },
    { code: "KeyM", layout: { ru: ["Ь", "ь"], en: ["M", "m"] }, type: "s" },
    { code: "Comma", layout: { ru: ["Б", "б"], en: ["<", ","] }, type: "s" },
    { code: "Period", layout: { ru: ["Ю", "ю"], en: [">", "."] }, type: "s" },
    { code: "Slash", layout: { ru: [",", "."], en: ["?", "/"] }, type: "s" },
    { code: "ShiftRight", label: "Shift", type: "r" },
    { code: "ArrowUp", label: "▲", type: "s" },
    { code: "End", label: "End", type: "s" }
  ],
  [
    { code: "ControlLeft", label: "Ctrl", type: "r" },
    { code: "MetaLeft", label: "⊞", type: "r" },
    { code: "AltLeft", label: "Alt", type: "r" },
    {
      code: "Space",
      layout: { ru: ["&nbsp;", "&nbsp;"], en: ["&nbsp;", "&nbsp;"] },
      type: "r"
    },
    { code: "AltRight", label: "Alt", type: "r" },
    { code: "ControlRight", label: "Ctrl", type: "r" },
    { code: "ArrowLeft", label: "◄", type: "s" },
    { code: "ArrowDown", label: "▼", type: "s" },
    { code: "ArrowRight", label: "►", type: "s" }
  ]
];

const crossBrowserCode = code => ({ OSLeft: "MetaLeft" }[code] || code);

const language = localStorage.getItem("keyboard-lang") || "en";

let capsLocked = false;
let shiftPressed = { left: false, right: false };

/* ********* CREATE KEYBOARD ********* */

const createElementWithClass = (el, ...classes) => {
  const newEl = document.createElement(el);
  newEl.classList.add(...classes);
  return newEl;
};

const addGlyphs = ({ code, layout, label }) => {
  const pictContainer = createElementWithClass("div", "pict-container");
  pictContainer.setAttribute("id", code);

  const fragment = document.createDocumentFragment();

  if (layout) {
    Object.keys(layout).forEach(lang => {
      const langElement = createElementWithClass("div", lang);
      pictContainer.classList.add("printable");

      langElement.innerHTML = `
      <span class='${lang}-upper'>${layout[lang][0]}</span>
      <span class='${lang}-lower'>${layout[lang][1]}</span>
      `;
      fragment.append(langElement);
    });
  }

  if (label) {
    const labelElement = createElementWithClass("div", "label");

    labelElement.innerHTML = label;
    fragment.append(labelElement);
  }

  pictContainer.append(fragment);

  return pictContainer;
};

const keyboard = createElementWithClass("div", "keyboard", language, "lower");

const textarea = createElementWithClass("textarea", "keyboard-text");
textarea.addEventListener("keydown", e => e.preventDefault());

keyboard.append(textarea);

mainKeys.forEach(row => {
  const keyboardRow = createElementWithClass("div", "row");

  row.forEach(({ type, ...rest }) => {
    const keyContainer = createElementWithClass(
      "div",
      "key-container",
      type === "s" ? "key-square" : "key-rectangle"
    );
    type === "r" && keyContainer.setAttribute("id", `layout-${rest.code}`);

    keyContainer.append(addGlyphs(rest));

    keyboardRow.append(keyContainer);
  });
  keyboard.append(keyboardRow);
});

document.body.append(keyboard);

/* ********* KEY HANDLERS ********* */

const changeLayout = () => {
  keyboard.classList.toggle("en");
  keyboard.classList.toggle("ru");
  localStorage.setItem(
    "keyboard-lang",
    localStorage.getItem("keyboard-lang") === "ru" ? "en" : "ru"
  );
};

const toggleShift = (leftRight, on) => {
  if (!on && !shiftPressed.left && !shiftPressed.right) return;
  shiftPressed[leftRight] = on;

  if (on && shiftPressed["left"] && shiftPressed["right"]) return;
  if (!on && (shiftPressed["left"] || shiftPressed["right"])) return;

  keyboard.classList.toggle("upper");
  keyboard.classList.toggle("lower");
};

const toggleCapsLock = () => {
  const capsKey = keyboard.querySelector("#CapsLock");
  capsKey.classList.toggle("key-lock");
  capsLocked = !capsLocked;
  keyboard.classList.toggle("upper");
  keyboard.classList.toggle("lower");
};

const handlerPrintKey = pictContainer => {
  let text;
  switch (pictContainer.id) {
    case "Space":
      text = " ";
      break;
    case "Tab":
      text = "\t";
      break;
    case "Enter":
      text = "\n";
      break;
    default:
      text = pictContainer.innerText;
  }

  let { selectionStart, selectionEnd, value } = textarea;
  const edited =
    value.slice(0, selectionStart) + text + value.slice(selectionEnd);
  textarea.value = edited;
  textarea.selectionStart = selectionStart + 1;
  textarea.selectionEnd = selectionStart + 1;
};

const handleRemoveKeys = code => {
  let { selectionStart, selectionEnd, value } = textarea;

  if (selectionStart === selectionEnd) {
    switch (code) {
      case "Backspace":
        selectionStart && selectionStart--;
        break;
      case "Delete":
        selectionEnd++;
        break;
    }
  }
  const removed = value.slice(0, selectionStart) + value.slice(selectionEnd);
  textarea.value = removed;
  textarea.selectionStart = selectionStart;
  textarea.selectionEnd = selectionStart;
};

const handleArrowKeys = (code) => {

  let { selectionStart, value } = textarea;
  let newPosition;

  if (code === "ArrowLeft") {
    newPosition = selectionStart && selectionStart - 1
  }

  if (code === "ArrowRight") {
    newPosition = selectionStart + 1
  }

  let targetStart
  if (code === "ArrowUp") {
    const targetEnd = value.lastIndexOf('\n', selectionStart - 1);
    if (targetEnd === -1) {
      newPosition = selectionStart
    } else {
      targetStart = value.lastIndexOf('\n', targetEnd - 1);
      const shift = selectionStart - targetEnd
      if (shift > targetEnd - targetStart) {
        newPosition = targetEnd
      } else {
        newPosition = targetStart + shift;
      }
    }
  }

  if (code === "ArrowDown") {
    let shift
    const targetStart = value.indexOf('\n', selectionStart)
    if (selectionStart === 0) {
      shift = 0
      newPosition = targetStart + 1
    } else {
      shift = selectionStart - value.lastIndexOf('\n', selectionStart - 1) + 1
      if (targetStart === -1) {
        newPosition = selectionStart
      } else {
        let targetEnd = value.indexOf('\n', targetStart + 1)
        if (targetEnd === -1) targetEnd = value.length
        targetLength = targetEnd - targetStart
        if (shift > targetLength) {
          newPosition = targetEnd
        } else {
          newPosition = targetStart + shift - 1
        }
      }
    }
  }

  textarea.selectionStart = textarea.selectionEnd = newPosition
}

const handleDown = code => {
  // handle print keys
  if (!code) return

  const keyElement = keyboard.querySelector(`#${code}`);
  if (!keyElement) return;
  const ripple = createElementWithClass('div', 'ripple')
  ripple.addEventListener('animationend', e => e.target.remove())
  keyElement.parentElement.prepend(ripple);

  if (keyElement.classList.contains("printable")) {
    handlerPrintKey(keyElement);
  }

  //handle modifier keys
  if (code === "MetaLeft") {
    changeLayout();
  }

  if (code === "ShiftLeft" || code === "ShiftRight") {
    toggleShift(code.slice(5).toLowerCase(), true);
  }

  if (code === "CapsLock") {
    toggleCapsLock();
  }

  //handle navigation keys
  if (code === "PageUp" || code === "PageDown") {
    textarea.scrollBy(0, textarea.clientHeight * (code === "PageUp" ? -1 : 1));
  }

  if (code === "Home" || code === "End") {
    let { selectionStart, value } = textarea;
    if (code === "Home") {
      const position = value.lastIndexOf("\n", selectionStart - 1);
      textarea.selectionStart = textarea.selectionEnd =
        (position === -1 ? 0 : position + 1);
    }
    if (code === "End") {
      textarea.selectionStart = textarea.selectionEnd = value.indexOf(
        "\n",
        selectionStart
      );
    }
  }

  if (code === "ArrowLeft" || code === "ArrowRight" || code === "ArrowUp" || code === "ArrowDown") {
    handleArrowKeys(code)
  }

  //handle remove keys
  if (code === "Backspace" || code === "Delete") {
    handleRemoveKeys(code);
  }
};

const handleUp = code => {
  if (code === "ShiftLeft" || code === "ShiftRight") {
    toggleShift(code.slice(5).toLowerCase(), false);
  }
};

/* ********* EVENT LISTENERS ********* */

const addDropHandlers = (lockedShift, keyElement) => {
  function dropHandler({ code: dropKeyCode }) {
    keyElement.classList.remove("key-lock");
    if (dropKeyCode === 'ShiftLeft' || dropKeyCode === 'ShiftRight') {
      handleDown(lockedShift)
    } else {
      handleUp(lockedShift);
    }

    document.removeEventListener("mousedown", dropHandler);
    document.removeEventListener("keydown", dropHandler);
  };

  document.addEventListener("mousedown", dropHandler, {
    once: true
  });

  document.addEventListener("keydown", dropHandler, {
    once: true
  });
};

document.addEventListener("keydown", e => {
  const code = crossBrowserCode(e.code);
  handleDown(code);
});

document.addEventListener("keyup", e => {
  const code = crossBrowserCode(e.code);
  handleUp(code);
});

document.addEventListener("mousedown", e => {
  const keyElement = e.target;

  const code = keyElement.id;
  if (code === "ShiftLeft" || code === "ShiftRight") {
    if (shiftPressed.left || shiftPressed.right) return;
    keyElement.classList.add("key-lock");
    handleDown(code);

    addDropHandlers(code, keyElement);

    return;
  }

  handleDown(code);
});

document.addEventListener("mouseup", e => {
  textarea.focus();
});

window.addEventListener("blur", e => {
  shiftPressed.left = shiftPressed.right = false;
});

window.addEventListener("focus", e => {
  if (capsLocked) {
    keyboard.classList.add("upper");
    keyboard.classList.remove("lower");
  } else {
    keyboard.classList.remove("upper");
    keyboard.classList.add("lower");
  }
});

const right = document.getElementsByClassName("right");
const empty = document.getElementsByClassName("empty");
const encripted = document.getElementsByClassName("encripted");
const encriptedText = document.getElementsByClassName("encripted-text");

const textArea = document.querySelector("textarea");

const copyButton = document.getElementsByClassName("copy-button");
const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");

let encrypt = true;

const crypValue = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

textArea.addEventListener("keyup", (e) => {
  if (e.target.value.length > 0) {
    empty[0].style.display = "none";
    encripted[0].style.display = "flex";
    encriptedText[0].textContent = encrypt
      ? onEncrypt(e.target.value)
      : onDecrypt(e.target.value);
    return;
  }
  empty[0].style.display = "block";
  encripted[0].style.display = "none";
});

textArea.addEventListener("keydown", (e) => {
  if (e.target.value.length > 0) {
    empty[0].style.display = "none";
    encripted[0].style.display = "flex";
    encriptedText[0].textContent = encrypt
      ? onEncrypt(e.target.value)
      : onDecrypt(e.target.value);
    return;
  }
  empty[0].style.display = "block";
  encripted[0].style.display = "none";
});

encryptButton.addEventListener("click", () => {
  encrypt = true;
  encriptedText[0].textContent = onEncrypt(textArea.value);
  encryptButton.classList.toggle("activated");
  decryptButton.classList.toggle("activated");
});

decryptButton.addEventListener("click", () => {
  encrypt = false;
  encriptedText[0].textContent = onDecrypt(textArea.value);
  decryptButton.classList.toggle("activated");
  encryptButton.classList.toggle("activated");
});

copyButton[0].addEventListener("click", () => {
  navigator.clipboard.writeText(encriptedText[0].textContent);
});

function encrypt_decrypt(str, option) {
  const value = option === "encrypt" ? 0 : 1;
  const auxValue = option === "encrypt" ? 1 : 0;
  for (let i = 0; crypValue.length > i; i++) {
    if (str.includes(crypValue[i][value])) {
      str = str.replaceAll(crypValue[i][value], crypValue[i][auxValue]);
    }
  }
  return str;
}

function onEncrypt(str) {
  let aux = str
    .split(" ")
    .map((e) => encrypt_decrypt(e, "encrypt"))
    .join(" ");
  return aux;
}

function onDecrypt(str) {
  let aux = str
    .split(" ")
    .map((e) => encrypt_decrypt(e, "decrypt"))
    .join(" ");
  return aux;
}

const inputText = document.querySelector(".input-text");
const mensage = document.querySelector(".mensage");

function btnEncriptar() {
  const textoEncriptado = encriptar(inputText.value);
  mensage.value = textoEncriptado;
  mensage.style.backgroundImage = "none";

  if (textoEncriptado == false) {
    alert("Você precisa digitar o texto antes.");
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(inputText.value);
  mensage.value = textoDesencriptado;

  if (textoDesencriptado == false) {
    alert("Você precisa digitar o texto antes.");
  }
}

function desencriptar(stringDescriptada) {
  let matrizCodigo = [
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  stringDescriptada = stringDescriptada;

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptada.includes(matrizCodigo[i][0])) {
      stringDescriptada = stringDescriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringDescriptada;
}

function btnCopy() {
  let textCopy = mensage;
  textCopy.select();
  alert("Texto copiado para a área de transferência!!");
  //selectText.setSelectionRange(0, 99999); usado para seleção nos dispotivos móveis
}

function btnClear() {
  let clearText = document.querySelector(".mensage");
  clearText.select();
  inputText.value = "";
  document.querySelector(".mensage").style.display = "block";
  inputText.value = "";
  inputText.focus();
  mensage.style.backgroundImage = "";
  document.querySelector(".mensage").value = "";

  if (clearText == false) {
    alert("Opa! Você ainda não escreveu nenhuma mensagem");
  }
}
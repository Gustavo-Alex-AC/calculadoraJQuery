const buttons = $(".btn"); // vector de buttons (verificar html)
const inputElement = $(".input"); // button do input

// fazer un loop para todos os buttons e adicionar um event de click
$.each(buttons, (i, button) => {
  $(button).on("click", () => {
    const valorButton = $(button).text();
    // verificar se já tem um sinal no input para evitar 2 sinais seguidos
    // escreva o codigo aqui

    // logica da calculadora
    if (valorButton === "AC") {
      inputElement.val("");
    } else if (valorButton === "DEL") {
      inputElement.val((i, valorCorrente) => valorCorrente.slice(0, -1));
    } else if (valorButton === "=") {
      inputElement.val((i, valorCorrente) =>
        valorCorrente === "" ? "" : eval(valorCorrente)
      );
    } else {
      inputElement.val((i, valorCorrente) => valorCorrente + valorButton);
    }
  });
});

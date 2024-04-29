const buttons = $(".btn");
const inputElement = $(".input");

$.each(buttons, (i, button) => {
  $(button).on("click", () => {
    // verificar se já existe um sinal

    // logica da calculadora
    if ($(button).text() === "AC") {
      inputElement.val("");
    } else if ($(button).text() === "DEL") {
      inputElement.val((i, valorCorrente) => valorCorrente.slice(0, -1));
    } else {
      inputElement.val((i, valorCorrente) => valorCorrente + $(button).text());
    }
  });
});

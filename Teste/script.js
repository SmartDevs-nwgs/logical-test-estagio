const renderButton = document.getElementById("renderButton");
const outputContainer = document.getElementById("outputContainer");
let renderedContent = "";

renderButton.addEventListener("click", () => {
  const total = parseInt(document.getElementById("total").value);
  const divisor = parseInt(document.getElementById("divisor").value);

  if (isNaN(total) || isNaN(divisor) || total <= 0 || divisor <= 0) {
    outputContainer.style.display = "block";
    outputContainer.innerHTML =
      "Por favor, insira valores válidos maiores que zero.";
    return;
  }

  // Limpa o container de saída antes de cada renderização
  outputContainer.innerHTML = "";

  // Realiza a renderização condicional
  renderedContent = "";
  for (let i = 1; i <= divisor; i++) {
    const result = total / i;
    renderedContent += `Divisão ${i}: ${result}<br>`;
  }

  outputContainer.innerHTML = renderedContent;
});

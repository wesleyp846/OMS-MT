// src/main.ts

// 1. Selecionar os elementos do HTML
// Usamos 'as HTMLInputElement' e 'as HTMLFormElement' para dizer ao TypeScript
// qual é o tipo exato de cada elemento, o que nos dá autocompletar e segurança de tipo.
const nameForm = document.querySelector<HTMLFormElement>('#name-form')!;
const nameInput = document.querySelector<HTMLInputElement>('#name-input')!;
const submitButton = document.querySelector<HTMLButtonElement>('#submit-button')!;

submitButton.addEventListener('click', (event) => {
  // É uma boa prática usar o event.preventDefault() dentro do listener de um botão de formulário
  event.preventDefault();
  console.log('Botão clicado');
  // Sua lógica aqui...
});

// O '!' no final é um "Non-null Assertion Operator". 
// Ele diz: "TypeScript, eu tenho certeza que este elemento existe na página".
// Usamos isso aqui porque sabemos que acabamos de criar os elementos no HTML.

// 2. Adicionar um ouvinte de evento ao formulário
nameForm.addEventListener('submit', (event) => {
  // Previne o comportamento padrão do formulário, que é recarregar a página
  event.preventDefault();

  // Pega o valor do campo de input e remove espaços em branco do início e do fim
  const userName = nameInput.value.trim();

  // Verifica se o nome não está vazio
  if (userName) {
    // Exibe um alerta de sucesso
    alert(`Obrigado por se inscrever, ${userName}!`);

    // Limpa o campo de input após o envio
    nameInput.value = '';

    // Opcional: Foca no campo de input novamente
    nameInput.focus();
  } else {
    // Exibe um alerta de erro se o campo estiver vazio
    alert('Por favor, digite um nome válido.');
  }
});
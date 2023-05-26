const nomes = [ "Ilso", "Ediana", "Eliana", "Paulo","carlinho", "Leny", "Beto", "Sergio" ];
const storageKey = "proximaPessoa";
const nomeAtualEl = document.getElementById("nome-atual");
const nomeProximoEl = document.getElementById("nome-proximo");

function atualizarEscalonamento() {
  const hoje = new Date();
  const proximaData = new Date(hoje);
  proximaData.setDate(hoje.getDate() + 1);
  const proximaPessoaIndex = proximaData.getDate() % nomes.length;

  const nomeAtual = localStorage.getItem(storageKey) || nomes[nomes.length - 1];
  const nomeProximo = nomes[proximaPessoaIndex];

  nomeAtualEl.textContent = `Hoje: ${nomeAtual}`;
  nomeProximoEl.textContent = `Próximo: ${nomeProximo}`;

  localStorage.setItem(storageKey, nomeProximo);
}

// Atualiza o escalonamento à meia-noite
setInterval(() => {
  const agora = new Date();
  if (agora.getHours() === 0 && agora.getMinutes() === 0 && agora.getSeconds() === 0) {
    atualizarEscalonamento();
  }
}, 1000);


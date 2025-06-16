const nomeInput = document.querySelector(".nomes");
const sobrenomeInput = document.querySelector(".sobrenomes");
const enderecoInput = document.querySelector(".enderecos");
const telefoneInput = document.querySelector(".telefones");

const btnIncluir = document.querySelector(".incluir");
const btnEditar = document.querySelector(".editar");
const btnSalvar = document.querySelector(".salvar");
const btnCancelar = document.querySelector(".cancelar");
const btnExcluir = document.querySelector(".excluir");

const btnPrimeiro = document.querySelector(".primeiro");
const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");
const btnUltimo = document.querySelector(".ultimo");

let contatos = [];
let indiceAtual = -1;

function preencherFormulario(contato) {
  nomeInput.value = contato.nome;
  sobrenomeInput.value = contato.sobrenome;
  enderecoInput.value = contato.endereco;
  telefoneInput.value = contato.telefone;
}

function limparFormulario() {
  nomeInput.value = "";
  sobrenomeInput.value = "";
  enderecoInput.value = "";
  telefoneInput.value = "";
}

btnIncluir.addEventListener("click", () => {
  const novoContato = {
    nome: nomeInput.value,
    sobrenome: sobrenomeInput.value,
    endereco: enderecoInput.value,
    telefone: telefoneInput.value
  };
  contatos.push(novoContato);
  indiceAtual = contatos.length - 1;
  alert("Contato incluído!");
});

btnEditar.addEventListener("click", () => {
  nomeInput.disabled = false;
  sobrenomeInput.disabled = false;
  enderecoInput.disabled = false;
  telefoneInput.disabled = false;
  alert("Campos liberados para edição.");
});

btnSalvar.addEventListener("click", () => {
  if (indiceAtual >= 0) {
    contatos[indiceAtual] = {
      nome: nomeInput.value,
      sobrenome: sobrenomeInput.value,
      endereco: enderecoInput.value,
      telefone: telefoneInput.value
    };
    alert("Contato atualizado.");
  } else {
    alert("Nenhum contato selecionado para salvar.");
  }
});

btnCancelar.addEventListener("click", () => {
  limparFormulario();
  alert("Edição cancelada.");
});

btnExcluir.addEventListener("click", () => {
  if (indiceAtual >= 0 && confirm("Deseja realmente excluir este contato?")) {
    contatos.splice(indiceAtual, 1);
    if (contatos.length === 0) {
      indiceAtual = -1;
      limparFormulario();
    } else {
      indiceAtual = Math.max(0, indiceAtual - 1);
      preencherFormulario(contatos[indiceAtual]);
    }
    alert("Contato excluído.");
  }
});

btnPrimeiro.addEventListener("click", () => {
  if (contatos.length > 0) {
    indiceAtual = 0;
    preencherFormulario(contatos[indiceAtual]);
  }
});

btnAnterior.addEventListener("click", () => {
  if (indiceAtual > 0) {
    indiceAtual--;
    preencherFormulario(contatos[indiceAtual]);
  }
});

btnProximo.addEventListener("click", () => {
  if (indiceAtual < contatos.length - 1) {
    indiceAtual++;
    preencherFormulario(contatos[indiceAtual]);
  }
});

btnUltimo.addEventListener("click", () => {
  if (contatos.length > 0) {
    indiceAtual = contatos.length - 1;
    preencherFormulario(contatos[indiceAtual]);
  }
});

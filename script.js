let valor = 0;

let i = 0;
while (i <= 10) {
  // console.log(valor);
  valor += 10;

  // passo = passo + 1;
  // passo += 1;  
  i ++;
}

let arquivos = ['imagem' , 'imagem', 'imagem', 'imagem', 'imagem.png', 'imagem'];
let arquivosCorrigidos = [];

for (let arquivo of arquivos) {
  if (!arquivo.endsWith('.png')) {
    arquivo += '.png';
    console.log('Foi necessário adicionar a extensão no fim!')
  }

  arquivosCorrigidos.push(arquivo);
}

let alunos = [
  {
    nome: 'Fulano',
    idade: 20,
    vivo: true,
  },
  {
    nome: 'Ciclano',
    idade: 22,
    vivo: true,
  },
  {
    nome: 'Beltrano',
    idade: 23,
    vivo: true,
  },
  {
    nome: 'João',
    idade: 16,
    vivo: true,
  },
  {
    nome: 'Maria',
    idade: 18,
    vivo: true,
  },
]

for (let aluno of alunos) {
  if (aluno.idade >= 18) {
    console.log(`${aluno.nome} pode consumir álcool.`);
  }
}

for (let i in alunos) {
  if (i % 2 == 0) {
    console.log(`Indíce: ${i}`);
    console.log(`Valor: Objeto de ${alunos[i].nome}`);
  }
}

let joaozinho = {
  nome: 'Joaozinho',
  idade: 13,
  namorada: undefined,
  gatos: 2
}

console.log(joaozinho);
console.log(joaozinho['nome']);
console.log(joaozinho.nome);

for (let propriedade in joaozinho) {
  console.log(propriedade);
  console.log(joaozinho[propriedade]);
}
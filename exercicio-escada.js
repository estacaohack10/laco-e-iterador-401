/*
Faça um programa que receba a quantidade de degraus que uma ecada tem e desenhe essa escada no console.

Exemplo:
#
##
###
####
#####

Bônus:
Pergunte para o usuário qual o caracter que ele gostaria de usar para fazer a escada (substitui o # pela entrada do usuário). 
*/

let tamanhoEscada = Number(prompt('Qual o tamanho da sua escada?'));
let i = 0;
let caractere = '#';
let escada = '';
let materialDaEscada = prompt('Qual o material da sua escada?');

if (materialDaEscada) {
  caractere = materialDaEscada;
}

while (isNaN(tamanhoEscada) || tamanhoEscada === 0) {
  tamanhoEscada = Number(prompt('Qual o tamanho da sua escada? Digite somente números.'));
}

while (i < tamanhoEscada) {
  escada += caractere;
  console.log(escada);
  i++;
}
let pontos = Number(prompt("Quantos pontos?"))
let classificação = ""
let anos = Number(prompt("Quantos anos?"))

if ( pontos <=99) { classificação = " Bronze"}

else if ( pontos <=499) { classificação = "Prata"}
else if ( pontos <=999) { classificação = "Ouro"}
else if ( pontos > 1000 && anos >1) { classificação = "Diamante"}

console.log ( `a sua classificação é de ${classificação}`)
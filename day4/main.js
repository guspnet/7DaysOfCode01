let contador = 0;
num = getRandomIntInclusive(0, 10);

while(contador < 3) {
    let numcaractere = prompt(`Tentativa ${contador +1} de 3. Escolhi um número inteiro de 0 a 10 aleatoriamente, tente adivinhar qual número eu escolhi.`);

    if(num == numcaractere){
        alert(`Prabéns miséravi! Acertou na tentativa número ${contador +1}. Eu tinha escolhido o número ${num} mesmo, como sabia?`);
        break;
    } 
    if(contador === 2) {
        alert(`É jovem você errou as três tentativas, o número era o ${num}. Tente novamente.`);
    }
    
    contador ++;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
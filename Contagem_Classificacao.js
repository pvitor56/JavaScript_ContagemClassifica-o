var dupla = window.prompt("Quantidade de pessoas para o Baile")
for (let contador = 1; contador <= dupla; contador = contador + 1) {
    if (contador % 2 == 0 && contador != 0){
       console.log(contador + " - Você e seu par estão aptos para participar - BEM VINDO AO BAILE")
    } else if  (contador % 2 != 0) {
       console.log(contador + " - Você não possui um par - infelizmente não poderá entrar no Baile!")
    } else { 
       console.log(contador + '\t')
    }
}
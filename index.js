let Nome = 'Pikachu'
let Xp = 10.000

if(Xp >= 8.000 && Xp <= 10.000 && Nome === 'Pikachu' ) {
    console.log("O Herói Pikachu está no nível Platina")
} else if (Xp >= 6.000 && Xp <= 7.999 && Nome === 'Charizard') {
    console.log("O Herói Charizard está no nível Ouro")
} else if (Xp >= 3.500 && Xp <= 5.999 && Nome === 'Pidgey') {
    console.log("O Herói Pidgey está no nível Prata")
} else if (Xp >= 2.000 && Xp <= 3.499 && Nome === 'Bulbasaur') {
    console.log("O Herói Bulbasaur está no nível Bronze")
} else if (Xp >= 0.000 && Xp <= 1.999 && Nome === 'Miau') {
    console.log("O Herói Miau está no nível Ferro")
} else {
    console.log("Não Encontramos o seu Heroi favorito !")
}
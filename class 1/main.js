class pokemon {
    constructor(name, attack, defense, hp ,luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        
    }

    attackPockemon(pokemon){
        pokemon.hp -= this.attack
    }
}

let Patatartiné = new pokemon("Patatartiné", 1000, 1000, 10000)
let Quoicouflop = new pokemon("Quoicouflop",1111 ,900, 10000)

console.log(Patatartiné)
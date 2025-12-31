const dataBase = require('./database.json')
class personagem { // Classe com letra maiúscula (boa prática)
    constructor(name, power, tipo, level) {
        this.name = name
        this.power = power
        this.tipo = tipo // Agora aceita o tipo por parâmetro
        this.level = level 
    }
    atacar() {
        return `O ${this.tipo} ${this.name}! Com o nível ${this.level}, atacou com ${this.power}`
    }
}
function Luta(heroData, vilaoData) {
    if (heroData.level > vilaoData.level) {
        return `${heroData.name} venceu o vilão ${vilaoData.name} com o poder de ${heroData.power}!`
    } else {
        return `${vilaoData.name} venceu o herói ${heroData.name} com o poder de ${vilaoData.power}!`
    }   
}

function main() {
let heroisDisponiveis = [...heroData]
let vilaoDisponiveis = [...vilaoData]
while (heroisDisponiveis.length > 0 && vilaoDisponiveis.length > 0) {

    let indexHeroi = Math.floor(Math.random() * heroisDisponiveis.length)
    let indexVilao = Math.floor(Math.random() * vilaoDisponiveis.length)    

    let dadosHeroi = heroisDisponiveis.splice(indexHeroi, 1)[0]
    let dadosVilao = vilaoDisponiveis.splice(indexVilao, 1)[0]

    const heroi = new personagem(dadosHeroi.name, dadosHeroi.power, dadosHeroi.tipo, dadosHeroi.level)
    const vilao = new personagem(dadosVilao.name, dadosVilao.power, dadosVilao.tipo, dadosVilao.level)
    console.log(heroi.atacar())
    console.log(vilao.atacar())
    console.log(Luta(heroi, vilao))
    console.log('-------------------')
}
}
main()
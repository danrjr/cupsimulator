const _ = require('lodash')
arr0 = [] 
arr1 = [] 
arr2 = [] 
arr3 = [] 
cards0 = [] 
cards1 = [] 
cards2 = [] 
cards3 = [] 
 
function flag(country){
    return `<i class="flag flag-${country}"></i>`
}
 
function geraGolsForte(array){ 
    while (array.length < 3){ 
        var gols=[0,1,2,3,4,5,6,7,8]
        var golsponderados = [0.2, 0.4, 2, 3.5, 3.5, 0.1, 0.1, 0.1, 0.1]
        var totalponderado = eval(golsponderados.join("+"))
        var ponderacao = new Array()
        var golatual = 0;
    
        while (golatual<gols.length){ //step through each fruit[] element
            for (i=0; i<golsponderados[golatual]; i++)
                ponderacao[ponderacao.length]=gols[golatual]
            golatual++
        }
        var randomnumber=Math.floor(Math.random()*totalponderado)

         array.push(ponderacao[randomnumber]) 
    } 
} 

function geraGolsMed(array){ 
    while (array.length < 3){ 
        var gols=[0,1,2,3,4]
        var golsponderados = [4.0,4.0,1.0,0.5,0.5]
        var totalponderado = eval(golsponderados.join("+"))
        var ponderacao = new Array();
        var golatual = 0;
    
        while (golatual<gols.length){ //step through each fruit[] element
            for (i=0; i<golsponderados[golatual]; i++)
                ponderacao[ponderacao.length]=gols[golatual]
            golatual++
        }
        var randomnumber=Math.floor(Math.random()*totalponderado)

         array.push(ponderacao[randomnumber]) 
    }
}

function geraGolsFraco(array){ 
    while (array.length < 3){ 
        var gols=[0,1,2,3]
        var golsponderados = [5.2,4.3,0.3, 0.2]
        var totalponderado = eval(golsponderados.join("+"))
        var ponderacao = new Array();
        var golatual = 0;
    
        while (golatual<gols.length){ //step through each fruit[] element
            for (i=0; i<golsponderados[golatual]; i++)
                ponderacao[ponderacao.length]=gols[golatual]
            golatual++
        }
        var randomnumber=Math.floor(Math.random()*totalponderado)

         array.push(ponderacao[randomnumber]) 
    } 
} 
 
function geraCartoes(array){ 
    while (array.length < 3){ 
        array.push(Math.floor(Math.random() * (3 - 0) ) + 0) 
    } 
} 
 
geraGolsForte(arr0) 
geraGolsMed(arr1) 
geraGolsForte(arr2) 
geraGolsMed(arr3) 
geraCartoes(cards0) 
geraCartoes(cards1) 
geraCartoes(cards2) 
geraCartoes(cards3) 
 
//console.log(arr) 
//console.log(cards) 
 
let grupoA = [ 
    {nome: 'Espanha', jogos:3, pontos: [], pontuacao_final:0, gols: arr0, gp: [], gc: [], saldo: 0, cartoes:cards0, soma_gols: 0, soma_cartoes: 0, soma_gc: 0, v: 0, e: 0, d: 0}, 
    {nome: 'Costa Rica', jogos:3, pontos: [], pontuacao_final:0, gols: arr1, gp: [], gc: [], saldo: 0, cartoes:cards1, soma_gols: 0, soma_cartoes: 0,soma_gc: 0, v: 0, e: 0, d: 0}, 
    {nome: 'Alemanha', jogos:3, pontos: [], pontuacao_final:0, gols: arr2, gp: [], gc: [], saldo: 0, cartoes:cards2, soma_gols: 0, soma_cartoes: 0,soma_gc: 0, v: 0, e: 0, d: 0}, 
    {nome: 'Japão', jogos:3, pontos: [], pontuacao_final:0, gols: arr3, gp: [], gc: [], saldo: 0, cartoes:cards3, soma_gols: 0, soma_cartoes: 0,soma_gc: 0, v: 0, e: 0, d: 0}, 
] 
 
 
console.log(grupoA[0].gols); 
console.log(grupoA[1].gols); 
console.log(grupoA[2].gols); 
console.log(grupoA[3].gols); 
/* 
console.log('//////////////') 
console.log(grupoA[0].cartoes); 
console.log(grupoA[1].cartoes); 
console.log(grupoA[2].cartoes); 
console.log(grupoA[3].cartoes); 
console.log('//////////////')*/ 
 
//SOMA GOLS 
let soma = grupoA.map(g => g.gols.reduce((acc, next) => acc+=next, 0)); 
grupoA[0]['soma_gols'] = soma[0] 
grupoA[1]['soma_gols'] = soma[1] 
grupoA[2]['soma_gols'] = soma[2] 
grupoA[3]['soma_gols'] = soma[3] 
 
//SOMA CARTOES 
let cartoes = grupoA.map(g => g.cartoes.reduce((acc, next) => acc+=next, 0)); 
grupoA[0]['soma_cartoes'] = cartoes[0] 
grupoA[1]['soma_cartoes'] = cartoes[1] 
grupoA[2]['soma_cartoes'] = cartoes[2] 
grupoA[3]['soma_cartoes'] = cartoes[3] 
 
 
//SALDO DE GOLS 
grupoA[0]['gp'] = soma[0] 
grupoA[1]['gp'] = soma[1] 
grupoA[2]['gp'] = soma[2] 
grupoA[3]['gp'] = soma[3] 
//console.log(grupoA) 
 
//GOLS CONTRA  
let gol1_0 = grupoA[1]['gols'][0] 
let gol2_0 = grupoA[2]['gols'][1] 
let gol3_0 = grupoA[3]['gols'][2] 
 
let somagc_0 = []; 
somagc_0.push(gol1_0) 
somagc_0.push(gol2_0) 
somagc_0.push(gol3_0) 
////////////////////////////////// 
let gol1_1 = grupoA[0]['gols'][0] 
let gol2_1 = grupoA[2]['gols'][2] 
let gol3_1 = grupoA[3]['gols'][1] 
 
let somagc_1 = []; 
somagc_1.push(gol1_1) 
somagc_1.push(gol2_1) 
somagc_1.push(gol3_1) 
////////////////////////////////// 
let gol1_2 = grupoA[0]['gols'][1] 
let gol2_2 = grupoA[1]['gols'][2] 
let gol3_2 = grupoA[3]['gols'][0] 
 
let somagc_2 = []; 
somagc_2.push(gol1_2) 
somagc_2.push(gol2_2) 
somagc_2.push(gol3_2) 
//////////////////////////////// 
 
let gol1_3 = grupoA[0]['gols'][2] 
let gol2_3 = grupoA[1]['gols'][1] 
let gol3_3 = grupoA[2]['gols'][0] 
 
let somagc_3 = []; 
somagc_3.push(gol1_3) 
somagc_3.push(gol2_3) 
somagc_3.push(gol3_3) 
 
grupoA[0]['gc'] = somagc_0 
grupoA[1]['gc'] = somagc_1 
grupoA[2]['gc'] = somagc_2 
grupoA[3]['gc'] = somagc_3 
 
let somaGolsContra = grupoA.map(g => g.gc.reduce((acc, next) => acc += next ), 0) 
 
grupoA[0]['soma_gc'] = somaGolsContra[0] 
grupoA[1]['soma_gc'] = somaGolsContra[1] 
grupoA[2]['soma_gc'] = somaGolsContra[2] 
grupoA[3]['soma_gc'] = somaGolsContra[3] 
 
//console.log(grupoA); 
 
//SALDO DE GOLS  
let saldo = grupoA.map(g => g.soma_gols - g.soma_gc); 
grupoA[0]['saldo'] = saldo[0] 
grupoA[1]['saldo'] = saldo[1] 
grupoA[2]['saldo'] = saldo[2] 
grupoA[3]['saldo'] = saldo[3] 
 

//SOMA_PONTOS
if(grupoA[0]['gols'][0] > grupoA[1]['gols'][0]){
    grupoA[0]['pontos'].push(3)
    grupoA[0]['v']++
}
if(grupoA[0]['gols'][1] > grupoA[2]['gols'][1]){
    grupoA[0]['pontos'].push(3)
    grupoA[0]['v']++
}
if(grupoA[0]['gols'][2] > grupoA[3]['gols'][2]){
    grupoA[0]['pontos'].push(3)
    grupoA[0]['v']++
}

if(grupoA[0]['gols'][0] == grupoA[1]['gols'][0]){
    grupoA[0]['pontos'].push(1)
    grupoA[0]['e']++
}
if(grupoA[0]['gols'][1] == grupoA[2]['gols'][1]){
    grupoA[0]['pontos'].push(1)
    grupoA[0]['e']++
}
if(grupoA[0]['gols'][2] == grupoA[3]['gols'][2]){
    grupoA[0]['pontos'].push(1)
    grupoA[0]['e']++
}

if(grupoA[0]['gols'][0] < grupoA[1]['gols'][0]){
    grupoA[0]['pontos'].push(0)
    grupoA[0]['d']++
}
if(grupoA[0]['gols'][1] < grupoA[2]['gols'][1]){
    grupoA[0]['pontos'].push(0)
    grupoA[0]['d']++
}
if(grupoA[0]['gols'][2] < grupoA[3]['gols'][2]){
    grupoA[0]['pontos'].push(0)
    grupoA[0]['d']++
}
/////////////////////////////////////////////////////////////////

if(grupoA[1]['gols'][0] > grupoA[0]['gols'][0]){
    grupoA[1]['pontos'].push(3)
    grupoA[1]['v']++
}
if(grupoA[1]['gols'][1] > grupoA[2]['gols'][2]){
    grupoA[1]['pontos'].push(3)
    grupoA[1]['v']++
}
if(grupoA[1]['gols'][2] > grupoA[3]['gols'][1]){
    grupoA[1]['pontos'].push(3)
    grupoA[1]['v']++
}

if(grupoA[1]['gols'][0] == grupoA[0]['gols'][0]){
    grupoA[1]['pontos'].push(1)
    grupoA[1]['e']++
}
if(grupoA[1]['gols'][1] == grupoA[2]['gols'][2]){
    grupoA[1]['pontos'].push(1)
    grupoA[1]['e']++
}
if(grupoA[1]['gols'][2] == grupoA[3]['gols'][1]){
    grupoA[1]['pontos'].push(1)
    grupoA[1]['e']++
}

if(grupoA[1]['gols'][0] < grupoA[0]['gols'][0]){
    grupoA[1]['pontos'].push(0)
    grupoA[1]['d']++
}
if(grupoA[1]['gols'][1] < grupoA[2]['gols'][2]){
    grupoA[1]['pontos'].push(0)
    grupoA[1]['d']++
}
if(grupoA[1]['gols'][2] < grupoA[3]['gols'][1]){
    grupoA[1]['pontos'].push(0)
    grupoA[1]['d']++
}

/////////////////////////////////////////////////////////////////

if(grupoA[2]['gols'][0] > grupoA[0]['gols'][1]){
    grupoA[2]['pontos'].push(3)
    grupoA[2]['v']++
}
if(grupoA[2]['gols'][1] > grupoA[1]['gols'][2]){
    grupoA[2]['pontos'].push(3)
    grupoA[2]['v']++
}
if(grupoA[2]['gols'][2] > grupoA[3]['gols'][0]){
    grupoA[2]['pontos'].push(3)
    grupoA[2]['v']++
}

if(grupoA[2]['gols'][0] == grupoA[0]['gols'][1]){
    grupoA[2]['pontos'].push(1)
    grupoA[2]['e']++
}
if(grupoA[2]['gols'][1] == grupoA[1]['gols'][2]){
    grupoA[2]['pontos'].push(1)
    grupoA[2]['e']++
}
if(grupoA[2]['gols'][2] == grupoA[3]['gols'][0]){
    grupoA[2]['pontos'].push(1)
    grupoA[2]['e']++
}

if(grupoA[2]['gols'][0] < grupoA[0]['gols'][1]){
    grupoA[2]['pontos'].push(0)
    grupoA[2]['d']++
}
if(grupoA[2]['gols'][1] < grupoA[1]['gols'][2]){
    grupoA[2]['pontos'].push(0)
    grupoA[2]['d']++
}
if(grupoA[2]['gols'][2] < grupoA[3]['gols'][0]){
    grupoA[2]['pontos'].push(0)
    grupoA[2]['d']++
}

/////////////////////////////////////////////////////////////////

if(grupoA[3]['gols'][0] > grupoA[0]['gols'][2]){
    grupoA[3]['pontos'].push(3)
    grupoA[3]['v']++
}
if(grupoA[3]['gols'][1] > grupoA[1]['gols'][1]){
    grupoA[3]['pontos'].push(3)
    grupoA[3]['v']++
}
if(grupoA[3]['gols'][2] > grupoA[2]['gols'][0]){
    grupoA[3]['pontos'].push(3)
    grupoA[3]['v']++
}

if(grupoA[3]['gols'][0] == grupoA[0]['gols'][2]){
    grupoA[3]['pontos'].push(1)
    grupoA[3]['e']++
}
if(grupoA[3]['gols'][1] == grupoA[1]['gols'][1]){
    grupoA[3]['pontos'].push(1)
    grupoA[3]['e']++
}
if(grupoA[3]['gols'][2] == grupoA[2]['gols'][0]){
    grupoA[3]['pontos'].push(1)
    grupoA[3]['e']++
}

if(grupoA[3]['gols'][0] < grupoA[0]['gols'][2]){
    grupoA[3]['pontos'].push(0)
    grupoA[3]['d']++
}
if(grupoA[3]['gols'][1] < grupoA[1]['gols'][1]){
    grupoA[3]['pontos'].push(0)
    grupoA[3]['d']++
}
if(grupoA[3]['gols'][2] < grupoA[2]['gols'][0]){
    grupoA[3]['pontos'].push(0)
    grupoA[3]['d']++
}

let soma_pontos = grupoA.map(g => g.pontos.reduce((acc, next) => acc += next), 0)
grupoA[0]['pontuacao_final'] = soma_pontos[0];
grupoA[1]['pontuacao_final'] = soma_pontos[1];
grupoA[2]['pontuacao_final'] = soma_pontos[2];
grupoA[3]['pontuacao_final'] = soma_pontos[3];


let classificacaoE = _.orderBy(grupoA, ['pontuacao_final', 'v', 'saldo', 'gp', 'e', 'soma_cartoes'], ['desc', 'desc', 'desc', 'desc', 'desc', 'asc'])

// console.log(classificacaoE, "TIMES CLASSIFICADOS")

// let match = grupoA[0].nome + " " + grupoA[0].gols[0] + " x " + grupoA[1].gols[0]  + " " + grupoA[1].nome

// console.log(match)

const e1 = classificacaoE[0]
const e2 = classificacaoE[1]

module.exports = {e1, e2, classificacaoE}

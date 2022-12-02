const _ = require('lodash');

const {a1, a2} = require('./gA')
const {b1, b2} = require('./gB')
const {c1, c2} = require('./gC')
const {d1, d2} = require('./gD')
const {e1, e2} = require('./gE')
const {f1, f2} = require('./gF')
const {g1, g2} = require('./gG')
const {h1, h2} = require('./gH')

let a1ff = a1.nome
let a2ff = a2.nome 
let b1ff = b1.nome
let b2ff = b2.nome 
let c1ff = c1.nome
let c2ff = c2.nome 
let d1ff = d1.nome
let d2ff = d2.nome 
let e1ff = e1.nome
let e2ff = e2.nome 
let f1ff = f1.nome
let f2ff = f2.nome 
let g1ff = g1.nome
let g2ff = g2.nome 
let h1ff = h1.nome
let h2ff = h2.nome 

// console.log(a1ff, a2ff)
// console.log(b1ff, b2ff)
// console.log(c1ff, c2ff)
// console.log(d1ff, d2ff)
// console.log(e1ff, e2ff)
// console.log(f1ff, f2ff)
// console.log(g1ff, g2ff)
// console.log(h1ff, h2ff)

arr0 = [] 
arr1 = [] 
arr2 = [] 
arr3 = [] 
arr4 = [] 
arr5 = [] 
arr6 = [] 
arr7 = [] 
arr8 = [] 
arr9 = [] 
arr10 = [] 
arr11 = [] 
arr12 = [] 
arr13 = [] 
arr14 = [] 
arr15 = [] 
arr16 = []
p0 = [] 
p1 = [] 
p2 = [] 
p3 = [] 
p4 = [] 
p5 = [] 
p6 = [] 
p7 = [] 
p8 = [] 
p9 = [] 
p10 = [] 
p11 = [] 
p12 = [] 
p13 = [] 
p14 = [] 
p15 = [] 

arr0q = []
arr1q = []
arr2q = []
arr3q = []
arr4q = []
arr5q = []
arr6q = []
arr7q = []
p0q = []
p1q = []
p2q = []
p3q = []
p4q = []
p5q = []
p6q = []
p7q = []

arr0s = []
arr1s = []
arr2s = []
arr3s = []

p0s = []
p1s = []
p2s = []
p3s = []

arr0t = []
arr1t = []
arr0f = []
arr1f = []

p0t = []
p1t = []
p0f = []
p1f = []


function geraGolsForte(array){ 
    while (array.length < 1){ 
        var gols=[0,1,2,3,4,5,6,7,8]
        var golsponderados = [0.7, 0.9, 3.5, 2.25, 2.25, 0.1, 0.1, 0.1, 0.1]
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

function geraGolsNormal(array){ 
    while (array.length < 1){ 
        var gols=[0,1,2,3,4,5,6,7,8]
        var golsponderados = [2.5,2.5, 2.5, 1.5, 0.4,0.3,0.1,0.1,0.1]
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
    while (array.length < 1){ 
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

function penalti(array){ 
    while (array.length < 5){ 
        array.push(Math.floor(Math.random() * (2 - 0) ) + 0) 
    }
}

geraGolsForte(arr0) 
geraGolsMed(arr1) 
geraGolsForte(arr2) 
geraGolsMed(arr3) 
geraGolsForte(arr4) 
geraGolsMed(arr5) 
geraGolsForte(arr6) 
geraGolsMed(arr7) 
geraGolsForte(arr8) 
geraGolsMed(arr9) 
geraGolsForte(arr10) 
geraGolsMed(arr11) 
geraGolsForte(arr12) 
geraGolsMed(arr13) 
geraGolsForte(arr14) 
geraGolsMed(arr15) 
geraGolsForte(arr16) 

penalti(p0)
penalti(p1)
penalti(p2)
penalti(p3)
penalti(p4)
penalti(p5)
penalti(p6)
penalti(p7)
penalti(p8)
penalti(p9)
penalti(p10)
penalti(p11)
penalti(p12)
penalti(p13)
penalti(p14)
penalti(p15)

geraGolsNormal(arr0q)
geraGolsNormal(arr1q)
geraGolsNormal(arr2q)
geraGolsNormal(arr3q)
geraGolsNormal(arr4q)
geraGolsNormal(arr5q)
geraGolsNormal(arr6q)
geraGolsNormal(arr7q)

penalti(p0q)
penalti(p1q)
penalti(p2q)
penalti(p3q)
penalti(p4q)
penalti(p5q)
penalti(p6q)
penalti(p7q)

geraGolsNormal(arr0s)
geraGolsNormal(arr1s)
geraGolsNormal(arr2s)
geraGolsNormal(arr3s)

penalti(p0s)
penalti(p1s)
penalti(p2s)
penalti(p3s)

geraGolsNormal(arr0t)
geraGolsNormal(arr1t)
geraGolsNormal(arr0f)
geraGolsNormal(arr1f)

penalti(p0t)
penalti(p1t)
penalti(p0f)
penalti(p1f)


const sum_penalti = (arr) => arr.reduce((acc,next) => acc +=next, 0)

let oitavas = [
    {nome: a1ff, gol: arr0, penalti: p0, total_penalti: sum_penalti(p0)},
    {nome: b2ff, gol: arr1, penalti: p1, total_penalti: sum_penalti(p1)},
    {nome: c1ff, gol: arr2, penalti: p2, total_penalti: sum_penalti(p2)},
    {nome: d2ff, gol: arr3, penalti: p3, total_penalti: sum_penalti(p3)},
    {nome: e1ff, gol: arr4, penalti: p4, total_penalti: sum_penalti(p4)},
    {nome: f2ff, gol: arr5, penalti: p5, total_penalti: sum_penalti(p5)},
    {nome: g1ff, gol: arr6, penalti: p6, total_penalti: sum_penalti(p6)},
    {nome: h2ff, gol: arr7, penalti: p7, total_penalti: sum_penalti(p7)},
    {nome: b1ff, gol: arr8, penalti: p8, total_penalti: sum_penalti(p8)},
    {nome: a2ff, gol: arr9, penalti: p9, total_penalti: sum_penalti(p9)},
    {nome: d1ff, gol: arr10, penalti: p10, total_penalti: sum_penalti(p10)},
    {nome: c2ff, gol: arr11, penalti: p11, total_penalti: sum_penalti(p11)},
    {nome: f1ff, gol: arr12, penalti: p12, total_penalti: sum_penalti(p12)},
    {nome: e2ff, gol: arr13, penalti: p13, total_penalti: sum_penalti(p13)},
    {nome: h1ff, gol: arr14, penalti: p14, total_penalti: sum_penalti(p14)},
    {nome: g2ff, gol: arr15, penalti: p15, total_penalti: sum_penalti(p15)},
]

let quartas = [
    {nome: "", gol: arr0q, penalti: p0q, total_penalti: sum_penalti(p0q)},
    {nome: "", gol: arr1q, penalti: p1q, total_penalti: sum_penalti(p1q)},
    {nome: "", gol: arr2q, penalti: p2q, total_penalti: sum_penalti(p2q)},
    {nome: "", gol: arr3q, penalti: p3q, total_penalti: sum_penalti(p3q)},
    {nome: "", gol: arr4q, penalti: p4q, total_penalti: sum_penalti(p4q)},
    {nome: "", gol: arr5q, penalti: p5q, total_penalti: sum_penalti(p5q)},
    {nome: "", gol: arr6q, penalti: p6q, total_penalti: sum_penalti(p6q)},
    {nome: "", gol: arr7q, penalti: p7q, total_penalti: sum_penalti(p7q)},
]

let semi = [
    {nome: null, gol: arr0s, penalti: p0s, total_penalti: sum_penalti(p0s)},
    {nome: null, gol: arr1s, penalti: p1s, total_penalti: sum_penalti(p1s)},
    {nome: null, gol: arr2s, penalti: p2s, total_penalti: sum_penalti(p2s)},
    {nome: null, gol: arr3s, penalti: p3s, total_penalti: sum_penalti(p3s)},
]


let terceiro_lugar = [
    {nome: null, gol: arr0t, penalti: p0t, total_penalti: sum_penalti(p0t)},
    {nome: null, gol: arr1t, penalti: p1t, total_penalti: sum_penalti(p1t)},
]

let final = [
    {nome: null, gol: arr0f, penalti: p0f, total_penalti: sum_penalti(p0f)},
    {nome: null, gol: arr1f, penalti: p1f, total_penalti: sum_penalti(p1f)},
]

let ranking = [
    {nome: null},
    {nome: null},
    {nome: null},
]

function gerarConfronto(posi, posp, posq, pos0, pos1){
    if(posi[pos0]['gol'] > posi[pos1]['gol']){
        posp[posq]['nome'] = posi[pos0]['nome']
    }
    else if(posi[pos0]['gol'] < posi[pos1]['gol']){
        posp[posq]['nome'] = posi[pos1]['nome']
    }
    else{
        if(posi[pos0]['total_penalti'] > posi[pos1]['total_penalti']){
           posp[posq]['nome'] = posi[pos0]['nome']
        }
        else if(posi[pos0]['total_penalti'] < posi[pos1]['total_penalti']){
            posp[posq]['nome'] = posi[pos1]['nome']
        }
        else{
            let tie = Math.floor(Math.random() * (2 - 0) ) + 0
            if(tie == 1){
                posp[posq]['nome'] = posi[pos0]['nome']
            }
            else{
                posp[posq]['nome'] = posi[pos1]['nome']
            }
        }
    }
}

function gerarConfrontoFinal(posi, pos0, pos1, array){
    if(posi[pos0]['gol'] > posi[pos1]['gol']){
        array[0] = posi[pos0]['nome'] 
        array[1] = posi[pos1]['nome']
    }
    else if(posi[pos0]['gol'] < posi[pos1]['gol']){
        array[0] = posi[pos1]['nome']
        array[1] = posi[pos0]['nome'] 
    }
    else{
        if(posi[pos0]['total_penalti'] > posi[pos1]['total_penalti']){
            array[0] = posi[pos0]['nome'] 
            array[1] = posi[pos1]['nome']
        }
        else if(posi[pos0]['total_penalti'] < posi[pos1]['total_penalti']){
            array[0] = posi[pos1]['nome']
            array[1] = posi[pos0]['nome'] 
        }
        else{
            let tie = Math.floor(Math.random() * (2 - 0) ) + 0
            if(tie == 1){
                array[0] = posi[pos0]['nome'] 
                array[1] = posi[pos1]['nome']
            }
            else{
                array[0] = posi[pos1]['nome']
                array[1] = posi[pos0]['nome'] 
            }
        }
    }
}

function gerarConfrontoTerceiro(posi, pos0, pos1, array){
    if(posi[pos0]['gol'] > posi[pos1]['gol']){
        array[2] = posi[pos0]['nome'] 
    }
    else if(posi[pos0]['gol'] < posi[pos1]['gol']){
        array[2] = posi[pos1]['nome']
    }
    else{
        if(posi[pos0]['total_penalti'] > posi[pos1]['total_penalti']){
            array[2] = posi[pos0]['nome'] 
        }
        else if(posi[pos0]['total_penalti'] < posi[pos1]['total_penalti']){
            array[2] = posi[pos1]['nome']

        }
        else{
            let tie = Math.floor(Math.random() * (2 - 0) ) + 0
            if(tie == 1){
                array[2] = posi[pos0]['nome'] 
            }
            else{
                array[2] = posi[pos1]['nome']
            }
        }
    }
}

gerarConfronto(oitavas, quartas, 0,0,1)
gerarConfronto(oitavas, quartas, 1,2,3)
gerarConfronto(oitavas, quartas, 2,4,5)
gerarConfronto(oitavas, quartas, 3,6,7)
gerarConfronto(oitavas, quartas, 4,8,9)
gerarConfronto(oitavas, quartas, 5,10,11)
gerarConfronto(oitavas, quartas, 6,12,13)
gerarConfronto(oitavas, quartas, 7,14,15)
//console.log(oitavas[0]['gol'])
gerarConfronto(quartas, semi, 0,0,1)
gerarConfronto(quartas, semi, 1,2,3)
gerarConfronto(quartas, semi, 2,4,5)
gerarConfronto(quartas, semi, 3,6,7)

gerarConfronto(semi, final, 0,0,1);
gerarConfronto(semi, final, 1,2,3);

gerarConfrontoFinal(final, 0, 1, ranking);



//times que foram pra disputa de terceiro lugar
if(semi[0]['nome'] == final[0]['nome']){
    terceiro_lugar[0]['nome'] = semi[1]['nome'];
}
else if(semi[1]['nome'] == final[0]['nome']){
    terceiro_lugar[0]['nome'] = semi[0]['nome'];
}
if(semi[2]['nome'] == final[1]['nome']){
    terceiro_lugar[1]['nome'] = semi[3]['nome'];
}
else if(semi[3]['nome'] == final[1]['nome']){
    terceiro_lugar[1]['nome'] = semi[2]['nome'];
}

gerarConfrontoTerceiro(terceiro_lugar, 0, 1, ranking)

console.log(oitavas)
console.log('////////')
console.log(quartas)
console.log('////////')
console.log(semi)
console.log('////////')
console.log(terceiro_lugar)
console.log('////////')
console.log(final)
console.log('////////')
console.log(ranking);

module.exports = {oitavas, quartas, semi, terceiro_lugar, final, ranking}
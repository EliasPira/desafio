let nomeDoHeroi = "Luigi"
let xpDoHeroi = 7001  
let nivelDoHeroi = ""

switch (true) {
case xpDoHeroi <= 1000:
nivelDoHeroi = "Ferro";
break;

case xpDoHeroi <= 2000:
nivelDoHeroi = "Bronze";
break;

case xpDoHeroi <= 5000:
nivelDoHeroi = "Prata";
break;

case xpDoHeroi <= 7000:
nivelDoHeroi = "Ouro";
break;

case xpDoHeroi <= 8000:
nivelDoHeroi = "Platina";
break;  

case xpDoHeroi <= 9000:
nivelDoHeroi = "Ascendente";
break;  

case xpDoHeroi <= 10000:
nivelDoHeroi = "Imortal";
break;  

case xpDoHeroi >= 10001:
nivelDoHeroi = "Radiante";
break;  

default:
nivelDoHeroi = "Iniciante";
        
    
}
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);
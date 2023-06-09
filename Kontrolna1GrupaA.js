//1 (3 BODA)
//Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)
function ispisiParne100(){
    for(let i = 1; i <= 100; i++){
        if(i % 2){
            continue;
        } else{
            console.log(i);
        }
    }
}

ispisiParne100();
console.log();

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak";
function provjeriDan(danUtjednu){
    switch(danUtjednu){
        case 1: console.log("Ponedjeljak\n"); break;
        case 2: console.log("Utorak\n"); break;
        case 3: console.log("Srijeda\n"); break;
        case 4: console.log("Četvrtak\n"); break;
        case 5: console.log("Petak\n"); break;
        default: console.log("Neispravan unos!\n"); break;
    }
}

let dan1 = 1;
provjeriDan(dan1);
let dan2 = 2;
provjeriDan(dan2);
let dan3 = 3;
provjeriDan(dan3);
let dan4 = 4;
provjeriDan(dan4);
let dan5 = 5;
provjeriDan(dan5);
let dan6 = 6;
provjeriDan(dan6);
console.log();

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

function okreniString(rijec){
    let count = 0;
    let novi;

    for(i = rijec; i > 0; i--){
        if(rijec[i] == " "){
            continue;
        } else{
            novi = novi + rijec[i];
            count++;
        }
    }
    
    console.log(novi, ", ", count);
}

let zadani = "Pisanje zadataka nije jednostavan posao"
okreniString(zadani);
console.log();

//4 (4 BODA)
//Napisi funkciju koja vraca najkraci kljuc u danom objektu

function najkraciKljuc(ljudi){
    let najkracaDuljina = 1000;
    let najkraci;

    for (const key in ljudi) {
        if(ljudi[key].length < najkracaDuljina){
            najkracaDuljina = ljudi[key].lenght;
            najkraci = ljudi[key];
        }
    }

    console.log(najkraci);
}

const somePeople = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}

najkraciKljuc(somePeople);
console.log();

//INPUT: somePeople
//OUTPUT: "Ada"

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca proste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [3, 5, 11]

function vratiProste(arr){
    let novi = [];
    let flag = 0;

    for(const broj of arr) {
        for(let i = 1; i < broj[i]; i++){
            if(broj[i] % i){
                flag = 1;
                break;
            }

            if(flag){
                flag = 0;
                break;
            } else{
                for(broj1 in novi){
                    if(broj1 == undefined){
                        broj1 = broj1;
                        break;
                    }
                }
            }
        }
    }

    console.log(novi);
}

let brojevi = [3, 4, 5, 8, 11];
vratiProste(brojevi);
console.log();


//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

//6 (4 BODA)
//Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra

function starijiDogadjaj(eventi, god){
    for (const dogdjaj in eventi) {
        if(eventi[dogdjaj].eventYear < god){
            console.log(eventi[dogdjaj]);
        }
    }
}

const someEvents = [
    {
        eventName: "Izasla je Java",
        eventYear: 1995,
    },
    {
        eventName: "Izasao je C#",
        eventYear: 2000,
    },
    {
        eventName: "Izasao je Python",
        eventYear: 1991,
    },
    {
        eventName: "Izasao je C++",
        eventYear: 1985,
    },
    {
        eventName: "Izasao je JavaScript",
        eventYear: 1995,
    },
];

starijiDogadjaj(someEvents, 1992);
console.log();

//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]
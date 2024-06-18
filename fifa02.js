const { Collection } = require("mongoose"); //ez nem tudom h kerult ide, de ahogy nezem nem sikerult tul jol elolvasnom a feladatokat xd

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://asztaloscsaba70:1234asd1234@t13elso.octc2vw.mongodb.net/";

let fifa=[
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639",
    ]


function AdatAtalakitas(adatok) {
    let FifaAdatok = []
    for(let i = 0; i < adatok.length; i++) {
        let daraboltAdat = adatok[i].split(";");
        let FifaAdat = {
            csapat: daraboltAdat[0],
            helyezes: Number(daraboltAdat[1]),
            valtozas: Number(daraboltAdat[2]),
            pontszam: Number(daraboltAdat[3]),
        }
        FifaAdatok.push(FifaAdat);
    }
    return FifaAdatok;
}


async function KollekcioFeltoltese() {

    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13fifa");
        const collection = db.collection("Fifa");

       

        const FifaAdatok = AdatAtalakitas(fifa);
        await collection.insertMany(FifaAdatok);
        console.log("Az adatok feltoltesre kerutek");
        client.close();
    }
    catch (err) {
        console.error("Hiba tortent a muvelet kozben", err);
    }
}

KollekcioFeltoltese();

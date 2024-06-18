const { Collection } = require("mongoose");

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://asztaloscsaba70:1234asd1234@t13elso.octc2vw.mongodb.net/";



async function KollekcioRendezese() {

    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13fifa");
        const collection = db.collection("Fifa");

       

        const rendezesSzerint = {pontszam: -1};
        const eredmeny = await collection.find({},{projection: {_id:0, csapat:1, pontszam:1}}).sort(rendezesSzerint).toArray();

        console.log("Rendezett adatok: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba tortent a muvelet kozben", err);
    }
}

KollekcioRendezese();
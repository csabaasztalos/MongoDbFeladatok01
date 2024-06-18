const { Collection } = require("mongoose");

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://asztaloscsaba70:1234asd1234@t13elso.octc2vw.mongodb.net/";



async function PontszamtobbMint() {

    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13fifa");
        const collection = db.collection("Fifa");

       

        const rendezesSzerint = {pontszam: -1};
        const eredmeny = await collection.find({pontszam: {$gt: 1600}}).sort(rendezesSzerint).toArray();

        console.log("Szurt es rendezett adatok: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba tortent a muvelet kozben", err);
    }
}
PontszamtobbMint();
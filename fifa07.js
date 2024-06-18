const { Collection } = require("mongoose");

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://asztaloscsaba70:1234asd1234@t13elso.octc2vw.mongodb.net/";



async function NincsValtozas() {

    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13fifa");
        const collection = db.collection("Fifa");

       const rendezesiBeallitas = {valtozas: 1};

        const eredmeny = await collection.find().sort(rendezesiBeallitas).limit(1).toArray();
        console.log("Szurt adatok: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba tortent a muvelet kozben", err);
    }
}
NincsValtozas();
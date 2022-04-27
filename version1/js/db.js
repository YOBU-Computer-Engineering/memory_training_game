let pouch__title = document.createElement("h4");
let textNode = document.createTextNode(" 🖤 Mobil Programlama!");
pouch__title.appendChild(textNode);

var db = new PouchDB("pairapp");

doc = {
  _id: "Bozok",
  title: "Bozok Universitesiiii",
  lecture: " 🖤 Mobil Programlama Dersi!",
  teacher: "Tolga Hayıt",
  date: "18.04.2021222",
  version: "Version 1.0.0",
};

// PouchDbInsert(db, doc);
PouchDbSelect(db, "Bozok");

function PouchDbInsert(db, doc) {
  db.put(doc)
    .then((res) => {})
    .catch((err) => {
      console.error(err);
    });
}

function PouchDbSelect(db, desiredDoc) {
  db.get(desiredDoc)
    .then(function (doc) {
      let docR = doc.user;
      console.log(docR);
      return docR;
    })
    .catch(function (err) {
      return err;
    });
}

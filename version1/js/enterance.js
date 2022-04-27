$(document).ready(function () {
  $("#play").click(function () {
    let user = {
      _id: Math.floor(Math.random(0, 10000) * 100), //random id
      usernameField: $("#username").val(),
      score: 5,
    };
    if (PouchDbSelect(db, user._id) == undefined) {
      db.get("lastUser")
        .then(function (doc) {
          doc.username = user.usernameField;
          doc.score = user.score;
          PouchDbInsert(db, {
            _id: "allUsers",
            username: user.usernameField,
            score: user.score,
          });
          return db.put(doc);
        })
        .then(function () {
          return db.get("lastUser");
        })
        .then(function (doc) {});

      window.location.replace("http://127.0.0.1:5500/version1/index.html");
    }
  });
});

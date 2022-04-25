$(document).ready(function () {
  $("#test").attr("src", `http://127.0.0.1:5500/images/armut.png`);
  $("#divi").append("<p>Hello World</p>");

  let cardArray = []; // kartları tutacak array
  let imageName = [
    "elma",
    "armut",
    "visne",
    "erik",
    "karpuz",
    "domates",
    "elma",
    "armut",
    "visne",
    "erik",
    "karpuz",
    "domates",
  ]; // kart resimlerini tutacak array

  shuffle(imageName); //geçerli arrayi kartları karıştıralım
  initilizeCardArrays(); // kartların modelini oluşturuyoruz
  initalizeCardValues(); // kartların değerlerini oluşturuyoruz
  initalizeCardAttributes(); // kartlara tıklandığındaki click eventi ile tıklanılan kartı gösteriyoruz

  function initalizeCardValues() {
    for (let i = 0; i < cardArray.length; i++) {
      let tableMatrixNumber = cardArray[i].number;
      let tableMatrixNumberDivImage = $(
        "#tableMatrixNumber" + tableMatrixNumber
      ).find("img");
      tableMatrixNumberDivImage;

      tableMatrixNumberDivImage.attr(
        "src",
        `http://127.0.0.1:5500/images/${imageName[i]}.png`
      );
      tableMatrixNumberDivImage.attr("alt", imageName[i]);
      tableMatrixNumberDivImage.attr("id", imageName[i]);

      let tableMatrixNumberDiv = $(
        "#tableMatrixNumber" + tableMatrixNumber
      ).find("h1");
      tableMatrixNumberDiv.append(tableMatrixNumber);

      tableMatrixNumberDiv.attr("id", imageName[i]);
    }
  }

  function initilizeCardArrays() {
    for (let i = 1; i <= 12; i++) {
      cardArray.push({
        name: "",
        number: i,
        imagePath: "",
      });
    }
  }

  function initalizeCardAttributes() {
    for (let i = 0; i < cardArray.length; i++) {
      let tableMatrixNumber = cardArray[i].number;
      let tableMatrixNumberDiv = $("#tableMatrixNumber" + tableMatrixNumber);
      tableMatrixNumberDiv.click(function () {
        let tableMatrixNumberDiv = $("#tableMatrixNumber" + tableMatrixNumber);
        tableMatrixNumberDiv.css("background-color", "#ff0000");
        mesajGonder(tableMatrixNumber);
      });
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  $("button").click(function (e) {
    e.preventDefault(); //form nesnesi için kullanılıyor

    $(this).parent().parent().find(".adi").css("background-color", "red");
    var icerik = $(this).parent().parent().find(".adi").text();
    mesajGonder(icerik);

    $("button")
      .not(".ekleBtn")
      .click(function (e) {
        e.preventDefault(); //form nesnesi için kullanılıyor
        $(this).parent().parent().find(".adi").css("background-color", "white");
      });

    $("table").on("click", "button:not(#ekleBtn)", function (e) {
      var icerik = $(this).parent().parent().find(".adi").text();
      mesajGonder(icerik);
    });

    $(".ekleBtn").click(function (e) {
      $("table").append(
        '<tr><td class="adi">Engin</td><td>Karataş</td><td>055113003300</td><td>Koca🖖i</td><td><button>Aksiyon</button></td></tr>'
      );
    });
  });

  let thisCardImageID = "";
  let counter = 0;
  let doubleChoice = false;
  $(this).click(function (e) {
    if (doubleChoice == false) {
      thisCardImageID = e.target.id;
      doubleChoice = true;
    } else {
      if (thisCardImageID == e.target.id) {
        console.log("same");
        doubleChoice = false;
      } else {
        console.log("diffrent");
        doubleChoice = false;
      }
    }
  });
});

function mesajGonder(deger) {
  alert(deger);
}

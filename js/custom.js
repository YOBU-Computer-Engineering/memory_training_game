$(document).ready(function () {
  $("#test").attr("src", `http://127.0.0.1:5500/images/armut.png`);
  $("#divi").append("<p>Hello World</p>");

  $("img").parent().css("visibility", "hidden");
  $(".col-lg-3").css({
    "border-color": "#C1E0FF",
    "border-width": "1px",
    "border-style": "solid",
  });

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

    var icerik = $(this).parent().parent().find(".adi").text();
    mesajGonder(icerik);

    $("button")
      .not(".ekleBtn")
      .click(function (e) {
        e.preventDefault(); //form nesnesi için kullanılıyor
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
      tableMatrixNumberDivImage.attr("class", imageName[i]);
      tableMatrixNumberDivImage.attr("data", imageName[i]);
      tableMatrixNumberDivImage.addClass("resim");

      let tableMatrixNumberDiv = $(
        "#tableMatrixNumber" + tableMatrixNumber
      ).find("h1");
      tableMatrixNumberDiv.append(tableMatrixNumber);
    }
  }

  let thisCardImageID = "";
  let counter = 0;
  let doubleChoice = false;

  $(this).click(function (e) {
    e.target.id = $("#" + e.target.id).find("img").attr("id");
    console.log(e.target.id)
    let card = $("#" + e.target.id)
      .find(":last-child")
      .css("visibility", "visible");
    card.css("visibility", "visible");

    if (doubleChoice == false) {
      thisCardImageID = e.target.id;
      doubleChoice = true;
    } else {
      if (thisCardImageID == e.target.id) {
        console.log("same");
        doubleChoice = false;
        $("#" + thisCardImageID)
          .find(":last-child")
          .css("visibility", "visible");
        card.css("visibility", "visible");
      } else {
        console.log("diffrent");
        setTimeout(() => {
          $("#" + thisCardImageID)
            .find(":last-child")
            .css("visibility", "hidden");
          card.css("visibility", "hidden");
        }, 1000);
        doubleChoice = false;
      }
    }
  });
});

function mesajGonder(deger) {
  //   console.log(deger);
}

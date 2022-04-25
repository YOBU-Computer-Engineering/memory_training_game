$(document).ready(function () {
  let cardArray = []; // kartları tutacak array
  let cardPairsArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]; // kartları tutacak array

  shuffle(cardPairsArray);
  initilizeCardArrays();
  initalizeCardValues();
  initalizeCardAttributes();

  function initalizeCardValues() {
      console.log(cardPairsArray);
    for (let i = 0; i < cardArray.length; i++) {

      let tableMatrixNumber = cardArray[i].number;
      let tableMatrixNumberDiv = $("#tableMatrixNumber" + tableMatrixNumber).find("h1");
      console.log("🚀 ~ file: custom.js ~ line 15 ~ initalizeCardValues ~ tableMatrixNumberDiv", tableMatrixNumberDiv)
      tableMatrixNumberDiv.append(`<span>${cardPairsArray[i]}</span>`);
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

  // $(".name2z").hide();
  // $("h1").click(function (e) {
  //     e.preventDefault();
  //     $("h1").css("color", "red");
  // })
});

function mesajGonder(deger) {
  alert(deger);
}

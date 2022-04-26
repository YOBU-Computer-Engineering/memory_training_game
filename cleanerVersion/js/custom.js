$(document).ready(function () {
  $("img").parent().css("visibility", "hidden");

  $(".col-lg-3").css({
    "border-color": "pink",
    "border-width": "5px",
    "border-style": "dashed",
  });

  let kartlar = [];
  let resimler = [
    "kedi",
    "kopek",
    "kuzu",
    "kelebek",
    "kedi",
    "kopek",
    "kelebek",
    "kuzu",
  ];

  diziyiKaristir(resimler);
  kartlariYukle();

  function diziyiKaristir(array) {
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

  function kartlariYukle() {
    for (let i = 1; i < 9; i++) {
      $("#kutu" + i)
        .find("img")
        .attr(
          "src",
          `http://127.0.0.1:5500/cleanerVersion/images/${resimler[i - 1]}.png`
        );
      $("#kutu" + i)
        .find("img")
        .attr("class", resimler[i - 1]);
      $("#kutu" + i)
        .find("img")
        .attr("id", resimler[i - 1]);

      kartlar.push(i);
    }
  }

  let oncekiDeger = "";
  let ikinciKereTiklandiMi = false;
  let prev = ""

  let counter = 0;

  var start = new Date;

  $(this).click(function (e) {
    $('#counter').append(counter);
    let kartResimElement = $("#" + e.target.id).find("img"); //ilgili kartın ilgili resmin elementi(div)
    let kartResimElementClass = kartResimElement.attr("class");
    let ciftResimler = document.getElementsByClassName(kartResimElementClass);
    console.log("🚀 ~ file: custom.js ~ line 75 ~ oncekiDeger.id", oncekiDeger);
    console.log(
      "🚀 ~ file: custom.js ~ line 77 ~ ciftResimler[0].id",
      ciftResimler[0].id
    );

    if (ikinciKereTiklandiMi == false) {
      //ilk tıklamadan sonra buraya girecek
      console.log("ilk kart seçildii");
      oncekiDeger = ciftResimler[0];
      ikinciKereTiklandiMi = true;
      prev = kartResimElement;
      kartResimElement.css("visibility", "visible");
    } else {
      //ikinci tıklamadan sonra buraya girecek
      ikinciKereTiklandiMi = false;
      if (oncekiDeger == ciftResimler[0]) {
        console.log("aynı");
        counter +=10
        ciftResimler[0].style.visibility = "visible";
        ciftResimler[1].style.visibility = "visible";
      } else {
        kartResimElement.css("visibility", "visible");
        setTimeout(() => {
        counter -=5

          kartResimElement.css("visibility", "hidden");
          prev.css("visibility","hidden")
        }, 800);
      }
    }
  });
});

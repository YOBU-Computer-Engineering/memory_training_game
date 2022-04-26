$(document).ready(function () {
  let kartlar = [];
  let resimler = ["kedi", "kopek", "kuzu", "kelebek","kedi", "kopek","kelebek", "kuzu" ]

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
      $("#kutu" + i).find("img").attr("src", `http://127.0.0.1:5500/esra/images/${resimler[i-1]}.png`)
      $("#kutu" + i).find("img").attr("class", resimler[i-1])

      kartlar.push(i);
    }

    $("#kutu1").click(function (e) { 
      e.preventDefault();
      console.log("kutu1 tıklandı");
    });
  }

  $(this).click(function(e){
    console.log(e.target);
  })
});

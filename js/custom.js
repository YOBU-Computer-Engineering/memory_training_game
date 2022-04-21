$(document).ready(function () {
    $("button").click(function (e) { 
        e.preventDefault();//form nesnesi için kullanılıyor
        
        $(this).parent().parent().find(".adi").css("background-color","red");
        var icerik = $(this).parent().parent().find(".adi").text()
        mesajGonder(icerik);

        $("button").not(".ekleBtn").click(function (e) { 
            e.preventDefault();//form nesnesi için kullanılıyor
            $(this).parent().parent().find(".adi").css("background-color","white");
        });
        
        $(".ekleBtn").click(function (e) {
            $('table').append('<tr><td class="adi">'+icerik+'</td><td><button class="silBtn">Sil</button></td></tr>');
        });
    });


    // $(".name2z").hide();
    // $("h1").click(function (e) {
    //     e.preventDefault();
    //     $("h1").css("color", "red");
    // })
});

function mesajGonder(deger){
    alert(deger);
}
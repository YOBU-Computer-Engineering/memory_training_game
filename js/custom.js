$(document).ready(function () {
    alert("sa")

    $("h1").click(function (e) {
        alert("sa")
        e.preventDefault();
        $("h1").css("color", "red");
    })
});
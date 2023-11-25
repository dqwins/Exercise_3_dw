console.log("Connected!");
var x = document.title;
console.log(x);

$("#num-1").on("click", function () {
    $(this).append("<h2> Hairstyle 1 </h2>");
    $(this).css("color", "white")
    $(this).addClass("hair1");
    $(this).unbind("click");
});

$("#num-2").on("click", function () {
    $(this).append("<h2> Hairstyle 2 </h2>");
    $(this).css("color", "white")
    $(this).addClass("hair2");
    $(this).unbind("click");
});

$("#num-3").on("click", function () {
    $(this).append("<h2> Hairstyle 3 </h2>");
    $(this).css("color", "white")
    $(this).addClass("hair3");
    $(this).unbind("click");
});

$("#num-4").on("click", function () {
    $(this).append("<h2> Hairstyle 4 </h2>");
    $(this).css("color", "white")
    $(this).addClass("hair4");
    $(this).unbind("click");
});

$("#num-5").on("click", function () {
    $(this).append("<h2> Hairstyle 5 </h2>");
    $(this).css("color", "white")
    $(this).addClass("hair5");
    $(this).unbind("click");
});



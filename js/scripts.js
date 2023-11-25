console.log("Connected!");
var x = document.title;
console.log(x);

$("#num-1").on("click", function () {
    $(this).append("<h2> Hairstyle 1 </h2>");
    $(this).addClass("hair1");
    $(this).unbind("click");
});

$("#num-2").on("click", function () {
    $(this).append("<h2> Hairstyle 2 </h2>");
    $(this).addClass("hair2");
    $(this).unbind("click");
});

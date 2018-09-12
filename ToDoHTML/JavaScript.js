var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function () {
        this.style.color = "green";
    });
    lis[i].addEventListener("mouseout", function () {
        this.style.color = "black";
    });
}
//firstLI.addEventListener("mouseover", function() {
//    firstLI.style.color = "green";
//});

//firstLI.addEventListener("mouseout", function () {
//    firstLI.style.color = "black";
//});
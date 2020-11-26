//Javascript document

var compteurImage = 1;
var totalImage = 3;

function slider(x) {
    var image = document.getElementById('img');
    compteurImage = compteurImage + x;
    image.src = "images/camion-slide" + compteurImage + ".jpg";

    if (compteurImage >= totalImage) {
        compteurImage = 1;
    }
    if (compteurImage < 1) {
        compteurImage = totalImage;
    }
}

// function open(){
//     var nav = document.getElementById('menu');
//     nav.className.add('op');
// }

// function close(){
//     var nav = document.getElementById('menu');
//     nav.className.remove('op');
// }
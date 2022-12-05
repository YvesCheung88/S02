// ton code ici
function createSquare(x) {
    let invader = document.getElementById("invader");
    let square = document.createElement('div');

    square.classList.add('squareZone');
    invader.appendChild(square);
    square.style.height = (480 / x + "px");
    square.style.width = (480 / x + "px");


    square.addEventListener("click", () => {

        if (square.style.backgroundColor === "rgb(199, 191, 191)") {
            square.style.backgroundColor = "yellow";

        } else if (square.style.backgroundColor === "yellow") {
            square.style.backgroundColor = "cyan";

        } else if (square.style.backgroundColor === "cyan") {
            square.style.backgroundColor = "pink";

        } else { square.style.backgroundColor = "rgb(199, 191, 191)" }
    });

}


///create a function that's generate columns and rows

function createGrid(x) {

    if (build) {
        document.getElementById("invader").innerHTML = "";

        for (rows = 0; rows < x; rows++) {
            for (columns = 0; columns < x; columns++) {

                createSquare(x);

            }
        };
    }




}
let build = true;
createGrid(8);

/// 

let tailleGrid = document.getElementById("TailleGrille");
let taillePix = document.getElementById("TaillePixels");
let userForm = document.getElementById("userForm")

userForm.addEventListener('submit', function (event) {
    event.preventDefault();

})
/// input de type text

function numberZone(event) {

    let key = parseInt(event.key, 10);
    if (!isNaN(key)) {
        createGrid(key);
    }

}
document.addEventListener('keyup', numberZone);

function pixSize() {
    let pixel = taillePix / 16;
    return pixel;
}
taillePix.addEventListener('submit', pixSize)









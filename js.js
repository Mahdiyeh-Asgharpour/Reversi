const answer = confirm("6x6 or 8x8?if u choose 6*6 click ok plz.");
if (answer == true) {
    for (let i = 0; i < 6; i++) {

        document.getElementById("g1").innerHTML += `<span onclick='reversi("1-${Number(i+1)}")' id='1-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g2").innerHTML += `<span onclick='reversi("2-${Number(i+1)}")' id='2-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g3").innerHTML += `<span onclick='reversi("3-${Number(i+1)}")' id='3-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g4").innerHTML += `<span onclick='reversi("4-${Number(i+1)}")' id='4-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g5").innerHTML += `<span onclick='reversi("5-${Number(i+1)}")' id='5-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g6").innerHTML += `<span onclick='reversi("6-${Number(i+1)}")' id='6-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;




    }
    const white1 = document.createElement("h1");
    document.getElementById("3-4").appendChild(white1);
    white1.id = "h3-4";
    white1.style.backgroundColor = "white";
    white1.innerText = "o ";
    white1.style.color = "white";
    const white2 = document.createElement("h1");
    document.getElementById("4-3").appendChild(white2);
    white2.id = "h4-3";
    white2.style.backgroundColor = "white";
    white2.innerText = "o ";
    white2.style.color = "white";

    const black1 = document.createElement("h1");
    document.getElementById("3-3").appendChild(black1);
    black1.id = "h3-3";
    black1.style.backgroundColor = "black";
    black1.innerText = "o";
    black1.style.color = "black";

    const black2 = document.createElement("h1");
    document.getElementById("4-4").appendChild(black2);
    black2.id = "h4-4";
    black2.style.backgroundColor = "black";
    black2.innerText = "o ";
    black2.style.color = "black";


} else {
    for (let i = 0; i < 8; i++) {
        document.getElementById("g1").innerHTML += `<span onclick='reversi("1-${Number(i+1)}")' id='1-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g2").innerHTML += `<span onclick='reversi("2-${Number(i+1)}")' id='2-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g3").innerHTML += `<span onclick='reversi("3-${Number(i+1)}")' id='3-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g4").innerHTML += `<span onclick='reversi("4-${Number(i+1)}")' id='4-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g5").innerHTML += `<span onclick='reversi("5-${Number(i+1)}")' id='5-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g6").innerHTML += `<span onclick='reversi("6-${Number(i+1)}")' id='6-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g7").innerHTML += `<span onclick='reversi("7-${Number(i+1)}")' id='7-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;
        document.getElementById("g8").innerHTML += `<span onclick='reversi("8-${Number(i+1)}")' id='8-${Number(i+1)}'>${String.fromCharCode(i + 65)}-${i+1}</span>`;



    }
    const white1 = document.createElement("h1");
    document.getElementById("4-5").appendChild(white1);
    white1.id = "h4-5";
    white1.style.backgroundColor = "white";
    white1.innerText = "o ";
    white1.style.color = "white";
    const white2 = document.createElement("h1");
    document.getElementById("5-4").appendChild(white2);
    white2.id = "h5-4";
    white2.style.backgroundColor = "white";
    white2.innerText = "o ";
    white2.style.color = "white";

    const black1 = document.createElement("h1");
    document.getElementById("4-4").appendChild(black1);
    black1.id = "h4-4";
    black1.style.backgroundColor = "black";
    black1.innerText = "o";
    black1.style.color = "black";

    const black2 = document.createElement("h1");
    document.getElementById("5-5").appendChild(black2);
    black2.id = "h5-5";
    black2.style.backgroundColor = "black";
    black2.innerText = "o ";
    black2.style.color = "black";

}
var index = 0;

function clicki(id) {
    if (document.getElementById(id).innerHTML !== "") {
        alert("error");
        index++;

    } else {

        if (Number(index) % 2 === 0) {
            const white = document.createElement("h1");
            document.getElementById(id).appendChild(white);
            white.id = "h" + id;
            white.style.backgroundColor = "white";
            white.innerText = "o ";
            white.style.color = "white";
            index++;
        } else {
            const black = document.createElement("h1");
            document.getElementById(id).appendChild(black);
            black.id = "h" + id;
            black.style.backgroundColor = "black";
            black.innerText = "o ";
            black.style.color = "black";
            index++;

        }
    }
}



function reversi(id) {
    clicki(id);
}
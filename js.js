const answer = confirm("6x6 or 8x8?if u choose 6*6 click ok plz.");
if (answer == true) {
    for (let i = 0; i < 6; i++) {

        document.getElementById("g1").innerHTML += `<span id='1-${Number(i+1)}'></span>`;
        document.getElementById("g2").innerHTML += `<span id='2-${Number(i+1)}'></span>`;
        document.getElementById("g3").innerHTML += `<span id='3-${Number(i+1)}'></span>`;
        document.getElementById("g4").innerHTML += `<span id='4-${Number(i+1)}'></span>`;
        document.getElementById("g5").innerHTML += `<span id='5-${Number(i+1)}'></span>`;
        document.getElementById("g6").innerHTML += `<span id='6-${Number(i+1)}'></span>`;



    }

} else
    for (let i = 0; i < 8; i++) {
        document.getElementById("g1").innerHTML += `<span id='1-${Number(i+1)}'></span>`;
        document.getElementById("g2").innerHTML += `<span id='2-${Number(i+1)}'></span>`;
        document.getElementById("g3").innerHTML += `<span id='3-${Number(i+1)}'></span>`;
        document.getElementById("g4").innerHTML += `<span id='4-${Number(i+1)}'></span>`;
        document.getElementById("g5").innerHTML += `<span id='5-${Number(i+1)}'></span>`;
        document.getElementById("g6").innerHTML += `<span id='6-${Number(i+1)}'></span>`;
        document.getElementById("g7").innerHTML += `<span id='7-${Number(i+1)}'></span>`;
        document.getElementById("g8").innerHTML += `<span id='8-${Number(i+1)}'></span>`;


    }
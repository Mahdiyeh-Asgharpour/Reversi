const answer = confirm("6x6 or 8x8?if u choose 6*6 click ok plz.");
if (answer == true) {
    for (let i = 0; i < 6; i++)
        for (let j = 0; j < 6; j++) {
            const q = document.getElementById("ground");
            q.innerHTML += `<span id='${Number (i+1)}-${Number(j+1)}'></span>`;
            if (j == 5) q.innerHTML += "<br>";

        }

} else
    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 8; j++) {
            const q = document.getElementById("ground");
            q.innerHTML += `<span id='${Number (i+1)}-${Number(j+1)}'></span>`;
            if (j == 7) q.innerHTML += "<br>";

        }
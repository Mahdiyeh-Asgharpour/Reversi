const answer = confirm("6x6 or 8x8?if u choose 6*6 click ok plz.");
var white=[];
var black=[];
if (answer == true) {
    for (let i = 0; i < 6; i++) {

        document.getElementById("g1").innerHTML += `<span onclick='reversi("1-${Number(i+1)}")' id='1-${Number(i+1)}'>${String.fromCharCode(i+ 65)}-1</span>`;
        document.getElementById("g2").innerHTML += `<span onclick='reversi("2-${Number(i+1)}")' id='2-${Number(i+1)}'>${String.fromCharCode(i + 65)}-2</span>`;
        document.getElementById("g3").innerHTML += `<span onclick='reversi("3-${Number(i+1)}")' id='3-${Number(i+1)}'>${String.fromCharCode(i + 65)}-3</span>`;
        document.getElementById("g4").innerHTML += `<span onclick='reversi("4-${Number(i+1)}")' id='4-${Number(i+1)}'>${String.fromCharCode(i + 65)}-4</span>`;
        document.getElementById("g5").innerHTML += `<span onclick='reversi("5-${Number(i+1)}")' id='5-${Number(i+1)}'>${String.fromCharCode(i+ 65)}-5</span>`;
        document.getElementById("g6").innerHTML += `<span onclick='reversi("6-${Number(i+1)}")' id='6-${Number(i+1)}'>${String.fromCharCode(i + 65)}-6</span>`;




    }
    const white1 = document.createElement("h1");
    document.getElementById("3-4").appendChild(white1);
    white1.id = "h3-4";
    white1.style.backgroundColor = "white";
    white1.innerText = "o ";
    white1.style.color = "white";
    white.push(white1);


    const white2 = document.createElement("h1");
    document.getElementById("4-3").appendChild(white2);
    white2.id = "h4-3";
    white2.style.backgroundColor = "white";
    white2.innerText = "o ";
    white2.style.color = "white";
    white.push(white2);

    const black1 = document.createElement("h1");
    document.getElementById("3-3").appendChild(black1);
    black1.id = "h3-3";
    black1.style.backgroundColor = "black";
    black1.innerText = "o";
    black1.style.color = "black";
    black.push(black1);


    const black2 = document.createElement("h1");
    document.getElementById("4-4").appendChild(black2);
    black2.id = "h4-4";
    black2.style.backgroundColor = "black";
    black2.innerText = "o ";
    black2.style.color = "black";
    black.push(black2);



} else {
    for (let i = 0; i < 8; i++) {
        document.getElementById("g1").innerHTML += `<span onclick='reversi("1-${Number(i+1)}")' id='1-${Number(i+1)}'>${String.fromCharCode(i + 65)}-1</span>`;
        document.getElementById("g2").innerHTML += `<span onclick='reversi("2-${Number(i+1)}")' id='2-${Number(i+1)}'>${String.fromCharCode(i + 65)}-2</span>`;
        document.getElementById("g3").innerHTML += `<span onclick='reversi("3-${Number(i+1)}")' id='3-${Number(i+1)}'>${String.fromCharCode(i + 65)}-3</span>`;
        document.getElementById("g4").innerHTML += `<span onclick='reversi("4-${Number(i+1)}")' id='4-${Number(i+1)}'>${String.fromCharCode(i + 65)}-4</span>`;
        document.getElementById("g5").innerHTML += `<span onclick='reversi("5-${Number(i+1)}")' id='5-${Number(i+1)}'>${String.fromCharCode(i + 65)}-5</span>`;
        document.getElementById("g6").innerHTML += `<span onclick='reversi("6-${Number(i+1)}")' id='6-${Number(i+1)}'>${String.fromCharCode(i + 65)}-6</span>`;
        document.getElementById("g7").innerHTML += `<span onclick='reversi("7-${Number(i+1)}")' id='7-${Number(i+1)}'>${String.fromCharCode(i + 65)}-7</span>`;
        document.getElementById("g8").innerHTML += `<span onclick='reversi("8-${Number(i+1)}")' id='8-${Number(i+1)}'>${String.fromCharCode(i + 65)}-8</span>`;



    }
    const white1 = document.createElement("h1");
    document.getElementById("4-5").appendChild(white1);
    white1.id = "h4-5";
    white1.style.backgroundColor = "white";
    white1.innerText = "o ";
    white1.style.color = "white";
    white.push(white1);



    const white2 = document.createElement("h1");
    document.getElementById("5-4").appendChild(white2);
    white2.id = "h5-4";
    white2.style.backgroundColor = "white";
    white2.innerText = "o ";
    white2.style.color = "white";
    white.push(white2);




    const black1 = document.createElement("h1");
    document.getElementById("4-4").appendChild(black1);
    black1.id = "h4-4";
    black1.style.backgroundColor = "black";
    black1.innerText = "o";
    black1.style.color = "black";
    black.push(black1);



    const black2 = document.createElement("h1");
    document.getElementById("5-5").appendChild(black2);
    black2.id = "h5-5";
    black2.style.backgroundColor = "black";
    black2.innerText = "o ";
    black2.style.color = "black";
    black.push(black2);


}
var index = 0;

function clicki(id) {
    if (document.getElementById(id).getElementsByTagName("h1").length !== 0) {
        alert("error");

    } else {

        if (Number(index) % 2 === 0) {
            const whitee = document.createElement("h1");
            document.getElementById(id).appendChild(whitee);
            whitee.id = "h" + id;
            whitee.style.backgroundColor = "white";
            whitee.innerText = "o ";
            whitee.style.color = "white";
            white.push(whitee);
            index++;
        } else {
            const blackk = document.createElement("h1");
            document.getElementById(id).appendChild(blackk);
            blackk.id = "h" + id;
            blackk.style.backgroundColor = "black";
            blackk.innerText = "o ";
            blackk.style.color = "black";
            black.push(blackk);
            index++;

        }
    }
}

function reversigame(id){
    const idd=document.getElementById(id);
    const idc=idd.id.charAt(2);
    const idr=idd.id.charAt(0);
    const mohre=document.getElementById("h"+id);
    const color=mohre.style.color;
    if(color =="white")
    {
        for(let i=0;i<black.length;i++)
        {
            const row= black[i].id.charAt(0);
            const col=black[i].id.charAt(2);
            const sum=Number(col)+Number(row);
            const mine=Number(col)-Number(row);
            if(row==idr ||col==idc ||sum ==Number(idc+idr)||mine==Number(idc-idr))
            {
                black[i].id.style.color="white";
                white.push(black[i]);
                black.pop(black[i]);
            }
           
        }
    }
    else{
        for(let i=0;i<white.length;i++)
        {
            const row= black[i].id.charAt(0);
            const col=black[i].id.charAt(2);
            const sum=Number(col)+Number(row);
            const mine=Number(col)-Number(row);
            if(row==idr ||col==idc ||sum ==Number(idc+idr)||mine==Number(idc-idr))
            {
                white[i].id.style.color="black";
                black.push(white[i]);
                white.pop(white[i]);
            }
        }
    }
}

function reversi(id) {
    clicki(id);
    reversigame(id);
    console.log(white);
    console.log(black);
}
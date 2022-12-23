//----------------4-----------------
const butColor = document.getElementById("buttonColor");

butColor.onclick = (e) =>{
    const mainDiv = document.getElementById("containerArchiveColor");
    mainDiv.style['margin-top'] = '30px';
    mainDiv.style.display = 'flex';
    mainDiv.style['flex-wrap'] = 'wrap';
    // mainDiv.style['justify-content'] = 'space-between';

    //div main
    const newDiv = document.createElement("div");
    //newDiv.setAttribute("id", "containerColor");
    newDiv.style.display = 'flex';
    newDiv.style['margin-left'] = '23px';
    newDiv.style['margin-right'] = '23px';
    newDiv.style['margin-bottom'] = '10px';
    document.getElementById("containerArchiveColor").appendChild(newDiv);

    //divColor with color
    const r = document.getElementById("colorR").value;
    const g = document.getElementById("colorG").value;
    const b = document.getElementById("colorB").value;

    const newDivColor = document.createElement("div");
    //newDivColor.setAttribute("id", "colorDiv");
    newDivColor.style.width = '40px';
    newDivColor.style.height = '40px';
    newDivColor.style.border = '1px solid black';
    newDivColor.style['background-color'] = `rgb(${r},${g},${b})`;

    newDiv.appendChild(newDivColor);

    //divInfo with info
    const newDivInfo = document.createElement("div");
    //newDivInfo.setAttribute("id", "infoDiv");
    newDivInfo.style.width = '160px';
    newDivInfo.style.height = '40px';
    newDivInfo.style.border = '1px solid black';
    newDivInfo.style['font-size'] = '16px';
    newDivInfo.style.display = 'flex';
    newDivInfo.style['justify-content'] = 'center';
    newDivInfo.style['align-items'] = 'center';

    newDivInfo.innerText = `RGB (${r}, ${g}, ${b})`;

    newDiv.appendChild(newDivInfo);
    
    console.log(document.getElementById("containerArchiveColor"));
}

//----------------5-----------------
const butAdd = document.getElementById("addQuation");

butAdd.onclick = (e) =>{
    const quation = document.getElementById("quationId").value;
    const corAnswer = document.getElementById("corAnswerId").value;
    const wrAnswer = document.getElementById("wrAnswerId").value;

    const newDivQ = document.createElement("div");
    // newDivQ.setAttribute("id", "divMainQ");
    newDivQ.style['margin-bottom'] = '10px';
    document.getElementById("containerQuations").appendChild(newDivQ);

    console.log(document.getElementById("containerQuations"));

    //create p1
    const parag1 = document.createElement("p");
    parag1.style['text-decoration'] = 'underline';
    parag1.style['margin-bottom'] = '5px';
    parag1.innerText = quation;
    newDivQ.appendChild(parag1);

    //create p2
    const parag2 = document.createElement("p");
    parag2.innerText = `Correct answer: ${corAnswer}`;
    parag2.style['margin-bottom'] = '5px';
    newDivQ.appendChild(parag2);

    //create p3
    const parag3 = document.createElement("p");
    parag3.innerText = `Wrong answer: ${wrAnswer}`;
    parag3.style['margin-bottom'] = '10px';
    newDivQ.appendChild(parag3);
}
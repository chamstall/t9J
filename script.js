let tab1 = [];
let tab2 = [];
let tBody = document.querySelector("#tbody");

// tableau 1 
alert("Nous allons vous presentez 3 boites de dialogues et vous devez saisir à chaque fois un nombre positif de votre choix! , veuillez appuyer sur OK pour commencez à saisir les nombres");

let saisi1;
do {
    saisi1 = prompt("saisissez le premier nombre positif de votre choix !");
} while (Math.sign(saisi1) == -1 || isNaN(saisi1));
if (saisi1 == "") {
    alert("Vous n'avez rien saisi ! ");
} else if (saisi1 == null) {
    alert("vous avez annuler !")
} else {
    tab1.push(saisi1);
}

let saisi2;
do {
    saisi2 = prompt("saisissez le  deuxieme nombre positif de votre choix !");
} while (Math.sign(saisi2) == -1 || isNaN(saisi2));
if (saisi2 == "") {
    alert("Vous n'avez rien saisi ! ");
} else if (saisi2 == null) {
    alert("vous avez annuler !")
} else {
    tab1.push(saisi2);
}

let saisi3;
do {
    saisi3 = prompt("saisissez le troisième nombre positif de votre choix !");
} while (Math.sign(saisi3) == -1 || isNaN(saisi3));
if (saisi3 == "") {
    alert("Vous n'avez rien saisi ! ");
} else if (saisi3 == null) {
    alert("vous avez annuler !")
} else {
    tab1.push(saisi3);
}
if(saisi1 !== "" && saisi2 !== "" && saisi3 !== ""){
    let h2 = document.createElement("h2");
        h2.textContent = " Votre tableau de nombres positifs "
        tBody.appendChild(h2);
    
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.textContent = tab1[0];
        let cell2 = document.createElement("td");
        cell2.textContent = tab1[1];
        let cell3 = document.createElement("td");
        cell3.textContent = tab1[2];
    
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        tBody.appendChild(row);
        console.log(tab1);

        let tab3 = tab1.slice();
        console.log(tab3);
        let H2 = document.createElement("h2");
        H2.textContent = " Copie du tableau de nombres positifs "
        tBody.appendChild(H2);

        let Row = document.createElement("tr");
        let data1 = document.createElement("td");
        data1.textContent = tab3[0];
        let data2 = document.createElement("td");
        data2.textContent = tab3[1];
        let data3 = document.createElement("td");
        data3.textContent = tab3[2];

        Row.appendChild(data1);
        Row.appendChild(data2);
        Row.appendChild(data3);
        tBody.appendChild(Row);
}

// tableau 2
alert("Bien , maintenant , nous allons vous presentez à nouveau 3 boites de dialogues et vous devez saisir à chaque fois un nombre négatif de votre choix! , veuillez appuyer sur OK pour commencez à saisir les nombres");

let saisi4;
do {
    saisi4 = prompt("saisissez le premier nombre négatif de votre choix !");
} while (Math.sign(saisi4) == 1 || isNaN(saisi4));
if (saisi4 == "") {
    alert("Vous n'avez rien saisi ! ");
} else if (saisi4 == null) {
    alert("vous avez annuler !")
} else {
    tab2.push(saisi4);
}

let saisi5;
do {
    saisi5 = prompt("saisissez le  deuxieme nombre négatif de votre choix !");
} while (Math.sign(saisi5) == 1 || isNaN(saisi5));
if (saisi5 == "") {
    alert("Vous n'avez rien saisi ! ");
} else if (saisi5 == null) {
    alert("vous avez annuler !")
} else {
    tab2.push(saisi5);
}

let saisi6;
do {
    saisi6 = prompt("saisissez le troisième nombre négatif de votre choix !");
} while (Math.sign(saisi6) == 1 || isNaN(saisi6));
if (saisi6 == "") {
    alert("Vous n'avez rien saisi ! ");
} else if (saisi6 == null) {
    alert("vous avez annuler !")
} else {
    tab2.push(saisi6);
}
if(saisi4 !== "" && saisi5 !== "" && saisi6 !== ""){
    let h2 = document.createElement("h2");
        h2.textContent = " Votre tableau de nombres négatifs "
        tBody.appendChild(h2);
    
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.textContent = tab2[0];
        let cell2 = document.createElement("td");
        cell2.textContent = tab2[1];
        let cell3 = document.createElement("td");
        cell3.textContent = tab2[2];
    
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        tBody.appendChild(row);
        console.log(tab2);

        let tab4 = tab2.fill("0");
        console.log(tab4);
        let H2 = document.createElement("h2");
        H2.textContent = " Votre tableau de nombres négatifs remplacés par des zéros"
        tBody.appendChild(H2);
    
        let Row = document.createElement("tr");
        let data1 = document.createElement("td");
        data1.textContent = tab4[0];
        let data2 = document.createElement("td");
        data2.textContent = tab4[1];
        let data3 = document.createElement("td");
        data3.textContent = tab4[2];
    
        Row.appendChild(data1);
        Row.appendChild(data2);
        Row.appendChild(data3);
        tBody.appendChild(Row);
}
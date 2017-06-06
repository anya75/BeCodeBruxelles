
function choixOrdi(){
var n=0;
n=Math.floor(Math.random() * (2));
    if (n == 1)
        ordi = "pierre";
    else if (n==2)
        ordi = "papier";
    else if (n==3)
        ordi = "ciseaux";
    return ordi;
}
function choixUtilisateur(){
	var jeu= array["feuille","pierre","ciseaux"];
	var joueur= prompt("donner votre proposition");
	for (var i = 0, c = jeu.length; i < c; i++){ 
		if (joueur!==jeu[i]){
			return joueur;
		} 
		else console.log(rejouer);
	}

}


function compare(){
	var a=choixOrdi();
	var b=choixUtilisateur();

/*---------------------*/
if ((a==="pierre")&&(b==="ciseaux"))
    console.log("Vous avez gagne.");
else if ((a == "pierre")&&(b == "papier"))
    console.log("Vous avez perdu.");
else if ((a == "pierre")&&(b == "pierre"))
    console.log("Egalite.")
 /*-------------------------*/
if ((a == "papier")&&(b == "pierre"))
    console.log("Vous avez gagne.");
else if ((a == "papier")&&(b == "ciseaux"))
    console.log("Vous avez perdu.");
else if ((a == "papier")&&(b == "papier"))
    console.log("Egalite.");
/*-----------------------------*/ 
if ((a == "ciseaux")&&(b == "papier"))
    console.log("Vous avez gagne.");
else if ((a == "ciseaux")&&(b == "pierre"))
    console.log("Vous avez perdu.");
else if ((a == "ciseaux")&&(b == "ciseaux"));
    console.log("Egalite.");
}









 	

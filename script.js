// Exercice1
let dateActuel = new Date().getFullYear();
let dateDeNaissanceP1 = prompt("Entrer la date de naissance de la premiere personne")
let dateDeNaissanceP2 = prompt("Entrer la date de naissance de la deuxieme personne")
// verifier si les valeurs entrées sont des nombres
if(!Number(dateDeNaissanceP1) || !Number(dateDeNaissanceP2)) {
    console.log('La date de naissance doit etre un nombre et de format YYYY')
  }else{
    let agePersonne1 = dateActuel - dateDeNaissanceP1
    let agePersonne2 = dateActuel - dateDeNaissanceP2
    let dateExact; //le Nombre d'année ajouté sur l'année actuelle pour que lepersonnage2 ait la moitié de l'age du personnage1 
    if (agePersonne1 > agePersonne2) {
        dateExact = agePersonne1 - 2*agePersonne2;
    }
    else {
        dateExact = agePersonne2 - 2*agePersonne1;
    }
    console.log(dateExact)
    console.log(dateActuel)
    let dateMoitiePersonne1 = dateActuel + dateExact
    let message = "L'année à laquelle l'age de la personne 2 est la moitié de l'age de la personne 1 est " + String(dateMoitiePersonne1)
    console.log(dateMoitiePersonne1)
    alert(message);
  }  


// Exercice2
//sans regex
const codePostalSansRegex = prompt(" entrer le code postal")
if(String(codePostalSansRegex).length != 5 ||  !Number(codePostalSansRegex)){
    console.log("error")
} else {
    console.log("succès")
}

// avec regex
const codePostalAvecRegex = prompt(" entrer le code postal")
const numberRegex = /^[\d+]{5}$/;  //peut contenir que des chiffres et le nombre de caractere precis
if(numberRegex.test(codePostalAvecRegex)){
    console.log("succès")
} else {
    console.log("error")
}


// Exercice3
const motEntree = prompt("Veillez entrer un mot")
const motSansVoyelle = motEntree.replace(/[aeiou]/gi, '');
console.log("le mot sans les voyelles est " +motSansVoyelle);
//bonus
const a = 1
const e = 2
const i= 3
const o = 4
const u = 5
const  motSansVoyelleA = motEntree.replace(/[a]/gi, a)
const  motSansVoyelleAE = motSansVoyelleA.replace(/[e]/gi, e)
const  motSansVoyelleAEI = motSansVoyelleAE.replace(/[i]/gi, i)
const  motSansVoyelleAEIO = motSansVoyelleAEI.replace(/[o]/gi, o)
const  motSansVoyelleAEIOU = motSansVoyelleAEIO.replace(/[u]/gi, u)
console.log("Le nouveau mot apres avoir remplacé les voyelles par des caracteres est " +motSansVoyelleAEIOU)







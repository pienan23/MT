var inputpassword=document.querySelector('#psw');
var message=document.querySelector('.message');

var minuscule=document.getElementById('letter');
var majuscule=document.querySelector('#capital');
var chiffre=document.querySelector('#number');
var longeur=document.querySelector('#lenght');


// lorsque l'utilisateur click sur le champs de mots de passe
inputpassword.onfocus=function() {
    message.style.display='block';
}

// lorsque l'utilisateur click  en dehors du  champs de mots de passe
inputpassword.onblur=function(){
    message.style.display='none';
}

//lorsque l'utisateur commence a taper quelque chose dans le champs mots de passe
inputpassword.onkeyup=function(){

    var lowercaseletter= /[a-z]/g
    if (inputpassword.value.match(lowercaseletter)) {
        // si la champs contient une lettre minuscule supprimer invalide et mettre valide
        minuscule.classList.remove('invalidé');
        minuscule.classList.add('validé');
    }
    else{

        minuscule.classList.remove('validé');
        minuscule.classList.add('invalidé');
    }

    var uppercase= /[A-Z]/g;
    if (inputpassword.value.match(uppercase)) {
        // si la champs contient une lettre minuscule supprimer invalide et mettre val
        majuscule.classList.remove('invalidé');
        majuscule.classList.add('validé');
    }
    else{

        majuscule.classList.remove('validé');
        majuscule.classList.add('invalidé');
    }

    var numbercase= /[0-9]/g;
    if (inputpassword.value.match(numbercase)) {
        // si la champs contient une lettre minuscule supprimer invalide et mettre valide
        chiffre.classList.remove('invalidé');
        chiffre.classList.add('validé');
    }
    else{

        chiffre.classList.remove('validé');
        chiffre.classList.add('invalidé');
    }

    if (inputpassword.value.length >=8) {
        // si la champs contient une lettre minuscule supprimer invalide et mettre valide
        longeur.classList.remove('invalidé');
        longeur.classList.add('validé');
    }
    else{

        longeur.classList.remove('validé');
        longeur.classList.add('invalidé');
    }

}

function verifierMotDePasse(mdp) {
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    }
    return false;
}

let mdp = prompt("Entrez votre mot de passe : ");

if (verifierMotDePasse(mdp)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}

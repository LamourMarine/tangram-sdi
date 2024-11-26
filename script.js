document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.classList.add("turtle"); // Ajouter la classe "square" par défaut
});
    

    const element = document.querySelector("body");
    
    // Récupération des balises bouton de la navbar
    const navbuttons = document.querySelectorAll("nav button");
    
    // Créer un tableau avec les noms des formes
    const forms2 = ["square", "boat", "duck", "cat", "heart", "swan", "turtle", "mystery1", "mystery2", "mystery3"];
    let forms = "";
    
    // Boucle pour attribuer les noms des formes aux boutons
    for (let i = 0; i < navbuttons.length; i++) {
        
    
        // Écouteur d'événement pour chaque bouton
        navbuttons[i].addEventListener("click", () => {
            forms = forms2[i];  // Met à jour la variable "forms" avec la forme correspondante
            console.log("Form selected:", forms);  // Affiche la forme choisie dans la console
            switchForm();        // Appelle la fonction pour basculer la classe en fonction de "forms"
        });
    }
    
    // Fonction pour basculer la classe du conteneur en fonction de "forms"
    function switchForm() {
        const container = document.querySelector(".container");
    
        // Supprime d'abord toutes les anciennes classes de formes
        container.classList.remove("square", "boat", "duck", "cat", "heart", "swan", "turtle", "mystery1", "mystery2", "mystery3");
    
        // Affiche la classe actuelle du conteneur pour vérifier le changement
        console.log("Before switch, classes: ", container.classList);
    
        // Ajoute la nouvelle classe en fonction de "forms"
        switch (forms) {
            case "cat":
                container.classList.add("cat");
                break;
    
            case "boat":
                container.classList.add("boat");
                break;
    
            case "swan":
                container.classList.add("swan");
                break;
    
            case "duck":
                container.classList.add("duck");
                break;
    
            case "heart":
                container.classList.add("heart");
                break;
    
            case "turtle":
                container.classList.add("turtle");
                break;
    
            case "mystery1":
                container.classList.add("mystery1");
                break;
    
            case "mystery2":
                container.classList.add("mystery2");
                break;
    
            case "mystery3":
                container.classList.add("mystery3");
                break;
    
            default:
                container.classList.add("square");
        }
    
        // Vérifie après le switch si la classe est bien ajoutée
        console.log("After switch, classes: ", container.classList);
    }
    

document.querySelector('.darkmode').onclick = 
toggleDarkMode;
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}


function validation(){

	var nom = document.getElementById("Nom").value.length;

if (nom < 5){

	document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";

}

	

}

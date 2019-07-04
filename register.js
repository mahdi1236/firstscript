function ajout(){
var listpersonne=JSON.parse(localStorage.getItem("personne"));
if(listpersonne==null){
    listpersonne=[]
}  
var personne={
email : document.getElementById('email').value,
nom : document.getElementById('lname').value,
pass : document.getElementById('password').value,
pernom : document.getElementById('fname').value,
id: Math.floor(Math.random() *100000000) + 1
};
listpersonne.push(personne);
localStorage.setItem("personne",JSON.stringify(listpersonne));}








function ajout(){
    var listpersonne=JSON.parse(localStorage.getItem("personne"));
    if(listpersonne==null){
        listpersonne=[]
    }  
    var personne={
    nom : document.getElementById('lname').value,
    pass : document.getElementById('password').value,
    };
    var ok=false;
    var identite;
listpersonne.forEach(element => {
if((element.nom==personne.nom)&&(element.pass==personne.pass))
{ok =true}
identite=element.id;
});
if (ok){
    alert('welcome')
    window.location="home.html"
    var id=JSON.parse(localStorage.getItem('identity'));
    if(id==null){
        id=[];
    }
    id.push(identite)  ;
    localStorage.setItem("identity",JSON.stringify(id));
}
else{
    alert('erreur')
}}
function homeconnexion(){
    var clickvalue = document.getElementById('mahdi').value;
    if(clickvalue == ''){
        alert("you must login");
        window.location="board.html"
    }else{
        alert(welcome)
    }
}

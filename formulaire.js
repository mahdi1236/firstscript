function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
    }
} 
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    function validate() {
     var $result = $("#result");
     var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
     } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
    }
  var tab=[];
  function validate(){
    var personne ={
      nom : document.getElementById('nom').value,
      email : document.getElementById('email').value,
      password : document.getElementById('password').value,
      prenom : document.getElementById('prenom').value
    };
    tab.push(personne);
    afficher();
  }
  function afficher(){
  var doc = document.getElementById('afficher');
  html= `<table>
       <tr>
           <th>nom</th>
           <th>prenom</th>
           <th>email<th>
       </tr>`
  for(var i=0; i<tab.length;i++){
  html+= `<tr id=${(i)}>
  <td>${tab[i].nom}</td>
  <td>${tab[i].pernom}</td> 
  <td>${tab[i].email}</td> 
  <td><button type="button" onclick="update(${(i)})">update</td>
  <td><button type="button" onclick="supprimer(${(i)})">delete</td>
  </tr>`; 
}
html+= `</table>`;
doc.innerHTML=html;
}
  function update(k){
    var html =   `<td><input type"text" id="nom${k}" value="${tab[k].nom}"></td>
                  <td><input type"text" id="prenom${k}" value="${tab[k].prenom}"></td>
                  <td><input type"text" id="email${k}" value="${tab[k].email}"></td>
                  <td><button type="button" onclick="valider(${k})">valider</td>
                  <td><button type="button" onclick="annuler(${k})">annuler</td>`;
                  document.getElementById(`${k}`).innerHTML=html;
}
  function supprimer(p){
    tab.splice(p,1)
    afficher();
}
  function annuler(i){
  
    html= `<tr id=${(i)}>
    <td>${tab[i].nom}</td>
    <td>${tab[i].pernom}</td> 
    <td>${tab[i].email}</td> 
    <td><button type="button" onclick="update(${(i)})">update</td>
    <td><button type="button" onclick="supprimer(${(i)})">delete</td>
    </tr>`; 
    document.getElementById(`${i}`).innerHTML=html;
  }
  function valider(k){
    var nom_val=document.getElementById("nom_text"+k).value;
    var prenom_val=document.getElementById("prenom_text"+k).value;
    var email_val=document.getElementById("email_email"+k).value;

    document.getElementById("nom_row"+k).innerHTML=nom_val;
    document.getElementById("prenom_row"+k).innerHTML=prenom_val;
    document.getElementById("email_row"+k).innerHTML=email_val;

    document.getElementById("update_button"+k).style.display="block";
    document.getElementById("valider_button"+k).style.display="none";
    afficher();
  }
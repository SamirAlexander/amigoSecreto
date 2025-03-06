// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const friendsList =[];
const regex = /^[A-Za-z]+$/;



function agregarAmigo(params) {
  const nameFriend = document.getElementById('amigo').value;
  document.getElementById('amigo').value = '';
  if (regex.test(nameFriend)) {    
    nameFriendCapitalized = nameFriend.charAt(0).toUpperCase() + nameFriend.slice(1);
    console.log(nameFriendCapitalized);regex.test(value);

  }
  else {
    alert('Ingrese un nombre válido');
    
  }


}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const friendsList =[];
const regex = /^[A-Za-z]+$/;

function agregarAmigo() {
  const nameFriend = document.getElementById('amigo').value;
  let nameFriendCapitalized = '';
  document.getElementById('amigo').value = '';
  if (regex.test(nameFriend)) {    
    nameFriendCapitalized = nameFriend.charAt(0).toUpperCase() + nameFriend.slice(1);
    friendsList.push(nameFriendCapitalized);    
    friendRenderList();
  }
  else {
    alert('Ingrese un nombre válido');    
  }
}

function friendRenderList() {
  const title = document.getElementById('listaAmigos');
  title.innerHTML = `<h2>Lista de amigos</h2>`;
  const list = document.getElementById('resultado');
  list.innerHTML = '';
  friendsList.forEach((friend) => {
    const item = document.createElement('li');
    item.textContent = friend;
    list.appendChild(item);
  });  
}




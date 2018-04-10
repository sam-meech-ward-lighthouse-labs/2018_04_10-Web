document.addEventListener("DOMContentLoaded", () => {
  // console.log(document.body.children);

  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem);


  var elem = document.querySelector('.sidenav');
  var instance = M.Sidenav.init(elem);


  const friendsList = document.querySelector("#friends-list");

  let form = document.querySelector('form');
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const listItem = document.createElement('li');
    const textField = document.querySelector("#friend-input");    
    listItem.innerText = textField.value;

    friendsList.appendChild(listItem);
  });
});


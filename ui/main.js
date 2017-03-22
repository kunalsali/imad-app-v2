//counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
  //create request object
  var request = new XMLHttpRequest();
  
  //capture the responce and store it in variable
  request.onreadystatechange = function () {
  if (request.readyState === XMLHttpRequest.DONE) {
      //take some action
      if (request.status === 200) {
          var counter = request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
      }
   }
     //not done yet
  };
  
  //make the request
  request.open('GET', 'http://kunalsali.imad.hasura-app.io/counter', true);
  request.send(null);
};
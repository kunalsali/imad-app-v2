//counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
  //create request object
  var request = new XMLHttpRequest.DONE();
  
  //capture the responce and store it in variable
  request.onreadystatechange = function () {
  if (request.readystate === XMLHttpRequest.DONE) {
      //take some action
      if (request.status === 200) {
          var counter = request.responceText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
      }
   }
     //not done yet
  };
  
  //make the request
  request.open('GET', 'http://kunalsali.imad.hasura-app.io/', true);
  request.send(null);
};
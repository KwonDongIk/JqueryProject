function read(){
fetch('http://localhost:8081/board/11/replies')
  .then((response) => response.json())
  .then((json) => console.log(json));
}



function register(){
fetch('http://localhost:8081/board/11/replies', {
  method: 'POST',
  body: JSON.stringify({
    reply: 'fetch test',
    replyer: 'fetch test',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

register();

function register2(){
fetch('http://localhost:8081/board/11/replies', {
  method: 'POST',
  body: "reply=RequestBodyX&replyer=RequestBodyX",
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

register2();
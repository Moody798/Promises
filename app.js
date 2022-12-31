let emailRef = document.querySelector(".email");
console.log(emailRef);
fetch("https://jsonplaceholder.typicode.com/users/1").then(response =>{
    response.json().then(data =>{
        console.log(data);
        emailRef.innerHTML = data.email
    });
})
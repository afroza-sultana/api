function loadUser (){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUser(data))
};

function displayUser(data){
    const users= document.getElementById("users");
    for(let user of data){
        console.log(data)
        const li = document.createElement("li");
        li.innerText = `name: ${user.name} email: ${user.email}`
        users.appendChild(li);
    }
}
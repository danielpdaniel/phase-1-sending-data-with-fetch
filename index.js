const { stringifyRequest } = require("nock/lib/common")

// Add your code here
function submitData(name, email){
    const postObject = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        })
    }
return fetch("http://localhost:3000/users", postObject)
.then(response => response.json())
.then(object => {
    let objId = document.createElement("div");
    objId.className = "idNumber";
    objId.textContent = object.id;
    document.body.appendChild(objId);
    console.log(objId); 
    })
.catch(function(error){
    let errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.textContent = `Unauthorized Access: ${error.message},`;
    document.body.appendChild(errorMessage);
})
}
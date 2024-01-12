const registroBtn = document.getElementById('submit-btn');
const nombreVecinoInput = document.getElementById('nombre');
const apellidosVecinoInput = document.getElementById('apellidos');
const emailVecinoInput = document.getElementById('email');
const passwordVecinoInput = document.getElementById('password');
const tipoCuentaRadio = document.querySelector('input[name="editList"]:checked');

registroBtn.addEventListener('click', async function(event) {
  event.preventDefault(); 
  const nombreVecino = nombreVecinoInput.value.trim().toLowerCase();
  const apellidosVecino = apellidosVecinoInput.value.trim().toLowerCase();
  const emailVecino = emailVecinoInput.value.trim();
  const passwordVecino = passwordVecinoInput.value.trim();
  const tipoCuentaValue = tipoCuentaRadio ? tipoCuentaRadio.value : null;
  // Rest of the code...
    let valorRuta = "";
    if(tipoCuentaValue === 'presidente'){
        valorRuta = "president";
    }else if(tipoCuentaValue === 'vecino'){
        valorRuta = "neighbor";
    }
    try {
        console.log("https://vecino-conecta-backend-api.vercel.app/"+valorRuta+"/create-"+valorRuta);
        const response = await fetch(`https://vecino-conecta-backend-api.vercel.app/${valorRuta}/create-${valorRuta}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombreVecino, apellidosVecino,emailVecino, passwordVecino })
        });
        const data = await response.json();
        if (data.code == 201) window.location.href = "https://vecino-conecta-frontend-api.vercel.app/inicio_sesion.html";
    } catch (error) {
        console.log(error);
    }
});

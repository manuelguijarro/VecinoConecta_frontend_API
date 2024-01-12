const registroBtn = document.getElementById('submit-btn');

registroBtn.addEventListener('click',async  function(event)  {
    event.preventDefault(); // Prevent form submission
    // Supongamos que tienes los siguientes campos en tu formulario
    const nombreVecino = document.getElementById('nombre').value.trim().toLowerCase();

    const apellidosVecino = document.getElementById('apellidos').value.trim().toLowerCase();
    const emailVecino = document.getElementById('email').value.trim();
    const passwordVecino = document.getElementById('password').value.trim();

    // Obtén el valor del input de tipo radio seleccionado
    const tipoCuenta = document.querySelector('input[name="editList"]:checked');
    const tipoCuentaValue = tipoCuenta ? tipoCuenta.value : null;
    console.log(nombreVecino,apellidosVecino,emailVecino,passwordVecino,tipoCuentaValue);
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
        console.log(data);
        if (data.code == 201) {
            console.log("Success:", data);
            window.location.href = "https://vecino-conecta-frontend-api.vercel.app/inicio_sesion.html";
        } else {
            console.log(data);
        }
        
        // Reset the form
        document.getElementById("registro-form").reset();
    } catch (error) {
        console.log(error);
    }
});

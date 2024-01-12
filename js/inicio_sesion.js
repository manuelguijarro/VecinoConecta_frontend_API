const getElement = (id) => document.getElementById(id);
const getRadioValue = (name) => document.querySelector(`input[name="${name}"]:checked`).value;



const makeRequest = async (url, method, data) => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(error);
    }
  };



  const inicioSesionBtnClickHandler = async (event) => {
    event.preventDefault();
    const tipoCuentaValue = getRadioValue("editList");
  
    let valorRuta = tipoCuentaValue === 'presidente' ? 'president' : 'neighbor';
    if (tipoCuentaValue === 'presidente') {
      
    } else {
      const emailVecino = emailVecinoInput.value.trim();
      const passwordVecino = passwordVecinoInput.value.trim();
      try {
        const apiUrl = `https://vecino-conecta-backend-api.vercel.app/${valorRuta}/check-${valorRuta}`;
        console.log(apiUrl);
    
        const data = await makeRequest(apiUrl, "POST", { emailVecino, passwordVecino });
    
        // Después de verificar el usuario en el backend y obtener el nombre de usuario
const dashboardUrl = `https://vecino-conecta-frontend-api.vercel.app/neighbor/dashboard.html`;

if (data.code === 200) {
    // Obtén el nombre de usuario del resultado del backend
    const emailVecino = data.emailVecino; // Reemplaza con el campo correcto

    // Redirige al usuario a la URL del dashboard
    window.location.href = `${dashboardUrl}?email=${emailVecino}`;
}

// En el dashboard.html, recupera el nombre de usuario de la URL y actualiza el contenido
const params = new URLSearchParams(window.location.search);
const nombreVecino = params.get('email');

if (nombreVecino) {
    document.getElementById('nombreVecino').innerText = nombreVecino;
}

      } catch (error) {
        console.log(error);
      }
    }
    
    
  
    
  };
  
  const inicioSesionBtn = getElement('submit-btn');
  const emailVecinoInput = getElement('email');
  const passwordVecinoInput = getElement('password');
  
  inicioSesionBtn.addEventListener('click', inicioSesionBtnClickHandler);
  

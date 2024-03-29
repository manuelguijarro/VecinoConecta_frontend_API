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

const registroBtnClickHandler = async (event) => {
  event.preventDefault();
  const tipoCuentaValue = getRadioValue("editList");

  let valorRuta = tipoCuentaValue === 'presidente' ? 'president' : 'neighbor';
  if (tipoCuentaValue === 'presidente') {
    
  } else {
    const nombreVecino = nombreVecinoInput.value.trim().toLowerCase();
    const apellidosVecino = apellidosVecinoInput.value.trim().toLowerCase();
    const emailVecino = emailVecinoInput.value.trim();
    const passwordVecino = passwordVecinoInput.value.trim();
    try {
      const apiUrl = `https://vecino-conecta-backend-api.vercel.app/${valorRuta}/create-${valorRuta}`;
      console.log(apiUrl);
  
      const data = await makeRequest(apiUrl, "POST", { nombreVecino, apellidosVecino, emailVecino, passwordVecino });
  
      if (data.code === 201) {
          //add time
        window.location.href = "https://vecino-conecta-frontend-api.vercel.app/inicio_sesion.html";
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  

  
};

const registroBtn = getElement('submit-btn');
const nombreVecinoInput = getElement('nombre');
const apellidosVecinoInput = getElement('apellidos');
const emailVecinoInput = getElement('email');
const passwordVecinoInput = getElement('password');

registroBtn.addEventListener('click', registroBtnClickHandler);

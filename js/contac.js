const sendNotification = (name, phone, mensaje, email) =>  {
  const message = `Hola! \nMe quiero comunicar con ustedes para solicitar información sobre sus servicios. \n\n
                        Mi Nombre es: ${name}
                        Teléfono: ${phone}
                        Email: ${email}
                        Mensaje: ${mensaje}`.replace(/  +/g, '');

  //window.open(`https://api.whatsapp.com/send?phone=525583817789&text=${encodeURIComponent(message)}`, "_target")
  window.open(`mailto:contacto@juristasmx.com?subject=JURISTAS MEXICANOS ASOCIADOS&body=${encodeURIComponent(message)}`, "_target")
}

const submitForm = function(event) {
  event.preventDefault();
  const name= $("#name").val();
  const phone= $("#phone").val();
  const email= $("#email").val();
  const mensaje= $("#mensaje").val();
  document.getElementById("form__submit").reset();
  sendNotification(name, phone, mensaje, email);
};

// your form
var form = document.getElementById("form__submit");
// attach event listener
form.addEventListener("submit", submitForm, true);

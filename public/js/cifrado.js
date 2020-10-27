export default {
  listenerBotones(botones, chat) {
    botones.addEventListener('click', (e) => {
      if (e.target.type === 'submit') {
        let operacion = e.target.innerText;
        console.log(operacion);
        if (operacion == 'Encriptar') this.encriptarAdapter(chat);
        if (operacion == 'Desencriptar')
          this.desencriptarAdapter(chat, botones);
      }
    });
  },
  encriptarAdapter(chat) {
    let messages = chat.childNodes;
    botones.innerHTML = `<button class="btn btn-success">Desencriptar</button>`;

    messages.forEach((e) => {
      let mensajeDesencriptado = e.childNodes[3].childNodes[1].innerText;
      let desplazamiento = e.childNodes[3].childNodes[1].dataset.desplazamiento;
      e.childNodes[3].childNodes[1].innerText = this.encriptar(
        mensajeDesencriptado,
        desplazamiento
      );
    });
  },
  desencriptarAdapter(chat, botones) {
    let messages = chat.childNodes;
    botones.innerHTML = `<button class="btn btn-danger">Encriptar</button>`;

    messages.forEach((e) => {
      let mensajeDesencriptado = e.childNodes[3].childNodes[1].innerText;
      let desplazamiento = e.childNodes[3].childNodes[1].dataset.desplazamiento;
      e.childNodes[3].childNodes[1].innerText = this.desencriptar(
        mensajeDesencriptado,
        desplazamiento
      );
    });
  },
  encriptar(mensaje, desplazamiento) {
    //Letras en donde buscaremos el mensaje que nos llega
    const letras = 'abcdefghijklmnopqrstuvwxyz';

    //Recalculamos el desplazamiento para que nos de un numero menor a 27
    desplazamiento = ((desplazamiento % 26) + 26) % 26;

    //Hacemos un remplace de solo letas entre a-z que se encuentren en el mensaje
    return mensaje.replace(
      /[a-z]/gi,
      (letra) => letras[(letras.indexOf(letra) + desplazamiento) % 26]
    );
  },
  desencriptar(mensaje, desplazamiento) {
    //Letras en donde buscaremos el mensaje que nos llega
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    //Recalculamos el desplazamiento para que nos de un numero menor a 27

    desplazamiento = ((desplazamiento % 26) - 26) % 26;
    //Hacemos un remplace de solo letas entre a-z que se encuentren en el mensaje

    return mensaje.replace(
      /[a-z]/gi,
      (letra) => letras[(letras.indexOf(letra) - desplazamiento) % 26]
    );
  },
};

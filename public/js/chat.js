export default {
  listenerSendMessage(form, input, db, { encriptar }) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { value } = input;
      const username = sessionStorage.getItem('username');
      const desplazamiento = sessionStorage.getItem('desplazamiento');

      // Input vacio no se envia
      if (!value.trim()) return;

      let mensaje = encriptar(value.trim().toLowerCase(), desplazamiento);
      console.log(mensaje);
      db.collection('chat')
        .add({
          mensaje: mensaje,
          userName: username,
          desplazamiento,
          fecha: Date.now(),
        })
        .then(() => {
          input.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  listenerMessages(db, chat) {
    const userName = sessionStorage.getItem('username');

    db.collection('chat')
      .orderBy('fecha')
      .onSnapshot((query) => {
        chat.innerHTML = '';

        query.forEach((doc) => {
          if (doc.data().userName === userName) {
            chat.innerHTML += `<div class="mb-1">
            <div class="d-flex justify-content-end mt-1">
              <span class="text-secondary font-weight-bolder">Tú:</span>
            </div>
              <div class="d-flex justify-content-end mt-1">
                <p class="bg-success p-3 text-white mensaje__saliente" data-desplazamiento="${
                  doc.data().desplazamiento
                }">
                ${doc.data().mensaje.toLowerCase()}
                </p>
              </div>
            `;
          }

          if (doc.data().userName != userName) {
            chat.innerHTML += `<div class="mb-1">
          <span class="text-secondary font-weight-bolder">${
            doc.data().userName
          }:</span>
          <div class="d-flex justify-content-start mt-1 mb-0 pb-0">
            <p class="bg-info p-3 text-white mensaje__entrante" data-desplazamiento="${
              doc.data().desplazamiento
            }">
              ${doc.data().mensaje.toLowerCase()}
            </p>
          </div>`;
          }

          chat.scrollTop = chat.scrollHeight;
        });
      });
  },
};

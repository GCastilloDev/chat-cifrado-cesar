export default {
  listener(btn, db, listenerMessages, chat) {
    btn.addEventListener('click', () => {
      const userName = document.querySelector('#userName');
      const desplazamiento = document.querySelector('#desplazamiento');
      const btnModalClose = document.querySelector('#btnModalClose');

      const desplazamientoNumber = parseInt(desplazamiento.value);

      if (!userName.value.trim()) {
        alert('Campo Nombre de usuario requerido');
        return;
      }

      if (Number.isNaN(desplazamientoNumber)) {
        alert('Campo desplazamiento debe de ser un número entero');
        return;
      }

      this.guardarSessionStorage(userName.value, desplazamientoNumber);
      btnModalClose.click();
      listenerMessages(db, chat);
    });
  },
  guardarSessionStorage(userName, desplazamiento) {
    sessionStorage.setItem('username', userName);
    sessionStorage.setItem('desplazamiento', desplazamiento);
  },
};

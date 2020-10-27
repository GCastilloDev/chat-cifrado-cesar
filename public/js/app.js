import { db } from './firebase/firebaseConfig.js';
import chat from './chat.js';
import usuario from './datosUsuario.js';
import cifrado from './cifrado.js';

const formularioChat = document.querySelector('#formularioChat');
const inputChat = document.querySelector('#inputChat');
const btnModal = document.querySelector('#btnModal');
const btnIngresar = document.querySelector('#btnIngresar');
const botones = document.querySelector('#botones');
const chatContenedor = document.querySelector('#chat');

//Abrir el modal para ingresar los datos
btnModal.click();

// Administrar datos de usuario
usuario.listener(btnIngresar, db, chat.listenerMessages, chatContenedor);

// Listener para los botones encriptar y desencriptar
cifrado.listenerBotones(botones, chatContenedor);

chat.listenerSendMessage(formularioChat, inputChat, db, cifrado);

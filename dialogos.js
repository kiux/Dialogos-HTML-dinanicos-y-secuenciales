var ArregloDialogos = []; // Arreglo para recibir la lista de diálogos a mostrar / procesar
var ArregloOpciones = []; // Arreglo para almacenar las opciones elegidas en cada diálogo

function Iniciar() {
    ArregloDialogos = JSON.parse(document.getElementById('arreglo_dialogos').value);
    ArregloOpciones = [];
    MostrarDialogo(ArregloDialogos);
}

function MostrarDialogo(ArregloDialogos) {
    let Contenedor = document.getElementById('contenedor-dialogo');
    Contenedor.innerHTML = '';
    if (ArregloDialogos.length) {
        let Dialogo = ArregloDialogos[0];
        let Label = document.createElement('label');
        Label.textContent = `Digite la información para "${Dialogo}"`;
        Label.setAttribute('for', 'OpcionSeleccionada');
        let Input = document.createElement('input');
        Input.setAttribute('id', 'OpcionSeleccionada');
        let Button = document.createElement('button');
        Button.textContent = 'Continuar';
        Button.addEventListener('click', () => ProcesarRespuesta(Input.value));
        Contenedor.appendChild(Label);
        Contenedor.appendChild(Input);
        Contenedor.appendChild(Button);
        Input.focus();
    } else {
        let Texto1 = document.createElement('span');
        let Texto2 = document.createElement('span');
        Texto1.textContent = `Información a PROCESAR`;
        Texto2.textContent = ArregloOpciones.length ? `Parámetros recibidos (${ArregloOpciones})` : 'SIN Parámetros';
        Contenedor.appendChild(Texto1);
        Contenedor.appendChild(Texto2);
    }
}

function ProcesarRespuesta(Respuesta) {
    if (Respuesta.length) {
        ArregloOpciones.push(Respuesta);
        ArregloDialogos.shift();
        MostrarDialogo(ArregloDialogos);
    } else {
        let Contenedor = document.getElementById('contenedor-dialogo');
        Contenedor.innerHTML = '';
        let Span = document.createElement('span');
        Span.textContent = `El usuario decidió CANCELAR`;
        Contenedor.appendChild(Span);
    }
}

document.getElementById('boton_procesar').addEventListener('click', Iniciar);
let tabla = document.getElementById('table'); tabla
let tTotales = document.getElementById('tarTotal');
let tFin = document.getElementById('tarFin');
let tFal = document.getElementById('tarFal');
let guardar = document.getElementById('guardar');
let tIns = document.getElementById('tareaIns');


guardar.addEventListener('click', function () {
    if (tIns.value.trim() != "") {
        agregarTarea();
        cargarDatos();
    }
});

tabla.addEventListener('click',function(event){

    if(event.target.textContent === 'Eliminar'){
        event.target.parentElement.parentElement.remove();
    }

    actualizarDatos();
})

function agregarTarea() {
    let tr = document.createElement('tr');
    tr.classList.add('tarea');
    tr.innerHTML = `
                <th scope="row">
                    <div class="form-check">
                        <input class="form-check-input finalizada" type="checkbox" value="">
                        </label>
                    </div>
                </th>
                <td>${tIns.value}</td>
                <td><button type="button" class="btn m-2 btn-danger">Eliminar</button></td>
        `;

    tabla.appendChild(tr);

    tIns.value = '';
}


function cargarDatos() {

    let tareasFinalNum = 0;
    let tareasNum = 0;

    for (let x = 0; x < document.getElementsByClassName('form-check').length; x++) {
        if (document.getElementsByClassName('form-check')[x].children[0].checked) {
            tareasFinalNum += 1;
        }
    }

    tareasNum = document.getElementsByClassName('form-check').length;

    tTotales.innerHTML = tareasNum;
    tFin.innerHTML = tareasFinalNum;
    tFal.innerHTML = tareasNum - tareasFinalNum;

    localStorage.setItem('tarTotalStor', tTotales.innerHTML);
    localStorage.setItem('tarFin', tFin.innerHTML);
    localStorage.setItem('tarFal', tFal.innerHTML);
}



let nick = document.getElementById('nickname');
    function guardarN(){
    sessionStorage.setItem('nickname', nick.value);
};

if(sessionStorage.getItem('nickname') == null){
    nick.value = 'Usuario'
}else{
    nick.value = sessionStorage.getItem('nickname');
}

function borrar(){
    sessionStorage.removeItem("nickname");
}
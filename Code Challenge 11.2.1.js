document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("btnEnviar");
    let divresp = document.getElementById('respuesta')
    btn.addEventListener('click', () => {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const data = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(datos => {
            divresp.innerHTML=
            `<p>Nombre: ${data.nombre}</p>
            <p>Ap[ellido: ${data.apellido}</p>
            <p>Fecha De Nacimiento: ${data.fechaNacimiento}</p>
            `
            document.getElementById('nombre').value = "";
            document.getElementById('apellido').value = "";
            document.getElementById('fechaNacimiento').value = "";
            alert('Se envió correctamente');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

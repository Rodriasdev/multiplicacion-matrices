function crearMatrices() {
    const filas1 = parseInt(document.getElementById('filas').value);
    const columnas1 = parseInt(document.getElementById('columnas').value);
    const filas2 = parseInt(document.getElementById('filas2').value);
    const columnas2 = parseInt(document.getElementById('columnas2').value);
    
    let html = '';
    
    html += '<h2>Matriz 1</h2>';
    html += '<div>';
    for (let i = 0; i < filas1; i++) {
        for (let j = 0; j < columnas1; j++) {
            html += '<input type="number" class="matriz1" />';
        }
        html += '<br>';
    }
    html += '</div>';
    
    html += '<h2>Matriz 2</h2>';
    html += '<div>';
    for (let i = 0; i < filas2; i++) {
        for (let j = 0; j < columnas2; j++) {
            html += '<input type="number" class="matriz2" />';
        }
        html += '<br>';
    }
    html += '</div>';
    
    document.getElementById('matrices').innerHTML = html;
}

function multiplicarMatrices() {
    const filas1 = parseInt(document.getElementById('filas').value);
    const columnas1 = parseInt(document.getElementById('columnas').value);
    const filas2 = parseInt(document.getElementById('filas2').value);
    const columnas2 = parseInt(document.getElementById('columnas2').value);
    
    const matriz1 = [];
    const matriz2 = [];
    
    document.querySelectorAll('.matriz1').forEach(input => {
        matriz1.push(parseInt(input.value));
    });
    
    document.querySelectorAll('.matriz2').forEach(input => {
        matriz2.push(parseInt(input.value));
    });
    
 

    if (columnas1 !== filas2) {
        alert("El número de columnas de la Matriz 1 no coincide con el número de filas de la Matriz 2. No se pueden multiplicar.");
        return;
    }

    if (columnas2 !== filas1) {
        alert("El número de columnas de la Matriz 1 no coincide con el número de filas de la Matriz 2. No se pueden multiplicar.");
        return;
    }

    fetch('http://localhost:4000/multiplicar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ filas1, columnas1, filas2, columnas2, matriz1, matriz2 })
    })
    .then(response => response.json())
    .then(resultado => {
        let html = '<h2>Matriz Resultante</h2><div>';
        for (let i = 0; i < filas1; i++) {
            for (let j = 0; j < columnas2; j++) {
                html += resultado[i * columnas2 + j] + ' ';
            }
            html += '<br>';
        }
        html += '</div>';
        document.getElementById('resultado').innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

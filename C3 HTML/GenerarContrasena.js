function checkLongitud(Longitud){
    if (Longitud === null || Longitud === undefined) {
        return 'Debe ingresar la longitud'
    } if (typeof Longitud !== "number") {
        return 'La longitud recibida no es valida'
    } if (Longitud < 3) {
        return 'La longitud debe ser mayor o igual a 3'
    } if (Longitud > 10) {
        return 'La longitud debe ser menor o igual a 10'
    } else {
        return Longitud
    }
}

function generarPassword(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas) {
    // a. Letras minúsculas
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
  
    // b. Números
    const numeros = "0123456789";
  
    // c. Caracteres especiales
    const caracteresEspeciales = "!@#$%^&*";
  
    // d. Letras mayúsculas
    const letrasMayusculas = letrasMinusculas.toUpperCase();
  
    // e. Caracteres disponibles iniciales (solo letras)
    let caracteresDisponibles = letrasMinusculas;
  
    // f. Concatenar caracteres especiales si el usuario quiere
    if (incluirEspeciales) {
      caracteresDisponibles += caracteresEspeciales;
    }
  
    // g. Concatenar números si el usuario quiere
    if (incluirNumeros) {
      caracteresDisponibles += numeros;
    }
  
    // h. Concatenar mayúsculas si el usuario quiere
    if (incluirMayusculas) {
      caracteresDisponibles += letrasMayusculas;
    }
  
    // i. Variable para guardar la contraseña final
    let contrasena = "";
  
    // j. Generar contraseña si la longitud es válida
    if (longitud >= 3) {
      for (let i = 0; i < longitud; i++) {
        const random = Math.random(); // j.1
        const posicion = Math.floor(random * caracteresDisponibles.length); // j.2 y j.3
        const caracter = caracteresDisponibles[posicion]; // j.4
        contrasena += caracter; // j.5
      }
    } else {
      return "La longitud debe ser mayor o igual a 3.";
    }
  
    // h. Retornar la contraseña generada
    return "Contraseña generada: " + contrasena;
  
  }
  document.getElementById('formulario').addEventListener('submit', function(event){event.preventDefault();

  const longitudInput = document.getElementById('longitud').valueAsNumber;
  const incluirEspeciales = document.getElementById('caracteresEspeciales').checked;
  const incluirNumeros = document.getElementById('numeros').checked;
  const incluirMayusculas = document.getElementById('mayusculas').checked;

  const longValid = checkLongitud(longitudInput);
  const resultado = generarPassword(longValid, incluirEspeciales, incluirNumeros, incluirMayusculas);

  document.getElementById('resultado').textContent = resultado;

});
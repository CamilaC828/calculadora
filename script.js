const pantalla = document.querySelector('.pantalla') /** Almacena la referencia a la
pantalla para poder leer la expresión actual y escribir el resultado. */
const botones = document.querySelectorAll('button') /** Almacena una lista de todos los
botones para poder iterar sobre ellos y asignar el evento de pulsar */

botones.forEach(boton => { /** Este método itera sobre la colección de todos los botones que 
                                se almacenaron en la constante botones. Asegura que la lógica interna (el evento de clic) se aplique individualmente a cada 
                                uno de los elementos button; de la calculadora. */
    boton.addEventListener('click', () => { /** Para cada botón, se adjunta un oyente de
        eventos (eventListener). La función anónima (() =&gt; { ... }) se ejecutará cada vez que el
        botón sea presionado por el usuario. */
        const botonApretado = boton.textContent /** Este codigo la base para construir la expresión matemática en la pantalla con la variable botonApretado.*/

        if(boton.id == 'c') { /** Activa la funcionalidad de reinicio de la calculadora.*/
            pantalla.textContent = '0'/**Garantiza que la calculadora vuelva a su estado inicial, lista para una nueva operación.*/
            return
        }
        if(boton.id == 'borrar') { /** Esta es la sentencia de control principal. 
                                    esto quiere decir que cuando el usuario presiona el botón 'DE' (Borrar). se borra lo que este en la planilla          */
            if(pantalla.textContent.length == 1 || pantalla.textContent == 'error' ) {
            pantalla.textContent = '0' /** Reinicia el contenido de la pantalla a '0' */
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            } /** Esta es la acción que se ejecuta cuando la pantalla tiene más de un carácter  */
            return
            }
            if(boton.id == 'igual') { /** Esta sentencia de control inicia el proceso de cálculo solo cuando se presiona el botón con id= igual */
                try { 
                    pantalla.textContent = eval(pantalla.textContent) /** Evalúa la expresión (ej: "2+2") que está visible en la pantalla y muestra el resultado (ej: "4"). */
                } catch (error) { /** Si el cálculo (eval) falla (por un error como 3+*), muestra un mensaje de error. */
                    pantalla.textContent = 'error'

                }
            }

            if(pantalla.textContent == '0' || pantalla.textContent == 'error' ) {
                pantalla.textContent = botonApretado
                }else {
                    pantalla.textContent += botonApretado
                    }
    })
}
)
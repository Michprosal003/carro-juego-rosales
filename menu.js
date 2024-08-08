document.getElementById('start').addEventListener('click', function() {
    document.getElementById('loading').style.display = 'block'; // Mostrar el loading
    setTimeout(function() {
      window.location.href = 'game.html'; // Redirige al juego después del tiempo de carga
    }, 2000); // Tiempo de carga de 2 segundos
  });
  
  document.getElementById('exit').addEventListener('click', function() {
    window.close(); // Cierra la ventana del navegador (funciona en algunos navegadores)
  });
  
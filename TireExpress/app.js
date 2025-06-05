// Função login já existente
function login() {
  const usuario = document.getElementById('username').value;
  const senha = document.getElementById('password').value;

  if (usuario.trim() && senha.trim()) {
    alert('Bem-vindo, ' + usuario + '!');
    window.location.href = 'home.html';
  } else {
    alert('Preencha usuário e senha!');
  }
}

// Registro do Service Worker - colocar fora da função, no escopo global
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registrado com sucesso:', reg.scope))
      .catch(err => console.log('Falha ao registrar o Service Worker:', err));
  });
}

// Função para busca de trabalhos (simulação)
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const jobType = document.getElementById('jobType').value;

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = `
        <h3>Resultados para "${jobType}" em "${location}"</h3>
        <p>1. Vaga: Auxiliar de Limpeza - Local: ${location}</p>
        <p>2. Vaga: Pedreiro - Local: ${location}</p>
        <p>3. Vaga: Motoboy - Local: ${location}</p>
    `;
});

// Função para envio de formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const feedback = document.getElementById('formFeedback');

    if (name && email && message) {
        feedback.textContent = 'Mensagem enviada com sucesso!';
        feedback.style.color = 'green';
        document.getElementById('contactForm').reset();
    } else {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.style.color = 'red';
    }
});

// Dados de exemplo
const oportunidades = [
    {
        titulo: 'Pintura Residencial',
        descricao: 'Serviço de pintura em apartamento de 2 quartos.',
        habilidades: ['Pintura', 'Reparos'],
        localizacao: 'São Paulo'
    },
    {
        titulo: 'Aula Particular de Matemática',
        descricao: 'Aulas para estudante do ensino médio.',
        habilidades: ['Ensino', 'Matemática'],
        localizacao: 'Campinas'
    },
    // Adicione mais oportunidades conforme necessário
];

// Função para exibir oportunidades
function exibirOportunidades(lista) {
    const listaOportunidades = document.getElementById('lista-oportunidades');
    listaOportunidades.innerHTML = '';

    lista.forEach(oportunidade => {
        const item = document.createElement('li');
        item.classList.add('oportunidade');
        item.innerHTML = `
            <h3>${oportunidade.titulo}</h3>
            <p><strong>Descrição:</strong> ${oportunidade.descricao}</p>
            <p><strong>Habilidades:</strong> ${oportunidade.habilidades.join(', ')}</p>
            <p><strong>Localização:</strong> ${oportunidade.localizacao}</p>
        `;
        listaOportunidades.appendChild(item);
    });
}

// Exibir todas as oportunidades ao carregar a página
exibirOportunidades(oportunidades);

// Função de pesquisa
document.getElementById('btn-pesquisar').addEventListener('click', () => {
    const termo = document.getElementById('pesquisa').value.toLowerCase();
    const resultados = oportunidades.filter(oportunidade => {
        return (
            oportunidade.titulo.toLowerCase().includes(termo) ||
            oportunidade.descricao.toLowerCase().includes(termo) ||
            oportunidade.habilidades.some(habilidade => habilidade.toLowerCase().includes(termo)) ||
            oportunidade.localizacao.toLowerCase().includes(termo)
        );
    });
    exibirOportunidades(resultados);
});

const subjectsData = {
    php: {
        title: "PHP: Hypertext Preprocessor",
        content: `
            <p>O PHP é uma das linguagens mais fundamentais para a web moderna, processada inteiramente no servidor antes de chegar ao usuário.</p>
            <h4>Principais Tópicos do 1º Bimestre:</h4>
            <ul>
                <li><strong>Sintaxe Básica:</strong> Uso das tags <code>&lt;?php ... ?&gt;</code> e integração com HTML.</li>
                <li><strong>Variáveis e Tipos:</strong> Manipulação de Strings, Inteiros, Floats e Booleanos.</li>
                <li><strong>Estruturas de Controle:</strong> Implementação de lógica com <code>if</code>, <code>else</code>, <code>switch</code> e operadores lógicos.</li>
                <li><strong>Formulários (GET/POST):</strong> Captura e processamento de dados enviados pelo usuário via navegador.</li>
            </ul>
            <h4>Por que PHP?</h4>
            <p>É a base de sistemas gigantes como WordPress, Facebook e Wikipedia. Sua facilidade em interagir com bancos de dados a torna essencial para iniciantes no backend.</p>
        `
    },
    java: {
        title: "Java: Programação Robusta",
        content: `
            <p>Java é sinônimo de "escreva uma vez, rode em qualquer lugar" (WORA). É uma linguagem compilada que roda na JVM (Java Virtual Machine).</p>
            <h4>Principais Tópicos do 1º Bimestre:</h4>
            <ul>
                <li><strong>Ambiente de Desenvolvimento:</strong> Configuração do JDK e entendimento da JVM/JRE.</li>
                <li><strong>Estrutura de Classe:</strong> O conceito de <code>public class</code> e o papel vital do método <code>public static void main</code>.</li>
                <li><strong>Tipagem Forte:</strong> Declaração explícita de tipos e segurança de dados.</li>
                <li><strong>Introdução à POO:</strong> Primeiros passos com Classes, Objetos e Métodos básicos.</li>
            </ul>
            <h4>Aplicações de Java:</h4>
            <p>Desde aplicativos Android até sistemas bancários complexos e servidores corporativos de alta performance.</p>
        `
    },
    csharp: {
        title: "C#: Ecosystem Microsoft",
        content: `
            <p>Desenvolvida pela Microsoft, C# combina a potência de C++ com a facilidade de Java, sendo o pilar do framework .NET.</p>
            <h4>Principais Tópicos do 1º Bimestre:</h4>
            <ul>
                <li><strong>Fundamentos da Linguagem:</strong> Variáveis, constantes e operadores aritméticos.</li>
                <li><strong>Interatividade:</strong> Entrada e saída de dados via Console (<code>ReadLine</code> / <code>WriteLine</code>).</li>
                <li><strong>Lógica de Decisão:</strong> Uso refinado de <code>if-else</code> e estruturação de algoritmos.</li>
                <li><strong>Classes e Métodos:</strong> Estruturação básica de código modular e reutilizável.</li>
            </ul>
            <h4>Onde o C# brilha?</h4>
            <p>É a linguagem favorita para desenvolvimento de jogos na Unity, além de ser extremamente poderosa para aplicações Windows Desktop e APIs Web robustas.</p>
        `
    },
    apps: {
        title: "Apps 1: HTML5 & CSS3",
        content: `
            <p>A base visual da internet. HTML5 fornece a estrutura (esqueleto) e CSS3 fornece o estilo (estética).</p>
            <h4>Principais Tópicos do 1º Bimestre:</h4>
            <ul>
                <li><strong>Estrutura Semântica:</strong> Uso correto de tags como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> e <code>&lt;footer&gt;</code>.</li>
                <li><strong>Elementos de Texto:</strong> Títulos, parágrafos, listas e hiperlinks.</li>
                <li><strong>Design System Basico:</strong> Aplicação de cores, fontes, box-model (margens, bordas, preenchimento).</li>
                <li><strong>Cascata e Herança:</strong> Entendimento de como os estilos se aplicam e substituem uns aos outros.</li>
            </ul>
            <h4>Metodologias de Estilo:</h4>
            <p>Aprendemos a diferença crucial entre CSS Inline, Interno e Externo, priorizando sempre a separação de responsabilidades no código.</p>
        `
    }
};

const subjectCards = document.querySelectorAll('.subject-card');
const overlay = document.getElementById('content-overlay');
const closeOverlay = document.getElementById('close-overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlayText = document.getElementById('overlay-text');
const overlayLogo = document.getElementById('overlay-logo');

subjectCards.forEach(card => {
    card.addEventListener('click', () => {
        const subject = card.getAttribute('data-subject');
        const data = subjectsData[subject];

        // Get the SVG from the clicked card
        const originalLogo = card.querySelector('.subject-logo').innerHTML;

        overlayTitle.textContent = data.title;
        overlayText.innerHTML = data.content;
        overlayLogo.innerHTML = originalLogo;
        overlay.setAttribute('data-subject', subject);

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    });
});

closeOverlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
});

// Close overlay on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

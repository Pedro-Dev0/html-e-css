// scripts.js - versão limpa e única
document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chat-icon');
    const chatbotSection = document.getElementById('chatbot-section');
    const closeChat = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const quickOptions = document.querySelectorAll('.quick-option');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.imagem-cafe');
    const cafeCircle = document.querySelector('.cafe-circle');
    const chatOverlay = document.getElementById('chat-overlay');
    const mainContent = document.querySelector('main');

    if (!chatIcon || !chatbotSection || !closeChat || !chatForm || !chatInput || !chatMessages) {
        console.warn('Elementos do chat não encontrados — verifique o HTML.');
        return;
    }

    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-message';
        msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Cardápio unificado com ícones (usando Font Awesome classes já carregadas no HTML)
    const cardapio = {
        'Espresso': {price: 'R$ 8,00', size: 'Solo', icon: 'fa-solid fa-mug-hot'},
        'Double Espresso': {price: 'R$ 10,00', size: 'Doppio', icon: 'fa-solid fa-bolt'},
        'Americano': {price: 'R$ 9,00', size: 'Tall/Grande', icon: 'fa-solid fa-water'},
        'Cappuccino': {price: 'R$ 12,00', size: 'Tall/Grande', icon: 'fa-solid fa-coffee'},
        'Latte': {price: 'R$ 13,00', size: 'Tall/Grande', icon: 'fa-solid fa-mug-saucer'},
        'Flat White': {price: 'R$ 14,00', size: 'Tall/Grande', icon: 'fa-solid fa-cup-togo'},
        'Mocha': {price: 'R$ 15,00', size: 'Tall/Grande', icon: 'fa-solid fa-chocolate'},
        'Caramel Macchiato': {price: 'R$ 16,00', size: 'Tall/Grande', icon: 'fa-solid fa-candy-cane'},
        'Frappuccino': {price: 'R$ 18,00', size: 'Tall/Grande', icon: 'fa-solid fa-cubes'},
        'Chocolate Quente': {price: 'R$ 14,00', size: 'Tall/Grande', icon: 'fa-solid fa-mug-hot'},
        'Chá Gelado': {price: 'R$ 10,00', size: 'Tall/Grande', icon: 'fa-solid fa-lemon'},
        'Chá (Diversos)': {price: 'R$ 9,00', size: 'Tall', icon: 'fa-solid fa-leaf'},
        'Cookies': {price: 'R$ 7,00', icon: 'fa-solid fa-cookie'},
        'Muffin': {price: 'R$ 9,00', icon: 'fa-solid fa-bread-slice'},
        'Sanduíche (Croissant/Wrap)': {price: 'R$ 22,00', icon: 'fa-solid fa-bread-slice'}
    };

    // Receitas formatadas em multiline para leitura
    const receitas = {
        'Latte Caseiro': `1) Prepare um espresso (30ml).
2) Aqueça 200ml de leite e faça uma espuma a gosto.
3) Despeje o leite sobre o espresso com cuidado.
Dica: adicione 10ml de xarope de baunilha para um toque especial.`,

        'Cappuccino Rápido': `1) Prepare um espresso forte (30ml).
2) Aqueça cerca de 120ml de leite e gere espuma consistente.
3) Despeje o leite espumado sobre o espresso.
Finalização: polvilhe cacau em pó ou canela.`,

        'Mocha Simples': `1) Prepare um espresso (30ml).
2) Misture 20ml de calda de chocolate ao espresso.
3) Adicione leite quente e mexa bem.
4) Finalize com chantilly e raspas de chocolate, se desejar.`
    };

    const promocoes = [
        'Frappuccino em dobro às sextas-feiras (na compra de 1, leve outro).',
        'Combo Muffin + Espresso por R$ 15,00 (válido nas unidades participantes).',
        '20% de desconto em chás às segundas-feiras.'
    ];

    function formatCardapioFull() {
        return Object.entries(cardapio).map(([k, v]) => `- <i class="${v.icon}"></i> ${k}: ${v.price}${v.size ? ' (' + v.size + ')' : ''}`).join('\n');
    }

    function formatTamanhos() {
        return 'Tamanhos comuns: Tall (~350ml), Grande (~470ml), Venti (~590ml). Preços variam por tamanho e local.';
    }

    function localAIResponse(msg) {
        const m = msg.toLowerCase();
        if (/(ver cardápio completo|cardápio completo|cardapio completo)/.test(m)) return `CARDÁPIO COMPLETO:\n${formatCardapioFull()}`;
        if (/(card[aá]pio|menu|cardápio|pre[cç]o|quanto custa|valor)/.test(m)) return `CARDÁPIO (resumo):\n- Espresso: R$ 8,00\n- Cappuccino: R$ 12,00\n- Latte: R$ 13,00\n(Para ver o cardápio completo, clique em 'Cardápio completo').`;
        if (/(promo|descont|oferta|promoções|promocoes)/.test(m)) return `PROMOÇÕES ATUAIS:\n- ${promocoes.join('\n- ')}`;
        if (/(receita|receitas|como fazer|preparo)/.test(m)) {
            // formata as receitas com quebras de linha para melhor leitura
            return 'RECEITAS POPULARES:\n' + Object.entries(receitas).map(([k, v]) => `\n${k}:\n${v}`).join('\n');
        }
    // opção de 'tamanhos' removida — direcionamos o usuário para ver o cardápio ou perguntar preços de itens
        if (/(oi|ol[aá]|bom dia|boa tarde|boa noite)/.test(m)) return 'Olá! Eu sou a Vitoria, em que posso ajudar? 😊 — Posso mostrar o cardápio, promoções ou uma receita.';
        // procura por item específico (sem acento/maiusc)
        const itemKey = Object.keys(cardapio).find(k => m.includes(k.toLowerCase()));
        if (itemKey) {
            const it = cardapio[itemKey];
            return `${'<i class="' + it.icon + '"></i>'} ${itemKey}: ${it.price}${it.size ? ' (' + it.size + ')' : ''}`;
        }
        return 'Posso ajudar com o cardápio, promoções ou receitas — qual prefere?';
    }

    chatIcon.addEventListener('click', () => {
        chatbotSection.style.display = 'block';
        chatIcon.style.visibility = 'hidden';
        chatMessages.innerHTML = '';
        // se desktop (largura >= 768px) ativamos overlay e bloqueio de scroll
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        if (isDesktop) {
            // desabilita scroll da página e compensa scrollbar para evitar shift
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.setProperty('--scrollbar-comp', scrollbarWidth + 'px');
            document.body.classList.add('no-scroll', 'no-scroll-compensate');
            if (chatOverlay) { chatOverlay.style.display = 'block'; chatOverlay.setAttribute('aria-hidden', 'false'); }
            if (mainContent) { mainContent.setAttribute('aria-hidden', 'true'); }
        }
        // foco no input para acessibilidade
        setTimeout(() => { chatInput.focus(); }, 120);
        appendMessage('Vitoria', 'Olá! Eu sou a Vitoria, sua assistente do café. Como posso ajudar?');
    });

    closeChat.addEventListener('click', () => {
        appendMessage('Vitoria', 'Até logo! ☕');
        setTimeout(() => {
            chatbotSection.style.display = 'none';
            chatIcon.style.visibility = 'visible';
            // restaura scroll e remove compensação (apenas se estiver em desktop)
            const isDesktop = window.matchMedia('(min-width: 768px)').matches;
            if (isDesktop) {
                document.body.classList.remove('no-scroll', 'no-scroll-compensate');
                document.body.style.removeProperty('--scrollbar-comp');
                if (chatOverlay) { chatOverlay.style.display = 'none'; chatOverlay.setAttribute('aria-hidden', 'true'); }
                if (mainContent) { mainContent.setAttribute('aria-hidden', 'false'); }
            }
        }, 600);
    });

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;
        appendMessage('Você', text);
        chatInput.value = '';
        // indicador de digitando
        const typing = document.createElement('div');
        typing.className = 'chat-typing';
        typing.innerText = 'Vitoria está digitando...';
        chatMessages.appendChild(typing);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        const reply = localAIResponse(text);
        setTimeout(() => {
            typing.remove();
            appendMessage('Vitoria', reply);
        }, 700);
    });

    quickOptions.forEach(btn => btn.addEventListener('click', () => {
        const msg = btn.getAttribute('data-msg');
        appendMessage('Você', msg);
        const reply = localAIResponse(msg);
        setTimeout(() => appendMessage('Vitoria', reply), 200);
    }));

    const imgMap = {
        'thumb1.png': {img: 'img1.png', color: '#129961'},
        'thumb2.png': {img: 'img2.png', color: '#e91e63'},
        'thumb3.png': {img: 'img3.png', color: '#ff69b4'}
    };

    thumbnails.forEach(th => th.addEventListener('click', () => {
        const src = th.getAttribute('src') || '';
        const file = src.split('/').pop();
        const mapped = imgMap[file];
        if (mapped && mainImage) {
            mainImage.src = 'img/' + mapped.img;
            if (cafeCircle) { cafeCircle.style.borderColor = mapped.color; cafeCircle.style.background = mapped.color; }
        }
    }));

});

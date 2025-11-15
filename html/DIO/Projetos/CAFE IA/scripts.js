// scripts.js - thumbnail swapping + dynamic menu/promo rendering for local chat
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.imagem-cafe');
    const cafeCircle = document.querySelector('.cafe-circle');

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

    /* --- Chat local fallback logic with dynamic JSON card rendering --- */
    const chatIcon = document.getElementById('chat-icon');
    const chatbotSection = document.getElementById('chatbot-section');
    const chatOverlay = document.getElementById('chat-overlay');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const quickOptions = document.querySelectorAll('.quick-option');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    function appendBubble(type, content){
        // type: 'bot' or 'user'
        const wrapper = document.createElement('div'); wrapper.className = `chat-bubble ${type}`;
        const bubble = document.createElement('div'); bubble.className = 'bubble';
        if (typeof content === 'string') {
            bubble.innerHTML = content;
        } else if (content instanceof Node) {
            bubble.appendChild(content);
        }
        wrapper.appendChild(bubble);
        chatMessages.appendChild(wrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        toggleHelper();
    }

    function toggleHelper(){
        const helper = document.getElementById('chat-helper');
        if (!helper) return;
        // hide helper when there's any message bubble
        const hasBubbles = chatMessages.querySelectorAll('.chat-bubble').length > 0;
        helper.style.display = hasBubbles ? 'none' : 'block';
    }

    function renderMenu(items){
        if (!items || !items.length) { appendBubble('bot','Nenhum item encontrado.'); return; }
        const list = document.createElement('div'); list.className = 'chat-card-list';
        items.forEach(item=>{
            const card = document.createElement('div'); card.className = 'chat-card';
            const img = document.createElement('img'); img.src = item.image; img.alt = item.name;
            const meta = document.createElement('div'); meta.className = 'card-meta';
            meta.innerHTML = `<div class="card-title">${item.name} <span class="card-price">${item.price}</span></div><div class="card-desc">${item.description}</div>`;
            const cta = document.createElement('button'); cta.className = 'card-cta'; cta.textContent = 'Pedir';
            cta.addEventListener('click', ()=>{
                appendBubble('user', `Quero pedir: ${item.name}`);
                setTimeout(()=> appendBubble('bot', 'Pedido recebido! Um atendente irá confirmar.'), 300);
            });
            card.appendChild(img); card.appendChild(meta); card.appendChild(cta);
            list.appendChild(card);
        });
        // wrap list inside a bot bubble
        appendBubble('bot', list);
    }

    function renderPromotions(promos){
        if (!promos || !promos.length) { appendBubble('bot','Sem promoções no momento.'); return; }
        const list = document.createElement('div'); list.className = 'chat-card-list';
        promos.forEach(p=>{
            const card = document.createElement('div'); card.className = 'chat-card';
            const meta = document.createElement('div'); meta.className = 'card-meta';
            meta.innerHTML = `<div class="card-title">${p.title}</div><div class="card-desc">${p.details}</div><div style="font-size:0.85rem;color:#666;margin-top:6px">Validade: ${p.valid}</div>`;
            card.appendChild(meta);
            list.appendChild(card);
        });
        appendBubble('bot', list);
    }

    function fetchMenuJSON(){
        return fetch('data/menu.json').then(r=>{
            if (!r.ok) throw new Error('Network response not ok');
            return r.json();
        });
    }

    function localReplyText(msg){
        const m = msg.toLowerCase();
        if (/receit|como fazer|preparo/.test(m)) return `RECEITAS\nLatte Caseiro: espresso + leite vaporizado + xarope.`;
        if (/atendente|contato/.test(m)) return `Vou transferir para um atendente humano. Aguarde...`;
        return null; // other cases will be handled (menu/promotions) by fetch
    }

    if (chatIcon && chatbotSection){
        chatIcon.addEventListener('click', ()=>{
            chatbotSection.style.display = 'block';
            if (chatOverlay) chatOverlay.style.display = 'block';
            if (chatInput) chatInput.focus();
            chatMessages.innerHTML = '';
            appendBubble('bot', 'Olá! Eu sou seu assistente. Posso mostrar o cardápio, promoções ou receitas.');
            toggleHelper();
        });

        if (closeChat) closeChat.addEventListener('click', ()=>{
            chatbotSection.style.display = 'none';
            if (chatOverlay) chatOverlay.style.display = 'none';
        });

        quickOptions.forEach(b=> b.addEventListener('click', ()=>{
            const msg = (b.getAttribute('data-msg')||'').trim();
            appendBubble('user', msg);
            const lower = msg.toLowerCase();
            if (/card[aá]pio|menu/.test(lower)){
                appendBubble('bot','Carregando o cardápio...');
                fetchMenuJSON().then(data=> renderMenu(data.items)).catch(()=> appendMessage('Starbucks','Não foi possível carregar o cardápio.'));
                return;
            }
            if (/promo|descont|oferta/.test(lower)){
                appendBubble('bot','Carregando promoções...');
                fetchMenuJSON().then(data=> renderPromotions(data.promotions)).catch(()=> appendMessage('Starbucks','Não foi possível carregar as promoções.'));
                return;
            }
            const text = localReplyText(msg) || 'Desculpe, posso ajudar com cardápio, promoções ou receitas.';
            setTimeout(()=> appendBubble('bot', text), 300);
        }));

        if (chatForm){
            chatForm.addEventListener('submit', e=>{
                e.preventDefault();
                const t = (chatInput.value||'').trim();
                if (!t) return;
                appendBubble('user', t);
                chatInput.value = '';
                appendBubble('bot', '...');
                setTimeout(()=>{
                    // remove the last bubble (placeholder '...')
                    const last = chatMessages.querySelectorAll('.chat-bubble');
                    if (last.length) last[last.length-1].remove();
                    const lower = t.toLowerCase();
                    if (/card[aá]pio|menu/.test(lower)){
                        appendBubble('bot','Carregando o cardápio...');
                        fetchMenuJSON().then(data=> renderMenu(data.items)).catch(()=> appendBubble('bot','Não foi possível carregar o cardápio.'));
                        return;
                    }
                    if (/promo|descont|oferta/.test(lower)){
                        appendBubble('bot','Carregando promoções...');
                        fetchMenuJSON().then(data=> renderPromotions(data.promotions)).catch(()=> appendBubble('bot','Não foi possível carregar as promoções.'));
                        return;
                    }
                    const text = localReplyText(t) || 'Desculpe, posso ajudar com cardápio, promoções ou receitas.';
                    appendBubble('bot', text);
                }, 600);
            });
        }

        // proximity detection: when mouse is near the chat icon, add .near for visual cue
        (function(){
            const THRESHOLD = 90; // pixels
            function onMove(e){
                // ignore touch events / small screens
                if (window.innerWidth <= 520) return;
                const rect = chatIcon.getBoundingClientRect();
                const cx = rect.left + rect.width/2;
                const cy = rect.top + rect.height/2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist <= THRESHOLD) chatIcon.classList.add('near'); else chatIcon.classList.remove('near');
            }
            window.addEventListener('mousemove', onMove);
            // remove class when leaving window
            window.addEventListener('mouseout', ()=> chatIcon.classList.remove('near'));
        })();
    }

});

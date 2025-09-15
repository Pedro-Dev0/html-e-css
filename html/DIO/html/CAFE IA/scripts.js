 // Troca a imagem principal ao clicar em uma thumbnail
        document.addEventListener('DOMContentLoaded', function() {
            // Saudação automática ao abrir o chat
            function showGreeting() {
                appendMessage('Vitoria', 'Olá! Eu sou a Vitoria, sua assistente do Starbucks. Como posso ajudar?');
            }
            // Mensagem de encerramento
            function showGoodbye() {
                appendMessage('Vitoria', 'Obrigada por conversar! Se precisar, é só chamar novamente. Até logo!');
            }
            // Chat flutuante
            const chatIcon = document.getElementById('chat-icon');
            const chatbotSection = document.getElementById('chatbot-section');
            const closeChat = document.getElementById('close-chat');
            chatIcon.addEventListener('click', function() {
                chatbotSection.style.display = 'block';
                chatIcon.style.visibility = 'hidden';
                document.getElementById('chat-messages').innerHTML = '';
                showGreeting();
            });
            closeChat.addEventListener('click', function() {
                showGoodbye();
                setTimeout(function() {
                    chatbotSection.style.display = 'none';
                    chatIcon.style.visibility = 'visible';
                }, 1200);
            });
            const thumbnails = document.querySelectorAll('.thumbnail');
            const mainImage = document.querySelector('.imagem-cafe');
            const cafeCircle = document.querySelector('.cafe-circle');
            const imgMap = {
                'thumb1.png': {img: 'img1.png', color: '#129961'}, // verde
                'thumb2.png': {img: 'img2.png', color: '#e91e63'}, // rosa
                'thumb3.png': {img: 'img3.png', color: '#ff69b4'}  // rosa-choque
            };
            thumbnails.forEach(function(thumbnail) {
                thumbnail.addEventListener('click', function() {
                    const thumbSrc = this.getAttribute('src');
                    const thumbFile = thumbSrc.split('/').pop();
                    const mainImgObj = imgMap[thumbFile];
                    if (mainImgObj) {
                        mainImage.src = 'img/' + mainImgObj.img;
                        cafeCircle.style.borderColor = mainImgObj.color;
                        cafeCircle.style.background = mainImgObj.color;
                    }
                });
            });

            // Chatbot IA Starbucks
            const chatForm = document.getElementById('chat-form');
            const chatInput = document.getElementById('chat-input');
            const chatMessages = document.getElementById('chat-messages');

            chatForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                const userMsg = chatInput.value;
                appendMessage('Você', userMsg);
                chatInput.value = '';
                // Chamada à API OpenAI
                const response = await getOpenAIResponse(userMsg);
                appendMessage('Vitoria', response);
            });

            function appendMessage(sender, text) {
                const msgDiv = document.createElement('div');
                msgDiv.className = 'chat-message';
                msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
                chatMessages.appendChild(msgDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            async function getOpenAIResponse(message) {
                // Substitua 'YOUR_OPENAI_API_KEY' pela sua chave da OpenAI
                const apiKey = 'YOUR_OPENAI_API_KEY';
                const endpoint = 'https://api.openai.com/v1/chat/completions';
                const cardapio = `CARDÁPIO STARBUCKS BRASIL (exemplo):\n\n- Espresso: R$ 8,00\n- Cappuccino: R$ 12,00\n- Latte: R$ 13,00\n- Frappuccino: R$ 18,00\n- Chocolate Quente: R$ 14,00\n- Chá Gelado: R$ 10,00\n- Cookies: R$ 7,00\n- Muffin: R$ 9,00\n\nSeja sempre preciso e utilize apenas esses valores para responder perguntas sobre o cardápio e preços.`;
                const body = {
                        model: 'gpt-3.5-turbo',
                        messages: [
                            {role: 'system', content: `Você é Vitoria, uma assistente virtual do Starbucks Brasil, sempre simpática, acolhedora e consciente do contexto. Responda de forma humana, amistosa e natural, como se estivesse conversando com um cliente querido.\n\nSe o usuário enviar cumprimentos simples como "oi", "olá", "tudo bem?", "bom dia", "boa tarde", "boa noite", responda de forma amigável, calorosa e pessoal, mesmo que a mensagem seja apenas isso.\n\nSe o usuário for rude ou xingar, peça educadamente para manter o respeito e explique que você está aqui para ajudar.\n\nUse o cardápio abaixo para responder dúvidas sobre produtos e preços:\n\n${cardapio}\n\nCumprimente o usuário de forma calorosa ao iniciar, despeça-se com gentileza ao encerrar, e sempre ofereça ajuda extra se perceber que o cliente está em dúvida ou indeciso. Se o usuário pedir opções, sugira perguntas como: 'Ver cardápio', 'Promoções'.`},
                            {role: 'user', content: message}
                        ]
                };
                try {
                    const res = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apiKey}`
                        },
                        body: JSON.stringify(body)
                    });
                    const data = await res.json();
                    return data.choices && data.choices[0] ? data.choices[0].message.content : 'Desculpe, não consegui responder.';
                } catch (err) {
                    return 'Erro ao conectar à IA.';
                }
            }

            // Opções rápidas
            document.querySelectorAll('.quick-option').forEach(function(btn) {
                btn.addEventListener('click', async function() {
                    const userMsg = btn.getAttribute('data-msg');
                    appendMessage('Você', userMsg);
                    if (userMsg === 'Quero ver o cardápio') {
                        const cardapioMsg = `CARDÁPIO STARBUCKS BRASIL:\n- Espresso: R$ 8,00\n- Cappuccino: R$ 12,00\n- Latte: R$ 13,00\n- Frappuccino: R$ 18,00\n- Chocolate Quente: R$ 14,00\n- Chá Gelado: R$ 10,00\n- Cookies: R$ 7,00\n- Muffin: R$ 9,00`;
                        appendMessage('Vitoria', cardapioMsg);
                    } else if (userMsg === 'Tem promoções hoje?') {
                        const promoMsg = `Promoções Starbucks Brasil:\n- Frappuccino em dobro toda sexta-feira!\n- Muffin + Espresso por R$ 15,00.\n- Chá Gelado com 20% de desconto nas segundas.\n- Consulte a loja para mais ofertas.`;
                        appendMessage('Vitoria', promoMsg);
                    } else {
                        const response = await getOpenAIResponse(userMsg);
                        appendMessage('Vitoria', response);
                    }
                });
            });
        });
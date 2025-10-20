
class ChatWidget extends HTMLElement {
    constructor() {
        super();
        

        const shadowRoot = this.attachShadow({ mode: 'open' });


        shadowRoot.innerHTML = `
            <style>
                .chat-trigger {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    cursor: pointer;
                    font-size: 24px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.3s;
                    user-select: none;
                }

                .chat-trigger:hover {
                    background-color: #45a049;
                }
            </style>
            
            <button class="chat-trigger" id="chatButton">
                💬
            </button>
        `;


        const chatButton = shadowRoot.getElementById('chatButton');
        chatButton.addEventListener('click', () => {
            alert('Чат открывается! (Эта кнопка находится внутри Shadow DOM)');
        });
    }
}


customElements.define('chat-widget', ChatWidget);


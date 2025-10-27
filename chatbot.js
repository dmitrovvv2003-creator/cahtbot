
// ИИ чат-бот для Купи Тележку


const chatHTML =` 
<div id="chat-wrapper">
    <button id="toggle-chat-btn">ИИ Анна</button>
    <div id="chat-container" class="chat-container">
        <div class="resize-handle resize-horizontal"></div> <!-- Ползунок для ширины -->
        <div class="resize-handle resize-vertical"></div>   <!-- Ползунок для высоты -->
        <div class="chat-window">
            <div class="chat-header">
                <div class="header-content">
                    <div class="rainbow-ring"></div>
                    
                    
                    
                    <div class="header-text" style="text-align: center; line-height: 1.5;">
  ИИ-Консультант<br>Анна
</div>
                </div>
                <div class="online-status">
                    <span class="online-dot"></span>
                    
                </div>
                <button id="menu-btn" class="menu-btn">
                    <span class="menu-icon">⚙️</span>
                </button>
                <button id="close-chat-btn" class="close-chat-btn">×</button>
            </div>


            <div class="buttons-container" id="buttons-container"></div>

<button id="sound-toggle-btn" class="sound-toggle-btn">
    <span class="sound-icon"></span>
    <span class="sound-text">Звук вкл.</span>
    <span class="toggle-switch">
        <span class="toggle-circle"></span>
    </span>
</button>


           <div class="accessibility-toggle-container" id="accessibility-toggle-container">
    <button id="accessibility-toggle-btn" class="accessibility-toggle-btn" data-accessibility="false">
        <span class="accessibility-icon-wrapper">
            <img src="https://static.tildacdn.com/tild3832-3138-4738-b463-613732353833/noroot.png" alt="Accessibility Toggle" class="accessibility-icon">
        </span>
    </button>
</div>
            <div class="message-box" id="messageBox">

            <div class="typing-indicator" id="typingIndicator">
                Анна думает
                <div class="spinner"></div>
            </div>
            </div>

                <div class="scroll-down-arrow" id="scrollDownArrow">
                <svg class="arrow-icon" viewBox="0 0 24 24">
                    <path d="M12 15.586L6.707 10.293a1 1 0 011.414-1.414L12 12.586l3.879-3.879a1 1 0 011.414 1.414L12 15.586z" fill="currentColor"/>
                </svg>
            </div>


            <div class="input-container">
               
                  
        <textarea id="chat-input" placeholder="Спросить Анну..."></textarea>
                
                
                    
                </div>
                <button id="emoji-btn" class="emoji-btn">😊</button>
                <button id="send-btn" class="send-arrow">
                    <img src="https://static.tildacdn.com/tild6631-6538-4630-b939-363536376132/noroot.png" alt="send icon" class="send-icon" />
                </button>
            </div>
            <div id="emoji-container" class="emoji-container">
                <div class="emoji-grid">
                    <span class="emoji">😊</span>
                    <span class="emoji">😂</span>
                    <span class="emoji">😍</span>
                    <span class="emoji">😢</span>
                    <span class="emoji">👍</span>
                    <span class="emoji">👎</span>
                    <span class="emoji">🎉</span>
                    <span class="emoji">👌</span>
                    <span class="emoji">😡</span>
                    <span class="emoji">😉</span>
                    <span class="emoji">🤣</span>
                    <span class="emoji">🤔</span>
                    <span class="emoji">😐</span>
                    <span class="emoji">👋</span>
                    <span class="emoji">🙏</span>
                    <span class="emoji">🔥</span>
                    <span class="emoji">💡</span>
                    <span class="emoji">❤️</span>
                    <span class="emoji">✨</span>
                    <span class="emoji">🌟</span>
                    <span class="emoji">💯</span>
                    <span class="emoji">🚀</span>
                    <span class="emoji">🎈</span>
                    <span class="emoji">🍀</span>
                </div>
            </div>
            
            
            
            
            
        </div>
    </div>
   
       
       
    </div>
</div>
`;
    

// CSS чата 
const chatCSS = `
:host {
    display: block; 
    font-family: Arial, sans-serif; 
}


html, body {
    position: static !important;
    overflow: visible !important;
}




.header-image1 {
    position: absolute;
    right: 100%;
    left: -15px;
    width: 100px;
    top: -5px;
    display: block;

}



.header-image2 {
    position: absolute;
    right: -13px;
    top: -5px;
    width: 100px;
    display: block;
}



@media (max-width: 500px) {
.header-image1 { 
    display: none;
}

.header-image2 {
    display: none;
}

}





#send-btn {
    display: block; 
}


    @media (max-width: 500px) {
    .accessibility-toggle-container {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 4px;
    top: 7px;
}
    

.accessibility-icon {
    left: -4px !important;
    max-width: 70px !important;
    bottom: -37px !important;

}


    

    .send-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    right: 10px !important;
    opacity: 0.4;
    transition: opacity 0.3s ease;
    bottom: 13px !important;
    padding: 0px;

    }
    
    
}


.accessibility-toggle-container {
    position: absolute;
    display: flex;
    justify-content: center;
    
}

.accessibility-toggle-btn {
    position: relative; 
    display: flex;
    align-items: center;
    padding: 0px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
    width: 0;
    height: 0;
    
}

.accessibility-toggle-btn:hover {
    background-color: #e0e0e0;
}

.accessibility-icon {
    position: absolute;
    left: -17px;
    width: 70px;
    height: 40px;
    max-width: 70px;
    bottom: -21px;
    
}


.accessibility-icon-wrapper {
    position: relative;
    display: inline-block;
}




.accessibility-icon-wrapper::after {
    content: "Размер шрифта";
    position: absolute;
    top: 17px;
    left: 100px;
    transform: translateX(-50%);
    padding: 5px 10px;
    background-color: white;
    border-radius: 20px;
    font-size: 16px;
    color: black;
    white-space: nowrap;
    z-index: 10;
    font-weight: bold;
    border: 1px solid white;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(6px);
    transition: opacity 0.33s ease, transform 0.33s ease;
    opacity: 0;
    transform: translateX(-50%) scale(0.9);
    pointer-events: none;
}

.accessibility-icon-wrapper:hover::after {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) scale(1);
}


@media (max-width: 500px) {
.accessibility-icon-wrapper::after {
    top: 28px !important;
    left: 122px !important;
}

}




.accessibility-icon-wrapper:hover::before {
    content: "";
    position: absolute;
    bottom: calc(100% - 5px); 
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 5px;
}


#chat-input::-webkit-scrollbar {
    width: 5px;
}

#chat-input::-webkit-scrollbar-track {
    background: transparent;
}

#chat-input::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

#chat-input::-webkit-scrollbar-thumb:hover {
    background: #aaa;
}


@media (max-width: 500px) {
    
    .header-content {
    display: flex;
    align-items: center;
    position: relative;
    bottom: 20px;
    
}
    

    
    
  .chat-header {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px !important;
        border-radius: 0px 0px 25px 25px !important;
        flex: 0 0 auto;
        padding: 0px !important;
        margin-bottom: 15px !important;
        margin-right: 0px !important;
        margin-left: 0px !important;
        margin-top: 0px !important;
        bottom: 0px !important;
}


.header-text {
        font-family: Arial, sans-serif !important;
        font-weight: bold;
        margin-top: 40px !important;
        font-size: 22px !important;
}
    
    
    .online-text {
        font-family: Arial, sans-serif;
        font-size: 16px !important;
        color: #a8926a;
        font-weight: bold;
        left: -6px;
        margin-bottom: -26px;
        position: relative;
        font-weight: bold !important;
        bottom: 0px;
    
}
    
    
    
 .message-box {
        margin-left: 0px !important;
        margin-right: 0px !important;
        flex: 1 1 auto;
        background-color: rgba(202, 193, 245, 0.1);
} 


.chat-window {
        background-size: 100% 100%;
        transition: all 0.3s ease;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0px !important;
        padding-bottom: 0px !important;
        border-radius: 0px !important;
        box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
        position: absolute;
        bottom: 0px !important;
        top: 0px;
        border: 0px !important;
        height: calc(100% - env(safe-area-inset-top, 0) - env(safe-area-inset-bottom, 0));

    
}
    
     .header-image {
        height: 50px !important;
        margin-top: -10px !important;
        left: 0px !important;
        margin-right: 10px;
        top: 11px;
        
    }
    
   
   .menu-icon {
    font-size: 24px;
    color: white !important;
    line-height: 30px;
} 
    
    
    
    
    .online-dot {
    width: 0px;
    height: 0px;
    border-radius: 50%;
    display: inline-block;
    background-color: transparent !important;
}
    
    
    .close-chat-btn {
    position: absolute;
        background: none;
        border: none;
        font-size: 30px;
        color: white;
        cursor: pointer;
        padding: 5px;
        line-height: 1;
        transition: color 0.2s;
        right: 13px;
        bottom: 5px;
}


.close-chat-btn:hover {
    color: #1c1c1c; 
    background-color: transparent;
}


.input-container {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-end;
    padding: 10px;
    border-radius: 15px;
    transition: box-shadow 0.3s ease;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    bottom: 10px;
    margin-top: 10px;
    margin-left: 0px !important;
    margin-right: 0px !important;
}
    
 
 #chat-input {
    flex: 1;
    border: none;
    outline: none;
    background-color: white;
    border-radius: 15px;
    padding: 10px 15px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.3;
    resize: none;
    height: 40px;
    max-height: 150px;
    overflow-y: auto;
    box-sizing: border-box;
    transition: height 0.3s ease;
    padding-left: 23px !important;
    box-shadow: 0 10px 10px rgba(0,0,0,0.31),0 1px 55px rgba(0,0,0,0.25);
    border-radius: 20px 20px 0 0 !important;
}
 
    
}




.buttons-container {
    justify-content: center;
    margin: 10px 0;
    opacity: 0;
    transform: translate(-100px, 50px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(6px);
    opacity: 0;
    position: absolute;
    z-index: 50000000;
    top: 100px;
    right: 20px;
    width: 206px;
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    pointer-events: none;
}

.buttons-container.visible {
    position: absolute;
    display: flex;
    opacity: 1;
    transform: translateY(0);
    height: 235px;
    top: 100px;
    right: 20px;
    width: 206px;
    z-index: 10;
    flex-direction: column;
    border: 2px solid white;
    pointer-events: auto;
}

.sound-toggle-btn {
    position: absolute;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease;
    border: 1px solid white;
    height: 55px;
    margin-top: -60px;
    margin-left: 30px;
    width: 176px;
    top: 108px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(3px);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: translate(100px, -50px);
    display: flex;
    pointer-events: none;
}



.sound-toggle-btn.visible {
    display: flex;
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;

}




.sound-icon {
    font-size: 16px;
}


.sound-text {
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #333;
}


.toggle-switch {
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 10px;
    position: relative;
    transition: background-color 0.3s ease;
}


.toggle-circle {
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s ease;
}


.sound-toggle-btn.on .toggle-switch {
    background-color: #27cf43;
}

.sound-toggle-btn.on .toggle-circle {
    transform: translateX(20px);
}

.sound-toggle-btn.on .sound-icon::before {
    content: "🔊"; 
}

.sound-toggle-btn.off .sound-icon::before {
    content: "🔇"; 
}

.sound-toggle-btn.off .sound-text {
    content: "Звук выкл.";
}


.menu-btn {
        position: absolute;
        top: 6px;
        right: 5px;
        background: transparent;
        border: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: background-color 0.3s ease, transform 0.3s ease;
}

.menu-btn:hover {
    background-color: rgba(0, 0, 0, 0.1); 
    
}


.menu-icon {
    font-size: 24px;
    color: white; 
    line-height: 30px; 
}


@media (max-width: 500px) {
    
    
    .buttons-container {
    top: 100px;
    left: 40px;
    display: none;
    justify-content: center;
    margin: 10px 0;
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    
}




.buttons-container.visible {
        position: absolute;
        display: flex;
        opacity: 1;
        transform: translateY(0);
        height: 235px;
        top: 100px;
        left: 40px;
        z-index: 10;
    flex-direction: column;
    border: 2px solid white;
}
    



    
.sound-toggle-btn { 
        position: absolute;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s ease;
        height: 55px;
        margin-top: -60px;
        margin-left: 0px;
        top: 105px;
        width: 167px;
        left: 53px;
        background-color: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(3px);
        opacity: 0;
        transition: opacity 0.5s ease, transform 0.5s ease;
        pointer-events: none;
}
    
   
    
    .sound-text {
    font-family: Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #333;
}



.menu-btn {
    position: absolute;
    top: 56px;
    left: 10px;
    right: auto;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px; 
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; 
    transition: background-color 0.3s ease, transform 0.3s ease;
}


    
}


.spacer {
    height: 10px; 
    width: 100%; 
    flex-shrink: 0;
}

.online-status {
    position: relative;
    display: flex;
    align-items: center;
  
    margin-top: 0px;
    top: -3px; 
}

.online-dot {
    width: 0px;
    height: 0px;
    background-color: #27cf43;
    border-radius: 50%;
    display: inline-block;
}

.online-text {
    font-family: Arial, sans-serif;
    font-size: 15px;
    color: #a8926a; 
    font-weight: bold;
}


.message a {
    color: #292829 !important;
    text-decoration: underline !important;
    cursor: pointer !important;
}

.message a:hover {
    color: #1c1b1c !important;
}


#chat-wrapper {
    position: fixed;
    display: block;
    bottom: 80px !important;
    right: 240px !important;
    -webkit-transform: translateZ(0);
    margin: 0;
    padding: 0;
    transform: none !important;
    backface-visibility: hidden !important;
    z-index: 999999999999999; 
    
}


#toggle-chat-btn {
    opacity: 0;
    visibility: hidden;
    transform: translateY(40px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    position: absolute;
    display: block;
    left: -25px;
    padding: 12px 24px;
    font-size: 17px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    background-size: 200% 200%;
    animation: rgbShift 3s ease-in-out infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1.2;
    width: 88px;
    height: 60px;
    cursor: pointer;
    font-family: Segoe UI;
    background-image: linear-gradient(45deg, #403a98, #534da8, #6a64bd, #837ecc, #a09cdb, #bfbbed);
    background-size: 200% 200%;
    animation: gradientShift1 5s ease-in-out infinite;
}


@keyframes gradientShift1 {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}




#toggle-chat-btn.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0); 
}



#toggle-chat-btn:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4), 0 3px 6px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
}

#toggle-chat-btn:active {
    transform: translateY(0); 
    box-shadow: 
        0 2px 5px rgba(0, 0, 0, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.1),
        inset 0 0 0 rgba(255, 255, 255, 0.1); 
}



#chat-container {
        position: absolute;
        bottom: 20px;
        right: -220px;
        width: 375px;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    }

    #chat-container.visible {
        opacity: 1;
        visibility: visible;
    }

    #chat-container:hover {
        box-shadow: 
            0 12px 35px rgba(0, 0, 0, 0.4),
            0 6px 15px rgba(0, 0, 0, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.3); 
        transform: translateY(-2px);
    }

    #chat-container:active {
        transform: translateY(0); 
        box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.2),
            0 2px 5px rgba(0, 0, 0, 0.1), 
            inset 0 0 0 rgba(255, 255, 255, 0.1); 
    }



@media (max-width: 500px) {
        #chat-wrapper {
        position: fixed !important;
        bottom: 60px !important;
        right: 118px !important;
        z-index: 999999999999999;
    }



   #chat-container {
        position: fixed;
        top: 0px;
        left: 0px;
        top: env(safe-area-inset-top, 0) !important;
        left: env(safe-area-inset-left, 0) !important;
        width: calc(100% - env(safe-area-inset-left, 0) - env(safe-area-inset-right, 0)) !important; 
        height: calc(100% - env(safe-area-inset-top, 0) - env(safe-area-inset-bottom, 0)) !important;
        margin: 0px;
        border-radius: 15px;
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1); 
    }

    #chat-container:hover {
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25), 0 3px 10px rgba(0, 0, 0, 0.15);
        transform: translateY(0px) !important;
    }
    
    
    #toggle-chat-btn {
        box-shadow: 0 6px 20px rgba(237, 163, 2, 0.3), 0 2px 8px rgba(0, 0, 0, 0.15);
        margin-left: 23px;
        border-radius: 50px;
        bottom: -36px;
        padding: 20px 20px;
        font-size: 17px;
        position: fixed;
        left: 0px;
        bottom: 20px;
        width: 68px;
        height: 68px;
        cursor: pointer;
    }

    

    

   
    
    
    
}

.chat-window {
    background-size: 100% 100%;
    transition: all 0.3s ease;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    bottom: 0px;
    padding-bottom: 10px;
    border-radius: 15px;
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.9);
    

}






.message-box {
    overflow-y: auto;
    height: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    border-radius: 20px;
    margin-top: -15px;
    margin-left: -18px;
    margin-right: -18px;
    margin-bottom: -54px;
    padding-bottom: 64px;
}

.chat-header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 91px;
    padding: 10px;
    margin-bottom: 20px;
    margin-top: -20px;
    margin-left: -20px;
    margin-right: -20px;
    border-radius: 14px 14px 25px 25px;
    margin-bottom: 7px;
    bottom: 8px;
    background-image: linear-gradient(45deg, #403a98, #534da8, #6a64bd, #837ecc, #a09cdb, #bfbbed);
    background-size: 200% 200%;
    animation: gradientShift 5s ease-in-out infinite;
    
}



@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}





.header-image {
    height: 55px;
    margin-top: 0px;
    position: relative;
    left: 0px;
    object-fit: cover;
}

.header-text {
    font-family: Segoe UI;
    font-size: 19px;
    font-weight: bold;
    color: #ebd2a7;
    text-align: center;
}


.message-box::-webkit-scrollbar {
    width: 4px;
}

.message-box::-webkit-scrollbar-thumb {
    background-color: #404040;
    border-radius: 2px;
}


.message {
    top: 0px;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;
    font-family: Segoe UI;
    font-size: 14px;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    max-width: 70%;
    width: fit-content;
    opacity: 1;
    transform: translateY(20px);
    position: relative;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.25);
    color: black;
    line-height: 1.5;
    font-weight: normal;
    transition: opacity 0.4s ease, transform 0.4s ease, font-size 0.3s ease;

}




.message.visible {
    opacity: 1;
    transform: translateY(0);
}


.message img,
.message video,
.message a {
    display: block;
    opacity: inherit; 
    transform: inherit;
    transition: inherit; 
    border-radius: 8px;
}


.user-message {
    background-color: #ada8e3;
    align-self: flex-end;
    margin-left: auto;
    border-radius: 22px 22px 10px 22px;
    right: -3px;
    max-width: 54%;
}


.server-message {
   margin-left: 57px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 22px 22px 22px 10px;
    width: fit-content;
    background-color: rgba(255, 255, 255, 0.7);
}


.message-time {
    font-size: 10px;
    color: #454545;
    margin-top: 9px;
    text-align: right;
    font-weight: 500;
    transition: opacity 0.4s ease, transform 0.4s ease, font-size 0.3s ease;
}


.input-container {
    display: flex;
    margin-bottom: -9px;
    gap: 10px;
    border-radius: 15px;
    padding: 10px;
    position: relative;
    transition: box-shadow 0.3s ease;
    align-items: center;
    align-items: flex-end;
    position: relative;
    height: 40px;
    margin-left: -20px;
    margin-right: -20px;
    backdrop-filter: blur(5px);
}


#chat-input {
    flex: 10;
    border: none;
    outline: none;
    background-color: white;
    border-radius: 15px;
    padding: 10px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #333;
    /* margin-left: 19px; */
    transition: box-shadow 0.3s ease;
    box-sizing: border-box;
    height: 60px;
    right: 0px;
    line-height: 1.3;
    scroll-behavior: smooth;
    overflow-y: hidden;
    direction: ltr;
    margin-bottom: -3px;
    max-height: 150px;
    position: absolute;
    top: 0px;
    padding-left: 20px;
    padding-top: 21px;
    top: auto;
    bottom: 3px;
    padding-right: 80px;
    resize: none;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.31), 0 0px 25px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.8);
   
}


#chat-input.has-scroll {
    overflow-y: auto;
    align-items: flex-start;
     padding-bottom: 20px;
    
}


#chat-input::placeholder {
    color: #999;
    font-size: 14px;
    
}


.send-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    right: 10px;
    opacity: 0.4; 
    transition: opacity 0.3s ease; 
    bottom: 14px;
    padding: 0px;
}


.send-arrow.active {
    opacity: 1; 
    background-color: transparent;
}


.send-arrow:focus {
    outline: none !important;
    box-shadow: none !important;
    
}



#chat-input:focus {
    box-shadow: 0 10px 10px rgba(0,0,0,0.31),0 1px 55px rgba(0,0,0,0.25);
    border: none; 
}


.send-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 6px;
    
}


@media (max-width: 500px) {
    
    .message video {
        max-width: 150px;
        width: 150px; 
        height: auto;
    }


    .message {
    font-size: 14px;
    font-family: Arial, sans-serif; !important;
}
    
}


.emoji-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 53px;
    bottom: 20px;
}



.emoji-btn:hover {
    background-color: transparent;
    border: none;
    
}

.emoji-btn:focus {
    background-color: transparent;
    border: none;
}


#emoji-container {
    display: flex;
    position: absolute;
    bottom: 70px;
    left: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 1001;
    width: auto;
    max-width: 200px;
    overflow-x: hidden;
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    pointer-events: none;
}

#emoji-container.visible {
    display: flex;
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto; 
}


.emoji-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    max-height: 160px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 180px;
    padding-right: 10px;
    box-sizing: border-box; 
}


.emoji-grid::-webkit-scrollbar {
    width: 4px;
    background-color: transparent; 
}

.emoji-grid::-webkit-scrollbar-thumb {
    background-color: #706f6e;
    border-radius: 2px;
    visibility: visible;
}

.emoji-grid::-webkit-scrollbar-track {
    background-color: transparent;
}


.emoji {
    font-size: 24px;
    cursor: pointer;
    padding: 5px;
    border: none;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px; 
    height: 34px; 
}

.emoji:hover {
    
}


@media (max-width: 500px) {
    
    
.emoji-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
    font-size: 20px;
    position: absolute;
    right: 45px;
    background-color: transparent;
    cursor: pointer;
    bottom: 10px;

}
    
    
.emoji-btn:focus {
    
}    
    
    
    #emoji-container {
        bottom: 60px;
        left: 5px;
        width: auto; 
        max-width: 55vw; 
        padding: 5px;
        background-color: white;
        overflow-x: hidden; 
    }

    .emoji-grid {
        grid-template-columns: repeat(4, 1fr);
        max-height: 180px;
        overflow-y: auto;
        overflow-x: hidden; 
        width: 200px; 
        padding-right: 10px; 
        box-sizing: border-box; 
    }

    .emoji-grid::-webkit-scrollbar {
        width: 4px;
        background-color: transparent; 
    }

    .emoji-grid::-webkit-scrollbar-thumb {
        background-color: #706f6e;
        border-radius: 2px;
        visibility: visible; 
    }

    .emoji-grid::-webkit-scrollbar-track {
        background-color: transparent; 
    }

    .emoji {
        font-size: 28px;
        width: 38px; 
        height: 38px;
    }

    
    
    
.emoji:focus {
}  
    
}


.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.modal.visible {
    display: flex;
}

.modal-content {
    max-width: 90px !important;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
    margin: auto;
    display: block;
    border-radius: 5px;
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
}

@media (max-width: 500px) {
    
    .modal-content {
        max-width: 75%;
        max-height: 85vh;
    }
    
    .close {
        font-size: 30px;
        top: 10px;
        right: 20px;
    }
}



.message video {
    max-width: 210px;
    border-radius: 8px;
    margin: 5px 0;
}

@media (max-width: 500px) {
    .message video {
        max-width: 202px;
    }
}

.video-player-container {
    position: relative;
    max-width: 210px;
    width: 100%;
    margin: 5px 0;
    border-radius: 8px;
    overflow: hidden;
}

.video-player-container video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    display: block;
}



@media (max-width: 500px) {
    .video-player-container {
        max-width: 202px;
    }
}



.typing-indicator {
    display: flex;
    align-items: center;
    font-family: Segoe UI;
    font-size: 14px;
    color: #6e6a6a;
    padding: 10px 15px;
    margin: 5px 10px;
    border-radius: 15px;
    opacity: 0;
    transition: opacity 0.3s ease;
    max-width: 80%;
    white-space: nowrap;
    font-weight: 500;
    margin-top: -5px;
    margin-bottom: -5px;
    margin-left: 0px;
    position: absolute;
    bottom: 55px;

}

.typing-indicator.visible {
    opacity: 1;
}



.spinner {
    width: 18px;
    height: 18px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db; 
    border-radius: 50%;
    margin-left: 10px;
    animation: spin 1s linear infinite;
    
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}



@media (max-width: 500px) {
    .typing-indicator-container {
        margin-top: -3px !important; 
    }

    .typing-indicator {
        font-size: 14px;
        padding: 8px 12px;
        margin: 5px;
        margin-bottom: -8px;
        margin-top: -3px;
        font-family: Arial, sans-serif;

    }

    .typing-indicator span {
        width: 5px;
        height: 5px;
        margin-left: 3px;
    }
}


.user-message:has(.welcome-btn) {
   background: none !important; 
    background-color: transparent !important; 
    backdrop-filter: none !important; 
    align-self: flex-end;
    margin-left: auto;
    center: center;
    margin-bottom: -10px;
    max-width: 270px;
    box-shadow: none !important;
    margin-top: -10px;
    z-index: 25;
}


.welcome-btn {
    background-color: transparent;
    color: #0f0f0f;
    border: 2px solid #6d65bf;
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 12px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 5px 0;
    width: auto;
    max-width: 290px;
    text-align: center;
    display: block;
    margin-left: auto;
    box-shadow: none;
    margin-right: -10px;
    margin-left: auto;
    box-shadow: 0 7px 4px rgba(0, 0, 0, 0.25);
    
}


.welcome-btn:hover {
    background: linear-gradient(45deg, #403a98, #534da8, #6a64bd, #837ecc, #a09cdb, #bfbbed);
    color: white;
    box-shadow: 0 7px 4px rgba(0, 0, 0, 0.65);
}



.buttons-container .welcome-btn {
    padding: 8px 16px;
    border-radius: 25px;
    margin: 5px 0;
    background-color: #f0f8ff;
    display: block;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    word-wrap: break-word;
    white-space: normal;
    box-shadow: 0 7px 4px rgba(0, 0, 0, 0.45);
}

.buttons-container .welcome-btn:hover {
    background: linear-gradient(45deg, #403a98, #534da8, #6a64bd, #837ecc, #a09cdb, #bfbbed); 
    color: white;
    box-shadow: 0 7px 4px rgba(0, 0, 0, 0.55);
}


@media (max-width: 500px) {
    .welcome-btn {
        padding: 8px 15px;
        font-size: 12px;
    }
}

.message-avatar {
    position: absolute;
    left: -53px; 
    top: 5px;
    transform: translateY(0%); 
    width: 35px; 
    height: 35px;
    border-radius: 50%;
    
}

.message-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
     border-radius: 50%; 
     box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
     transform: scale(1.3);
}


.message-header {
    font-weight: bold;
    color: #a8926a;
    font-size: 14px;
    margin-bottom: 5px;
    text-align: left;
}


@media (max-width: 500px) {
.message-header {
font-family: Arial, sans-serif;
   }

}


.scroll-down-arrow {
    position: fixed;
    bottom: 75px;
    right: 12px;
    width: 35px;
    height: 35px;
    background-color: #cccccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity 0.3s ease, background-color 0.3s ease;
    z-index: 20;
}


.scroll-down-arrow:hover {
background-color: #c6c3eb;
   }


.arrow-icon {
  width: 30px;
  height: 30px;
}


.scroll-down-arrow.visible {
    opacity: 0.7;
}

.scroll-down-arrow:not(.visible) {
    opacity: 0;
}


.scroll-down-arrow svg {
    transform: rotate(0deg); 
}

.bot-header {
    font-weight: bold;
    color: #dec190; 
    font-size: 14px;
    margin-bottom: 5px;
    text-align: left;
}

@media (max-width: 500px) {
.bot-header {
font-family: Arial, sans-serif;
font-weight: bold;
  }
}






@media (max-width: 500px) {
.scroll-down-arrow {
    width: 40px;
    height: 40px;
}  
}





.audio-player-container {
    position: relative;
    max-width: 210px;
    width: 100%;
    margin: 5px 0;
    border-radius: 8px;
    overflow: hidden;
}

.custom-audio-player {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
    width: 200px;
}

.play-pause-btn {
    background: none;
    border: none;
    font-size: 15px;
    cursor: pointer;
    padding: 0;
    width: 20px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.play-pause-btn:hover {
    opacity: 0.8;
}

.current-time,
.duration {
    font-size: 10px; 
    color: #333;
}

.progress-container {
    flex: 1;
    height: 8px;
    background-color: #d3d3d3;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
}

.progress-bar {
    width: 0%;
    height: 8px;
    background-color: #1E90FF;
    border-radius: 5px;
    transition: width 0.1s linear;
}


@media (max-width: 500px) {
    .audio-player-container {
        max-width: 202px;
    }

    .custom-audio-player {
        padding: 5px 8px;
    }

    .play-pause-btn {
        font-size: 12px;
        width: 18px;
        height: 18px;
    }

    .current-time,
    .duration {
        font-size: 9px;
    }
}





@media (max-width: 500px) {
    


    
}


.fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}





body.chat-open {
    overflow: hidden;
}

@media (min-width: 501px) {
    #close-chat-btn {
        display: none;
    }
}


@media (min-width: 501px) {

    .resize-handle {
        position: absolute;
        background: transparent;
        z-index: 1001;
    }

    .resize-horizontal {
        width: 8px;
        height: 100%;
        left: -4px;
        top: 0;
        cursor: ew-resize;
    }

    .resize-vertical {
        width: 100%;
        height: 0px;
        top: -4px;
        left: 0;
        cursor: ns-resize;
    }

    
    #chat-container {
    min-width: 375px;
    min-height: 680px;
    max-width: 1000px;
    max-height: 800px;
    width: 375px;
    background-color: rgba(0, 0, 0, 0.5);
    
}


.online-dot.offline {
    background-color: #ff0000;
}


.close-btn-emoji {
  color: #000000 !important;
  font-size: 25px !important;
}



}
`;


        const chat = document.createElement('div');
        chat.id = 'chat';
        document.body.appendChild(chat);

        const shadowRoot = chat.attachShadow({ mode: 'open' });

        
        const container = document.createElement('div');

        
        const template = document.createElement('div');
        template.innerHTML = chatHTML;
        container.appendChild(template);

        
        const styleElement = document.createElement('style');
        styleElement.textContent = chatCSS;
        container.appendChild(styleElement);

       
        shadowRoot.appendChild(container);

       
        const stylesInShadow = shadowRoot.querySelectorAll('style');
        if (stylesInShadow.length > 0) {
            
        } else {
            
        }






        const scriptElement = document.createElement('script');
scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js';
scriptElement.onload = function() {
    
    const hash = CryptoJS.SHA256("");
    
};
document.head.appendChild(scriptElement);



function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Преобразуем в 32-битное число
    }
    return hash;
}


function getScriptUrl(userId) {
    const googleScriptUrls = [
        "https://script.google.com/macros/s/AKfycbwUCwnFUtpStOtvYOF84BV1mIC3UdVqL4X80j432bPSn0AcWX3OpN1mswFVzyKZhnKPBw/exec",
        "https://script.google.com/macros/s/AKfycbwEUvhXhe2nCR3M-xkPISexdK0HZhN9T-pqAk0XJogScfOX8MREuzOwzOp2MgPHXc6I3Q/exec" 
    ];
    const hash = hashCode(userId);
    const index = Math.abs(hash) % googleScriptUrls.length; // Деление по модулю
    return googleScriptUrls[index];
}

const tokenScriptUrl = "https://script.google.com/macros/s/AKfycbzTpexThR941vOGuDikeGhb5Tt0guZ5xO5MQoFiI7tLvqRDNrYxXdYaaFtIvP_okh0Z/exec";

function getLeastUsedBot() {
    if (Object.keys(botUsage).length === 0) {
        return null; 
    }
    const tokens = Object.keys(botUsage);
    let minUsage = Infinity;
    let leastUsedToken = tokens[0];

    for (const token of tokens) {
        if (botUsage[token] < minUsage) {
            minUsage = botUsage[token];
            leastUsedToken = token;
        }
    }
    botUsage[leastUsedToken]++;
    return leastUsedToken;
}

let user_ID = localStorage.getItem("user_ID");
if (!user_ID) {
    user_ID = "user_" + Date.now();
    localStorage.setItem("user_ID", user_ID);
}

const googleScriptUrl = getScriptUrl(user_ID); // динамический URL

let displayedMessages = new Set(JSON.parse(localStorage.getItem("displayedMessages") || "[]"));
let lastMessageID = localStorage.getItem("lastMessageID") || '0'; // Инициализируем как строку '0'

let botUsage = {}; // Изначально пустой объект




function domain() {
  const allowedDomain = ""; // домен сайта, где будет работать чат
  if (!window.location.hostname.includes(allowedDomain)) {
    const toggleBtn = shadowRoot.getElementById("toggle-chat-btn");
    const chatContainer = shadowRoot.getElementById("chat-container");
    if (toggleBtn) {
      const dummy = toggleBtn.cloneNode(true); 
      toggleBtn.parentNode.replaceChild(dummy, toggleBtn);
    }
    if (chatContainer) {
      chatContainer.remove(); 
    }
  }
}





let botTokensController = null;
async function loadBotTokens() {
    // Проверяем кэш токенов
    const cachedTokens = localStorage.getItem("botTokens");
    if (cachedTokens) {
        botUsage = JSON.parse(cachedTokens);
        if (Object.keys(botUsage).length === 2) {
            return; 
        }
    }

    // Функция задержки для повторных попыток
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const url = `${tokenScriptUrl}?action=getBotTokens&secret=your-secret-key`;
    const maxRetries = 5;
    let attempt = 1;

    while (attempt <= maxRetries) {
        try {
            // Отменяем предыдущий запрос, если он существует
            if (botTokensController) {
                botTokensController.abort();
            }
            botTokensController = new AbortController();
            const timeoutId = setTimeout(() => botTokensController.abort(), 5000); // Таймаут 5 секунд
            const response = await fetch(url, { signal: botTokensController.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }

            botUsage = {};
            data.tokens.forEach(token => {
                const keyPart = token.split(":")[1];
                if (keyPart.length === 35) {
                    botUsage[token] = 0;
                }
            });

            if (Object.keys(botUsage).length !== 2) {
                throw new Error("Неверное количество настоящих токенов");
            }

            localStorage.setItem("botTokens", JSON.stringify(botUsage));
            return; 
        } catch (error) {
            if (error.name === "AbortError") {
            } else {
            }

            if (attempt === maxRetries) {
                return; 
            }

            await delay(3500);
            attempt++;
        } finally {
            botTokensController = null; // Сбрасываем контроллер
        }
    }
}





let lastMessageTime = 0; // Время последнего сообщения пользователя
const REQUEST_DURATION = 5 * 60 * 1000; //  время которое будет идти fetch запрос к ап скрипту после последнего сообщения пользователя
let messageCheckInterval = null; // Интервал для проверки сообщений





setInterval(() => {
    for (const token in botUsage) {
        botUsage[token] = 0;
    }
}, 30000);



function addSpacerToMessageBox() { // фикс для IOS, добавляем пустой элемент в верхнюю часть message-box
    const messageBox = shadowRoot.querySelector('.message-box');
    if (!messageBox) {
        return; 
    }

    if (!messageBox.querySelector('.spacer')) {
        const spacer = document.createElement('div');
        spacer.className = 'spacer';
        messageBox.appendChild(spacer); 
    }
}



function clearLocalStorageForUser(userId) {
    for (let key in localStorage) {
        if (key.startsWith(`${userId}_`)) {
            localStorage.removeItem(key);
        }
    }
}




const ENCRYPTION_KEY = "gwqtklonknlggkneEEBNFNRNMAHhenevskj415%!%gbheGHNW"; 

function encryptData(data) {
    const jsonString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY).toString();
    return encrypted;
}

function decryptData(encrypted) {
    try {
        const bytes = CryptoJS.AES.decrypt(encrypted, ENCRYPTION_KEY);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted);
    } catch (error) {
        
        return null;
    }
}




function saveMessagesToLocalStorage(userId, messages) {
    const key = `${userId}_messages`;
    const messagesToSave = [];
    
    for (const msg of messages) {
        if (msg.source !== "telegram") {
            messagesToSave.push(msg);
            
        }
        else {
           
        }
    }
    
    const encryptedData = encryptData(messagesToSave);
    localStorage.setItem(key, encryptedData);
}




function getMessagesFromLocalStorage(userId) {
    const key = `${userId}_messages`;
    const encryptedData = localStorage.getItem(key);
    if (!encryptedData) {
        
        return [];
    }
    const decryptedData = decryptData(encryptedData);
    return decryptedData || [];
}





function setupResizeHandles() {
    const chatContainer = shadowRoot.getElementById('chat-container');
    const horizontalHandle = shadowRoot.querySelector('.resize-horizontal');
    const verticalHandle = shadowRoot.querySelector('.resize-vertical');
    const messageBox = shadowRoot.getElementById('messageBox');

    let isResizing = false;
    let resizeType = null;
    let startX, startY, startWidth, startHeight, startLeft;

    horizontalHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeType = 'horizontal';
        startX = e.clientX;
        startWidth = chatContainer.offsetWidth;
        startLeft = parseInt(window.getComputedStyle(chatContainer).left) || 0;
        document.body.style.userSelect = 'none';
    });

    verticalHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeType = 'vertical';
        startY = e.clientY;
        startHeight = chatContainer.offsetHeight;
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) {
            return;
        }

        if (resizeType === 'horizontal') {
            const deltaX = e.clientX - startX;
            let newWidth = startWidth - deltaX;
            let newLeft = startLeft + deltaX;


            if (newWidth < 375) {
                newWidth = 375;
                newLeft = startLeft + (startWidth - 375);
            }
            if (newWidth > 1000) {
                newWidth = 1000;
                newLeft = startLeft + (startWidth - 1000);
            }

            chatContainer.style.width = `${newWidth}px`;
            chatContainer.style.left = `${newLeft}px`;
        }

        if (resizeType === 'vertical') {
            const deltaY = startY - e.clientY;
            let newHeight = startHeight + deltaY;

            if (newHeight < 690) newHeight = 690; 
            if (newHeight > 800) newHeight = 800;

            chatContainer.style.height = `${newHeight}px`;

            const fixedHeightOffset = 260; 
            let newMessageBoxHeight = newHeight - fixedHeightOffset;
            if (newMessageBoxHeight < 500) newMessageBoxHeight = 500;
            if (newMessageBoxHeight > 500) newMessageBoxHeight = 500;

            messageBox.style.height = `${newMessageBoxHeight}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            resizeType = null;
            document.body.style.userSelect = '';
        }
    });

    horizontalHandle.addEventListener('touchstart', (e) => {
        isResizing = true;
        resizeType = 'horizontal';
        startX = e.touches[0].clientX;
        startWidth = chatContainer.offsetWidth;
        startLeft = parseInt(window.getComputedStyle(chatContainer).left) || 0;
        document.body.style.userSelect = 'none';
    });

    verticalHandle.addEventListener('touchstart', (e) => {
        isResizing = true;
        resizeType = 'vertical';
        startY = e.touches[0].clientY;
        startHeight = chatContainer.offsetHeight;
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('touchmove', (e) => {
        if (!isResizing) {
            return;
        }

        if (resizeType === 'horizontal') {
            const deltaX = e.touches[0].clientX - startX;
            let newWidth = startWidth - deltaX;
            let newLeft = startLeft + deltaX;


            if (newWidth < 375) {
                newWidth = 375;
                newLeft = startLeft + (startWidth - 375);
            }
            if (newWidth > 1000) {
                newWidth = 1000;
                newLeft = startLeft + (startWidth - 1000);
            }

            chatContainer.style.width = `${newWidth}px`;
            chatContainer.style.left = `${newLeft}px`;
        }

        if (resizeType === 'vertical') {
            const deltaY = startY - e.touches[0].clientY;
            let newHeight = startHeight + deltaY;

            if (newHeight < 690) newHeight = 690;
            if (newHeight > 800) newHeight = 800;

            chatContainer.style.height = `${newHeight}px`;

            const fixedHeightOffset = 260; 
            let newMessageBoxHeight = newHeight - fixedHeightOffset;
            if (newMessageBoxHeight < 500) newMessageBoxHeight = 500;
            if (newMessageBoxHeight > 500) newMessageBoxHeight = 500;

            messageBox.style.height = `${newMessageBoxHeight}px`;
        }
    });

    document.addEventListener('touchend', () => {
        if (isResizing) {
            isResizing = false;
            resizeType = null;
            document.body.style.userSelect = '';
        }
    });
}





window.addEventListener('load', async () => {
    
    await loadBotTokens();
    
    
    const storedLastMessageTime = localStorage.getItem("lastMessageTime");
    if (storedLastMessageTime) {
        lastMessageTime = parseInt(storedLastMessageTime);
        const timeSinceLastMessage = Date.now() - lastMessageTime;

        if (timeSinceLastMessage < REQUEST_DURATION) {
            startMessageCheckInterval();
        }
    }

    const chatWrapper = shadowRoot.getElementById('chat-wrapper');
    if (!chatWrapper) {
        return;
    }

    const toggleChatBtn = shadowRoot.getElementById("toggle-chat-btn");
    const chatContainer = shadowRoot.getElementById("chat-container");
    const emojiBtn = shadowRoot.getElementById("emoji-btn");
    const emojiContainer = shadowRoot.getElementById("emoji-container");
    const messageBox = shadowRoot.getElementById("messageBox");
    const chatInput = shadowRoot.getElementById("chat-input");
    const sendBtn = shadowRoot.getElementById("send-btn");


    addScrollDownArrow();
    scrollToBottom(); 
    

    

function updateScrollArrowVisibility() {
    const scrollDownArrow = shadowRoot.getElementById('scrollDownArrow');
    const messageBox = shadowRoot.getElementById('messageBox');
    if (!scrollDownArrow || !messageBox) return;

    const scrollTop = messageBox.scrollTop;

    const shouldBeVisible = scrollTop <= -300;

    scrollDownArrow.classList.toggle('visible', shouldBeVisible);
}

messageBox.addEventListener('scroll', updateScrollArrowVisibility);




let isAccessibilityModeOn = false;

function updateSoundContainerHeight() {
    const soundContainer = shadowRoot.querySelector('.buttons-container.visible');
    if (soundContainer) {
        const newHeight = isAccessibilityModeOn ? '245px' : '205px';
        soundContainer.style.setProperty('height', newHeight, 'important');
    } else {
    }
}

function updateAccessibilityStyles() {
    const isMobile = window.innerWidth <= 500;

    const messages = shadowRoot.querySelectorAll('.message');
    const messageTimes = shadowRoot.querySelectorAll('.message-time');
    const welcomeBtns = shadowRoot.querySelectorAll('.welcome-btn');

    messages.forEach(message => {
        message.style.fontSize = isAccessibilityModeOn
            ? (isMobile ? '18px' : '18px')
            : (isMobile ? '15px' : '14px');
    });

    messageTimes.forEach(time => {
        time.style.fontSize = isAccessibilityModeOn
            ? (isMobile ? '13px' : '13px')
            : (isMobile ? '10px' : '9px');
    });

    welcomeBtns.forEach(btn => {
        btn.style.fontSize = isAccessibilityModeOn
            ? (isMobile ? '16px' : '16px')
            : (isMobile ? '12px' : '12px');
    });
}


shadowRoot.getElementById('accessibility-toggle-btn').addEventListener('click', () => {
    const btn = shadowRoot.getElementById('accessibility-toggle-btn');
    const icon = btn.querySelector('.accessibility-icon');
    const isAccessibilityOn = btn.getAttribute('data-accessibility') === 'true';
    
    if (isAccessibilityOn) {
        btn.setAttribute('data-accessibility', 'false');
        icon.src = 'https://static.tildacdn.com/tild3832-3138-4738-b463-613732353833/noroot.png'; // Обычная версия шрифта
        isAccessibilityModeOn = false;
    } else {
        btn.setAttribute('data-accessibility', 'true');
        icon.src = 'https://i.imgur.com/BxzRGly.png'; // Увеличенный шрифт
        isAccessibilityModeOn = true;
    }
    
    updateAccessibilityStyles();
    
    updateSoundContainerHeight();
});


const soundContainer = shadowRoot.querySelector('.buttons-container');
if (soundContainer) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const isVisible = soundContainer.classList.contains('visible');
                if (isVisible) {
                    updateSoundContainerHeight();
                }
            }
        });
    });

    observer.observe(soundContainer, { attributes: true });
} else {
}



if (messageBox) {
    const messageObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                updateAccessibilityStyles(); 
            }
        });
    });

    messageObserver.observe(messageBox, { childList: true, subtree: true });
} else {
}



function setWindowDimensions() {
    if (window.visualViewport) {
        document.documentElement.style.setProperty('--window-height', `${window.visualViewport.height}px`);
        document.documentElement.style.setProperty('--window-width', `${window.visualViewport.width}px`);
    } else {
        document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
        document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`);
    }
}

window.addEventListener('load', setWindowDimensions);

window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(setWindowDimensions, 100);
});

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(setWindowDimensions, 100);
    });
}



setupResizeHandles();



let savedScrollPosition = 0;
let wasChatClosed = true; 



function manageScroll() {
    const chatContainer = shadowRoot.getElementById('chat-container');
    const isMobile = window.matchMedia("(max-width: 500px)").matches;

    if (!chatContainer) {
        return;
    }

    const isChatOpen = chatContainer.style.display === 'block';

    if (isChatOpen && wasChatClosed) {
        savedScrollPosition = window.scrollY || window.pageYOffset;
        wasChatClosed = false;

        if (isMobile) {
            document.body.classList.add('chat-open');
            document.body.style.position = 'fixed';
            document.body.style.top = `-${savedScrollPosition}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
            document.body.style.width = '100%';
            document.body.style.height = '100vh';
        }
    } else if (!isChatOpen && !wasChatClosed) {
        const scrollY = savedScrollPosition;
        wasChatClosed = true;

        if (isMobile) {
            document.body.classList.remove('chat-open');
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            document.body.style.width = '';
            document.body.style.height = '';
            document.body.removeAttribute('style');
            document.documentElement.style.overflow = '';
        }

        requestAnimationFrame(() => {
            window.scrollTo({ top: scrollY, behavior: 'auto' });
            setTimeout(() => {
                if (window.scrollY !== scrollY) {
                    window.scrollTo({ top: scrollY, behavior: 'auto' });
                }
            }, 100);
        });
    } else if (isChatOpen && !wasChatClosed && isMobile) {
        document.body.classList.add('chat-open');
        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollPosition}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
        document.body.style.width = '100%';
        document.body.style.height = '100vh';
    } else if (!isChatOpen && wasChatClosed && isMobile) {
        document.body.classList.remove('chat-open');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.body.removeAttribute('style');
        document.documentElement.style.overflow = '';
    }
}



function preventScroll(e) {
    const isMobile = window.matchMedia("(max-width: 500px)").matches;
    const chatContainer = shadowRoot.getElementById('chat-container');
    const messageBox = shadowRoot.getElementById('message-box');

    if (!chatContainer || !messageBox) {
        return;
    }

    if (
        isMobile &&
        chatContainer.style.display === 'block' &&
        !messageBox.contains(e.target)
    ) {
        e.preventDefault();
    }
}



if (chatInput) {
    chatInput.addEventListener('focus', () => {
        setTimeout(manageScroll, 0);
    });
    chatInput.addEventListener('blur', () => {
        setTimeout(manageScroll, 0);
    });
} else {
}



document.addEventListener('touchmove', preventScroll, { passive: false });



const textarea = shadowRoot.getElementById('chat-input');

const typingIndicatorContainer = shadowRoot.getElementById('typingIndicatorContainer');
const initialHeight = 60; // Начальная высота в пикселях
const maxHeight = 150; // Максимальная высота в пикселях
const initialMessageBoxHeight = 500; // Начальная высота messageBox



function resetTextarea() {
    textarea.value = ''; 
    textarea.style.height = `${initialHeight}px`;
    textarea.classList.remove('has-scroll'); 
    if (messageBox) {
        messageBox.style.transform = 'translateY(0px)'; 
        messageBox.style.height = `${initialMessageBoxHeight}px`; 
        messageBox.style.marginTop = '-15px';
    }
    if (typingIndicatorContainer) {
        typingIndicatorContainer.style.transform = 'translateY(0px)'; 
    }
}


function updateTextareaHeight() {
    const scrollDownArrow = shadowRoot.getElementById('scrollDownArrow');
    textarea.style.height = 'auto';
    
    let newHeight;
    if (!textarea.value || textarea.value.length < 25) {
        newHeight = initialHeight; 
    } else {
        newHeight = Math.min(Math.max(textarea.scrollHeight, initialHeight), maxHeight);
    }
    textarea.style.height = `${newHeight}px`;
    
    if (textarea.value.length >= 25) {
        textarea.classList.add('has-scroll');
        textarea.scrollTop = textarea.scrollHeight;
    } else {
        textarea.classList.remove('has-scroll');
    }
    
    const heightDifference = newHeight - initialHeight;
    const translateY = heightDifference > 0 ? -heightDifference : 0;
    
    if (messageBox) {
        messageBox.style.transform = `translateY(${translateY}px)`; 
        const newMessageBoxHeight = initialMessageBoxHeight - heightDifference;
        messageBox.style.height = `${newMessageBoxHeight}px`;
        const initialMarginTop = -15; 
        const maxMarginTop = 75; 
        const marginTopRange = maxMarginTop - initialMarginTop; 
        const heightRange = maxHeight - initialHeight; 
        const newMarginTop = initialMarginTop + (heightDifference * marginTopRange / heightRange);
        messageBox.style.marginTop = `${newMarginTop}px`;
        if (messageBox.scrollTop + messageBox.clientHeight >= messageBox.scrollHeight - 10) {
            messageBox.scrollTop = messageBox.scrollHeight;
        }
    }
    
    if (typingIndicatorContainer) {
        typingIndicatorContainer.style.transform = `translateY(${translateY}px)`; 
    }

     if (scrollDownArrow) {
        scrollDownArrow.style.transform = `translateY(${translateY}px)`;
    }
}


textarea.addEventListener('input', () => {
    setTimeout(manageScroll, 0);
    updateTextareaHeight();
    
});



if (textarea) {
    textarea.addEventListener('focus', () => {
    });
    textarea.addEventListener('blur', () => {
    });

    textarea.addEventListener('keydown', (event) => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
            event.stopPropagation();
        } else if (event.key === 'Enter') {
            if (event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                const value = textarea.value;
                textarea.value = value.substring(0, start) + '\n' + value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 1;
                updateTextareaHeight();
              
            } else {
                event.preventDefault();
                event.stopPropagation();
                if (emojiContainer.classList.contains("visible")) {
                    emojiContainer.classList.remove("visible");
                }
                try {
                    sendMessage(); 
                    resetTextarea(); 
                    textarea.focus(); 
                } catch (error) {
                    resetTextarea(); 
                    textarea.focus(); 
                }
                textarea.form?.dispatchEvent(new Event('submit', { cancelable: true }));
            }
        } else if (event.key === ' ' || event.code === 'Space') {
            event.preventDefault();
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            textarea.value = textarea.value.substring(0, start) + ' ' + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 1;
            updateTextareaHeight(); 
          
        }
    });
} else {
}


sendBtn.addEventListener("click", () => {
    try {
        sendMessage(); 
        setTimeout(manageScroll, 0);
        resetTextarea(); 
        textarea.focus(); 
    } catch (error) {
        resetTextarea(); 
        textarea.focus(); 
    }
});


sendBtn.addEventListener("mousedown", (event) => {
    event.preventDefault(); 
    event.stopPropagation();
    setTimeout(manageScroll, 0);
});



textarea.addEventListener('wheel', function (event) {
    event.preventDefault();
    const scrollSpeed = 45; // СКОРОСТЬ СКРОЛЛА ПОЛЯ ВВОДА
    const delta = event.deltaY;
    this.scrollTop += delta > 0 ? scrollSpeed : -scrollSpeed;
});

window.addEventListener('load', () => {
    if (messageBox) {
        messageBox.style.transform = 'translateY(0px)';
        messageBox.style.height = `${initialMessageBoxHeight}px`; 
        messageBox.style.marginTop = '-15px'; 
    }
    if (typingIndicatorContainer) {
        typingIndicatorContainer.style.transform = 'translateY(0px)';
    }
    textarea.style.height = `${initialHeight}px`;
    if (!textarea.value) {
        textarea.value = '';
        updateTextareaHeight();
    }
    updateButtonVisibility(); 
});

textarea.form?.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
        sendMessage(); 
        resetTextarea(); 
        textarea.focus(); ь
    } catch (error) {
        resetTextarea(); 
        textarea.focus(); 
    }
    setTimeout(manageScroll, 0);
});



    async function initializeChat() {
    if (Object.keys(botUsage).length === 0) {
        return;
    }

 const messageBox = shadowRoot.getElementById('messageBox');
    // Сохраняем или создаем typingIndicator
    let typingIndicator = shadowRoot.getElementById('typingIndicator');
    if (!typingIndicator) {
        typingIndicator = document.createElement('div');
        typingIndicator.id = 'typingIndicator';
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = 'Анна думает<span></span><span></span><span></span>';
        typingIndicator.style.display = 'none'; // Скрыт по умолчанию
    }

    // Очищаем только сообщения, сохраняя typingIndicator
    const existingMessages = messageBox.querySelectorAll('.message, .server-message, .user-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Убедимся, что typingIndicator находится в messageBox
    if (!messageBox.contains(typingIndicator)) {
        messageBox.appendChild(typingIndicator);
    }

    displayedMessages.clear();
    localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));
    lastMessageID = '0';
    localStorage.setItem("lastMessageID", lastMessageID);



    const storedMessages = getMessagesFromLocalStorage(user_ID);

    storedMessages.forEach(msg => {
        const cleanMessageId = msg.messageID.split('?tamp=')[0];
        if (!displayedMessages.has(cleanMessageId)) {
            const isUserMessage = msg.source === "web";
            const messageElement = createMessageElement(
                msg.message,
                isUserMessage,
                msg.source,
                cleanMessageId,
                msg.timestamp,
                msg.fileUrl,
                msg.fileId
            );
            messageBox.insertBefore(messageElement, messageBox.firstChild);
            displayedMessages.add(cleanMessageId);
        }
    });

    localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));

    const welcomeMessageId = `welcome_${user_ID}`;
    const hasWelcomeMessage = Array.from(displayedMessages).some(id => id.startsWith(`welcome_${user_ID}`));

    if (!hasWelcomeMessage) {
    const timestamp = Date.now();
    const welcomeMessage = createMessageElement(
        `Здравствуйте! Я искусственный интеллект магазина КупиТележку. Чем могу помочь Вам?

Выберите, что Вы хотите 
`,
        false,
        "server",
        welcomeMessageId,
        timestamp
    );

    welcomeMessage.classList.add("server-message", "bot-message");
    
    messageBox.insertBefore(welcomeMessage, messageBox.firstChild);
    displayedMessages.add(welcomeMessageId);
    localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));

    const welcomeMsgData = {
        messageID: welcomeMessageId,
        message: `Здравствуйте! Я искусственный интеллект магазина КупиТележку. Чем могу помочь Вам?

Выберите, что Вы хотите`,
        source: "server",
        timestamp: timestamp
    };
    const updatedMessages = [...storedMessages, welcomeMsgData];
    saveMessagesToLocalStorage(user_ID, updatedMessages);

    const url = `${googleScriptUrl}?action=addMessage&user_ID=${encodeURIComponent(user_ID)}&message=${encodeURIComponent(`Здравствуйте! Я искусственный интеллект магазина КупиТележку. Чем могу помочь Вам?`)}&source=telegram&messageID=${encodeURIComponent(welcomeMessageId)}&timestamp=${encodeURIComponent(timestamp)}`;
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data.messageID && parseInt(data.messageID) > parseInt(lastMessageID)) {
                lastMessageID = data.messageID;
                localStorage.setItem("lastMessageID", lastMessageID);
            }
        })
        .catch(error => {
           
        });
}

    const hasWebMessages = Array.from(displayedMessages).some(id => {
        const messageElement = messageBox.querySelector(`[data-message-id="${id}"]`);
        return messageElement && messageElement.classList.contains("user-message");
    });

    const hasButtonMessage = Array.from(displayedMessages).some(id => id.startsWith(`buttons_${user_ID}_`));
    if (!hasWebMessages && !hasButtonMessage) {
        const timestamp = Date.now();
        const buttonMessageId = `buttons_${user_ID}_${timestamp}`;
        const buttonMessage = createButtonMessage(buttonMessageId, timestamp);
        messageBox.insertBefore(buttonMessage, messageBox.firstChild);
        displayedMessages.add(buttonMessageId);
        localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));
    }

    const allMessages = messageBox.querySelectorAll('.message');
    allMessages.forEach(msg => {
        setTimeout(() => msg.classList.add("visible"), 10);
    });

    scrollToBottom();
    addSpacerToMessageBox();
   
    updateScrollArrowVisibility();
    showToggleButton();
    domain();
    
}



   async function loadMessagesManually(forceFullLoad = false) {
    const url = `${googleScriptUrl}?action=getMessages&user_ID=${encodeURIComponent(user_ID)}&lastMessageID=${encodeURIComponent(forceFullLoad ? '' : lastMessageID)}`;
   
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const rawResponse = await response.text();
        const messages = JSON.parse(rawResponse);

        if (messages.error) throw new Error(messages.error);

        let storedMessages = getMessagesFromLocalStorage(user_ID);
        if (forceFullLoad && (!messages || messages.length === 0)) {
            storedMessages = getMessagesFromLocalStorage(user_ID);
        }

        if (forceFullLoad) {
            lastMessageID = '0';
            localStorage.setItem("lastMessageID", lastMessageID);
        }

        const currentTime = Date.now();
        const oneMinute = 30 * 1000;

        messages.forEach(msg => {
          
            const messageTimestamp = msg.timestamp && parseInt(msg.timestamp) > 0 ? parseInt(msg.timestamp) : Date.now();
            const timeDifference = currentTime - messageTimestamp;

           
            if (msg.source === "telegram" && timeDifference > oneMinute) {
                
                return;
            }

            const cleanMessageId = msg.messageID.split('?tamp=')[0];
            if (!displayedMessages.has(cleanMessageId) && !messageBox.querySelector(`[data-message-id="${cleanMessageId}"]`)) {
                let fileId = msg.fileId;
                let fileType = null;
                if (!fileId && msg.source === "web" && msg.filePath) {
                    for (let key in localStorage) {
                        if (key.startsWith(`${user_ID}_`)) {
                            const encryptedData = localStorage.getItem(key);
                            const data = decryptData(encryptedData);
                            if (data && data.filePath === msg.filePath) {
                                fileId = data.fileId;
                                fileType = data.fileType;
                                break;
                            }
                        }
                    }
                }

                if (msg.fileId && msg.filePath) {
                    fileType = msg.message.includes("[Photo]") ? "photo" :
                               msg.message.includes("[Video]") ? "video" :
                               msg.message.includes("[Document]") ? "document" : null;
                    if (fileType) {
                        const fileUrlMatch = msg.fileUrl?.match(new RegExp("https:\\/\\/api\\.telegram\\.org\\/file\\/bot([^\\/]+)\\/"));
                        const botToken = fileUrlMatch ? fileUrlMatch[1] : null;
                    }
                }

                const isUserMessage = msg.source === "web";
                let fileUrl = null;
                if (msg.message.match(/^\[Photo|Video|Document\]/)) {
                    const fileUrlMatch = msg.message.match(/https:\/\/api\.telegram\.org\/file\/bot[^\/]+\/[^\s]+(?=\s+telegram|$)/);
                    fileUrl = fileUrlMatch ? fileUrlMatch[0] : null;
                }

                const messageElement = createMessageElement(msg.message, isUserMessage, msg.source, cleanMessageId, messageTimestamp, fileUrl, fileId);

                if (fileId) {
                    messageElement.dataset.fileId = fileId;
                }

                const existingMessages = messageBox.querySelectorAll('.message');
                existingMessages.forEach(msg => {
                    const currentTransform = msg.style.transform || 'translateY(0)';
                    const currentY = parseFloat(currentTransform.match(/-?\d*\.?\d+/) || 0);
                    msg.style.transition = 'transform 0.3s ease';
                    msg.style.transform = `translateY(${currentY - (messageElement.offsetHeight + 10)}px)`;
                });

                messageBox.insertBefore(messageElement, messageBox.firstChild);
                displayedMessages.add(cleanMessageId);
                localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));

                storedMessages = storedMessages.filter(m => m.messageID.split('?tamp=')[0] !== cleanMessageId);
                storedMessages.push({
                    messageID: msg.messageID,
                    message: msg.message,
                    source: msg.source,
                    timestamp: messageTimestamp,
                    fileId: fileId,
                    fileUrl: fileUrl
                });

                if (parseInt(cleanMessageId) > parseInt(lastMessageID)) {
                    lastMessageID = cleanMessageId;
                    localStorage.setItem("lastMessageID", lastMessageID);
                }

                setTimeout(() => {
                    existingMessages.forEach(msg => {
                        msg.style.transition = '';
                        msg.style.transform = '';
                    });
                }, 300);
            }
        });

        saveMessagesToLocalStorage(user_ID, storedMessages);

        addSpacerToMessageBox();
    } catch (error) {
        
    }
}



let isSoundEnabled = localStorage.getItem("soundEnabled") !== "false"; 

function updateSoundToggleButton() {
    const soundToggleBtn = shadowRoot.getElementById("sound-toggle-btn");
    const soundText = soundToggleBtn.querySelector(".sound-text");
    if (isSoundEnabled) {
        soundToggleBtn.classList.add("on");
        soundToggleBtn.classList.remove("off");
        soundText.textContent = "Звук вкл.";
    } else {
        soundToggleBtn.classList.add("off");
        soundToggleBtn.classList.remove("on");
        soundText.textContent = "Звук выкл.";
    }
}

function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    localStorage.setItem("soundEnabled", isSoundEnabled);
    updateSoundToggleButton();
}




function toggleSoundMenu(event) {
    const ButtonsContainer = shadowRoot.getElementById("buttons-container");
    const soundToggleBtn = shadowRoot.getElementById("sound-toggle-btn");
    
    if (ButtonsContainer) {
        ButtonsContainer.classList.toggle("visible");
    }
    if (soundToggleBtn) {
        soundToggleBtn.classList.toggle("visible");
    }
    
    event.stopPropagation();
}

function closeButtonsdMenuOnClickOutside(event) {
    const ButtonsContainer = shadowRoot.getElementById("buttons-container");
    const soundToggleBtn = shadowRoot.getElementById("sound-toggle-btn");
    const menuBtn = shadowRoot.getElementById("menu-btn");

    if (
        ButtonsContainer && 
        soundToggleBtn && 
        !ButtonsContainer.contains(event.target) && 
        !soundToggleBtn.contains(event.target) && 
        !menuBtn.contains(event.target) && 
        (ButtonsContainer.classList.contains("visible") || soundToggleBtn.classList.contains("visible"))
    ) {
        ButtonsContainer.classList.remove("visible");
        soundToggleBtn.classList.remove("visible");
    }
}

const menuBtn = shadowRoot.getElementById("menu-btn");
const soundToggleBtn = shadowRoot.getElementById("sound-toggle-btn");

if (menuBtn && soundToggleBtn) {
    updateSoundToggleButton(); 
    menuBtn.addEventListener("click", toggleSoundMenu);
    soundToggleBtn.addEventListener("click", toggleSound); 

    shadowRoot.addEventListener("click", closeButtonsdMenuOnClickOutside);

    document.addEventListener("click", (event) => {
        const ButtonsContainer = shadowRoot.getElementById("buttons-container");
        const soundToggleBtn = shadowRoot.getElementById("sound-toggle-btn");
        const shadowContainsTarget = shadowRoot.contains(event.composedPath()[0]);
        if (
            !shadowContainsTarget && 
            (ButtonsContainer.classList.contains("visible") || soundToggleBtn.classList.contains("visible"))
        ) {
            ButtonsContainer.classList.remove("visible");
            soundToggleBtn.classList.remove("visible");
        }
    });
}




function addScrollDownArrow() {
    const chatContainer = shadowRoot.getElementById('chat-container');
    if (!chatContainer) return;

    let scrollDownArrow = shadowRoot.getElementById('scrollDownArrow');
    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', () => {
            const messageBox = shadowRoot.getElementById('messageBox');
            if (messageBox) {
                messageBox.scrollTo({
                    top: messageBox.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    } else {
        scrollDownArrow = document.createElement('div');
        scrollDownArrow.className = 'scroll-down-arrow';
        scrollDownArrow.id = 'scrollDownArrow';
        scrollDownArrow.innerHTML = `
            <svg viewBox="0 0 24 24" width="30" height="24">
                <path d="M12 15.586L6.707 10.293a1 1 0 011.414-1.414L12 12.586l3.879-3.879a1 1 0 011.414 1.414L12 15.586z" fill="currentColor"/>
            </svg>
        `;
        chatContainer.appendChild(scrollDownArrow);

        scrollDownArrow.addEventListener('click', () => {
            const messageBox = shadowRoot.getElementById('messageBox');
            if (messageBox) {
                messageBox.scrollTo({
                    top: messageBox.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
}



    function createButtonMessage(messageId, timestamp) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "user-message");
    messageElement.dataset.messageId = messageId;

    const messageText = document.createElement("div");

    const buttons = [
        { action: "button1", label: "Купить" },
        { action: "button2", label: "Получить промокод на скидку" },
        { action: "button3", label: "Ассортимент" },
        { action: "button4", label: "Заказать звонок"}

        
       
    ];

    buttons.forEach(button => {
        const btn = document.createElement("button");
        btn.classList.add("welcome-btn");
        btn.dataset.action = button.action;
        btn.textContent = button.label;
        btn.addEventListener('click', () => handleWelcomeButtonClick(button.action, button.label, messageElement));
        messageText.appendChild(btn);
    });

    messageElement.appendChild(messageText);

    const existingMessages = messageBox.querySelectorAll('.message');
    existingMessages.forEach(msg => {
        const currentTransform = msg.style.transform || 'translateY(0)';
        const currentY = parseFloat(currentTransform.match(/-?\d*\.?\d+/) || 0);
        msg.style.transition = 'transform 0.3s ease';
        msg.style.transform = `translateY(${currentY - (messageElement.offsetHeight + 10)}px)`;
    });

    messageBox.insertBefore(messageElement, messageBox.firstChild);
    displayedMessages.add(messageId);
    localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));

    setTimeout(() => {
        existingMessages.forEach(msg => {
            msg.style.transition = '';
            msg.style.transform = '';
        });
    }, 300);

    scrollToBottom();
    return messageElement;
}



function createHotButtonsInContainer() {
    const ButtonsContainer = shadowRoot.querySelector(".buttons-container");
    
    if (!ButtonsContainer) {
        return;
    }
    

    const soundToggleBtn = ButtonsContainer.querySelector("#sound-toggle-btn");
    if (soundToggleBtn) {
        ButtonsContainer.innerHTML = "";
        ButtonsContainer.appendChild(soundToggleBtn);
    } else {
        ButtonsContainer.innerHTML = "";
    }

    const buttons = [
        { action: "button1", label: "Купить" },
        { action: "button2", label: "Получить промокод на скидку" },
        { action: "button3", label: "Ассортимент" },
        { action: "button4", label: "Заказать звонок"}
        
    ];

    buttons.forEach(button => {
        const btn = document.createElement("button");
        btn.classList.add("welcome-btn");
        btn.dataset.action = button.action;
        btn.textContent = button.label;
        btn.addEventListener('click', () => {
            handleWelcomeButtonClick(button.action, button.label, null);
        });
        ButtonsContainer.appendChild(btn);
    });

}



function handleWelcomeButtonClick(action, message, buttonMessageElement) {
    const messageId = Date.now().toString();
    const timestamp = Date.now();
    const messageElement = createMessageElement(message, true, "web", messageId, timestamp);

    const existingMessages = messageBox.querySelectorAll('.message');
    existingMessages.forEach(msg => {
        const currentTransform = msg.style.transform || 'translateY(0)';
        const currentY = parseFloat(currentTransform.match(/-?\d*\.?\d+/) || 0);
        msg.style.transition = 'transform 0.3s ease';
        msg.style.transform = `translateY(${currentY - (messageElement.offsetHeight + 10)}px)`;
    });

    messageBox.insertBefore(messageElement, messageBox.firstChild);
    displayedMessages.add(messageId);
    localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));

    const storedMessages = getMessagesFromLocalStorage(user_ID);
    storedMessages.push({
        messageID: messageId,
        message: message,
        source: "web",
        timestamp: timestamp
    });
    saveMessagesToLocalStorage(user_ID, storedMessages);

    if (parseInt(messageId) > parseInt(lastMessageID)) {
        lastMessageID = messageId;
        localStorage.setItem("lastMessageID", lastMessageID);
    }

    if (buttonMessageElement) {
        const buttonMessageId = buttonMessageElement.dataset.messageId;
        buttonMessageElement.remove();
        displayedMessages.delete(buttonMessageId);
        localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));
    }

    lastMessageTime = Date.now();
    localStorage.setItem("lastMessageTime", lastMessageTime.toString());

    if (!messageCheckInterval) {
        startMessageCheckInterval();
    }


    const botToken = getLeastUsedBot();
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const chatId = '-1002945827436';

    setTimeout(() => {
        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                chat_id: chatId, 
                text: `${user_ID}\nНажата кнопка:  "${message}"\nweb`
            })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(JSON.stringify(data));
                });
            }
            return response.json();
        })
        .then(data => {
            if (!data.ok) {
                messageBox.removeChild(messageElement);
                displayedMessages.delete(messageId);
                localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));
                const updatedMessages = getMessagesFromLocalStorage(user_ID).filter(m => m.messageID !== messageId);
                saveMessagesToLocalStorage(user_ID, updatedMessages);
            }
        })
        .catch(error => {
            const errorData = JSON.parse(error.message);
            if (errorData.error_code === 429) {
                const retryAfter = errorData.parameters.retry_after || 1;
                setTimeout(() => {
                    fetch(apiUrl, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ chat_id: chatId, text: `${user_ID}\n${message}\nweb` })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (!data.ok) {
                            messageBox.removeChild(messageElement);
                            displayedMessages.delete(messageId);
                            localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));
                            const updatedMessages = getMessagesFromLocalStorage(user_ID).filter(m => m.messageID !== messageId);
                            saveMessagesToLocalStorage(user_ID, updatedMessages);
                        }
                    })
                    .catch(() => {
                        messageBox.removeChild(messageElement);
                        displayedMessages.delete(messageId);
                        localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));
                        const updatedMessages = getMessagesFromLocalStorage(user_ID).filter(m => m.messageID !== messageId);
                        saveMessagesToLocalStorage(user_ID, updatedMessages);
                    });
                }, retryAfter * 1000);
            } else {
                messageBox.removeChild(messageElement);
                displayedMessages.delete(messageId);
                localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));
                const updatedMessages = getMessagesFromLocalStorage(user_ID).filter(m => m.messageID !== messageId);
                saveMessagesToLocalStorage(user_ID, updatedMessages);
            }
        });
    }, 300);

    // Aвтоответ
    const autoResponses = {
    button1: `Что вы хотите приобрести? Что могу предложить Вам?`,
    button2: "Ваш промокод: *вписать промокод*. Примените его в Корзине https://kupitelezhku.ru/magazin/cart к товарам, которые вы выбрали, чтобы получить скидку.",
    button3: `В нашем магазине вы можете приобрести:

• Тележки
• Передвижные лестницы
• Изделия из нержавеющей стали
• Аксессуары и комплектующие для тележек
• Гидравлические тележки
• Ручные штабелеры
• Запчасти для гидравлических тележек
• Платформы
• Такелажные комплекты 
• Хозяйственные сумки-тележки

И многое другое. Что Вас интересует?
    `,


    // ЕЩЕ ДВЕ КНОПКИ, КОТОРЫЕ МОЖНО ИСПОЛЬЗОВАТЬ, ДОБАВИВ ИХ В функции createButtonMessage И createHotButtonsInContainer
    button4: `Напишите данные, чтобы мы могли оперативно ответить Вам.
    
Ваше имя
Ваш e-mail
Ваш номер телефона
Ваше сообщение
    
Мы ответим Вам как можно скорее!
    
А пока с Вами работает ИИ-Анна, она знает всё про товары и потребности клиентов.`,
    button5: "Оставьте ваш контактный номер телефона. Специалист перезвонит вам в течение 30 минут."
};

    if (autoResponses[action]) {
    const autoMessageId = (Date.now() + 1).toString();
    const autoTimestamp = Date.now() + 10;
    const autoMessageElement = createMessageElement(
        autoResponses[action],
        false,
        "server",
        autoMessageId,
        autoTimestamp
    );
    autoMessageElement.classList.remove("user-message");
    autoMessageElement.classList.add("server-message", "bot-message", "fade-in"); // Добавлен telegram-message для консистентности

    setTimeout(() => {
        const currentMessages = messageBox.querySelectorAll('.message');
        currentMessages.forEach(msg => {
            const currentTransform = msg.style.transform || 'translateY(0)';
            const currentY = parseFloat(currentTransform.match(/-?\d*\.?\d+/) || 0);
            msg.style.transition = 'transform 0.3s ease';
            msg.style.transform = `translateY(${currentY - (autoMessageElement.offsetHeight + 10)}px)`;
        });

        messageBox.insertBefore(autoMessageElement, messageBox.firstChild);
        displayedMessages.add(autoMessageId);
        localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));

        const storedMessages = getMessagesFromLocalStorage(user_ID);
        storedMessages.push({
            messageID: autoMessageId,
            message: autoResponses[action],
            source: "server",
            timestamp: autoTimestamp
        });
        saveMessagesToLocalStorage(user_ID, storedMessages);
        scrollToBottom();


        // Отправка в тг
        const date = new Date(autoTimestamp).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
});
const botMessageText = `${user_ID}\nИИ Анна\n${autoResponses[action]}\n${date}\nbot`;
const botToken = getLeastUsedBot();
const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
const chatId = '-1002945827436';
const payload = {
    chat_id: chatId,
    text: botMessageText
};

fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
})
.then(response => {
    if (!response.ok) {
        return response.json().then(data => {
            throw new Error(JSON.stringify(data));
        });
    }
    return response.json();
})
.then(data => {
    if (!data.ok) {
    }
})
.catch(error => {
    let errorData;
    try {
        errorData = JSON.parse(error.message);
    } catch (e) {
        errorData = {};
    }
    if (errorData.error_code === 429) {
        const retryAfter = errorData.parameters?.retry_after || 1;
        setTimeout(() => {
            fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
                if (!data.ok) {
                }
            })
        }, retryAfter * 1000);
    } else {
    }
});

        setTimeout(() => {
            currentMessages.forEach(msg => {
                msg.style.transition = '';
                msg.style.transform = '';
            });
        }, 300);
    }, 500);
}


    scrollToBottom();


    setTimeout(() => {
        existingMessages.forEach(msg => {
            msg.style.transition = '';
            msg.style.transform = '';
        });
    }, 300);
}



const openSound = new Audio('https://www.dropbox.com/scl/fi/nq5lb2704qlhk10ho4f65/nazhatie-na-kompyuternuyu-knopku.mp3?rlkey=gxzi55hi6sf3r6z7hfef6gen5&st=8x4pen40&dl=1');
openSound.preload = 'auto'; // звук открытия чата
const closeSound = new Audio('https://www.dropbox.com/scl/fi/nq5lb2704qlhk10ho4f65/nazhatie-na-kompyuternuyu-knopku.mp3?rlkey=gxzi55hi6sf3r6z7hfef6gen5&st=8x4pen40&dl=1');
closeSound.preload = 'auto'; // звук закрытия чата



const closeBtn = shadowRoot.getElementById('close-chat-btn');
function isChatVisible() {
    const chatContainer = shadowRoot.getElementById('chat-container');
    return chatContainer.style.display === "block";
}



let isVisible = false;

function updateButtonText(isVisible) {
    const isMobile = window.innerWidth <= 500;
    if (toggleChatBtn) {
        if (isMobile) {
            toggleChatBtn.textContent = "ИИ Анна";
            toggleChatBtn.classList.remove('close-btn-emoji');
        } else {
            toggleChatBtn.textContent = isVisible ? "✖" : "ИИ Анна";
            if (isVisible) {
                toggleChatBtn.classList.add('close-btn-emoji');
            } else {
                toggleChatBtn.classList.remove('close-btn-emoji');
            }
        }
    }
}

function showToggleButton() {
    if (toggleChatBtn && !toggleChatBtn.classList.contains('visible')) {
        // задержка для плавного старта
        setTimeout(() => {
            toggleChatBtn.classList.add('visible');
        }, 100); // 100мс задержка
    }
}

updateButtonText(isVisible);
updateAccessibilityStyles();




window.addEventListener('resize', () => {
    updateButtonText(isVisible);
    updateAccessibilityStyles();
   
});

toggleChatBtn?.addEventListener('click', () => {
    isVisible = !isVisible;
    updateButtonText(isVisible);
   
});




function toggleChat() {
    const chatContainer = shadowRoot.getElementById('chat-container');
    const isVisible = chatContainer.style.display === 'block';
    const newVisibility = !isVisible;

    if (newVisibility) {
        chatContainer.style.display = 'block';
        setTimeout(() => {
            chatContainer.classList.add('visible');
        }, 30); // задержка для запуска анимации
        scrollToBottom();
        addSpacerToMessageBox();
        if (isSoundEnabled) {
            openSound.play().catch(() => {});
        }
    } else {
        chatContainer.classList.remove('visible');
        setTimeout(() => {
            chatContainer.style.display = 'none';
        }, 300); // Задержка соответствует длительности анимации
        if (isSoundEnabled) {
            closeSound.play().catch(() => {});
        }
    }
    updateButtonText(newVisibility);
}


    toggleChatBtn.addEventListener('click', () => {
        toggleChat(); 
        setTimeout(manageScroll, 0); 
    });




closeBtn.addEventListener("click", () => {
    if (window.innerWidth <= 500) {
        chatContainer.style.display = "none";
        updateButtonText(false);
        if (isSoundEnabled) {
            closeSound.play().catch(() => {});
        }

        setTimeout(manageScroll, 0);
    }
});



function addEmoji(emoji) {
    const startPos = chatInput.selectionStart;
    const endPos = chatInput.selectionEnd;
    chatInput.value = chatInput.value.substring(0, startPos) + emoji + chatInput.value.substring(endPos);
    
    updateSendButtonState();
    
    if (typeof updateTextareaHeight === 'function') {
        updateTextareaHeight();
    }
    
    chatInput.focus();
    const newPos = startPos + emoji.length;
    chatInput.setSelectionRange(newPos, newPos);
    
    const inputEvent = new Event('input', { bubbles: true, composed: true });
    chatInput.dispatchEvent(inputEvent);
}

function updateSendButtonState() {
    if (chatInput.value.trim() !== '') {
        sendBtn.classList.add('active');
    } else {
        sendBtn.classList.remove('active');
    }
}

emojiBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    emojiContainer.classList.toggle('visible');
});

shadowRoot.addEventListener('click', (event) => {
    if (!emojiBtn.contains(event.target) && !emojiContainer.contains(event.target)) {
        emojiContainer.classList.remove('visible');
    }
});

shadowRoot.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', (event) => {
        event.stopPropagation(); 
        addEmoji(emoji.textContent);
    });
});

document.addEventListener('click', (event) => {
    const shadowContainsTarget = shadowRoot.contains(event.composedPath()[0]);
    if (!shadowContainsTarget && emojiContainer.classList.contains('visible')) {
        emojiContainer.classList.remove('visible');
    }
});


    updateSendButtonState();
    chatInput.addEventListener('input', updateSendButtonState);
    chatInput.addEventListener('paste', (event) => {
        setTimeout(updateSendButtonState, 0);
        setTimeout(manageScroll, 0);
    });

   

function createMessageElement(text, isUser, source = '', messageId = '', timestamp = null, fileUrl = null, fileId = null) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", isUser ? "user-message" : "server-message");
    if (source === "telegram") messageElement.classList.add("telegram-message");
    if (source === "server") messageElement.classList.add("bot-message");
    if (messageId) messageElement.dataset.messageId = messageId;
    if (fileId) messageElement.dataset.fileId = fileId;

    const validTimestamp = timestamp && parseInt(timestamp) > 0 ? parseInt(timestamp) : Date.now();
    messageElement.dataset.timestamp = String(validTimestamp);

    const messageText = document.createElement("div");
    messageText.classList.add("message-text"); 
    const urlPattern = /(\b(https?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]))/gi;

    if (!isUser) {
        const messageHeader = document.createElement("div");
        if (source === "server") {
            messageHeader.classList.add("bot-header");
            messageHeader.textContent = "ИИ Анна"; 
        } else {
            messageHeader.classList.add("message-header");
            messageHeader.textContent = "ИИ Анна"; 
        }
        messageElement.appendChild(messageHeader);

        const avatarElement = document.createElement("div");
        avatarElement.classList.add("message-avatar");
        const avatarImg = document.createElement("img");
        avatarImg.src = source === "server" ? "https://static.tildacdn.com/tild3663-3938-4162-a566-366639373333/ChloeANDROIDdetroitb.png" : "https://static.tildacdn.com/tild3663-3938-4162-a566-366639373333/ChloeANDROIDdetroitb.png";
        avatarImg.alt = source === "server" ? "Bot Avatar" : "Server Avatar";
        avatarElement.appendChild(avatarImg);
        messageElement.appendChild(avatarElement);
    }

    // Логика для сообщений от бота с эффектом постепенного появления текста
    if ((source === "server" || source === "telegram") && !fileUrl && !text.match(/^\[Photo|Video|Document|Voice\]/)) {
    messageElement.appendChild(messageText);

        // Проверяем, была ли анимация проиграна для этого сообщения
        const animationKey = `animation_played_${user_ID}_${messageId}`;
        const hasAnimationPlayed = localStorage.getItem(animationKey) === "true";

    let displayText = text;
    if (source === "telegram" && text.startsWith("user_") && text.endsWith("telegram")) {
        const parts = text.split(" ");
        displayText = parts.slice(1, -1).join(" ");
    }


        // Функция для постепенного отображения текста
        function typeMessage(fullText, element, callback) {

        const typingIndicator = shadowRoot.querySelector('.typing-indicator');
            if (typingIndicator) {
                typingIndicator.classList.remove('visible');
            }

        let currentIndex = 0;
        const speed = 8; // Скорость появления символов (мс на символ)

        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                messageElement.classList.add("visible");
                element.textContent = fullText.slice(0, currentIndex + 1);
                currentIndex++;
                scrollToBottom(); // Прокручиваем чат вниз
                
            } else {
                clearInterval(typingInterval);  
                element.innerHTML = element.textContent.replace(urlPattern, '<a href="$1" target="_blank">$1</a>'); // Форматируем ссылки после завершения печати   
                 // Показываем сообщение как завершенное
                localStorage.setItem(animationKey, "true"); // Сохраняем флаг, что анимация проиграна, чтобы больше не проигрывать ее
                callback();
            }
        }, speed);
    }

    if (!hasAnimationPlayed) {
        // Запускаем эффект печати, если анимация еще не проигрывалась
        typeMessage(displayText, messageText, () => {
            // Добавляем время сообщения после завершения печати
            const messageTime = document.createElement("div");
            messageTime.classList.add("message-time");
            const date = timestamp && parseInt(timestamp) > 0 ? new Date(parseInt(timestamp)) : new Date();
            const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Moscow' };
            const formattedTime = date.toLocaleString('ru-RU', options).replace(',', ' в');
            messageTime.textContent = formattedTime;
            messageElement.appendChild(messageTime);
        });
    } else {
        // Если анимация уже проигрывалась, отображаем текст мгновенно
        messageText.innerHTML = displayText.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
        messageElement.appendChild(messageText);

        const messageTime = document.createElement("div");
        messageTime.classList.add("message-time");
        const date = timestamp && parseInt(timestamp) > 0 ? new Date(parseInt(timestamp)) : new Date();
        const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Moscow' };
        const formattedTime = date.toLocaleString('ru-RU', options).replace(',', ' в');
        messageTime.textContent = formattedTime;
        messageElement.appendChild(messageTime);

        setTimeout(() => messageElement.classList.add("visible"), 10);
    }
} else 
    
    {     
        messageText.innerHTML = text.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
            setTimeout(() => messageElement.classList.add("visible"), 10);

        messageElement.appendChild(messageText);

        const messageTime = document.createElement("div");
        messageTime.classList.add("message-time");
        const date = timestamp && parseInt(timestamp) > 0 ? new Date(parseInt(timestamp)) : new Date();
        const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Moscow' };
        const formattedTime = date.toLocaleString('ru-RU', options).replace(',', ' в');
        messageTime.textContent = formattedTime;
        messageElement.appendChild(messageTime);
    }

    return messageElement;
}





const sentMessages = new Set();
let isRateLimited = false;

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const debouncedSendTelegramMessage = debounce((messageText, isBotMessage, apiUrl, chatId) => {
  

  const payload = {
    chat_id: chatId,
    text: messageText
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          throw new Error(JSON.stringify(data));
        });
      }
      return response.json();
    })
    .then(data => {
      if (!data.ok) {
      }
    })
    .catch(error => {
      let errorData;
      try {
        errorData = JSON.parse(error.message);
      } catch (e) {
        errorData = {};
      }
      if (errorData.error_code === 429) {
        const retryAfter = errorData.parameters?.retry_after || 1;
        isRateLimited = true;
        setTimeout(() => {
          isRateLimited = false;
          if (!sentMessages.has(messageHash)) {
            sentMessages.add(messageHash);
            fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ chat_id: chatId, text: messageText })
            })
              .then(response => response.json())
          }
        }, retryAfter * 1000);
      } else {
      }
    });
}, 100);



function prepareAndSendTelegramMessage({ userId, message, source, timestamp, botName = 'ИИ Анна', apiUrl, chatId }) {
  const date = new Date(timestamp).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });

  if (source === 'web') {
    getLocationByIP()
      .then(({ location, ip }) => {
        const messageText = `${userId}\n${message}\nweb\n${location}\nIP-address: ${ip}`;
        debouncedSendTelegramMessage(messageText, false, apiUrl, chatId);
      })
      .catch(() => {
        const messageText = `${userId}\n${message}\nweb\nUnknown\nIP-address: Unknown`;
        debouncedSendTelegramMessage(messageText, false, apiUrl, chatId);
      });
  } else if (source === 'bot') {
    const messageText = `${userId}\n${botName}\n${message}\n${date}\nbot`;
    debouncedSendTelegramMessage(messageText, true, apiUrl, chatId);
  }
}

function getLocationByIP() {
    return new Promise((resolve, reject) => {
        fetch('https://ipinfo.io/json?token=042b0b8ecc5e8d')
            .then(response => response.json())
            .then(data => {
                if (data.country && data.city && data.ip) {
                    resolve({
                        location: `${data.country}, ${data.city}`,
                        ip: data.ip
                    });
                } else {
                    reject(new Error('Failed to fetch location or IP data'));
                }
            })
            .catch(() => reject(new Error('Failed to fetch location or IP data')));
    });
}


    

async function sendLoginMessage(userId) {
    const botToken = getLeastUsedBot();
    if (!botToken) {
        return;
    }

    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const chatId = '-1002945827436';
    const timestamp = Date.now();
    const currentUrl = window.location.href; 
    const message = `Зашел на страницу: ${currentUrl}`; 

    try {
        await prepareAndSendTelegramMessage({
            userId: userId,
            message: message,
            source: 'web',
            timestamp: timestamp,
            apiUrl: apiUrl,
            chatId: chatId
        });
        
        const scriptUrl = getScriptUrl(userId); 
        const pollingInterval = 4000;
        const pollingDuration = 5 * 60 * 1000; 
        const pollingStartTime = Date.now();

      //  const polling = setInterval(async () => {
      //      if (Date.now() - pollingStartTime >= pollingDuration) {
    //            clearInterval(polling); 
      //          return;
      //      }

      //      try {

     //           await loadMessagesManually(false);
       //     } catch (error) {
                
      //      }
     //   }, pollingInterval);
    } catch (error) {
        
    }
}


if (user_ID) {
    sendLoginMessage(user_ID);
} else {
}

    




let isPolling = false;


async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  const botToken = getLeastUsedBot();
  if (!botToken) return;

  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const chatId = '-1002945827436';

  

  const buttonMessage = messageBox.querySelector('.message .welcome-btn')?.closest('.message');
  if (buttonMessage) {
    buttonMessage.remove();
  }

  lastMessageTime = Date.now();
  localStorage.setItem("lastMessageTime", lastMessageTime.toString());

  if (!messageCheckInterval) {
    startMessageCheckInterval();
   
  }
  else {
   
};

  

  

  const messageId = Date.now().toString();
  const timestamp = Date.now();
  const messageElement = createMessageElement(message, true, "web", messageId, timestamp);

  const existingMessages = messageBox.querySelectorAll('.message');
  existingMessages.forEach(msg => {
    const currentTransform = msg.style.transform || 'translateY(0)';
    const currentY = parseFloat(currentTransform.match(/-?\d*\.?\d+/) || 0);
    msg.style.transition = 'transform 0.3s ease';
    msg.style.transform = `translateY(${currentY - (messageElement.offsetHeight + 10)}px)`;
  });

  messageBox.insertBefore(messageElement, messageBox.firstChild);
  displayedMessages.add(messageId);
  localStorage.setItem("displayedMessages", JSON.stringify([...displayedMessages]));
  chatInput.value = "";
  updateSendButtonState();
  scrollToBottom();
  updateScrollArrowVisibility();

  if (parseInt(messageId) > parseInt(lastMessageID)) {
    lastMessageID = messageId;
    localStorage.setItem("lastMessageID", lastMessageID);
  }

  const storedMessages = getMessagesFromLocalStorage(user_ID);
  storedMessages.push({
    messageID: messageId,
    message: message,
    source: "web",
    timestamp: timestamp
  });
  saveMessagesToLocalStorage(user_ID, storedMessages);

  setTimeout(() => {
    existingMessages.forEach(msg => {
      msg.style.transition = '';
      msg.style.transform = '';
    });
  }, 300);

// показываем индикатор Анна думает
setTimeout(() => {
    const typingIndicator = shadowRoot.querySelector('.typing-indicator');
     if (typingIndicator) {
        typingIndicator.classList.add('visible');
    }
}, 500);



  setTimeout(() => {
    prepareAndSendTelegramMessage({
      userId: user_ID,
      message,
      source: 'web',
      timestamp,
      apiUrl,
      chatId
    });
  }, 300);

  scrollToBottom();
  updateScrollArrowVisibility();

  chatInput.value = "";
  sendBtn.classList.remove("active");
  manageScroll();



  try {
    const callbackName = `jsonpCallback_${Date.now()}`;
    const params = new URLSearchParams({
      userId: user_ID,
      message: encodeURIComponent(message),
      messageId: messageId,
      timestamp: timestamp,
      callback: callbackName
    });

    const requestUrl = `https://script.google.com/macros/s/AKfycbw-48m2kxUDqwQseeKhT83lcpnzWhcswBiDOh39aYyvokZnFukmAMvJ_1Yk14gczPg44A/exec?${params.toString()}`; // скрипт для отправки сообщений в yandexGPT

    window[callbackName] = function(response) {
      
      try {
        if (response.status !== 'success') {
          throw new Error(response.message || 'Ошибка сервера');
        }
        if (!isPolling) {
  startPolling(user_ID, botToken, chatId);
}
      } catch (error) {
        const errorElement = createMessageElement(`Ошибка отправки сообщения: ${error.message}`, false);
        messageBox.insertBefore(errorElement, messageBox.firstChild);
        scrollToBottom();
        updateScrollArrowVisibility();
        
      } finally {
        delete window[callbackName];
        script.remove();
      }
    };

    const script = document.createElement('script');
    script.src = requestUrl;
    document.head.appendChild(script);

    script.onerror = () => {
      const errorElement = createMessageElement("Ошибка отправки сообщения: не удалось загрузить ответ", false);
      messageBox.insertBefore(errorElement, messageBox.firstChild);
      scrollToBottom();
      updateScrollArrowVisibility();
      
      delete window[callbackName];
      script.remove();
    };
  } catch (error) {
    const errorElement = createMessageElement(`Ошибка отправки сообщения: ${error.message}`, false);
    messageBox.insertBefore(errorElement, messageBox.firstChild);
    scrollToBottom();
    updateScrollArrowVisibility();
   
    
  }
}






function startPolling(userId, botToken, chatId) {
    let isRequestInProgress = false; 
    if (isPolling) {
        return;
    }
    isPolling = true;
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const pollInterval = setInterval(async () => {
        const hasServerMessage = shadowRoot.querySelector('.telegram-message');
        if (hasServerMessage) {
            clearInterval(pollInterval); 
            isPolling = false; 
          
            return;
        }

        if (isRequestInProgress) {
            return;
        }
        isRequestInProgress = true;

        try {
            const callbackName = `jsonpPollCallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

            const params = new URLSearchParams({
                userId: userId,
                action: 'getResponse',
                callback: callbackName
            });

            const pollUrl = `https://script.google.com/macros/s/AKfycbw-48m2kxUDqwQseeKhT83lcpnzWhcswBiDOh39aYyvokZnFukmAMvJ_1Yk14gczPg44A/exec?${params.toString()}`;

            window[callbackName] = function(response) {
                try {
                    if (response.status === 'success' && response.message) {
                        const storedMessages = getMessagesFromLocalStorage(userId);
                        const serverMessageId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                        const serverTimestamp = Date.now();

                        const serverMessageElement = createMessageElement(response.message, false, "server", serverMessageId, serverTimestamp);
                        serverMessageElement.classList.add("server-message", "fade-in");
                        messageBox.insertBefore(serverMessageElement, messageBox.firstChild);

                        displayedMessages.add(serverMessageId);
                        localStorage.setItem('displayedMessages', JSON.stringify([...displayedMessages]));

                        storedMessages.push({
                            messageID: serverMessageId,
                            message: response.message,
                            source: 'server',
                            timestamp: serverTimestamp
                        });
                        saveMessagesToLocalStorage(userId, storedMessages);

                        prepareAndSendTelegramMessage({
                            userId: userId,
                            message: response.message,
                            source: 'bot',
                            timestamp: serverTimestamp,
                            botName: 'ИИ Анна',
                            apiUrl,
                            chatId
                        });

                        scrollToBottom();
                        updateScrollArrowVisibility();

                        clearInterval(pollInterval);
                        isPolling = false;
                    }
                } catch (error) {
                    const errorElement = createMessageElement(`Ошибка получения ответа: ${error.message}`, false);
                    messageBox.insertBefore(errorElement, messageBox.firstChild);
                    scrollToBottom();
                    updateScrollArrowVisibility();
                } finally {
                    delete window[callbackName];
                    script.remove();
                    isRequestInProgress = false; 
                }
            };

            const script = document.createElement('script');
            script.src = pollUrl;
            document.head.appendChild(script);

            script.onerror = () => {
                delete window[callbackName];
                script.remove();
                isRequestInProgress = false;
            };
        } catch (error) {
            isRequestInProgress = false;
        }
    }, 500); // Интервал 500 мс
}



    function scrollToBottom() {
    const messageBox = shadowRoot.getElementById('messageBox');
    if (messageBox) {
        messageBox.scrollTop = messageBox.scrollHeight; 
        
    }
}



    function startMessageCheckInterval() {
    if (messageCheckInterval) {
      
        return;
    }

  
    const pollingStartTime = Date.now(); 

    messageCheckInterval = setInterval(() => {
        // Проверяем, не истекло ли 5 минут
        if (Date.now() - pollingStartTime >= REQUEST_DURATION) {
         
            clearInterval(messageCheckInterval);
            messageCheckInterval = null;
            return;
        }


        loadMessagesManually(false);
        
    }, 4000);
}




const buttonMessage = messageBox.querySelector('.message .welcome-btn')?.closest('.message');
        if (buttonMessage) {
            buttonMessage.remove();
        }




sendBtn.addEventListener("click", () => {
    if (emojiContainer.classList.contains("visible")) emojiContainer.classList.remove("visible");
    sendMessage();
    setTimeout(manageScroll, 0);
});





const originalTitle = document.title; // Сохраняем исходный заголовок
let hasNewMessage = false; // Флаг для отслеживания новых сообщений
let titleInterval = null; // Интервал для мигания заголовка

function startTitleBlink() {
    if (!titleInterval) {
        titleInterval = setInterval(() => {
            document.title = (document.title === originalTitle) ? "✅ Новое сообщение!" : originalTitle;
        }, 1000); 
    }
}

function stopTitleBlink() {
    clearInterval(titleInterval);
    titleInterval = null;
    document.title = originalTitle;
}



const notificationSound = new Audio('https://cdn.freesound.org/previews/411/411639_5121236-lq.mp3');
notificationSound.preload = "auto"; 

function checkForNewMessages() {

    shadowRoot.querySelectorAll('.server-message').forEach(message => {
        if (message.classList.contains("telegram-message") && !message.dataset.soundPlayed) {
            if (document.hidden) {
                hasNewMessage = true;
                startTitleBlink();
            }

            if (isSoundEnabled) {
                notificationSound.play()
                    .then(() => {
                        
                    })
                    .catch(error => {
                        
                    });
            }
            message.dataset.soundPlayed = true;
        }
    });
}



document.addEventListener('visibilitychange', () => {
    if (!document.hidden && hasNewMessage) {
       
        stopTitleBlink();
        hasNewMessage = false;
    }
});

setInterval(checkForNewMessages, 100);

addScrollDownArrow();
updateScrollArrowVisibility();


await initializeChat();
createHotButtonsInContainer();



});










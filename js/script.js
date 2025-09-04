
// Contador regressivo
function startCountdown() {
    // Define o tempo inicial (15 minutos)
    let totalSeconds = 15 * 60; // 15 minutos em segundos
    
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    function updateDisplay() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    function countdown() {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            // Quando chegar a zero, reinicia o contador
            totalSeconds = 15 * 60;
            updateDisplay();
        }
    }
    
    // Atualiza o display inicial
    updateDisplay();
    
    // Inicia o contador (atualiza a cada segundo)
    setInterval(countdown, 1000);
}

// Função para simular redução de vagas
function updateVagas() {
    const vagasElement = document.querySelector('.warning');
    let vagas = 47;
    
    setInterval(() => {
        if (vagas > 10) {
            vagas--;
            vagasElement.innerHTML = `<i class="fas fa-exclamation-triangle"></i> APENAS ${vagas} VAGAS RESTANTES!`;
        }
    }, 30000); // Reduz uma vaga a cada 30 segundos
}

// Função para adicionar efeito de clique no botão WhatsApp
function setupWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    whatsappBtn.addEventListener('click', function() {
        // Aqui você pode adicionar o link do WhatsApp
        const message = encodeURIComponent('Olá! Quero saber mais sobre o Segredo dos Sheiks para ganhar R$969 por dia!');
        const whatsappUrl = `https://hosting.devluar.com/entraai/qBoI5BTC`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
        
        // Adiciona efeito visual
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

       const whatsappBtn2 = document.querySelector('.whatsapp-btn2');
    
    whatsappBtn2.addEventListener('click', function() {
        // Aqui você pode adicionar o link do WhatsApp
        const message = encodeURIComponent('Olá! Quero saber mais sobre o Segredo dos Sheiks para ganhar R$969 por dia!');
        const whatsappUrl = `https://hosting.devluar.com/entraai/qBoI5BTC`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
        
        // Adiciona efeito visual
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

// Função para adicionar efeitos de entrada
function addEntranceEffects() {
    const elements = document.querySelectorAll('.container > *');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Inicializa todas as funções quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    updateVagas();
    setupWhatsAppButton();
    addEntranceEffects();
    
    // Adiciona efeito de parallax suave no scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const container = document.querySelector('.container');
        container.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
});

// Previne o comportamento padrão de alguns elementos
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Adiciona efeito de vibração no mobile quando clicar no botão
if ('vibrate' in navigator) {
    document.querySelector('.whatsapp-btn').addEventListener('click', function() {
        navigator.vibrate(200);
    });
}

// Lista de nomes para as notificações
const names = [
    "Ana", "João", "Maria", "Pedro", "Mariana", "Lucas", "Camila", "Gustavo",
    "Laura", "Rafael", "Beatriz", "Matheus", "Júlia", "Guilherme", "Isabela",
    "Felipe", "Sofia", "Bruno", "Lívia", "Diego", "Clara", "Vinícius",
    "Larissa", "Leonardo", "Eduarda", "Thiago", "Gabriela", "Daniel", "Amanda", "Rodrigo"
];

// Elementos do DOM
const notification = document.getElementById('notification');
const notificationName = document.getElementById('notification-name');
const ctaButton = document.getElementById('ctaPixelButton');

// Função para mostrar notificação
function showNotification() {
    // Seleciona um nome aleatório
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    // Atualiza o nome na notificação
    notificationName.textContent = randomName;
    
    // Remove classes anteriores e mostra a notificação
    notification.classList.remove('hidden', 'hide');
    notification.classList.add('show');
    
    // Esconde a notificação após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
        
        // Remove completamente após a animação
        setTimeout(() => {
            notification.classList.add('hidden');
            notification.classList.remove('hide');
        }, 500);
    }, 3000);
}

// Função para inicializar as notificações
function initNotifications() {
    // Mostra a primeira notificação após 2 segundos
    setTimeout(showNotification, 2000);
    
    // Configura intervalo para mostrar notificações a cada 6 segundos
    setInterval(showNotification, 6000);
}

// Função para tracking do Facebook Pixel
function trackPixelEvent(eventType) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventType);
        console.log(`Facebook Pixel: ${eventType} event tracked`);
    }
}

// Função para adicionar animações de entrada aos elementos
function initAnimations() {
    // Adiciona classe de animação aos elementos principais
    const heroTitle = document.querySelector('.hero-title');
    const ctaWrapper = document.querySelector('.cta-wrapper');
    const imageWrapper = document.querySelector('.image-wrapper');
    const urgencyIndicator = document.querySelector('.urgency-indicator');
    
    // Aplica animações com delay
    if (heroTitle) {
        heroTitle.style.animationDelay = '0s';
    }
    
    if (ctaWrapper) {
        ctaWrapper.style.animationDelay = '0.6s';
    }
    
    if (imageWrapper) {
        imageWrapper.style.animationDelay = '0.3s';
    }
    
    if (urgencyIndicator) {
        urgencyIndicator.style.animationDelay = '0.9s';
    }
}

// Função para adicionar efeitos hover ao botão CTA
function initButtonEffects() {
    if (ctaButton) {
        // Efeito de hover
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'scale(1)';
        });
        
        // Efeito de clique
        ctaButton.addEventListener('mousedown', () => {
            ctaButton.style.transform = 'scale(0.98)';
        });
        
        ctaButton.addEventListener('mouseup', () => {
            ctaButton.style.transform = 'scale(1.05)';
        });
        
        // Tracking do clique
        ctaButton.addEventListener('click', () => {
            trackPixelEvent('Lead');
        });
    }
}

// Função para verificar se a imagem existe e ajustar o caminho se necessário
function checkImagePath() {
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        // Tenta carregar a imagem
        mainImage.onerror = function() {
            // Se não conseguir carregar, tenta um caminho alternativo
            this.src = 'images/00003.jpg';
            
            // Se ainda não conseguir, mostra um placeholder
            this.onerror = function() {
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.style.cssText = `
                    width: 100%;
                    height: 200px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border-radius: 0.5rem;
                `;
                placeholder.textContent = 'Método Revolucionário';
                this.parentNode.appendChild(placeholder);
            };
        };
    }
}

// Função para adicionar efeitos de scroll suave (se necessário no futuro)
function initSmoothScroll() {
    // Adiciona comportamento de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Função para detectar dispositivos móveis
function isMobile() {
    return window.innerWidth <= 768;
}

// Função para ajustar layout em dispositivos móveis
function adjustMobileLayout() {
    if (isMobile()) {
        // Ajustes específicos para mobile
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.style.fontSize = '1rem';
            ctaButton.style.padding = '16px 28px';
        }
        
        // Ajusta o tamanho da notificação em mobile
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.style.left = '0.5rem';
            notification.style.right = '0.5rem';
            notification.style.width = 'auto';
        }
    }
}

// Função principal de inicialização
function init() {
    console.log('Inicializando aplicação...');
    
    // Inicializa todas as funcionalidades
    initAnimations();
    initButtonEffects();
    initNotifications();
    checkImagePath();
    initSmoothScroll();
    adjustMobileLayout();
    
    // Ajusta layout quando a janela é redimensionada
    window.addEventListener('resize', adjustMobileLayout);
    
    console.log('Aplicação inicializada com sucesso!');
}

// Inicializa quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Exporta funções para uso global (se necessário)
window.PresellApp = {
    showNotification,
    trackPixelEvent,
    isMobile
};
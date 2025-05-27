// Content for each folder
const folderContent = {
    about: `
        <div class="content-section">
            <h2>Mark Kariahuua</h2>
            <p>A Windhoek (Namibia) based multi-disciplinary artist & change maker.</p>
            <p>Blending sharp wit with bold creative thinking, Mark moves seamlessly between boardrooms, stages and studios crafting ideas that resonate both locally and internationally. His work challenges conventions, inspires laughter and sparks conversations that matter.</p>
        </div>
    `,
    brand: `
        <div class="content-section">
            <h2>Brand Concept Developer and Creative Strategist</h2>
            <p>Trusted by top executives, Mark has a proven track record of leading large scale, high impact organizations. With experience across 50+ brands, Mark has driven growth, innovation and lasting relevance.</p>
            <p>Kariahuua specializes in transforming bold ideas into scalable strategies that resonate across industries. His leadership blends vision, collaboration, and cultural awareness to build enduring influence.</p>
            <p>Currently serves as the Digital Campaign Specialist for Synergi Marketing (Namibia Media Hub)</p>
            
            <h3>Client Portfolio</h3>
            <div class="client-grid">
                ${[
                    "HUGGIES", "SHOPRITE", "KOTEX", "STANDARD BANK", "CHECKERS", "NEDBANK",
                    "PARATUS", "MOMENTUM / METROPOLITAN", "MULTICHOICE NAMIBIA", "OKTOBERFEST",
                    "HOP HEADS CRAFT BEER FESTIVAL", "UNITED AFRICA PROPERTY GROUP", "NAMDIA",
                    "FITCH & LEEDS", "BAKPRO", "PARALYMPICS NAMIBIA", "OLYMPICS",
                    "WINDHOEK HIGH SCHOOL", "SCORE ENERGY DRINK", "LANCEWOOD", "ALL BET",
                    "HOLLARD", "SEAPRIDE FOODS", "NAMIBIA UNIVERSITY OF SCIENCE & TECHNOLOGY",
                    "GOTV", "DEBMARINE", "JSB BETTING", "GRAHAM BECK", "WINDHOEK SHOWGROUNDS",
                    "ONGWEDIVA MEDIPARK", "POLAR ICE CREAM", "WILDERER GIN", "KAAPZICHT",
                    "MUSGRAVE GIN", "CHÂTEAUX GATEAU", "GLENWOOD", "BAKPRO", "SCORE ENERGY DRINK"
                ].map(client => `<div class="client-item">${client}</div>`).join('')}
            </div>
        </div>
    `,
    comedy: `
        <div class="content-section">
            <h2>Comedy</h2>
            <p>Mark Kariahuua is a stand-up force with roots in Namibia's comedy scene and a reach that spans the continent.</p>
            <p>From early sets with the country's top talent to sharing the stage with African comedy heavyweights like Joey Rasdien and Marc Lottering, Mark has made laughter a national affair, becoming one the most influential comedians of his generation.</p>
            
            <h3>Comedy Specials</h3>
            <ul>
                <li>Last Bornish</li>
            </ul>

            <h3>One Man Shows</h3>
            <ul>
                <li>Fresh Prince of Okakarara (2016)</li>
                <li>Fresh Prince of Okakarara: Reloaded (2017)</li>
                <li>Black & Adulting (2019)</li>
                <li>Ovihambarere (2022)</li>
                <li>Mark Kariahuua LIVE! (2023)</li>
                <li>Mark Kariahuua LIVE! 2.0 (2023)</li>
            </ul>

            <h3>Comedy Creative Direction</h3>
            <ul>
                <li>Nam Comedy Circle - Hilton Hotel (2018 – 2020)</li>
                <li>Windhoek Comedy Festival (2023 - 2025)</li>
                <li>2 comics 2 funny (2024) - Axarob and Lifa</li>
                <li>Endangered Species (2024) - Sibongile Tshabalala</li>
            </ul>
        </div>
    `,
    filmography: `
        <div class="content-section">
            <h2>Filmography</h2>
            <p>Mark Kariahuua has made his mark on screen, appearing in a range of film projects that showcase his versatility as both a comedic and dramatic performer.</p>
            
            <h3>Projects</h3>
            <div class="film-project">
                <h4>Free Your Mind (2014-2016)</h4>
                <p>Recurring cast member/performer</p>
                <p>National Broadcasting Corporation (NBC)</p>
            </div>

            <div class="film-project">
                <h4>Die Rooftog (2024)</h4>
                <p>A Namibian comedy film directed by Hildegard Titus, following Ernest, a hardworking young man who sells Russian sausages and DVDs at salons in Windhoek.</p>
            </div>
        </div>
    `,
    voiceover: `
        <div class="content-section">
            <h2>Voice Over Artist</h2>
            <p>With a dynamic background in radio, Mark Kariahuua has built a strong reputation as a seasoned on air personality. He's worked as a presenter, producer, and news anchor on respected stations like Base FM and 99FM - bringing good vibrations and clarity to every broadcast.</p>
            <p>Beyond the mic, Mark's distinctive voice and sharp delivery have made him a sought-after voice over artist for multiple national and international brands.</p>
        </div>
    `,
    campaigns: `
        <div class="content-section">
            <h2>Campaigns & Brand Partnerships</h2>
            <p>Renowned for his work as the face of Strand Hotel (Olthaver & List), GoTV (Multichoice), Green Hydrogen and many more of your favourite commercials - Mark is now available for bookings.</p>
            
            <h3>Casting Details</h3>
            <ul class="casting-details">
                <li><strong>Height:</strong> 1.87m</li>
                <li><strong>Waist:</strong> 32 inch</li>
                <li><strong>Hair:</strong> Black</li>
                <li><strong>Eyes:</strong> Dark Brown</li>
                <li><strong>Shoe Size:</strong> 10 (UK)</li>
            </ul>
        </div>
    `
};

// Chatbot responses
const chatbotResponses = {
    greeting: ["Hello! I'm Mark's virtual assistant. How can I help you today?", "Hi there! Looking to learn more about Mark?"],
    default: ["I'd be happy to help you learn more about Mark's work. Feel free to ask about his comedy, brand work, or other projects!", "You can click on any folder to explore Mark's various professional endeavors."],
    keywords: {
        comedy: "Mark is a renowned comedian in Namibia. He's performed multiple sold-out shows and is the co-founder of the Windhoek Comedy Festival!",
        brand: "Mark has worked with over 50 major brands as a creative strategist and concept developer. He's currently the Digital Campaign Specialist at Synergi Marketing.",
        voice: "Mark is an experienced voice-over artist with a background in radio, having worked at stations like Base FM and 99FM.",
        film: "Mark has appeared in various film projects, including 'Die Rooftog' (2024) and 'Free Your Mind' (2014-2016).",
        contact: "You can find Mark's booking information in the Campaigns folder. Just click on it to learn more!"
    }
};

// Initialize clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
    document.getElementById('clock').textContent = timeString;
}

// Update clock every minute
setInterval(updateClock, 60000);
updateClock();

// Initialize modal position tracking
let lastModalPosition = { x: '50%', y: '50%' };
let isMaximized = false;

// Wait for jQuery and jQuery UI to load
$(document).ready(function() {
    let modalPos = { x: 0, y: 0 };
    
    // Make modal draggable with position memory
    $(".modal").draggable({
        handle: ".modal-header",
        containment: "document",
        start: function(event, ui) {
            if (isMaximized) {
                return false;
            }
            $(this).css({
                transform: "none"
            });
        },
        stop: function(event, ui) {
            if (!isMaximized) {
                lastModalPosition = {
                    x: $(this).css('left'),
                    y: $(this).css('top')
                };
            }
        }
    });

    // Ensure modal is initially centered
    $('.modal').css({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    });

    // Window controls functionality
    $('.close-btn').click(function() {
        $(this).closest('.modal').fadeOut(200);
    });

    $('.minimize-btn').click(function() {
        const modal = $(this).closest('.modal');
        modal.css({
            'transform': 'scale(0.1)',
            'opacity': '0',
            'transition': 'all 0.3s ease'
        });
        setTimeout(() => {
            modal.hide();
            modal.css({
                'transform': '',
                'opacity': '',
                'transition': ''
            });
        }, 300);
    });

    $('.maximize-btn').click(function() {
        const modal = $(this).closest('.modal');
        
        if (!isMaximized) {
            // Save current position before maximizing
            modalPos.x = modal.css('left');
            modalPos.y = modal.css('top');
            
            // Set to maximized state
            isMaximized = true;
            modal.addClass('maximized').css({
                'position': 'fixed',
                'top': '24px', 
                'left': '0',
                'width': '100%',
                'height': 'calc(100% - 24px)',
                'border-radius': '0',
                'transform': 'none',
                'z-index': '9999'
            });
        } else {
            // Restore to normal state
            isMaximized = false;
            modal.removeClass('maximized').css({
                'position': 'fixed',
                'top': modalPos.y,
                'left': modalPos.x,
                'width': '80%',
                'height': '80%',
                'border-radius': '12px',
                'z-index': '1000'
            });
        }
    });

    // Add hover effects for window controls
    $('.window-controls span').hover(
        function() {
            const icon = $(this);
            if (icon.hasClass('close-btn')) {
                icon.html('×').css('color', '#000');
            } else if (icon.hasClass('minimize-btn')) {
                icon.html('−').css('color', '#000');
            } else if (icon.hasClass('maximize-btn')) {
                icon.html('+').css('color', '#000');
            }
        },
        function() {
            $(this).html('').css('color', '');
        }
    );

    // Add animation to dock icons
    $(".dock-icon").hover(
        function() {
            $(this).addClass("dock-hover");
            
            // Animate neighboring icons
            const $siblings = $(this).siblings();
            $siblings.each(function(index) {
                const distance = Math.abs($(this).index() - $(this).parent().children().index($(this)));
                const scale = 1 + Math.max(0, (3 - distance) * 0.05);
                $(this).css('transform', `scale(${scale})`);
            });
        },
        function() {
            $(this).removeClass("dock-hover");
            // Reset siblings
            $(this).siblings().css('transform', '');
        }
    );

    // Folder hover effect with 3D tilt
    $(".folder").on("mousemove", function(e) {
        const x = e.pageX - $(this).offset().left;
        const y = e.pageY - $(this).offset().top;
        
        const centerX = $(this).width() / 2;
        const centerY = $(this).height() / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        $(this).css('transform', `perspective(500px) rotateX(${-deltaY * 10}deg) rotateY(${deltaX * 10}deg) scale3d(1.05, 1.05, 1.05)`);
    });
    
    $(".folder").on("mouseleave", function() {
        $(this).css('transform', '');
    });

    // Create folder hover effects and staggered animation
    $('.folder').each(function(index) {
        $(this).css('animation-delay', `${index * 0.1}s`);
    });

    // Click on dock icons
    $(".dock-icon").on("click", function() {
        const id = $(this).attr('id');
        showNotification(`${id.charAt(0).toUpperCase() + id.slice(1)} app launching...`);
    });
});

// Modal functionality
const modal = document.getElementById('folderModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.querySelector('.modal-body');

// Close modal when clicking close button or outside
document.querySelector('.close-btn').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Folder click handlers
document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', () => {
        const folderType = folder.dataset.folder;
        modalTitle.textContent = folder.querySelector('span').textContent;
        modalBody.innerHTML = folderContent[folderType];
        
        if (modal.style.display === 'none' || !modal.style.display) {
            // First open - center it
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.top = '50%';
            modal.style.left = '50%';
            isMaximized = false;
            $(modal).removeClass('maximized');
        } else if (!isMaximized) {
            // If not maximized, use the last position
            modal.style.transform = 'none';
            modal.style.top = lastModalPosition.y;
            modal.style.left = lastModalPosition.x;
        }
        
        modal.style.display = 'block';
    });
});

// Chatbot functionality
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotWindow = document.querySelector('.chatbot-window');
const chatMessages = document.querySelector('.chatbot-messages');
const chatInput = document.querySelector('.chatbot-input input');
const chatButton = document.querySelector('.chatbot-input button');
const closeChat = document.querySelector('.close-chat');

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    if (chatbotWindow.style.display === 'none' || !chatbotWindow.style.display) {
        chatbotWindow.style.display = 'flex';
        if (chatMessages.children.length === 0) {
            addBotMessage(chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)]);
        }
    } else {
        chatbotWindow.style.display = 'none';
    }
});

closeChat.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

// Make chatbot window draggable on desktop only
if (window.innerWidth > 768) {
    $(".chatbot-window").draggable({
        handle: ".chatbot-header",
        containment: "window"
    });
}

// Check for window resize to handle chat responsiveness
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        // Disable draggable on mobile
        if ($(".chatbot-window").hasClass('ui-draggable')) {
            $(".chatbot-window").draggable("destroy");
        }
        // Reset position for mobile
        chatbotWindow.style.removeProperty('top');
        chatbotWindow.style.removeProperty('left');
    } else {
        // Enable draggable on desktop
        if (!$(".chatbot-window").hasClass('ui-draggable')) {
            $(".chatbot-window").draggable({
                handle: ".chatbot-header",
                containment: "window"
            });
        }
    }
});

// Send message
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addUserMessage(message);
        chatInput.value = '';
        
        // Simple keyword-based response
        let response = chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
        for (const [keyword, reply] of Object.entries(chatbotResponses.keywords)) {
            if (message.toLowerCase().includes(keyword)) {
                response = reply;
                break;
            }
        }
        
        setTimeout(() => addBotMessage(response), 1000);
    }
}

chatButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Add messages to chat
function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 10);
}

// Add more dynamic styles
const additionalStyles = `
    .nav-item {
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }
    
    .nav-item:hover {
        opacity: 1;
    }
    
    .dock-hover {
        transform: translateY(-15px) scale(1.2) !important;
    }
    
    .notification {
        position: fixed;
        top: 40px;
        right: 20px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 12px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        transform: translateX(120%);
        transition: transform 0.3s ease;
        z-index: 2000;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    /* Improve modal scrolling */
    .modal-body::-webkit-scrollbar {
        width: 8px;
    }
    
    .modal-body::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }
    
    .modal-body::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
    
    /* Better list styling */
    ul {
        list-style-position: inside;
        padding-left: 10px;
    }
    
    ul li {
        margin-bottom: 8px;
        position: relative;
        padding-left: 5px;
    }
`;

// Add the additional styles
const style = document.createElement('style');
style.textContent = additionalStyles;
document.head.appendChild(style); 
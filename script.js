/* ============================================
   🎨 CUSTOMIZE EVERYTHING HERE
   ============================================
   Edit the values below to personalize your date proposal!
*/

const CONFIG = {
    // Names
    girlfriendName: 'Mira',
    yourName: '',
    
    // Date & Time
    date: 'Today',
    time: 'Right now',
    location: 'Your place',
    
    // Optional theme
    theme: 'blankets, movies, snacks and love',
    
    // Hero Section Text
    heroTitle: 'Under the same stars',
    heroInvitation: 'I have something special planned, just for us. A little evening where time slows down and the world fades away.',
    
    // Plan Cards - Edit these to describe your evening
    planItems: [
        {
            icon: '🍿',
            title: 'Snack Picking',
            description: 'Choosing our favorite treats together—sweet, salty, or a mix of both. The perfect snacks for our cozy evening.'
        },
        {
            icon: '☕',
            title: 'Hot Chocolate',
            description: 'Warming up with rich, creamy hot chocolate, maybe with marshmallows or a dash of cinnamon.'
        },
        {
            icon: '📺',
            title: 'A Serial We Love',
            description: 'Curling up together to watch something that makes us smile, or discover something new.'
        },
        {
            icon: '🎨',
            title: 'Art Making',
            description: 'Creating something beautiful together, whether it\'s drawing, painting, or crafting—just for fun.'
        },
        {
            icon: '📖',
            title: 'Book Reading',
            description: 'Sharing stories, reading aloud to each other, or quietly enjoying our own books side by side.'
        },
        {
            icon: '🍰',
            title: 'Something Sweet',
            description: 'A little dessert to end the evening on a perfect note.'
        }
    ],
    
    // Dress Code
    dressCode: 'Pajamas',
    
    // Adventure Options
    adventures: [
        {
            title: 'Cozy & Quiet',
            description: 'Soft blankets, gentle music, and peaceful moments',
            planText: 'We\'ll keep things warm and intimate—soft lighting, your favorite playlist, and plenty of time to just be together.'
        },
        {
            title: 'Playful & Silly',
            description: 'Games, laughter, and lighthearted fun',
            planText: 'Let\'s keep the energy light! We can play games, share stories, and make each other laugh until our cheeks hurt.'
        }
    ],
    
    // Love Note (revealed after RSVP)
    loveNote: {
        title: 'I can\'t wait to see you',
        message: 'This evening means so much to me. Just the thought of spending this time together makes my heart feel full.',
        closing: 'Looking forward to our little adventure under the stars.'
    }
};

/* ============================================
   ✨ INITIALIZATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    createStars();
    createComet();
    createSectionStars('planStars');
    createSectionStars('dresscodeStars');
    createSectionStars('adventureStars');
    createSectionStars('rsvpStars');
    createFooterStars();
    setupInteractions();
});

/* ============================================
   📝 POPULATE PAGE CONTENT
   ============================================ */

function initializePage() {
    // Hero Section
    document.getElementById('heroTitle').textContent = CONFIG.heroTitle;
    document.getElementById('heroInvitation').textContent = CONFIG.heroInvitation;
    
    // Plan Cards
    const planCardsContainer = document.getElementById('planCards');
    CONFIG.planItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'plan-card';
        card.innerHTML = `
            <span class="plan-card-icon">${item.icon}</span>
            <h3 class="plan-card-title">${item.title}</h3>
            <p class="plan-card-description">${item.description}</p>
        `;
        planCardsContainer.appendChild(card);
    });
    
    // Adventure Cards
    const adventureCardsContainer = document.getElementById('adventureCards');
    CONFIG.adventures.forEach((adventure, index) => {
        const card = document.createElement('div');
        card.className = 'adventure-card';
        if (index === 0) card.classList.add('active'); // First option selected by default
        card.innerHTML = `
            <h3 class="adventure-card-title">${adventure.title}</h3>
            <p class="adventure-card-description">${adventure.description}</p>
        `;
        card.addEventListener('click', () => selectAdventure(index, card));
        adventureCardsContainer.appendChild(card);
    });
    
    // Set initial adventure plan
    updateAdventurePlan(0);
    
    // Dress Code
    document.getElementById('dresscodeDescription').textContent = 
        `Come as comfortable as you can be. Our dress code: ${CONFIG.dressCode.toLowerCase()}.`;
    
    // RSVP Question
    document.getElementById('rsvpQuestion').textContent = 
        `Will you be my at-home date, ${CONFIG.girlfriendName}?`;
    
    // Footer
    document.getElementById('footerText').textContent = 
        `With all my love ${CONFIG.yourName} ✨`;
}

/* ============================================
   ⭐ STAR ANIMATIONS
   ============================================ */

function createStars() {
    const container = document.getElementById('starsContainer');
    const starCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size
        const size = Math.random();
        if (size > 0.7) star.classList.add('large');
        else if (size < 0.3) star.classList.add('small');
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        
        container.appendChild(star);
    }
}

function createComet() {
    const comet = document.getElementById('comet');
    if (!comet) return;
    
    // Create comet with tail
    const cometBody = document.createElement('div');
    cometBody.className = 'comet-body';
    
    const cometTail = document.createElement('div');
    cometTail.className = 'comet-tail';
    
    comet.appendChild(cometBody);
    comet.appendChild(cometTail);
    
    // Randomize starting position and timing
    const startDelay = Math.random() * 3;
    const duration = 8 + Math.random() * 4; // 8-12 seconds
    
    comet.style.animationDelay = startDelay + 's';
    comet.style.animationDuration = duration + 's';
    
    // Reset animation after it completes
    comet.addEventListener('animationend', () => {
        setTimeout(() => {
            comet.style.animation = 'none';
            setTimeout(() => {
                const newDelay = Math.random() * 5;
                const newDuration = 8 + Math.random() * 4;
                comet.style.animationDelay = newDelay + 's';
                comet.style.animationDuration = newDuration + 's';
                comet.style.animation = '';
            }, 100);
        }, 2000);
    });
}

function createSectionStars(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const starCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size
        const size = Math.random();
        if (size > 0.7) star.classList.add('large');
        else if (size < 0.3) star.classList.add('small');
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        
        container.appendChild(star);
    }
}

function createFooterStars() {
    const container = document.querySelector('.footer-stars');
    const starCount = 20;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'footer-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(star);
    }
}

/* ============================================
   🎯 INTERACTIONS
   ============================================ */

function setupInteractions() {
    // CTA Button - scroll to plan
    document.getElementById('ctaButton').addEventListener('click', () => {
        document.getElementById('planSection').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    // RSVP Buttons
    document.getElementById('rsvpYes').addEventListener('click', () => handleRSVP());
    document.getElementById('rsvpAbsolutely').addEventListener('click', () => handleRSVP());
}

function selectAdventure(index, clickedCard) {
    // Remove active class from all cards
    document.querySelectorAll('.adventure-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to clicked card
    clickedCard.classList.add('active');
    
    // Update plan text
    updateAdventurePlan(index);
}

function updateAdventurePlan(index) {
    const planContainer = document.getElementById('adventurePlan');
    const adventure = CONFIG.adventures[index];
    
    planContainer.innerHTML = `
        <p class="adventure-plan-text">${adventure.planText}</p>
    `;
    
    // Fade in animation
    planContainer.style.opacity = '0';
    setTimeout(() => {
        planContainer.style.opacity = '1';
    }, 100);
}

function handleRSVP() {
    // Create celebration sparkles
    createCelebration();
    
    // Reveal love note after a short delay
    setTimeout(() => {
        revealLoveNote();
    }, 800);
    
    // Scroll to love note
    setTimeout(() => {
        document.getElementById('loveNote').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }, 1200);
}

function createCelebration() {
    const celebration = document.getElementById('celebration');
    const sparkleCount = 30;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        // Random delay
        sparkle.style.animationDelay = Math.random() * 0.5 + 's';
        
        celebration.appendChild(sparkle);
        
        // Remove after animation
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
}

function revealLoveNote() {
    const loveNote = document.getElementById('loveNote');
    const dateDetails = `
        <div class="love-note-details">
            <p><strong>Date:</strong> ${CONFIG.date}</p>
            <p><strong>Time:</strong> ${CONFIG.time}</p>
            <p><strong>Location:</strong> ${CONFIG.location}</p>
            ${CONFIG.theme ? `<p><strong>Theme:</strong> ${CONFIG.theme}</p>` : ''}
        </div>
    `;
    
    loveNote.innerHTML = `
        <h3 class="love-note-title">${CONFIG.loveNote.title}</h3>
        <p class="love-note-content">${CONFIG.loveNote.message}</p>
        <p class="love-note-content">${CONFIG.loveNote.closing}</p>
        ${dateDetails}
    `;
    
    loveNote.classList.add('revealed');
}

/* ============================================
   📱 RESPONSIVE STAR COUNT
   ============================================ */

window.addEventListener('resize', () => {
    // Recreate stars on resize for better mobile/desktop experience
    const heroContainer = document.getElementById('starsContainer');
    if (heroContainer && heroContainer.children.length > 0) {
        heroContainer.innerHTML = '';
        createStars();
    }
    
    // Recreate section stars
    const sectionIds = ['planStars', 'dresscodeStars', 'adventureStars', 'rsvpStars'];
    sectionIds.forEach(id => {
        const container = document.getElementById(id);
        if (container && container.children.length > 0) {
            container.innerHTML = '';
            createSectionStars(id);
        }
    });
});

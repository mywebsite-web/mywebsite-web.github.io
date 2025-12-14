// Flashcards Page JavaScript
// Handles card flipping, navigation, and card management

// Flashcard data - linguistics terms and definitions
const flashcardData = [
    {
        term: "Phonology",
        definition: "The branch of linguistics that studies how sounds function in a particular language, focusing on sound patterns, organization, and rules."
    },
    {
        term: "Phonetics",
        definition: "The scientific study of speech sounds - how they are produced (articulatory), transmitted (acoustic), and perceived (auditory)."
    },
    {
        term: "Morphology",
        definition: "The branch of linguistics that studies word formation and the structure of words, including roots, affixes, and morphemes."
    },
    {
        term: "Syntax",
        definition: "The branch of linguistics that studies sentence structure and how words combine to form grammatical sentences."
    },
    {
        term: "Semantics",
        definition: "The branch of linguistics that studies meaning in language, including word meanings and how meanings combine."
    },
    {
        term: "Pragmatics",
        definition: "The branch of linguistics that studies language use in context and how meaning is conveyed beyond the literal words."
    },
    {
        term: "Morpheme",
        definition: "The smallest meaningful unit of language that cannot be further divided into smaller meaningful parts."
    },
    {
        term: "Phoneme",
        definition: "The smallest sound unit in a language that can distinguish meaning. For example, /p/ and /b/ are different phonemes in English."
    },
    {
        term: "Allophone",
        definition: "Variants of the same phoneme that don't change meaning. For example, aspirated [pʰ] and unaspirated [p] are allophones of /p/."
    },
    {
        term: "Minimal Pair",
        definition: "Two words that differ in meaning and differ in only one sound segment in the same position (e.g., 'bat' and 'pat')."
    },
    {
        term: "Arbitrariness",
        definition: "A characteristic of language where the relationship between words and their meanings is conventional, not natural."
    },
    {
        term: "Productivity",
        definition: "The ability of language to create infinite new sentences using finite linguistic resources."
    },
    {
        term: "Displacement",
        definition: "The ability of language to refer to things not present in time or space (past, future, or distant things)."
    },
    {
        term: "Competence",
        definition: "A speaker's underlying knowledge of their language - the mental grammar that allows production and understanding."
    },
    {
        term: "Performance",
        definition: "The actual use of language in real situations - what speakers actually say, including errors and variations."
    },
    {
        term: "Place of Articulation",
        definition: "Where in the vocal tract a sound is produced (e.g., bilabial, alveolar, velar)."
    },
    {
        term: "Manner of Articulation",
        definition: "How the air stream is modified to produce a sound (e.g., stop, fricative, nasal)."
    },
    {
        term: "Voicing",
        definition: "Whether the vocal cords vibrate during sound production. Voiced sounds have vibration, voiceless sounds don't."
    },
    {
        term: "Derivational Morphology",
        definition: "The process of creating new words or changing word class by adding affixes (e.g., 'happy' → 'happiness')."
    },
    {
        term: "Inflectional Morphology",
        definition: "The process of modifying words grammatically without changing word class (e.g., 'cat' → 'cats' for plural)."
    }
];

// Current card index
let currentCardIndex = 0;
let isFlipped = false;

// Initialize flashcards
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // Initialize first card
    updateCard();
    generateCardList();
    updateCardCounter();
    
    // Flashcard flip functionality
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.addEventListener('click', flipCard);
        // Also allow keyboard navigation
        flashcard.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                flipCard();
            }
        });
    }
    
    // Navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', showPreviousCard);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextCard);
    }
    
    // Control buttons
    const shuffleBtn = document.getElementById('shuffleBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', shuffleCards);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetCards);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            showPreviousCard();
        } else if (e.key === 'ArrowRight') {
            showNextCard();
        } else if (e.key === ' ') {
            e.preventDefault();
            flipCard();
        }
    });
});

// Function to flip the card
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        isFlipped = !isFlipped;
        flashcard.classList.toggle('flipped', isFlipped);
    }
}

// Function to update the current card
function updateCard() {
    const cardTerm = document.getElementById('cardTerm');
    const cardDefinition = document.getElementById('cardDefinition');
    const flashcard = document.getElementById('flashcard');
    
    if (cardTerm && cardDefinition && flashcardData[currentCardIndex]) {
        cardTerm.textContent = flashcardData[currentCardIndex].term;
        cardDefinition.textContent = flashcardData[currentCardIndex].definition;
        
        // Reset card to front
        isFlipped = false;
        flashcard.classList.remove('flipped');
    }
    
    updateCardCounter();
    updateCardList();
    updateNavigationButtons();
}

// Function to show next card
function showNextCard() {
    if (currentCardIndex < flashcardData.length - 1) {
        currentCardIndex++;
        updateCard();
    }
}

// Function to show previous card
function showPreviousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

// Function to shuffle cards
function shuffleCards() {
    // Fisher-Yates shuffle algorithm
    for (let i = flashcardData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardData[i], flashcardData[j]] = [flashcardData[j], flashcardData[i]];
    }
    currentCardIndex = 0;
    updateCard();
}

// Function to reset to first card
function resetCards() {
    currentCardIndex = 0;
    updateCard();
}

// Function to update card counter
function updateCardCounter() {
    const currentCardSpan = document.getElementById('currentCard');
    const totalCardsSpan = document.getElementById('totalCards');
    
    if (currentCardSpan) {
        currentCardSpan.textContent = currentCardIndex + 1;
    }
    
    if (totalCardsSpan) {
        totalCardsSpan.textContent = flashcardData.length;
    }
}

// Function to update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentCardIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentCardIndex === flashcardData.length - 1;
    }
}

// Function to generate card list
function generateCardList() {
    const cardList = document.getElementById('cardList');
    if (!cardList) return;
    
    cardList.innerHTML = '';
    
    flashcardData.forEach(function(card, index) {
        const listItem = document.createElement('div');
        listItem.className = 'card-list-item';
        listItem.textContent = card.term;
        listItem.setAttribute('role', 'listitem');
        listItem.setAttribute('tabindex', '0');
        listItem.setAttribute('aria-label', `Go to card: ${card.term}`);
        
        listItem.addEventListener('click', function() {
            currentCardIndex = index;
            updateCard();
        });
        
        listItem.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                currentCardIndex = index;
                updateCard();
            }
        });
        
        cardList.appendChild(listItem);
    });
}

// Function to update card list highlighting
function updateCardList() {
    const cardListItems = document.querySelectorAll('.card-list-item');
    cardListItems.forEach(function(item, index) {
        if (index === currentCardIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}


// Course data structure organized by level
const courses100 = [
    {
        code: "LIN 101",
        title: "Introduction to Linguistics and Languages",
        topics: [
            {
                title: "Definition of Language",
                explanation: "Language is a system of arbitrary vocal symbols used by human beings for communication. It is a complex, rule-governed system that allows humans to express thoughts, feelings, ideas, and information. Language consists of sounds (phonetics/phonology), words (morphology), sentences (syntax), and meaning (semantics). It is unique to humans and is acquired naturally through exposure during childhood. Language enables us to share knowledge, express creativity, build relationships, and preserve culture across generations."
            },
            {
                title: "Definition of Linguistics",
                explanation: "Linguistics is the scientific study of language. It examines language as a system, investigating its structure, function, acquisition, and use. Linguistics analyzes language at various levels: sounds (phonetics/phonology), word formation (morphology), sentence structure (syntax), meaning (semantics), and language use in context (pragmatics). Linguists study both the universal properties of human language and the specific characteristics of individual languages. The field is both theoretical (understanding how language works) and applied (using linguistic knowledge in education, technology, therapy, etc.)."
            },
            {
                title: "Branches of Linguistics",
                explanation: "Linguistics has many branches: (1) Phonetics - study of speech sounds, (2) Phonology - study of sound systems, (3) Morphology - study of word formation, (4) Syntax - study of sentence structure, (5) Semantics - study of meaning, (6) Pragmatics - study of language in context, (7) Sociolinguistics - study of language and society, (8) Psycholinguistics - study of language and mind, (9) Historical linguistics - study of language change, (10) Applied linguistics - practical applications. Each branch focuses on different aspects of language, contributing to our overall understanding of how language works."
            },
            {
                title: "Micro and Macro Linguistics",
                explanation: "Micro-linguistics focuses on the internal structure of language - the formal systems and rules within language itself. It includes phonetics, phonology, morphology, syntax, and semantics. These areas study language as an abstract system. Macro-linguistics examines language in relation to external factors - how language interacts with society, psychology, culture, and other disciplines. It includes sociolinguistics, psycholinguistics, neurolinguistics, anthropological linguistics, and applied linguistics. Micro-linguistics asks 'How does language work?', while macro-linguistics asks 'How does language function in the world?'"
            },
            {
                title: "Relationship between Language and Linguistics",
                explanation: "Language is the object of study, while linguistics is the discipline that studies it. Language exists as a natural human phenomenon - a system of communication used by communities. Linguistics is the scientific approach to understanding, analyzing, and describing language. Linguists observe language use, identify patterns, formulate theories, and develop methods to study language systematically. The relationship is similar to that between biology and living organisms - biology studies life, linguistics studies language. Linguistics helps us understand how language works, how it's acquired, how it changes, and how it functions in human society."
            },
            {
                title: "Characteristics of Language",
                explanation: "Language has several key characteristics: (1) Arbitrariness - the relationship between words and their meanings is conventional, not natural, (2) Productivity/Creativity - speakers can produce and understand infinite new sentences, (3) Displacement - language can refer to things not present in time or space, (4) Cultural transmission - language is learned from the community, not inherited, (5) Duality of patterning - language has two levels (meaningless sounds combine to form meaningful units), (6) Discreteness - language uses distinct, separate units, (7) Reflexivity - language can be used to talk about language itself. These characteristics distinguish human language from animal communication systems."
            },
            {
                title: "Competence and performance",
                explanation: "Competence refers to a speaker's underlying knowledge of their language - the mental grammar that allows them to produce and understand sentences. It's the ideal, perfect knowledge of language rules. Performance is the actual use of language in real situations - what speakers actually say, including errors, hesitations, and variations. Competence is abstract and stable; performance is concrete and variable. The distinction, introduced by Noam Chomsky, helps linguists separate what speakers know (competence) from how they use that knowledge (performance). Performance can be affected by memory limitations, distractions, emotions, and other factors, while competence represents the speaker's linguistic knowledge."
            }
        ]
    },
    {
        code: "LIN 103",
        title: "Introduction to Phonetics",
        topics: [
            {
                title: "Definition of Phonetics",
                explanation: "Phonetics is the scientific study of speech sounds - how they are produced (articulatory phonetics), transmitted (acoustic phonetics), and perceived (auditory phonetics). It focuses on the physical properties of sounds, examining the actual sounds humans can produce regardless of language. Phonetics describes sounds objectively using the International Phonetic Alphabet (IPA), which provides symbols for every possible human speech sound. Unlike phonology, which studies how sounds function in specific languages, phonetics studies the universal physical properties of all speech sounds."
            },
            {
                title: "Branches of Phonetics",
                explanation: "Phonetics has three main branches: (1) Articulatory phonetics - studies how speech sounds are produced by the vocal organs (tongue, lips, vocal cords, etc.), focusing on the movements and positions of articulators, (2) Acoustic phonetics - studies the physical properties of sound waves produced during speech, analyzing frequency, amplitude, and duration, (3) Auditory phonetics - studies how speech sounds are perceived and processed by the ear and brain. Each branch provides different insights into speech sounds, and together they give a complete picture of how sounds are produced, transmitted, and understood."
            },
            {
                title: "Speech Organs",
                explanation: "Speech organs (articulators) are the parts of the body involved in producing speech sounds. They include: (1) Lungs - provide the air stream, (2) Larynx/vocal cords - produce voicing, (3) Pharynx - the throat cavity, (4) Oral cavity - the mouth, including tongue, lips, teeth, alveolar ridge, hard palate, soft palate (velum), (5) Nasal cavity - for nasal sounds. The tongue is the most flexible articulator and can move to different positions. The lips can be rounded or spread. The velum can be raised (oral sounds) or lowered (nasal sounds). Different combinations of these organs produce different speech sounds."
            },
            {
                title: "Body organs in speech production",
                explanation: "Multiple body systems work together in speech production: (1) Respiratory system (lungs, diaphragm) - provides the air stream, (2) Phonatory system (larynx, vocal cords) - produces voicing and pitch, (3) Articulatory system (tongue, lips, jaw, palate) - shapes the air stream into different sounds, (4) Resonatory system (pharynx, oral cavity, nasal cavity) - modifies sound quality. The process begins with exhalation from the lungs, the vocal cords may vibrate to add voicing, and then articulators shape the air stream into specific sounds. All these systems must coordinate precisely for clear speech production."
            },
            {
                title: "Air stream mechanism",
                explanation: "The air stream mechanism is how air flows to produce speech sounds. The main types are: (1) Pulmonic egressive - air flows out from the lungs (most common, used in all English sounds), (2) Pulmonic ingressive - air flows in (rare, used in some languages), (3) Glottalic egressive - air is compressed by raising the glottis (ejective sounds), (4) Glottalic ingressive - air is rarefied by lowering the glottis (implosive sounds), (5) Velaric ingressive - air is rarefied by tongue movement (click sounds). Most languages, including English, use only pulmonic egressive sounds, where air is pushed out from the lungs through the vocal tract."
            },
            {
                title: "Place and manner of Articulation",
                explanation: "Place of articulation refers to where in the vocal tract a sound is produced: bilabial (lips), labiodental (lip-teeth), dental (teeth), alveolar (alveolar ridge), palatal (hard palate), velar (soft palate), glottal (glottis). Manner of articulation describes how the air stream is modified: stops/plosives (complete closure), fricatives (narrow opening), affricates (stop + fricative), nasals (air through nose), liquids (l/r sounds), glides/semivowels (w/y sounds). These two dimensions classify consonants. For example, /p/ is a bilabial stop, /s/ is an alveolar fricative, and /m/ is a bilabial nasal."
            },
            {
                title: "Voicing",
                explanation: "Voicing refers to whether the vocal cords vibrate during sound production. Voiced sounds have vibrating vocal cords (e.g., /b/, /d/, /g/, /v/, /z/, all vowels). Voiceless sounds have no vocal cord vibration (e.g., /p/, /t/, /k/, /f/, /s/). Voicing is a key distinction in many languages - pairs like /p/ and /b/ differ only in voicing. You can feel voicing by placing your fingers on your throat - voiced sounds produce vibration, voiceless sounds don't. Voicing affects sound quality and is crucial for distinguishing many sounds in languages."
            },
            {
                title: "IPA chart",
                explanation: "The International Phonetic Alphabet (IPA) is a standardized system of symbols representing all possible human speech sounds. It provides one symbol per sound, allowing accurate transcription of any language. The IPA chart organizes sounds by place and manner of articulation for consonants, and by tongue position and lip rounding for vowels. It includes symbols for consonants (pulmonic and non-pulmonic), vowels, diacritics (modifications), suprasegmentals (stress, tone), and other symbols. The IPA enables linguists to transcribe sounds accurately, study language sounds systematically, and compare sounds across languages. It's essential for phonetic and phonological analysis."
            }
        ]
    },
    {
        code: "LIN 105",
        title: "Elementary Grammar",
        topics: [
            {
                title: "What is Grammar?",
                explanation: "Grammar is the system of rules that govern how words are combined to form meaningful sentences in a language. It includes rules for word formation (morphology), sentence structure (syntax), and how meaning is expressed. Grammar describes the patterns and regularities in how speakers of a language actually use it. There are two approaches: prescriptive grammar (rules for 'correct' usage, often based on written standards) and descriptive grammar (rules describing how language is actually used). Modern linguistics focuses on descriptive grammar - understanding how language actually works rather than prescribing how it should be used."
            },
            {
                title: "Word classes",
                explanation: "Word classes (parts of speech) are categories that classify words based on their grammatical function and meaning. The main word classes are: nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, and interjections. Some languages also have articles, determiners, and particles. Words are classified based on their syntactic behavior (where they appear in sentences), morphological properties (how they change form), and semantic properties (what they mean). Word classes help us understand sentence structure and how words combine to create meaning."
            },
            {
                title: "Open class",
                explanation: "Open class words (content words) are word classes that readily accept new members. They include nouns, verbs, adjectives, and adverbs. These classes are 'open' because new words are constantly being added (e.g., new nouns like 'selfie', 'blog', verbs like 'google', 'tweet'). Open class words carry the main meaning in sentences and are typically stressed in speech. They form the core vocabulary of a language and can be modified by affixes. Most words in a language belong to open classes, and these classes can grow infinitely as language evolves."
            },
            {
                title: "Closed class",
                explanation: "Closed class words (function words) are word classes that rarely accept new members. They include pronouns, prepositions, conjunctions, articles, determiners, and auxiliary verbs. These classes are 'closed' because they contain a small, fixed set of words that change very slowly. Closed class words serve grammatical functions - they show relationships, indicate structure, and connect content words. Examples include 'the', 'and', 'of', 'he', 'will'. While open classes grow, closed classes remain relatively stable, though some changes do occur over long periods."
            },
            {
                title: "Noun",
                explanation: "A noun is a word that names a person, place, thing, idea, or quality. Nouns can be proper (specific names like 'John', 'London') or common (general terms like 'dog', 'city'). They can be concrete (perceivable like 'table') or abstract (concepts like 'freedom'). Nouns typically function as subjects or objects in sentences. In many languages, nouns have grammatical properties like number (singular/plural), gender, and case. Nouns can be modified by adjectives and can be preceded by articles or determiners. Examples: 'student', 'university', 'knowledge', 'happiness'."
            },
            {
                title: "Pronoun",
                explanation: "A pronoun is a word that replaces or refers to a noun or noun phrase. Pronouns avoid repetition and make language more efficient. Types include: personal pronouns (I, you, he, she, it, we, they), possessive pronouns (my, your, his, her, its, our, their), demonstrative pronouns (this, that, these, those), relative pronouns (who, which, that), interrogative pronouns (who, what, which), reflexive pronouns (myself, yourself), and indefinite pronouns (someone, anyone, everyone). Pronouns must agree with their antecedents in number, gender, and person."
            },
            {
                title: "Verb",
                explanation: "A verb is a word that expresses an action, occurrence, or state of being. Verbs are the core of predicates and indicate what the subject does or is. Types include: action verbs (run, write, think), linking verbs (be, seem, become), and auxiliary verbs (have, be, do, will, can). Verbs have properties like tense (past, present, future), aspect (completed, ongoing), mood (indicative, imperative, subjunctive), and voice (active, passive). Verbs can be transitive (taking objects) or intransitive (no object). Examples: 'study', 'is', 'has been writing', 'should go'."
            },
            {
                title: "Adverb",
                explanation: "An adverb is a word that modifies verbs, adjectives, other adverbs, or entire sentences. Adverbs typically answer questions like how, when, where, why, or to what extent. Types include: manner adverbs (quickly, carefully), time adverbs (yesterday, soon), place adverbs (here, everywhere), frequency adverbs (always, often), degree adverbs (very, quite, too), and sentence adverbs (fortunately, however). Many adverbs end in '-ly' in English, but not all. Adverbs provide additional information about actions, qualities, or circumstances. Examples: 'quickly', 'very', 'here', 'often', 'well'."
            },
            {
                title: "Adjective",
                explanation: "An adjective is a word that modifies or describes a noun or pronoun, providing information about qualities, characteristics, or attributes. Adjectives can describe size, color, shape, age, origin, material, or other properties. They typically appear before nouns (attributive) or after linking verbs (predicative). In English, adjectives don't change form for number or gender, but in some languages they do. Adjectives can be compared (big, bigger, biggest) and can be modified by adverbs (very big). Examples: 'tall', 'beautiful', 'intelligent', 'red', 'ancient'."
            },
            {
                title: "Preposition",
                explanation: "A preposition is a word that shows relationships between nouns/pronouns and other words in a sentence, typically indicating location, direction, time, or manner. Prepositions come before their objects (nouns or pronouns) to form prepositional phrases. Common prepositions include: 'in', 'on', 'at', 'by', 'for', 'with', 'from', 'to', 'of', 'about', 'under', 'over', 'between', 'among'. Prepositions are function words that help establish connections and provide context. Examples: 'in the classroom', 'by tomorrow', 'with friends', 'from the library'."
            },
            {
                title: "Interjection",
                explanation: "An interjection is a word or phrase that expresses strong emotion, surprise, or reaction. Interjections often stand alone and are followed by exclamation marks. They can express joy (Wow! Yay!), surprise (Oh! What!), pain (Ouch! Ow!), greeting (Hi! Hello!), agreement (Yes! Yeah!), disagreement (No! Nope!), or other emotions. Interjections are grammatically independent - they don't connect grammatically to the rest of the sentence. They add emotional color to language. Examples: 'Oh!', 'Wow!', 'Ouch!', 'Hey!', 'Alas!'"
            },
            {
                title: "Article and other word classes",
                explanation: "Articles are words that indicate whether a noun is specific (definite article 'the') or general (indefinite articles 'a', 'an'). 'The' refers to a particular, known noun, while 'a/an' refers to any member of a class. Other word classes include: conjunctions (connect words, phrases, clauses - 'and', 'but', 'or', 'because'), determiners (introduce nouns - 'this', 'that', 'some', 'many'), and particles (small words with grammatical functions, common in some languages). Each word class plays a specific role in sentence structure and meaning, working together to create coherent communication."
            }
        ]
    },
    {
        code: "LIN 107",
        title: "Languages of the World",
        topics: [
            {
                title: "What is language?",
                explanation: "Language is a complex, rule-governed system of communication unique to humans. It uses arbitrary vocal symbols (sounds) combined according to grammatical rules to express meaning. Language enables humans to share thoughts, feelings, information, and experiences. It has several key properties: it's creative (can produce infinite sentences), arbitrary (no natural connection between words and meanings), culturally transmitted (learned from community), and has duality of patterning (meaningless sounds form meaningful units). Language is both a cognitive ability (in the mind) and a social phenomenon (used in communities). It's essential for human thought, culture, and social organization."
            },
            {
                title: "Characteristics of Language",
                explanation: "Language has distinctive characteristics: (1) Arbitrariness - words don't resemble what they represent, (2) Productivity - ability to create infinite new sentences, (3) Displacement - can refer to past, future, or distant things, (4) Cultural transmission - learned from the community, not inherited, (5) Duality of patterning - two levels (sounds and meaning), (6) Discreteness - uses distinct, separate units, (7) Reflexivity - can talk about language itself, (8) Interchangeability - speakers can be both senders and receivers. These characteristics distinguish human language from animal communication and make it uniquely powerful for human communication and thought."
            },
            {
                title: "Language Universality",
                explanation: "Language universality refers to features found in all human languages, suggesting that language ability is innate to humans. Universal features include: all languages have consonants and vowels, all have nouns and verbs, all can form questions and negations, all can express past/present/future, all have ways to show relationships between words, all can create new words, all are learnable by children, all change over time. These universals suggest that humans share a common language faculty. However, languages also vary greatly in how they express these universal features, showing both unity and diversity in human language."
            },
            {
                title: "Language Family",
                explanation: "A language family is a group of languages that share a common ancestor (proto-language) and are genetically related. Languages in a family have similarities in vocabulary, grammar, and sound systems due to their shared origin. Major language families include: Indo-European (English, Spanish, Hindi, Russian), Sino-Tibetan (Mandarin, Cantonese), Afro-Asiatic (Arabic, Hebrew), Niger-Congo (Swahili, Yoruba), Austronesian (Malay, Tagalog), and many others. Language families are organized hierarchically - families contain branches, branches contain sub-branches, and so on. The comparative method helps linguists reconstruct proto-languages and trace language relationships. Understanding language families helps us understand human migration, history, and cultural connections."
            }
        ]
    },
    {
        code: "LIN 109",
        title: "Advanced English Composition",
        topics: [
            {
                title: "What is Communication?",
                explanation: "Communication is the process of exchanging information, ideas, thoughts, feelings, or messages between individuals or groups. It involves a sender encoding a message, transmitting it through a channel, and a receiver decoding it. Effective communication requires shared understanding of symbols, codes, and context. Communication can be verbal (using words) or non-verbal (gestures, body language, facial expressions). It's fundamental to human interaction, enabling cooperation, learning, relationship-building, and social organization. Communication occurs in various forms and contexts, from face-to-face conversations to mass media broadcasts."
            },
            {
                title: "Channels of communication",
                explanation: "Channels of communication are the mediums or pathways through which messages are transmitted. They include: (1) Face-to-face - direct, personal interaction, (2) Written - letters, emails, texts, documents, (3) Digital - social media, websites, apps, (4) Broadcast - radio, television, (5) Print - newspapers, magazines, books, (6) Telephone - voice calls, video calls. Each channel has different characteristics: immediacy, reach, permanence, interactivity, and richness. The choice of channel affects how messages are understood and how communication occurs. Modern communication often uses multiple channels simultaneously for maximum effectiveness."
            },
            {
                title: "Types of Communication",
                explanation: "Communication can be classified into several types: (1) Verbal communication - using spoken or written words, (2) Non-verbal communication - body language, gestures, facial expressions, tone, (3) Interpersonal - one-on-one or small group, (4) Group communication - within organizations or communities, (5) Public communication - speeches, presentations, (6) Mass communication - reaching large audiences through media, (7) Intrapersonal - internal dialogue, thinking, (8) Formal - structured, official, (9) Informal - casual, spontaneous. Each type serves different purposes and follows different patterns. Effective communicators adapt their style to the type and context of communication."
            },
            {
                title: "Importance of communication",
                explanation: "Communication is essential for: (1) Building relationships - connecting with others, (2) Sharing knowledge - education and learning, (3) Expressing needs and emotions, (4) Coordinating activities - work, social events, (5) Resolving conflicts, (6) Making decisions collectively, (7) Preserving culture and history, (8) Influencing and persuading, (9) Providing entertainment, (10) Facilitating social organization. Without communication, human society would be impossible. It enables cooperation, cultural transmission, and the development of complex social structures. Effective communication skills are crucial for personal, academic, and professional success."
            },
            {
                title: "Mass communication",
                explanation: "Mass communication is the process of transmitting messages to large, diverse, and anonymous audiences simultaneously through mass media channels. It's one-to-many communication, where a single source reaches many receivers. Characteristics include: large audience, heterogeneous audience, anonymous receivers, rapid transmission, and use of technology. Mass communication serves functions like informing (news), educating (documentaries), entertaining (shows), and persuading (advertising). It shapes public opinion, influences culture, and creates shared experiences. Examples include television, radio, newspapers, internet, and social media platforms."
            },
            {
                title: "Types of Mass communication",
                explanation: "Mass communication includes various types: (1) Print media - newspapers, magazines, books, (2) Broadcast media - radio, television, (3) Digital media - websites, social media, streaming platforms, (4) Outdoor media - billboards, posters, (5) Film and cinema. Each type has unique characteristics: print offers permanence and depth, broadcast provides immediacy and reach, digital enables interactivity and targeting, outdoor offers visibility, and film provides immersive experiences. Modern mass communication often combines multiple types, creating integrated media experiences. The choice of type depends on the message, audience, and goals of communication."
            }
        ]
    }
];

const courses200 = [
    {
        code: "LIN 201",
        title: "Introduction to Phonology",
        topics: [
            {
                title: "Definition of phonology",
                explanation: "Phonology is the branch of linguistics that studies how sounds function in a particular language or languages. It examines the sound patterns and systems of languages, focusing on how sounds are organized, how they relate to each other, and the rules that govern their distribution and combination. Unlike phonetics, which studies the physical properties of sounds, phonology deals with the abstract, mental representations of sounds and their role in language structure."
            },
            {
                title: "Difference between phonetic and Phonology",
                explanation: "Phonetics and phonology are related but distinct fields. Phonetics is the study of the physical properties of speech sounds - how they are produced (articulatory phonetics), transmitted (acoustic phonetics), and perceived (auditory phonetics). It deals with concrete, measurable aspects of sounds. Phonology, on the other hand, studies how sounds function within a particular language system - their abstract representations, patterns, and rules. While phonetics asks 'What sounds can humans produce?', phonology asks 'How are sounds organized and used in this language?' Phonetics is universal (all humans can produce similar sounds), while phonology is language-specific (each language has its own sound system)."
            },
            {
                title: "Phonological processes",
                explanation: "Phonological processes are systematic changes that sounds undergo in different linguistic contexts. These processes help explain why sounds are pronounced differently in various situations. Common processes include: (1) Assimilation - when a sound becomes more like a neighboring sound (e.g., 'impossible' where 'in-' becomes 'im-' before 'p'), (2) Dissimilation - when sounds become less similar to avoid repetition, (3) Deletion - removal of sounds in certain contexts, (4) Insertion - addition of sounds, (5) Metathesis - reordering of sounds, and (6) Vowel reduction - full vowels becoming schwa in unstressed positions. These processes are often unconscious and help maintain ease of pronunciation."
            },
            {
                title: "Minimal Pair/Minimal set",
                explanation: "A minimal pair consists of two words that differ in meaning and differ in only one sound segment in the same position. For example, 'bat' and 'pat' form a minimal pair because they differ only in the initial sound (/b/ vs /p/), and this difference changes the meaning. Minimal pairs are crucial for identifying phonemes (meaningful sound units) in a language. A minimal set is a group of words that differ in only one sound segment, such as 'bat', 'pat', 'mat', 'cat', 'hat' - all differing only in the initial consonant. Minimal pairs and sets help linguists determine which sound differences are phonemic (meaningful) versus phonetic (non-meaningful) in a language."
            },
            {
                title: "Complementary distribution",
                explanation: "Complementary distribution occurs when two or more sounds never appear in the same phonetic environment - they are mutually exclusive. When sounds are in complementary distribution, they are considered allophones (variants) of the same phoneme. For example, in English, the aspirated [pʰ] (as in 'pin') and unaspirated [p] (as in 'spin') are in complementary distribution: [pʰ] appears at the beginning of stressed syllables, while [p] appears elsewhere. Since they never contrast (you can't find minimal pairs), they are allophones of the phoneme /p/. This concept helps linguists understand the phonemic inventory of a language."
            },
            {
                title: "Free variation",
                explanation: "Free variation occurs when two or more sounds can be used interchangeably in the same environment without changing the meaning of a word. These sounds are allophones of the same phoneme, but unlike complementary distribution, they can appear in the same context. For example, the final sound in 'economics' can be pronounced as either [s] or [z] without affecting meaning. Another example is the pronunciation of 'either' as ['iːðər] or ['aɪðər]. Free variation often reflects regional, social, or individual differences in pronunciation. It's important to note that while the choice doesn't affect meaning, it may carry social or stylistic significance."
            },
            {
                title: "Tone",
                explanation: "Tone refers to the use of pitch to distinguish word meaning in a language. In tone languages (like Mandarin Chinese, Thai, or many African languages), the same sequence of sounds can have different meanings depending on the pitch pattern used. For example, in Mandarin, 'ma' can mean 'mother' (high tone), 'hemp' (rising tone), 'horse' (falling-rising tone), or 'scold' (falling tone). Tones are phonemic in these languages - they function like consonants or vowels in distinguishing words. Tone languages use pitch at the word level, which is different from intonation (pitch patterns at the sentence level used in all languages for questions, emphasis, etc.)."
            },
            {
                title: "Data analysis",
                explanation: "Phonological data analysis involves examining language data to identify patterns, rules, and the sound system of a language. The process typically includes: (1) Transcribing data phonetically, (2) Looking for minimal pairs to identify phonemes, (3) Identifying allophones through complementary distribution or free variation, (4) Discovering phonological rules that explain sound changes, (5) Analyzing syllable structure and stress patterns, (6) Identifying phonological processes at work. Analysts look for systematic patterns, exceptions, and rule ordering. This analysis helps understand how sounds are organized in a language, what rules govern their distribution, and how they change in different contexts. It's a crucial skill for understanding any language's sound system."
            }
        ]
    },
    {
        code: "LIN 203",
        title: "Introduction to Morphology",
        topics: [
            {
                title: "Morpheme",
                explanation: "A morpheme is the smallest meaningful unit of language that cannot be further divided into smaller meaningful parts. It is the basic building block of words. Morphemes can be words themselves (like 'cat', 'run') or parts of words (like '-ed' in 'walked', 'un-' in 'unhappy'). Every word consists of one or more morphemes. For example, 'unhappiness' contains three morphemes: 'un-' (meaning 'not'), 'happy' (the root meaning), and '-ness' (making it a noun). Morphemes are abstract units - they may have different pronunciations (allomorphs) in different contexts, but they maintain the same meaning. Understanding morphemes is essential for analyzing word structure and formation."
            },
            {
                title: "Types of morphemes",
                explanation: "Morphemes are classified into several types: (1) Free morphemes - can stand alone as words (e.g., 'cat', 'book', 'happy'), (2) Bound morphemes - must attach to other morphemes (e.g., '-ed', '-ing', 'un-', '-ness'), (3) Root morphemes - the core meaning-bearing element (e.g., 'happy' in 'unhappiness'), (4) Affixes - bound morphemes that attach to roots (prefixes like 'un-', suffixes like '-ness', infixes inserted into words, circumfixes that surround words), (5) Derivational morphemes - create new words or change word class (e.g., 'happy' → 'happiness' changes adjective to noun), (6) Inflectional morphemes - modify words grammatically without changing word class (e.g., 'cat' → 'cats' for plural, 'walk' → 'walked' for past tense). In English, inflectional morphemes are always suffixes and are limited in number."
            },
            {
                title: "Morphological processes",
                explanation: "Morphological processes are the ways languages form words and modify existing words. Major processes include: (1) Affixation - adding prefixes, suffixes, infixes, or circumfixes (most common in English), (2) Compounding - combining two or more free morphemes to create new words (e.g., 'blackboard', 'greenhouse'), (3) Reduplication - repeating all or part of a word (e.g., 'helter-skelter', or in other languages for plural or intensity), (4) Conversion/Zero-derivation - changing word class without adding affixes (e.g., 'email' noun → 'email' verb), (5) Blending - combining parts of two words (e.g., 'brunch' from 'breakfast' + 'lunch'), (6) Clipping - shortening words (e.g., 'ad' from 'advertisement'), (7) Backformation - creating simpler words from complex ones (e.g., 'edit' from 'editor'), (8) Acronyms and abbreviations. These processes vary across languages and help create new vocabulary efficiently."
            }
        ]
    },
    {
        code: "LIN 205",
        title: "Comparative Historical Linguistics",
        topics: [
            {
                title: "Diachronic and synchronic Linguistics",
                explanation: "Diachronic linguistics (historical linguistics) studies language change over time, examining how languages evolve, split, merge, and develop. It looks at language through time, like a movie. Synchronic linguistics studies language at a particular point in time, focusing on the structure and function of language as it exists at a specific moment, like a snapshot. Ferdinand de Saussure emphasized this distinction. Diachronic studies might examine how Old English became Modern English, while synchronic studies analyze Modern English as it is today. Both approaches are essential: synchronic analysis helps understand current language structure, while diachronic analysis reveals how languages change and why, helping us understand language relationships and evolution."
            },
            {
                title: "How Language Changes overtime",
                explanation: "Languages change continuously through various mechanisms: (1) Sound changes - systematic shifts in pronunciation (e.g., Great Vowel Shift in English), (2) Lexical changes - new words added (borrowing, coinage), old words lost or meanings shifted, (3) Grammatical changes - simplification or complexification of grammar, word order changes, (4) Semantic changes - meanings expand, narrow, shift, or become pejorative/ameliorative. Changes occur due to internal factors (ease of articulation, analogy, regularization) and external factors (language contact, social change, technology). Changes spread through communities gradually, often starting with younger speakers or specific social groups. Some changes are temporary (slang), while others become permanent parts of the language. Language change is natural and inevitable - no language remains static."
            },
            {
                title: "Relationship between Languages",
                explanation: "Languages can be related through common ancestry (genetic relationship) or contact (areal relationship). Genetically related languages descend from a common ancestor (proto-language) and form language families (e.g., Indo-European family includes English, Spanish, Hindi, Russian). Comparative method reconstructs proto-languages by comparing related languages. Language families branch into subfamilies and individual languages. Areal relationships occur when languages in geographic proximity influence each other through borrowing, even if unrelated. Languages can also be related through pidgins and creoles. Understanding relationships helps trace migration patterns, cultural history, and language evolution. The degree of relationship is measured by shared vocabulary, grammar, and sound correspondences."
            },
            {
                title: "Naturality principle that guides languages",
                explanation: "The naturalness principle suggests that languages tend to develop in ways that are natural, efficient, and follow universal tendencies. This includes: (1) Ease of articulation - sounds and structures that are easier to produce are preferred, (2) Perceptual clarity - maintaining distinctions important for understanding, (3) Regularity - languages tend toward regular patterns (though exceptions exist), (4) Economy - efficient use of linguistic resources, avoiding unnecessary complexity, (5) Iconicity - form reflecting meaning where possible, (6) Universal tendencies - certain patterns appear across languages (e.g., subject-verb-object word order is common). However, naturalness competes with other factors like historical inertia, social factors, and language contact. Languages balance naturalness with functionality, sometimes maintaining 'unnatural' features for historical or social reasons."
            }
        ]
    },
    {
        code: "LIN 207",
        title: "Writing System and Orthographic Design",
        topics: [
            {
                title: "Introduction to Writing Systems & Orthography Design",
                explanation: "A writing system is how a language is written using visible symbols. It allows spoken language to be recorded, shared, and preserved. Orthography design is the planned creation or standardization of a writing system, especially for languages that didn't have a fixed way of writing before. Writing systems are not just about letters—they connect language, thinking, culture, education, and technology. A well-designed orthography helps people read and learn easily and supports cultural identity. A poorly designed one makes literacy harder and causes confusion."
            },
            {
                title: "Important Terms",
                explanation: "Writing System: The full set of symbols and rules used to write a language. Script: The visual form of the symbols (like Latin, Arabic, or Cyrillic). One script can be used by many languages. Orthography: The official spelling and writing rules of a language. It covers which symbols are used, spelling rules, capitalization, punctuation, and spacing. Grapheme: The smallest written unit (letters or letter combinations like a, b, sh). Phoneme: The smallest sound unit that can change meaning. Orthography often tries to match graphemes to phonemes."
            },
            {
                title: "Logographic Writing Systems",
                explanation: "In logographic systems, each symbol represents a word or meaning. Example: Chinese characters. Pros: Meaning is clear; works across dialects. Cons: Very hard to learn; thousands of symbols needed. This system uses visual symbols that directly represent words or concepts rather than sounds, making it possible for speakers of different dialects to read the same text even if they pronounce words differently."
            },
            {
                title: "Syllabic Writing Systems",
                explanation: "In syllabic systems, each symbol represents a syllable. Example: Japanese Kana (hiragana and katakana). Pros: Easy sound-to-symbol matching; more intuitive than logographic systems. Cons: Needs many symbols if the language has many syllables. This system is more efficient than logographic systems but can become complex for languages with many possible syllable combinations."
            },
            {
                title: "Alphabetic Writing Systems",
                explanation: "In alphabetic systems, symbols represent individual sounds (phonemes). Examples: Latin alphabet (used for English, Spanish, French), Cyrillic (used for Russian, Bulgarian), Greek alphabet. Pros: Few symbols needed; very flexible; can represent many languages. Cons: Some sounds may not be perfectly represented; spelling can become irregular over time. This is the most widely used system globally and allows for efficient learning once the basic symbols are mastered."
            },
            {
                title: "Abjad Writing Systems",
                explanation: "Abjad systems mainly write consonants; vowels are optional or missing. Examples: Arabic, Hebrew. Pros: Efficient for certain languages where consonants carry more meaning; compact writing. Cons: Can be confusing for beginners; requires knowledge of the language to determine correct vowels. These systems work well for Semitic languages where root words are based on consonant patterns."
            },
            {
                title: "Abugida Writing Systems",
                explanation: "In abugida systems, consonants have a built-in vowel that can be changed. Example: Devanagari (used for Hindi, Sanskrit). Each consonant symbol includes a default vowel sound, and diacritical marks modify or remove this vowel. This system efficiently represents languages with complex consonant-vowel combinations while maintaining a manageable number of base symbols."
            },
            {
                title: "Featural Writing Systems",
                explanation: "In featural systems, symbols show how sounds are produced. Example: Korean Hangul. The shapes of the letters reflect the articulatory features of the sounds they represent (e.g., tongue position, mouth shape). This makes the system more intuitive and easier to learn, as the visual form of the symbol relates directly to how the sound is produced."
            },
            {
                title: "Bottom Line: Writing Systems Summary",
                explanation: "Writing systems differ in how they represent language sounds and meanings. Good orthography design makes reading easier, learning faster, and helps preserve culture. The choice of writing system affects literacy rates, educational outcomes, and cultural identity. When designing orthography for a language, linguists must consider the language's sound system, cultural context, and practical needs of the community."
            }
        ]
    },
    {
        code: "LIN 209",
        title: "Linguistics and Broadcasting",
        topics: [
            {
                title: "The relationship between Linguistics and broadcasting",
                explanation: "Linguistics and broadcasting have a symbiotic relationship. Linguistics provides the theoretical foundation for understanding language use in broadcasting, while broadcasting offers a rich source of linguistic data. Linguistics helps broadcasters understand: language variation (dialects, accents), language change (how language evolves in media), pragmatics (how meaning is conveyed beyond words), discourse analysis (how messages are structured), and sociolinguistics (how language reflects and shapes society). Broadcasters apply linguistic knowledge to: choose appropriate language for audiences, understand regional variations, create effective communication, and analyze media discourse. The relationship is crucial because broadcasting reaches mass audiences and influences language norms, making it a powerful force in language standardization and change."
            },
            {
                title: "What is broadcasting",
                explanation: "Broadcasting is the distribution of audio or video content to a dispersed audience via any electronic mass communications medium. It involves transmitting information, entertainment, news, or educational content to a wide, often anonymous audience simultaneously. Traditional broadcasting includes radio and television transmitted over airwaves, cable, or satellite. Modern broadcasting extends to internet streaming, podcasts, and digital platforms. Key characteristics include: one-to-many communication, real-time or recorded transmission, mass reach, and professional production. Broadcasting serves multiple functions: informing (news), educating (documentaries, educational programs), entertaining (shows, music), and persuading (advertising, political messages). It's a powerful medium that shapes public opinion, spreads information rapidly, and influences language and culture."
            },
            {
                title: "Channels of communication",
                explanation: "Channels of communication in broadcasting refer to the various mediums and methods used to transmit messages to audiences. These include: (1) Radio - audio-only broadcasting via AM/FM, digital radio, or internet streaming, (2) Television - audio-visual broadcasting via terrestrial, cable, satellite, or streaming, (3) Internet - websites, streaming platforms, podcasts, social media, (4) Print media - newspapers, magazines (though not technically broadcasting), (5) Mobile platforms - apps, SMS, mobile streaming. Each channel has unique characteristics: radio emphasizes voice and sound, television combines audio-visual elements, internet allows interactivity and on-demand access. Channels differ in reach, immediacy, interactivity, and audience engagement. Modern broadcasting often uses multiple channels simultaneously (cross-platform broadcasting) to maximize reach and engagement. The choice of channel affects language use, message structure, and audience interaction."
            },
            {
                title: "Importance of broadcasting",
                explanation: "Broadcasting is crucial in modern society for several reasons: (1) Information dissemination - rapidly spreads news, emergency information, and important announcements to mass audiences, (2) Education - provides educational content, documentaries, and learning resources accessible to many, (3) Cultural preservation and promotion - showcases local cultures, languages, music, and traditions, (4) Social cohesion - creates shared experiences and common knowledge, fostering community, (5) Democracy - enables public discourse, political communication, and citizen engagement, (6) Economic impact - creates jobs, drives advertising, supports industries, (7) Language standardization - influences language norms and helps standardize languages, (8) Entertainment - provides leisure and cultural enrichment, (9) Emergency communication - critical for public safety during disasters, (10) Globalization - facilitates cross-cultural communication and understanding. Broadcasting shapes public opinion, influences language change, and serves as a primary source of information for billions worldwide."
            }
        ]
    }
    // Add more courses here as you provide them
];

// Function to create course card HTML
function createCourseCard(course) {
    const topicsHTML = course.topics.map((topic, index) => {
        const topicId = `${course.code}-${index}`;
        return `
        <li class="topic-item" data-topic-id="${topicId}">
            <strong>${topic.title}</strong>
            <div class="topic-explanation">${topic.explanation}</div>
        </li>`;
    }).join('');

    return `
        <div class="course-card" onclick="toggleCourse(this)">
            <div class="course-header">
                <div class="course-code">${course.code}</div>
                <span class="expand-icon">▼</span>
            </div>
            <div class="course-title">${course.title}</div>
            <ul class="topics-list">
                ${topicsHTML}
            </ul>
        </div>
    `;
}

// Function to toggle course expansion
function toggleCourse(card) {
    card.classList.toggle('expanded');
}

// Initialize the page
function init() {
    const container100 = document.getElementById('coursesContainer100');
    const container200 = document.getElementById('coursesContainer200');
    
    if (container100) {
        courses100.forEach(course => {
            container100.innerHTML += createCourseCard(course);
        });
    }
    
    if (container200) {
        courses200.forEach(course => {
            container200.innerHTML += createCourseCard(course);
        });
    }
    
    // Trigger progress update after courses are loaded
    if (window.updateProgress) {
        setTimeout(() => window.updateProgress(), 100);
    }
}

// Make init available globally
window.init = init;

// Load courses when page loads
document.addEventListener('DOMContentLoaded', init);


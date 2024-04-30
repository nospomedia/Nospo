const translations = {
    'en': {
        'text-example': 'Text example for future uses.',
        'hover-text': 'Hover this text to see the effect!',
        'stefan-text': 'Stefan Is <span class="alternating" id="alternating-text"></span>.',
        'click-button': 'Click Here'
    },
    'ro': {
        'text-example': 'Exemplu de text pentru utilizari viitoare.',
        'hover-text': 'Plimbă mouse-ul peste acest text pentru a vedea efectul!',
        'stefan-text': 'Stefan este <span class="alternating" id="alternating-text"></span>.',
        'click-button': 'Click Aici'
    },
    'no': {
        'text-example': 'Teksteksempel for fremtidig bruk.',
        'hover-text': 'Hold musepekeren over denne teksten for å se effekten!',
        'stefan-text': 'Stefan er <span class="alternating" id="alternating-text"></span>.',
        'click-button': 'Klikk Her'
    },
    'es': {
        'text-example': 'Ejemplo de texto para usos futuros.',
        'hover-text': 'Pase el mouse sobre este texto para ver el efecto.',
        'stefan-text': 'Stefan es <span class="alternating" id="alternating-text"></span>.',
        'click-button': 'Haz clic aquí'
    },
    'bs': {
        'text-example': 'Primjer teksta za buduću upotrebu.',
        'hover-text': 'Pređite mišem preko ovog teksta da biste vidjeli efekat!',
        'stefan-text': 'Stefan je <span class="alternating" id="alternating-text"></span>.',
        'click-button': 'Kliknite Ovdje'
    },
    'ru': {
        'text-example': 'Пример текста для будущего использования.',
        'hover-text': 'Наведите указатель мыши на этот текст, чтобы увидеть эффект!',
        'stefan-text': 'Стефан - <span class="alternating" id="alternating-text"></span>.',
        'click-button': 'Нажмите Здесь'
    },
    'tr': {
        'text-example': 'Gelecekte kullanılmak üzere metin örneği.',
        'hover-text': 'Bu metnin üzerine gelerek efekti görüntüleyin!',
        'stefan-text': 'Stefan - <span class="alternating" id="alternating-text"></span>.',
        'click-button': 'Buraya Tıkla'
    },
    'uk': {
        'text-example': 'Приклад тексту для майбутнього використання.',
        'hover-text': 'Наведіть вказівник миші на цей текст, щоб побачити ефект!',
        'stefan-text': 'Стефан - <span class="alternating" id="alternating-text"></span>.',
        'click-button': 'Натисніть Тут'
    }
    // Add more translations as needed
};

let currentLanguage = 'en'; // Default language

function changeLanguage(language) {
    currentLanguage = language;

    // Apply translations to the content
    Object.keys(translations[currentLanguage]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
}
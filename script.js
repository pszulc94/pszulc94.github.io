function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
}

// Dodajemy nasłuchiwanie zdarzenia naciśnięcia klawisza Enter na polu hasła
document.getElementById('password-input').addEventListener('keypress', handleKeyPress);


function checkPassword() {
    var password = document.getElementById('password-input').value;
    // Sprawdź hasło, możesz dodać tutaj odpowiednią logikę weryfikacji
    if (password === '123agata') {
        // Jeśli hasło jest poprawne, pokaż główną zawartość strony i ukryj ekran logowania
        document.getElementById('main-container').style.display = 'block';
        document.querySelector('.login-container').style.display = 'none';
    } else {
        alert('Nieprawidłowe hasło! Spróbuj ponownie.');
    }
}


document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)'; // Powiększenie przycisku po najechaniu myszką
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)'; // Przywrócenie oryginalnej wielkości przycisku po opuszczeniu myszką
    });
});


// Funkcja generująca linki dla przycisków
function generateLinks() {
    // Pobierz wszystkie przyciski z klasą "button"
    var buttons = document.querySelectorAll('.button');

    // Dla każdego przycisku dodaj odpowiedni link
    buttons.forEach(function(button) {
        var link = document.createElement('a');
        link.href = getButtonLink(button.textContent.trim());
        link.className = button.className; // Przeniesienie klasy przycisku do linku
        link.target = "_blank"; // Otwórz link w nowej karcie
        link.textContent = button.textContent.trim(); // Tekst linku jest taki sam jak tekst przycisku

        // Zamień przycisk na link
        button.parentNode.replaceChild(link, button);
    });
}

// Funkcja zwracająca link w zależności od tekstu przycisku
function getButtonLink(buttonText) {
    switch(buttonText) {
        case 'PLANER':
            return 'https://tasks.office.com/agatameble.onmicrosoft.com/EN-US/Home/Planner/#/plantaskboard?groupId=7be8cc89-4a88-4d17-af87-828d5af72d08&planId=nG_eRPvCSkmjTppZAJWUbpYAH8r8';
        case 'RAPORT':
            return 'https://docs.google.com/spreadsheets/d/1s1KP8e-qDaHLdxG81cEu6TiY_A-8hQBwKiFfPvI37oY/edit?hl=pl#gid=0';
        case 'ZALEGŁOŚCI MEBLOWE':
            return 'https://docs.google.com/spreadsheets/d/19h5ojNKSVeABc9zGy-L2OouFrckCZLocW-7mcVSKPEA/edit#gid=0';
        case 'ZLECENIA PACKSHOT':
            return 'https://docs.google.com/spreadsheets/d/1l1N6YvVWXrcgH7tyMBZYKdmPXs3orA7ToyIq9mxUl6g/edit#gid=1453186253&fvid=547670437';
        case 'TABLICA':
            return 'tablica.html';
        case 'NADGODZINY':
            return 'https://docs.google.com/spreadsheets/d/1yyKrLXpjxN_AVED_aJ8-U3X6ubxKeGhq62CeoHJZUDA/edit?hl=pl#gid=0';
        case 'URLOPY':
            return 'https://docs.google.com/spreadsheets/d/1sAIulfQ5m3LyQq1BiNuVoHr4KhuWtYSf1EYh0Aju72M/edit?hl=pl#gid=0';
        case 'XPRIMER':
            return 'https://xprimer.kpmagata.com/xprimer/auth/login?targetUri=%2Fstart';
        case 'INTRANET':
            return 'http://intranet.kpmagata.com/default.aspx';
        case 'SERVICE DESK':
            return 'https://hd.kpmagata.com/HelpDesk';
        default:
            return '#'; // Domyślnie brak linku
    }
}

// Wywołanie funkcji generującej linki
generateLinks();

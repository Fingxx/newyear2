// script.js
document.getElementById('showGreetingsButton').addEventListener('click', function() {
    var greetingsContainer = document.createElement('div');
    greetingsContainer.innerHTML = '<h1>Frohes Neues Jahr!</h1><p>Herzliche Neujahrsgrüße für ein glückliches und erfolgreiches Jahr!</p>';
    document.body.appendChild(greetingsContainer);
    document.getElementById('showGreetingsButton').style.display = 'none';
});

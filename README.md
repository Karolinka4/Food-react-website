Tytuł i Opis: 
    Pizza Margo jest to aplikacja której celem jest możność zamówienia jedzenia z restauracji

Instrukcje korzystania:
    Aby móc uruchomić aplikację należy zacząć od pobrania wszystkiech zależności komendą 'npm install', następnie można ją uruchomić komendą 'npm -start'. 
    Moja struktura projektu jest podzielona na pages i components.
    Pages zawiera główne strony aplikacji takie jak: strona główna(Home), dostawy, rezerwacje, kontakt, w każdym folderze znajduje się też odpowiadający konkretnej stronie plik zawierający styled-components. Natomiast w Components znajdują się główne komponenty użyte na stronie takie jak, pasek menu(heder), stópka(footer), koszyk(cart) oraz modal który służy do logowania(login), tak samo jak strony, tutaj też w każdym folderze znajduje się odpowiadający komponentowi plik zawierający styled-components. 

    Na stronie głównej znajduje się menu które dania wczytuje z pliku data.js, oprócz tego na stronie znajdziemy też koszyk, do którego można dodawać i usuwać różne produkty, koszyk sumuje też wszystkie produkty dzięki czemu użytkownik zawsze wie ile kosztuje jego zamówienie. Poza stroną główną aplikacja posiada także 3 podstrony na które można przejść dzięki wykorzystaniu 'react-ruter-dom', takie jak:
    Rezerwacja - gdzie można zarezerwować stolić.
    Kontakt - w której znajdują się dane kontaktowe, oraz mapka z lokalizacją. 
    Dostawy - tutaj można sprawdzić, czy nasza restauracja dowozi jedzenie do wybranego miejsca (na sztywno jest ustawione po mieście i kodzie pocztowym gdzie dowozimy------), do zaimplementowania tego chciałam skorzystać z Api Google maps do wygenerowania mapy,ale klucz API raz działał a raz nie, w pliku OldDostawy można zobaczyć kod.

    Aplikacja posiada także modal z możliwością logowania i rejestracji na każdej stronie, formularze logowania oraz rejestracji posiadają odpowiednią walidację.
    Cała strona jest responsywna. Licencja z której korzystałam to "© 2023 Wszelkie prawa do tej strony są zastrzeżone."

    Reszta zależności jest w pliku package.json.


Wersja live strony: 'https://karolinka4.github.io/Food-react-website/#/'
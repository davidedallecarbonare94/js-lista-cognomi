var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]

//1. chiedi all’utente il cognome
var userSurname = prompt("Inserisci il tuo cognome")
surnameList.push(userSurname);
console.log(surnameList)
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
for (var i = 0; i < surnameList.length; i++) {
    console.log(surnameList[i]);
    //3. stampa la lista ordinata alfabeticamente
    surnameList.sort();
}
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var position = surnameList.indexOf(userSurname) + 1;
console.log(position)



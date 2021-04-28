/* js-lista-cognomi
Consegna:

*/
//1. chiedi all'utente il cognome

var cognomeUtente = (prompt('digita il tuo cognome'));

//impongo la lettera maiuscola anche se l'utente se la dimentica
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
console.log(cognomeUtente);

//2. inseriscilo in un array con altri cognomi: ‘Bianchi', ‘Neri', ‘Rossi', ‘Verdi', ‘Gialli'

var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

listaCognomi.push(cognomeUtente);

//3. stampa la lista ordinata alfabeticamente

console.log(listaCognomi.sort());

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */

var posizioneNuovoCognome = (listaCognomi.indexOf(cognomeUtente)) + 1;
console.log(posizioneNuovoCognome);
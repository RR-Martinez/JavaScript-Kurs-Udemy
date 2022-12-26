"use strict";

let vorname = "Renzo";
let nachname = "Martinez";
let alter = 32;

let name = vorname + " " + nachname;
console.log(name);

let begruessung = `Hallo ${name}!`; 
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);

 let mehrzeiligerTemplateString = `Hallo ${name}! 
 Du bist ${alter} Jahre alt.
 Wie geht es dir?`;
 console.log(mehrzeiligerTemplateString);


 let konkatinierteTemplateString = `Hallo ${name}! ` + 
 `Du bist ${alter} Jahre alt. ` +
`Wie geht es dir? `;

console.log(konkatinierteTemplateString);


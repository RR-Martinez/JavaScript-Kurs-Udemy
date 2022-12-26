"use strict";

let vorname = "Renzo"; // oder statt leerzeichen name = vorname + " " nachname;
let nachname = "Martinez";
let alter = 32;

let name = vorname +" " + nachname;

console.log(name);

let begruessung = "Hallo " + vorname + " " + nachname + "!";
console.log(begruessung);

let zusammenfassung = name +  " (" + alter + "Jahre)";
console.log(zusammenfassung);

let einzeiligerString = "das ist ein einzeiliger string!";
let mehrzeiligeString = "das ist ein mehrzeiliger string! " + " " +
"\n und wenn ich will" + 
"Kann das noch weitergehen";

console.log(einzeiligerString);
console.log(mehrzeiligeString);
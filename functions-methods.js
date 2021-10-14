// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
emailOne = "n.eeken@novi-education.nl"
emailTwo = "t.mellink@novi.nl"
emailThree = "a.wiersma@outlook.com"

function getEmailDomain(input) {
  const saveIndex = input.indexOf("@") + 1;
  return input.substring(saveIndex);
}
console.log(getEmailDomain(emailOne));
console.log(getEmailDomain(emailTwo));
console.log(getEmailDomain(emailThree));
/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(input) {
    const saveIndex = input.indexOf("@") + 1;
    const afterAtSign = input.substring(saveIndex);

    if(afterAtSign === "novi-education.nl") {
        return "Student";
    }
    if(afterAtSign === "novi.nl") {
        return "Medewerker";
    }
    else {
        return "Extern";
    }
}
console.log(typeOfEmail(emailOne));
console.log(typeOfEmail(emailTwo));
console.log(typeOfEmail(emailThree));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"))

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email) {
    let validationOne = email.includes("@");
    let validationTwo = email.includes(",");
    let validationThree = email.slice(-1) === ".";

    if (validationOne === true && validationTwo === false && validationThree === false) {
       console.log(true);
    }
    else {
       console.log(false);
    }
}
checkEmailValidity("n.eeken@novi.nl");
checkEmailValidity("tessmellink@novi.nl");
checkEmailValidity("n.eekenanovi.nl");
checkEmailValidity("n.eeken@novinl.");
checkEmailValidity("tessmellink@novi,nl");
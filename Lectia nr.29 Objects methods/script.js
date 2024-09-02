/* Exerciţiul 1: Crearea și utilizarea metodelor simple:
    - Creați un obiect numit persoana cu proprietățile nume, varsta și ocupatie.
    - Adăugați o metodă “salut” care să afișeze "Salut! Numele meu este [nume]".
*/
const persoana = {
    nume: 'Elena',
    varsta: 32,
    ocupatie: ['developer', 'mentor', 'mother'],
    salut: function() {
        console.log(`Salut! Numele meu este ${this.nume}.`);
    }
}
persoana.salut();


/* Exerciţiul 2: Metode care modifică proprietățile:
    - Creați un obiect numit contBancar cu proprietățile detinator și sold.
    - Adăugați metode pentru depunere și retragere care să modifice soldul contului. 
    Validare: Faceți o depunere de 100 și apoi o retragere de 50. Verificați soldul final. Acesta ar trebui să fie 50.
*/
const contBancar = {
    detinator: 'Voldemort',
    sold: 0,
    depunere: function(valoare) {
        return this.sold += valoare;
    },
    retragere: function(valoare) {
        return this.sold -= valoare;
    }
}

console.log(`Soldul initial al lui ${contBancar.detinator} este: ${contBancar.sold}. Dupa depunere soldul este: ${contBancar.depunere(100)}. Dupa retragere soldul ramas este de: ${contBancar.retragere(50)}.`);


/* Exerciţiul 3: Metode care interacționează cu alte Obiecte:
  - Creați un obiect numit carte cu următoarele proprietăți:
      - titlu: Titlul cărții.
      - autor: Autorul cărții.
  - Adăugați obiectului carte o metodă numită imprumuta care va primi un obiect cititor ca parametru și va afișa un mesaj indicând că cititorul a împrumutat cartea.
  - Creați un obiect cititor cu o proprietatea nume și o metodă imprumutaCarte care va primi un obiect carte și va apela metoda imprumuta a acelei cărți, transmițându-se ca parametru.
Validare: cititor.imprumutaCarte(carte);  // Output: Mihai a imprumutat Amintiri din copilarie
*/
// Creăm un obiect carte
const carte = {
    titlu: 'The Notebook',
    autor: 'Nicholas Sparks',
    imprumuta(cititor) {
        console.log(`${cititor.nume} a imprumutat cartea ${this.titlu} de ${this.autor}`);
    }
}

// Creăm un obiect cititor
const cititor = {
    nume: 'Elena',
    imprumutaCarte(carte) {
        carte.imprumuta(this);
    }
}

// Simulăm împrumutul cărții
cititor.imprumutaCarte(carte);
/*Explicația codului:
Obiectul Carte:
  - titlu și autor: Stochează informații despre carte.
  - imprumuta(cititor): 
      * Primește ca parametru un obiect cititor.
      * Afișează un mesaj care indică faptul că cititorul a împrumutat cartea. Folosește this.titlu pentru a accesa titlul cărții din contextul curent (obiectul carte).


Obiectul Cititor:
  - nume: Stochează numele cititorului.
  - imprumutaCarte(carte):
    * Primește ca parametru un obiect carte.
    * Apelează metoda imprumuta a cărții, transmițând this (adică, obiectul cititor) ca argument. Astfel, metoda imprumuta a cărții va avea acces la numele cititorului.


Validare:
  Linia cititor.imprumutaCarte(carte); simulează împrumutul cărții de către cititor.
  Rezultatul va fi afișat în consolă: Elena a imprumutat cartea The Notebook de Nicholas Sparks.


Cum funcționează:
Când apelăm cititor.imprumutaCarte(carte), se întâmplă următoarele:
Metoda imprumutaCarte a cititorului este executată.
În interiorul acestei metode, this se referă la obiectul cititor (adică, Elena).
Metoda imprumuta a cărții este apelată, cu obiectul cititor ca argument.
În interiorul metodei imprumuta, this se referă la obiectul carte, iar cititor este parametrul primit.
Se afișează mesajul format din numele cititorului și titlul cărții.*/




// Exerciţiul 4: lanțurile de metode în obiecte
/*
Creați un obiect numit calculator cu o proprietate valoare inițială cu 0.
Adăugați metode pentru adauga, scade, inmulteste și imparte care să modifice valoare și să returneze obiectul (this) pentru a permite chainability (lănţuire).
Validare:  Utilizați metodele în lanț (de exemplu, .adauga().scade()) și verificați valoarea finală.
*/
const calculator = {
    sold: 0,
    adauga(valoare) {
         this.sold += valoare;
         return this;
    },
    scade(valoare) {
         this.sold -= valoare;
         return this;
    },
    inmulteste(valoare) {
        this.sold *= valoare;
        return this;
    },
    imparte(valoare) {
        if (valoare === 0) {
            console.log('Impartirea la zero nu are sens');
            return this; // Returnează obiectul pentru a permite continuarea operațiilor
        }
        this.sold /= valoare;
        return this;
    }
}

let resFinal = calculator.adauga(33).scade(30).inmulteste(0).imparte(999);
console.log(resFinal.sold);





/* Tema pentru acasa

Să revenim la Mark și Vasile comparându-și BMI-urile! De data aceasta, să folosim obiecte pentru a implementa calculele! Amintiți-vă: BMI= masă / înălțime ** 2 = masă / (înălțime * înălțime). (masa in kg si inaltimea in metri)
1. Pentru fiecare dintre ele, creați un obiect cu proprietăți pentru numele complet, masa și înălțimea lor (Mark Ganea și Vasile Cibotaru)
2. Creați o metodă „calcBMI” pe fiecare obiect pentru a calcula BMI (aceeași metodă pentru ambele obiecte). Stocați valoarea BMI într-o proprietate și, de asemenea, returnați-o din metodă.
3. Afisati in consola cine are BMI mai mare, împreună cu numele complet și BMI respectiv. Exemplu: „BMI-ul lui Vasile Cibotaru (28,3) este mai mare decât cel al lui Mark Ganea (23,9)!”
DATE TEST: Mark greutatea 78 kg și are 1,69 m înălțime. Vasile cântărește 92 kg și are 1,95 m înălțime. */

// Crearea obiectelor pentru Mark și Vasile
const mark = {
    fullName: "Mark Ganea",
    mass: 78, // kg
    height: 1.69, // metri
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const vasile = {
    fullName: "Vasile Cibotaru",
    mass: 92, // kg
    height: 1.95, // metri
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

// Calcularea BMI-urilor
mark.calcBMI();
vasile.calcBMI();

// Compararea și afișarea rezultatului
if (mark.bmi > vasile.bmi) {
    console.log(`BMI-ul lui ${mark.fullName} (${mark.bmi.toFixed(1)}) este mai mare decât cel al lui ${vasile.fullName} (${vasile.bmi.toFixed(1)})!`);
} else if (vasile.bmi > mark.bmi) {
    console.log(`BMI-ul lui ${vasile.fullName} (${vasile.bmi.toFixed(1)}) este mai mare decât cel al lui ${mark.fullName} (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`Mark Ganea și Vasile Cibotaru au același BMI (${mark.bmi.toFixed(1)})!`);
}
const myPromise = () =>
  // la mia funzione ritorna una Promise (costruttore di oggetto con metodi specifici già associati)
  new Promise((resolve, reject) => {
    // la promise richiede una callback function così configurata: un parametro resolve e uno reject. Entrambi sono FUNZIONI passate dal costruttore stesso.
    const randTime = Math.floor(Math.random() * 3000);
    const randTime2 = Math.floor(Math.random() * 3000);

    // quale funzione viene chiamata per prima determinerà lo status finale di risoluzione della promise stessa (positivo/negativo)
    setTimeout(() => {
      // chiamare reject determina uno status negativo e farà scattare l'esecuzione del metodo .catch() sull'oggetto Promise
      reject("REJECTED , " + randTime2 / 1000 + "s");
    }, randTime2);

    setTimeout(() => {
      // chiamare resolve determina uno status positivo e farà scattare l'esecuzione del metodo .then() sull'oggetto Promise
      resolve("RESOLVED , " + randTime / 1000 + "s");
    }, randTime);

    // l'argomento delle due funzioni (resolve/reject) verrà passato al parametro della callback corrispondente a then o catch
  });

// console.log(myPromise()); // NON CERCARE MAI DI LEGGERE IN MODO SINCRONO UN VALORE CHE ARRIVA IN MANIERA A-SINCRONA, leggeresti Promise<pending>

myPromise()
  // then si attiva quando lo status della Promise diventa "resolved" (positivo)
  .then(data => console.log("promise1 risolta", data)) // data arriva dall'argomento della chiamata di resolve
  // catch si attiva quando lo status della Promise diventa "rejected" (negativo)
  .catch(error => console.log("promise1 fallita", error)); // error arriva dall'argomento della chiamata di reject

myPromise()
  .then(data => console.log("promise2 risolta", data))
  .catch(error => console.log("promise2 fallita", error));

myPromise()
  .then(data => console.log("promise3 risolta", data))
  .catch(error => console.log("promise3 fallita", error));

myPromise()
  .then(data => console.log("promise4 risolta", data))
  .catch(error => console.log("promise4 fallita", error));

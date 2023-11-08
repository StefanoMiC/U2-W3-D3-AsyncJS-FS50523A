const waitAndMessage = customFunc => {
  setTimeout(() => {
    console.log("sono passati 3.5s");
    // la chiamata a customFunc deve aspettare la fine dell'operazione precedente
    // se l'operazione richiede del tempo customFunc aspetterà il tempo necessario prima di essere chiamata
    customFunc();
  }, 3500);
};

const lastLog = () => console.log("Ultimo log");

// waitAndMessage(() => console.log("End of operations"));
// waitAndMessage(() => console.log("Operazioni finite"));
// waitAndMessage(lastLog);

// __________________________________________________

const greetMe = (symbol, str, customFunc) => {
  return customFunc(str) + symbol;
};

// const getName = name => {
//   return "Ciao " + name;
// };

// const getName = name => "Ciao " + name;

// console.log(getName("Stefano"));

// console.log(greetMe("!", "Giorgia", getName));

// ____________________________________________________

const phoneCall = callback => {
  const randTime = Math.floor(Math.random() * 3000);

  setTimeout(() => {
    callback(randTime); // normalAnswer(), angryAnswer()
  }, randTime);

  console.log("☎️ Il telefono sta squillando...");
};

const normalAnswer = time => {
  console.log("📞pronto? sono passati " + time / 1000 + "s");
};

const angryAnswer = time => {
  console.log("📞MA CHI E'???!? sono passati " + time / 1000 + "s");
};

phoneCall(normalAnswer);
phoneCall(angryAnswer);

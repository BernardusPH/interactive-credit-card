export function cardNumberProccess(cardNumber, limit) {
  
  if (cardNumber !== "") {
    let item = cardNumber.trim().replace(/ /g, "").substring(0, limit);
    let array = [...item];
    array.splice(4, 0, " ");
    array.splice(9, 0, " ");
    array.splice(14, 0, " ");
    item = array.join("");
    cardNumber = item;
  }
  return cardNumber;
}
export function experationDateCalc(date, limit) {
  if (date.length === 1) {
    date = `${0 + date}`;
  }
  return date.trim().substring(0, limit).trim();
}
export function fullNameProcess(fullName) {
  function processCreditCardName(name) {
    const words = name.split(" ");
    const lastName = words.length > 1 ? words.pop() : "";
    const firstName = words.join(" ");

    if (name.length <= 18) {
      return name;
    }

    if (firstName.length === 1) {
      return `${firstName} ${lastName}`;
    }

    const abbreviatedName = `${firstName.slice(0, 1)}. ${lastName}`;

    if (abbreviatedName.length <= 21) {
      return abbreviatedName;
    }

    return `${firstName.slice(0, 2)}. ${lastName}`;
  }

  const words = fullName.toLowerCase().split(" ");

  const capitalizedWords = words.map((word) => {
    const capitalizedFirstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return processCreditCardName(capitalizedFirstLetter + restOfWord);
  });

  const capitalizedFullName = capitalizedWords.join(" ");

  return processCreditCardName(capitalizedFullName);
}

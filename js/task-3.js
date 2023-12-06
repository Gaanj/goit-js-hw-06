class StringBuilder {
 #value;
// Конструктор, який приймає параметр initialValue
  constructor(initialValue) {
    // Записує initialValue у приватну властивість value
    this.#value = initialValue;
  }

  // Метод, який повертає значення приватної властивості value
  getValue() {
    return this.#value;
  }

  // Метод, який додає рядок str в кінець приватної властивості value
  padEnd(str) {
    this.#value += str;
  }

  // Метод, який додає рядок str на початок приватної властивості value
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод, який додає рядок str на початок і в кінець приватної властивості value
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Код для перевірки роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

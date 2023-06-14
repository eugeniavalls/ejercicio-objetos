// Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};

console.log(
  `Me llamo ${user.name} ${user.surname} , tengo ${user.age} años. Me gusta ${user.hobbies[0]} , ${user.hobbies[1]} , ${user.hobbies[2]}. Vivo en la calle ${user.address.street} en ${user.address.city} , ${user.address.state} , ${user.address.postalCode} , ${user.address.country}. Tengo un ${user.pets[0].type} que se llama ${user.pets[0].name} y un ${user.pets[1].type} que se llama ${user.pets[1].name}. Hice un ${user.education} y actualmente soy ${user.occupation}. Si necesitas cualquier cosa puedes enviarme un correo a ${user.email} o llamarme al ${user.phone}. `
);

// Crea una función birthday que le sume 1 año al usuario y te devuelva el objeto actualizado

const birthday = () => {
  user.age = user.age + 1;
  console.log(user.age);
};

birthday(user);

// Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};
for (let i = 0; i < data.numbers.length; i++) {
  data.firstFloor.secondFloor.numbersPlus2.push(data.numbers[i] + 2);
  data.firstFloor.thirdFloor.numbersDouble.push(data.numbers[i] * 2);
  data.fourthFloor.numbersDividedBy2.push(data.numbers[i] / 2);

  if (data.numbers[i] % 2 === 0) {
    data.fifthFloor.onlyEven.push(data.numbers[i]);
  } else {
    data.fifthFloor.onlyOdd.push(data.numbers[i]);
  }
}
console.log(data);

// Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
//   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

const data2 = {
  firstFloor: {
    // meter solo las vocales
    vowels: []
  },
  secondFloor: {
    // meter solo las consonantes
    consonants: []
  },

  fourthFloor: {
    // meter el codigo ascii de cada letra
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};

const phraseLong = phrase => {
  for (const letter of phrase) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      data2.firstFloor.vowels.push(letter);
    } else if (letter !== ' ') {
      data2.secondFloor.consonants.push(letter);
    }

    data2.fourthFloor.asciiCode.push(letter.charCodeAt(0));
  }
  const phraseToArray = phrase.split(' ');

  for (const word of phraseToArray) {
    data2.fifthFloor.wordsInUppercase.push(word.toUpperCase());

    data2.fifthFloor.wordsInLowercase.push(word.toLowerCase());
  }
};
console.log(data2);
phraseLong('Si no estudias acabarás como Enrique');

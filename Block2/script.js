// What will be the output of the following code snippet given below:
// What does the following code print to the console?
let hat = {
  size: 'large',
  color: 'orange',
};
console.log(hat.size);

// Output -
'large'
// What does the following code print to the console?
/*let hat = {
  size: 'large',
  color: 'orange',
};
*/
console.log(hat['color']);

// Output -
'oranga'
// What does the following code print to the console?

/*let hat = {
  size: 'large',
  color: 'orange',
};
*/
hat.color = 'red';
console.log(hat.color);

// Output -
'red'
// What does the following code print to the console?
let pen = {};
pen.ink = 'blue';
console.log(pen.ink);

// Output -
'blue'
// What does the following code print to the console?
let hat = {
  size: 'large',
  color: 'orange',
};

console.log(hat['cost']);

// Output -
undefined
// What does the following code print to the console?
let hat = {
  rating: function () {
    return 'Hat is top rated';
  },
  color: 'green',
};
console.log(hat.rating());

// Output -
'Hat is top rated'
// What does the following code print to the console?
let hat = {
  size: 'medium',
  color: 'green',
  introduction: function () {
    return `The size of hat is ${hat.size} and color is ${hat.color}`;
  },
};
hat.introduction();

// Output -
`The size of hat is medium and color is green`
// What does the following code print to the console?
let hat = {
  rating: function () {
    return 'Hat is top rated';
  },
  color: 'green',
};
console.log(hat.rating());

// Output -
'Hat is top rated'
// What does the following code print to the console?
let bucket = {
  capacity: '5 Litre',
  customerMessage: function (desiredSize) {
    if (desiredSize > 5) {
      return 'This bucket is not large enough for you';
    }
  },
};
console.log(bucket.customerMessage(13));

// Output -
'This bucket is not large enough for you'
// What does the following code print to the console?
function globalFunction() {
  return 'I can be called anywhere';
}
let obj = {
  func: globalFunction,
};
console.log(obj.func());

// Output -
'I can be called anywhere'
// What does the following code print to the console?
/*
let student = {
  age: 21,
  address: {
    city: 'Dharamshala',
    state: 'Himachal Pradesh',
  },
};
*/
console.log(student.address.city);

// Output -
'Dharamshala'
// What does the following code print to the console?
let student = {
  age: 21,
  address: {
    city: 'Dharamshala',
    state: 'Himachal Pradesh',
  },
};
student.address.zip = '176057';
console.log(student.address.zip);

// Output -
'176057'
// What does the following code print to the console?
let student = {
  age: 21,
  address: {
    city: 'Dharamshala',
    state: 'Himachal Pradesh',
  },
};
console.log(student);
delete student.age;
console.log(student);

// Output -
let student = {
    age: 21,
    address: {
      city: 'Dharamshala',
      state: 'Himachal Pradesh',
    },
  };
let student = {
address: {
    city: 'Dharamshala',
    state: 'Himachal Pradesh',
  }
};
// What does the following code print to the console?
var altcampus = {
  batch16: {
    totalStudents: '11',
  },
  batch15: {
    totalStudents: '9',
  },
  batch14: {
    totalStudents: '8',
  },
};
console.log(altcampus.batch16.totalStudents);

// Output -
11
// What does the following code print to the console?
var obj = {
  name: 'Panther',
};

console.log('name' in obj);

// Output -
true
let test = [
  {subject: 'math', points: 70 },
  {subject: 'english',points: 50 },
  {subject: 'society',points: 80 }
];

test[test.length] = { subject: 'science', points : 100 }
console.log(test);
console.log(test[3].points);
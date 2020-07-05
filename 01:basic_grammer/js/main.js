'use strict';

const score = 60;
const name = 'taguchi';

if (score >= 50) {
  if (name === 'taguchi') {
    console.log('good job!');
  }
}

if (score >= 50 && name === 'taguchi') {
  console.log('yes')
}
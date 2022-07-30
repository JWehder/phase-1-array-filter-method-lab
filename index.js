// Code your solution here
function findMatching(arr, name) {
    const match = arr.filter(function(element) {
        if (element.toLowerCase() === name.toLowerCase()) {
            return element
        }
    })
    return match;
}

function fuzzyMatch(arr, letters) {
    const matchFirstTwoLetters = arr.filter(function(element) {
        if (letters === element[0] + element[1]) {
            return element
        }
    })
    return matchFirstTwoLetters
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(data, name) {
    const findMatchingName = data.filter(function(element){
        if (element.name === name) {
            return element
        }
    })
    return findMatchingName
}

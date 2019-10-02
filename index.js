/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/*
    Find word with the longest characters
*/



exports.longestWord = function(){
    let words = [ "mystery", "brother",
        "aviator", "crocodile",
        "pearl","orchard", "crackpot"
        ];

    let result
    words.sort(function(a,b){
        return b.length - a.length;
      });
      
      result = words[0]


    return result
}



/*
Calculating the product is as simple as iterating over an array and adding each of the elements together.

Semantically reduce is the best method to use for this, but you can use any loop we've discussed so far.

Calculate the product of the following array:

*/
exports.productArray = function(){
    var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10],
    //write code here
    
    p = 1,
    i;
    for (i = 0; i < numbers.length; i += 1) 
    {
    p *= numbers[i];
    }
    
    result = p
    //end code here
    return result
}


/*
Array of Strings
Write code to calculate the average length of the strings inside of the following array:

*/

exports.averageWords = function(){
    let words = [
        "seat",
        "correspond",
        "linen",
        "motif",
        "hole",
        "smell",
        "smart",
        "chaos",
        "fuel",
        "palace"
    ];

    let result = 0
    //write codes here
    avg = words.join('').length / words.length
result = avg
    //end code here
    return result
}

/*

Take the following array, remove the duplicates, and return a new array. You're more than likely going to want to check out the indexOf function.

var words = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

*/
exports.uniquifyArray = function(){
    let words = [
        "crab",
        "poison",
        "contagious",
        "simple",
        "bring",
        "sharp",
        "playground",
        "poison",
        "communion",
        "simple",
        "bring"
      ];
    // Your code here
    const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

    let unique = [...new Set(words)];
    result = unique
    return result
  }

//EXTRA WORK
/*
    Bonus Quest
In the 20×20 grid below; What is the greatest sum of element of the array?
*/

exports.greatestSumMulti = function(){
var secondType = [
  [08,02,22,97,38,15,00,40,00,75,04,00,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,00,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,03,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,02,06,09,41,92,36,04,22,40,40,28,66,33,13,80],
  [24,47,32,60,09,03,05,02,44,75,33,53,08,36,04,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,00,59,54,70,66,18,38,04,17],
  [67,26,20,68,02,62,12,20,05,63,94,39,03,08,40,19,66,49,04,21],
  [04,55,58,05,66,73,09,26,07,07,08,08,06,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,00,00,61,33,97,34,31,33,95],
  [08,17,53,28,02,05,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,00,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,09,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
];

    var max = []
    var sum = 0;
    for (var j = 0; j < secondType.length; j++){
        for (var i = 0; i < secondType[j].length; i++) {
            sum += secondType[j][i]
    
    }
    max.push(sum);
    sum = 0
    }
    
    function sortNumber(a, b) {
        return b - a;
      }
      
      var numArray = max;
      numArray.sort(sortNumber);
      
      console.log(numArray[0])
  
result = numArray[0]
    return result
}

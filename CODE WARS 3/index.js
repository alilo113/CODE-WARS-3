// Beginner - Reduce but Grow

function grow(x){
    let result = 1;

    for(let i = 0; i < x.length; i++){
        result = result * x[i];
    }
    return result;
}

console.log(grow([1,2,3]));
console.log(grow([4,1,1,1,4]));
console.log(grow([2,2,2,2,2,2]));

console.log("-------------------------------------------------------------------------------");

// Calculate BMI

function bmi(weight,height){
    let bmit = weight / Math.pow(height,2);

    if(bmit <= 18.5){
       return "Underweight";
    }
    else if(bmit <= 25.0){
        return "Normal";
    }
    else if(bmit <= 30.0){
        return "Overweight";
    }
    else if(bmit > 30){
        return "Obese";
    }
}

console.log(bmi(80, 1.80));

console.log("-------------------------------------------------------------------------------");

// You Can't Code Under Pressure #1

function doubleInteger(i) {
    return i * 2;
  }

  // Grasshopper - Array Mean

  var findAverage = function (n){
    let ave = 0

    for(let i = 0; i < n.length; i++){  
      ave += n[i];
  } 
        return ave / n.length;
}
  
console.log(findAverage([1,3,5,7]))

console.log("-------------------------------------------------------------------------------");


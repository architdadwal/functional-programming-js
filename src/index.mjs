//higher order function
function x() {
  console.log("aaaaaa");
}

function y(x) {
x ();

// } 

// x is callback and y is higher order function 



const radius = [ 3,1,2,4];

const calcuArea = function (radius){

    const output = [];
    for (let i = 0 ; i < radius.length; i++){
        output.push(Math.PI* radius[i] * radius[i] )
    }
    return output;
}
console.log(calcuArea(radius));



// for circumference

const calcuCircum ( radius){
const output = [];

for ( let i = 0 ; i < radius.length ; i++)
    {
        output.push(2*PI*radius[i])
    }
return output ;
};
module.exports = function reverse (n) {
   
  let arr = n.toString().split("");

  if ( arr[0] === '-' ){

      arr.shift();

    let res = arr.reverse().join('');
    return arr.join('');
    
  } else {

    arr.reverse();
    return arr.join('');

  }
   
}

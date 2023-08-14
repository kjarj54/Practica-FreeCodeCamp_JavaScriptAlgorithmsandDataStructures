function repeatStringNumTimes(str, num) {
    let sum="";
    for(let i=0; i<num;i++){
      sum+=str;
    }
    return sum;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
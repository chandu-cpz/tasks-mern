function rev_str(str){
    reversedStr='';
    for(let i=str.length-1;i>=0;i--){
        reversedStr+=str[i];
    }
    return reversedStr;
}
console.log(rev_str("some meaning less strinng"))
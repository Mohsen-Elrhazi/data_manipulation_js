let string="youcode";

function inverserString(string){
    let array=[];
    for(let j=0;j<string.length;j++){
   array.push(string[j]);
    }

    for(let i=0; i<array.length/2; i++){
        let help=array[i];
        array[i]= array[array.length-1-i];
        array[array.length-1-i]=help;
    }
    return array.join("");
}

console.log(inverserString("youcode"));
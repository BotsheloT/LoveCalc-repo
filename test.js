/* //Variables for names
let you = 'Botshelo';
let them = 'Thando';

//Function for love calculator
const loveCalc = (name1, name2) =>{
    //Sample string for calculation
    let test = `${name1}loves${name2}`

    //Array for numbers
    let chars = [];

    while (test.length > 0){
        //Number of repetition in characters
        let reps = 0;

        for (let i = 0; i < test.length-1; i++){     
            let that = test[i];
            if (test[i]  === that){
                reps++;                
            }
        }
    }

} */

/* //Variables for names
let you = 'botshelo';
let them = 'thando';

//Array for numbers
let chars = [];

//Test string
let text = `${you}loves${them}`;

for(let i = 0; i < text.length; i++){
    let tot = 0;
    let test = text[i];
    tot++;
    for(let j = 0; j < text.length; j++){
        if(text[i] == text[j+1]){
            tot++;
            text = text.substring(j, 1);
        }    
    }
    chars[i] = tot; 
}

console.log(chars); */

let you = 'botshelo';
let them = 'thando'

let text = `${you}loves${them}`;

let chars = [];

let count = 0;

while(text.length > 0){    
    let focus = text[0];

    for(let i = 0; i < text.length-1; i++){
        if(text[i] == focus){
            text = text.substring(i, 1);
            count++;            
        }
    }
    chars.push(count);
    count = 0;    
}

console.log(chars);

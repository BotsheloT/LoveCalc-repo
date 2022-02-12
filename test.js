//Variables for names
let you = 'Ken';
let them = 'Kim';

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
            if (test  === that){
                reps++;                
            }
        }
    }

}
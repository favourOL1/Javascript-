/*
// linking a javascript files

// let js='amazing';
//       if (js==='amazing') alert('javascript is FUN!');

//       40 + 8 + 23 - 10;
//       console.log( 40 + 8 + 23 - 10)

//values and variables

console.log('jonas')
console.log(23)

let firstName='favour'
console.log(firstName)
console.log(firstName)
console.log(firstName)

let my_name='favour' //or
let myName='favour'

let myFirstJob= 'Programmer'
let myCurrentJob ='Teacher'

let job1='programmer'
let job2='teacher'

console.log()

        //ASS1....(A). Declare variables called country, continent and population and assign their
         //values according to your own country (population in millions). (b) Log their values to the console.
        
let country = 'Nigeria'
let continent = 'Africa'
let population = '10'

console.log( country)
console.log(continent)
console.log(population)

        // DATA TYPES
        //Object or 
        //Primitive Data type

        let javascriptIsFun = true;
        console.log(javascriptIsFun)

        console.log(typeof true);
        console.log(typeof javascriptIsFun);
        console.log( typeof 23);
        console.log(typeof 'john')

        //Dynamic data type -is re-asigning variables

        javascriptIsFun ='YES'
        console.log(typeof javascriptIsFun);

        //converting an undefine variables to define variables

        let year;
        console.log(year)
        console.log(typeof year)

        //re-asigning the undefine variables

        year = 1999;
        console.log(typeof year)

        console.log(typeof null); //is undefined
     

        //THREE TYPE OF DECLARING VARIABLES

        //LET-CONST-VAR

        let age = 25;
        age = 27

        const birthYear = 1999;
        // birthYear=1998;

        var job = 'teacher';
        job = 'programmer';
        

       //Basic Operators in Javascript

       // Mathematic/Arithematics  Operators- +,-,*

       const year = 2024;
       const ageJohn = year - 1999;
       const ageFavour = year - 1997;
       console.log(ageJohn, ageFavour)

       console.log(ageJohn + 2, ageFavour / 10, 2**3);

       const firstName = 'Favour';
       const lastName = 'OL';
       console.log( firstName + ' ' + lastName);

       //Assignment operator- =

       let X = 10 + 5; // x = 15
       X += 10; // x = x + 10 = 25 
       X *= 4; // x = x * 4 = 100
       X ++;
       X--;
       console.log(X)

       //Comparison operator- produce a boelen value

       console.log( ageJohn < ageFavour);
       console.log(ageFavour >= 18);

       const isFullAge = ageFavour <= 18;

       // Precedence of operator 

       let x,y;
       x = y = 25 - 10 - 5; //x = y = 10
       console.log(x,y)

       //pretences in operator

       const aveageAge = (ageFavour + ageJohn) / 2;
       console.log(ageFavour, ageJohn,  aveageAge);
      

       // Exercise

        const massMark = 78;
        const heightMark = 1.69;

        const BMIMark= (massMark / (heightMark * heightMark));

        console.log(BMIMark);

        const massJohn = 92;
        const heightJohn = 1.95;

        const BMIJohn= (massJohn / (heightJohn * heightJohn));

        console.log(BMIMark);

        let markHigherBMI = true;

        console.log(typeof markHigherBMI);

        markHigherBMI = (BMIMark < BMIJohn );

        console.log(markHigherBMI)
 

        //Strings and Template literals
        
        const firstName = 'favour';
        const job ='programmer';
        const birthYear = '1999';
        const year = '2024'

        const favour = " i'm " + firstName +' a ' + (year - 
                birthYear) + ' years '+' old ' + job;

        console.log(favour);


         //Writing a template literals

         const favourNew = `I'm ${firstName}, a ${year - birthYear} year old  ${job}`
         console.log(favourNew)

         console.log(`just a regular string......`)

         //strings on multiple lines

         console.log(`strings with \n\ 
         multiple \n\
         lines`);


         //taking decision IF/Else statement

         const age = 15;

         if( age >= 18 ){
                console.log('favour is old enough to have a driving lisence')
         } else{
                const yearLeft = 18 - age;
                console.log(`john is too young. Wait another ${yearLeft} years :)`)
         }

         const  birthYear = 1998;
         let centuery;

         if (birthYear <= 2000){
                centuery = 20;
         }else {
                centuery = 21;
         }

         console.log(centuery)



         //If / else controll structure

        //  if(){

        //  }else{

        //  }


        //Exercise

        
        const massMark = 78;
        const heightMark = 1.69;

        const BMIMark= (massMark / (heightMark * heightMark));

        console.log(BMIMark);

        const massJohn = 92;
        const heightJohn = 1.95;

        const BMIJohn= (massJohn / (heightJohn * heightJohn));

        console.log(BMIMark);

        let markHigherBMI = true;

        console.log(typeof markHigherBMI);

        markHigherBMI = (BMIMark < BMIJohn );

        console.log(markHigherBMI)

        // if(BMIMark > BMIJohn){
        //     console.log("Mark's BMI is higher than John's!");
        // }else{
        //     console.log("John's BMI is higher than Mark's!");
        // }

        if (BMIJohn >  BMIMark){
                console.log( ` John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
        }else{
                console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
        }

        //Value type of conversion

        const inputYear = '1999';
        console.log(Number(inputYear), inputYear);

        console.log(Number(inputYear) + 18 );

        console.log(Number('john'))
        console.log(typeof (NaN))// inavlid number

        console.log(String(23), 23);

         //Value type of coersion

        console.log('i am ' + 23 + ' year old ');
        console.log('23'- '10'- 3 );
        console.log('23'* 2 );
        console.log('23' / '2');

        let n = '1' + 1;//  '11' bcus '1' is a string 
        n = n - 1;
        console.log(n) // 10(Number)
       

        //Truthy and Falsy Values
        // 5 falsy values; '0', '', undefined, NaN, Null.

        console.log(Boolean(0));
        console.log(Boolean(undefined));
        console.log(Boolean('john'));
        console.log(Boolean({}));  // obj
        console.log(Boolean(''));

        const money = 100;
        if (money){
                console.log("Don't Spend it all");
        } else{
                console.log("You should get a Job");
        }

        let height = 123 ;
        if (height){
                console.log(" YAY! height is defined")
        } else{
                console.log("Height is undefined")
        }
       

        //Equality Operators:

        const age = '18';
        if (age === 18) console.log("You just became an Adult (strict)" );

        if (age == 18) console.log("You just became an Adult (loosed)" );

        const favourite = Number( prompt (" What's your favourite value"))
        console.log(favourite)
        console.log( typeof favourite)

        if (favourite === 25){
                console.log('Cool! 25 is an amazing number')
        } else if (favourite === 7){
                console.log(" 7 is also a cool number ")
        } else if ( favourite === 9){
                console.log("9 is also a cool number")
        }
         else{
                console.log(" Number is not 25 or 7 or 9  ")
        }

        if (favourite != 25 ) console.log("Why not 25?")
        

        //Boolean Logic
        // basic Boolean operators: And, Or & Not Operators

        // logical Operator

        const hasDriverLisences = true ; //A
        const hasGoodVission = true;// B

        console.log(hasDriverLisences && hasGoodVission);
        console.log(hasDriverLisences || hasGoodVission);
        console.log(!hasDriverLisences);

        // if(hasDriverLisences && hasGoodVission){
        //         console.log("john is able to drive");
        // }else{
        //         console.log("someone else should drive ");
        // }

        const isTired = true;
        console.log( hasDriverLisences && hasGoodVission && isTired)

        if (hasDriverLisences && hasGoodVission && isTired){
                console.log("john is able to drive");
        }else {
                console.log("someone else should drive ");
        }
       

        // The switch statement

        const day ='tuesday';

        switch( day){
                case 'monday':
                        console.log("plan course structure");
                        console.log("Go to coding meetup");
                        break;
                case 'tuesday':
                        console.log('Prepare theory videos');
                        break;
                case 'wednesday':
                case 'thursday':
                        console.log('write code example');
                        break;
                case 'friday':
                        console.log('Record vidoes');
                        break;
                case 'saturday':
                case 'sunday':
                        console.log('Enjoy the weekend');
                        break;
                default:
                        console.log('Not a valid day')
        }

        // Using the if & else statement

        if( day === 'monday'){
                console.log("plan course structure");
                console.log("Go to coding meetup");

        }else if (day === 'tuesday'){
                console.log('Prepare theory videos');

        }else if (day === 'wednesday' || day === 'thursday'){
                console.log('write code example');

        }else if (day === 'friday'){
                console.log('Record vidoes');
                 
        }else if (day === 'saturday' || day === 'sunday'){
                console.log('Enjoy the weekend');

        }else{
                console.log('Not a valid day')
        }
         */

        // Statements and expressions

        // The conditional (ternary) operator

        const age = 20;

        age <= 18 ? console.log("i like to drink whine"):
        console.log('i like to drink water')





         


        
         

        


 



        






        






























        













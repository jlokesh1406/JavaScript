// console.log("Hello"); //double quotes
// console.log('Hello'); //single quotes 
// console.log(`Hello`); // backtick 

// window.alert("Hello");
// --> single line comment
/* --> mulit line comment*/

// 1.basics id js handling
    // document.getElementById("myH1").textContent=`Hii`;
    // document.getElementById("myP1").textContent="Hello";


/*
2.variable - a container that store a value
    1.declaration: let a;
    2.assignment:  a=10;

        12x-3=4
        12  --> coefficient
        x   --> variable
        3,4 --> constants

    let a1=23;
    let b1=10.99;
    let c1=2.1;
    let d1="lokesh"
    let e1=true;
    console.log(`${a1}-${b1}-${c1}-${d1}-${e1}`);  //23-10.99-2.1-lokesh
    console.log(typeof a1);  //number
    console.log(typeof b1);  //number
    console.log(typeof c1);  //number
    console.log(typeof d1);  //string
    console.log(typeof e1);  //boolean
*/

/*
3.basics id js handling
    let a2="Hi";
    let b2=1234
    document.getElementById("myH2").textContent=a2;
    document.getElementById("myP2").textContent=`${b2}`;

*/

/*
4.arithmetic operators = operands  (values , variable , etc.)
                         operators (+ - * /)

      let a3=1;
      a3=a3+1;
      console.log(a3);  //2 
      a3=a3-1;
      console.log(a3);  //1
      a3=a3*2;
      console.log(a3); //2
      a3=3/10;
      console.log(a3); //0.3
      a3=4/2;
      console.log(a3); //2
      a3=111%10;
      console.log(a3); //1
      a3=2**3
      console.log(a3); //8

      a3=1;
      a3+=1;
      console.log(a3); //2
      a3-=1;
      console.log(a3); //1
      a3*=2;
      console.log(a3); //2
      a3/=4;
      console.log(a3); //0.5
      a3=2;
      a3**=2;
      console.log(a3); //4
      a3%=3;
      console.log(a3); //1

      a3=1;
      a3++;
      console.log(a3);//2
      a3--;
      console.log(a3);//1

    //operator precedence 1.parenthesis 2.exponents 3.multiplication,division,modulo 4.addition & subtraction

*/

      
/*
5.how to accept user input 
    //1.easy way = window prompt
    let username1;
    username1=window.prompt('Enter Your Name ');
    document.getElementById("myP5").textContent+=(username1.toUpperCase());


    //2.professional way = html textbox
    let username2;
    document.getElementById("mysubmit5_2").onclick = function()
    {
        username2=document.getElementById("inpu5_2").value;
        document.getElementById("myP5_2").textContent+=(username2.toUpperCase());
    }
*/

/*
6.type conversion = change the datatype of a value to another 
    //let age = window.prompt("How old are you?");
    let age = "20";
    age=Number(age);
    console.log(age,typeof age); //20 number
    a="pizza";
    b="pizza";
    c="pizza";
    a=Number(a);
    b=String(b);
    c=Boolean(c);
    console.log(a,typeof a); //NaN number
    console.log(b,typeof b); //pizza string
    console.log(c,typeof c); //true boolean

    a=123;
    b=123;
    c=0;
    a=Number(a);
    b=String(b);
    c=Boolean(c);
    console.log(a,typeof a); //123 number
    console.log(b,typeof b); //123 string
    console.log(c,typeof c); //false boolean

    a=123.2;
    b=123.3;
    c=0.3;
    a=Number(a);
    b=String(b);
    c=Boolean(c);
    console.log(a,typeof a); //123.2 number
    console.log(b,typeof b); //123.3 string
    console.log(c,typeof c); //true boolean

*/

//7.const - a variable that can't be changed
    // const PI=3.14159;
    // console.log(PI,typeof PI); //3.14159 number

//8.counter 

/*
9.Math = built-in object that provides a collection of properties and methods


    let x=Math.max(1,-1);
    console.log(x);  // 1
    x=Math.min(1,-2);
    console.log(x);  //-2
    x=Math.floor(2.12);
    console.log(x); //2
    x=Math.floor(2.52);
    console.log(x); //2
    x=Math.floor(2.92);
    console.log(x); //2

    x=Math.ceil(2.12);
    console.log(x); //3
    x=Math.ceil(2.52);
    console.log(x); //3
    x=Math.ceil(2.92);
    console.log(x); //3


    x=Math.round(2.12);
    console.log(x); //2
    x=Math.round(2.52);
    console.log(x); //3
    x=Math.round(2.92);
    console.log(x); //3

    x=Math.abs(-1);
    console.log(x); //1

    x=Math.PI;
    console.log(x); //3.141592653589793

    x=Math.sqrt(9);
    console.log(x); //3

    x=Math.pow(2,5);
    console.log(x); //32

    x=Math.trunc(10.23);
    console.log(x); //10
    x=Math.trunc(10.53);
    console.log(x); //10
    x=Math.trunc(10.93);
    console.log(x); //10


    x=Math.sin(2);
    console.log(x); //0.9092974268256817
    x=Math.cos(2);
    console.log(x);  //-0.4161468365471424
    x=Math.tan(2);
    console.log(x);  //-2.185039863261519
    x=Math.log(2);
    console.log(x);  //6931471805599453

    x=Math.sign(1232);
    console.log(x);  //1
    x=Math.sign(-1232);
    console.log(x); //-1
    x=Math.sign(0);
    console.log(x); //0

    x=Math.random();
    console.log(x); //0.429863305844274

    x=Math.floor(Math.random()*10);
    console.log(x); 

    const min=50;
    const max=100;
    let random = Math.floor(Math.random()*(max-min))+min;
    console.log(random);

    console.log(isNaN("Lokesh"));//true
    console.log(isNaN(123));//fasle

*/

//10.random number project


/*
11.If statements - if a codition is true excute some code
                   if not,do something else

        if(19>1)
        {
            console.log("hii1");
        }
        if(1)
        {
            console.log("hii2");
        }
        if(0)
        {
            console.log("hii3");
        }
        if(true)
        {
            console.log("hii4");
        }

        if(1)
        {

        }
        else if(1)
        {

        }
        else 
        {

        }

//op: hii1 hii2 hii4

*/

//11.click and option
/*

    let ECE=document.getElementById("ECE");
    let EEE=document.getElementById("EEE");
    let IT=document.getElementById("IT");
    let mysubmit=document.getElementById("mysubmit");
    let result=document.getElementById("result");

    mysubmit.onclick=function(){
        if(ECE.checked)
        {
            result.textContent="ECE";
        }
        else if(EEE.checked)
        {
            result.textContent="EEE";
        }
        else if(IT.checked)
        {
            result.textContent="IT";
        }
    }

*/


/*
//12.ternary operator
    let age=132;
    console.log(age==12?"12":"12+");  //12+


//13.switch
    let a1=2;
    switch(a1)
    {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("Two");
            break;
        default:
            console.log("Not");
            break;
    }
    //op:Two

    a1=12;
    switch(true)
    {
        case a1<=18:
            console.log("one");
            break;
        default:
            console.log("Not");
            break;
    }
    //op:one

*/

//14.String methods = allow you to manipulate and work with text (Strings)
/*

    let userName = "Lokesh";
    console.log(userName.charAt(0)); //L
    console.log(userName.length); //6
    console.log(userName.replace("Lo","lo")); //lokesh
    console.log(userName.indexOf("ke")); //2

    userName="lokeshlokesh";
    console.log(userName.lastIndexOf("ke")); //8

    userName="lokesh   ";
    console.log(userName.trim(),userName.length);//lokesh 9


    userName="Lokesh";
    console.log(userName.toUpperCase()); //LOKESH

    userName="Lokesh";
    console.log(userName.toLowerCase()); //LOKESH



    userName="Lokesh ";
    console.log(userName.repeat(3)); //Lokesh Lokesh Lokesh 


    userName="a";
    console.log(userName.charCodeAt()); //97

    userName="Lokesh";
    console.log(userName.startsWith("Lo")); //true

    userName="Lokesh";
    console.log(userName.endsWith("Lo")); //false

    userName="14-06-2004";
    userName=userName.replaceAll("-","/");
    console.log(userName); //14/06/2004

    userName="123";
    userName=userName.padStart(5,"0");
    console.log(userName); //00123

    userName="123";
    userName=userName.padEnd(5,"0");
    console.log(userName); //12300

    userName="Lokesh";
    console.log(userName.slice(0,2)); //Lo

    userName="Lokesh";
    console.log(userName.slice(-2)); //sh

    console.log(userName=="Lokesh");//true
    console.log(userName=="Lokes");//false

    console.log(1=="1"); //true
    console.log(1==="1"); //false

    console.log(2!="1"); //true
    console.log("1"!=="1"); //false

    let a=123;
    console.log(a=1234); //1234
    console.log(a);//1234
    if(a=1){}
    console.log(a); //1

*/

/*
15.loop
    1.while loop:
    let username="";
    while(username==="")
    {
        username=window.prompt("Enter Your UserName ");
    }

    var x = 10; // Can be redeclared & reassigned
    let y = 20; // Can be reassigned but not redeclared
    const z = 30; // Cannot be redeclared or reassigned


    //1.
    function testFunctionScope() {
        if (true) {
            var a = 10; // `var` is function-scoped
        }
        console.log(a); // ✅ Accessible here
    }
    
    testFunctionScope();
    // console.log(a); ❌ Error: `a` is not defined outside the function
    
    //2.
    function testBlockScope() {
        if (true) {
            let b = 20;  // `let` is block-scoped
            const c = 30; // `const` is also block-scoped
            console.log(b); // ✅ Accessible inside the block
            console.log(c);
        }
        // console.log(b); ❌ Error: `b` is not defined outside the block
        // console.log(c); ❌ Error: `c` is not defined outside the block
    }
    
    testBlockScope();

    let userName="";
    let password="";
    let login=false;

    while(!login)
    {
        userName=window.prompt("Enter Your UserName");
        password=window.prompt("Enter Your password");
        login=( (userName==="jlokesh1406") && (password=="Jlokesh@2004"))?true:false;
        if(login==true)
        {
            window.alert("Succesful Login :) ");
        }
        else 
        {
            window.alert("Enter username or password is incorrect please enter again :( ");
        }
    }
    //2.for loop:
    let n = 5; // Number of rows
    for (let i = 1; i <= n; i++) 
    {  
        let row = "";  
        for (let j = 1; j <= i; j++) 
        {  
            row += j + " ";  
        }
        console.log(row); 
    }
    for(let i=1;i<=5;i++)
    {
        if(i==3)
        {
            continue;
        }    
        else if(i==4)
        {
            break;
        }
    }  
*/

//16.function = A section of reusable code
/*
    function fun1()
    {
        console.log("Hi1");
    }
    fun1();
    //op:Hi1

    function fun2(name)
    {
        console.log("Hi2 "+name);
    }
    fun2("Lokesh ");
    //op:Hi2 Lokesh 

    function add(a,b)
    {
        return a+b;
    }
    console.log(add(1,2));
    //op:3

    function isEven1(number)
    {
        if(number%2==0){return 1;}
        else {return 0;}
    }
    console.log(isEven1(2)); 
    //op:1

    function isEven2(number)
    {
        return number%2==0?true:false;
    }
    console.log(isEven2(2)); 
    //op:true


    function isEmail(email)
    {
        return email.includes("@")?true:false;
    }
    console.log(isEmail("jlokesh1406@gmail.com"));   //true
    console.log(isEmail("jlokesh1406gmail.com"));     //false
*/

//17.project:

//18.array 
/*
    let a = ["apple","orange","banana"];
    console.log(a[0]); // apple
    console.log(a[-1]);  //undefined

    a[0]="coconut";
    console.log(a); //[ 'coconut', 'orange', 'banana' ]

    a = ["apple","orange","banana"];
    a.push("1");
    console.log(a); //[ 'apple', 'orange', 'banana', '1' ]
    a.pop();
    console.log(a); //[ 'apple', 'orange', 'banana',]

    a = ["apple","orange","banana"];
    a.unshift("1");
    console.log(a); //[ '1', 'apple', 'orange', 'banana' ]
    a.shift();
    console.log(a); //[ 'apple', 'orange', 'banana' ]

    let t="";
    for(let i=0;i<a.length;i++)
    {
        t+=a[i]+" ";
    }
    console.log(t);
    //apple orange banana 

    a = ["apple","orange","banana"];
    console.log(a.indexOf("orange")); //1

    t="";
    a = ["apple","orange","banana"];
    for(let i of a)
    {
        t+=i+" ";
    }
    console.log(t); //apple orange banana 

    a = ["apple","orange","banana"];
    a.sort();
    console.log(a); //[ 'apple', 'banana', 'orange' ]

    a = ["apple","orange","banana"];
    a.sort().reverse();
    console.log(a); //[ 'orange', 'banana', 'apple' ]

    a.fill("");
    console.log(a);// [ '', '', '' ]

    a.fill(123);
    console.log(a);// [ 123, 123, 123 ]

*/


//19.spread operator = expands an array into seperate element
/*
    let number=[1,2,3,4,524,4];
    console.log(Math.max(...number)); //524


    number=[1,2,3,4,524,4];
    console.log(Math.min(...number)); //1

    let username="Lokesh";
    let char = [...username];
    console.log(char);  // [ 'L', 'o', 'k', 'e', 's', 'h' ]

    username="Lokesh";
    char = [...username].join("-");
    console.log(char);   // L-o-k-e-s-h



    let number1=[1,2,3,4,524,4];
    let number2=[1,2,3,4,524,4];
    number1=[...number1,...number2,1,2];
    console.log(number1)
    // [
    //     1, 2, 3, 4, 524, 4,
    //     1, 2, 3, 4, 524, 4,
    //     1, 2
    //  ]

*/
 

//20.rest parameters = bundles seperate element into an array
/*
    function f1(...food)
    {
        console.log(...food);
    }
    function f2(...food)
    {
        console.log(food);
    }
    function f3(...food)
    {
        return (food);
    }
    const food1="a";
    const food2="b";
    const food3="c";
    const food4="d";


    f1(food1,food2,food3,food4) //a b c d
    f2(food1,food2,food3,food4) //[ 'a', 'b', 'c', 'd' ]
    console.log(f3(food1,food2,food3,food4)); //[ 'a', 'b', 'c', 'd' ]


    function f4(...number)
    {
        let t=0;
        for(let i of number)
        {
            t+=i;
        }
        return t;
    }
    console.log(f4(1,2,3,4)); //10



    function f5(...name)
    {
        return name.join(" ");
    }
    console.log(f5("l","o","k","e","s","h")); //l o k e s h

*/

//21.dice roller project

//22.random password
/*
    function RandomPasword(d, uc, lc, sc, passwordlength) 
    {
        let digits = '1234567890';
        let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lowercase = 'abcdefghijklmnopqrstuvwxyz';
        let specialchar = '`!@#$%^&*';
        let str1 = '',str2 = '';
        str1 += d ? digits : '';
        str1 += uc ? uppercase : '';
        str1 += lc ? lowercase : '';
        str1 += sc ? specialchar : '';
        for (let i = 0; i < passwordlength; i++) {
        let temp = Math.floor(Math.random() * str1.length);
        str2 += str1[temp];
        }
        return str2;
    }
    let d = true;
    let uc = true;
    let lc = true;
    let sc = false;
    let passwordlength = 12;
    console.log(RandomPasword(d, uc, lc, sc, passwordlength)); 
*/

/*
23.callback-callback a function to passed the argument to another function is know as a callback function.

    1.
        hello();
        bye();  
        function hello()
        {
            setTimeout(function(){console.log("hii");},3000)   // 3ms
        }
        function bye()
        {
            console.log("bye...");
        }
        bye...
        after 3 ms (hii) will be printed 

    2.
        one(two);
        function one(twooo)
        {
            console.log("hii one");
            twooo();
        }
        function two()
        {
            console.log("hii two");
        }
        //hii one
        //hii two

    3.
        sum(print,15,1);
        function sum(print,a,b)
        {
            let reslut = a+b;
            print(reslut);
        }
        function print(reslutt)
        {
            console.log(reslutt);
        }
        //16


//24.forEach is automatic to create element,index,array arr provided

    function addby1(element,index,arr)
    {
        arr[index]=element+1;
    }
    function print(print)
    {
        console.log(print+" ");
    }
    let num = [12,2,32,234,234];
    console.log(num); //[ 12, 2, 32, 234, 234 ]
    num.forEach(addby1);
    console.log(num); //[ 13, 3, 33, 235, 235 ]

    num.forEach(print); //  13 3 33 235 235 with each element new line also printed

    let fe_str = ["lare","errvrsg","Etrf","Erhfsx"];
    fe_str.forEach(touppercase);
    console.log(fe_str);  //['LARE', 'ERRVRSG', 'ETRF', 'ERHFSX']

    fe_str.forEach(tolowercase);
    console.log(fe_str);  // ['lare', 'errvrsg', 'etrf', 'erhfsx']

    fe_str.forEach(tocamilcase);
    console.log(fe_str);  // ['Lare', 'Errvrsg', 'Etrf', 'Erhfsx']

    function touppercase(e,i,arr)
    {
        arr[i]=e.toUpperCase();
    }
    function tolowercase(e,i,arr)
    {
        arr[i]=e.toLowerCase();
    }
    function tocamilcase(e,i,arr)
    {
        arr[i]=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();
    }



//25.
    // map accepts a callback and appplies that function to each element of array,then return a new array
    // forEach methods elements will be change but map is a possible
    
    //1.
    let M_arr1= [1,2,3,4,5];
    let M_arr2=M_arr1.map(square);
    console.log(M_arr1);  // [1, 2, 3, 4, 5]
    console.log(M_arr2);  //[1, 4, 9, 16, 25]
    function square(element)
    {
        return Math.pow(element,2);
    }

    //2.
    let M_str = ["lare","errvrsg","Etrf","Erhfsx"];
    let M_str1=M_str.map(touppercase);
    console.log(M_str1); //['LARE J', 'ERRVRSG J', 'ETRF J', 'ERHFSX J']
    console.log(M_str);  //['lare', 'errvrsg', 'Etrf', 'Erhfsx']
    let M_str2=M_str.map(tolowercase);
    console.log(M_str2); //['lare J', 'errvrsg J', 'etrf J', 'erhfsx J']
    console.log(M_str); //['lare', 'errvrsg', 'Etrf', 'Erhfsx']
    function touppercase(e)
    {
        return e.toUpperCase()+" J";
    }
    function tolowercase(e,i,arr)
    {
        return e.toLowerCase()+" J";
    }

    //3.
    let date =["01-12-23","23-01-24","24-01-02"];
    let date1=date.map(forDate);
    console.log(date);  //['01-12-23', '23-01-24', '24-01-02']
    console.log(date1); //['01/12/23', '23/01/24', '24/01/02']
    function forDate(element)
    {
        let temp = element.split("-");
        return `${temp[0]}/${temp[1]}/${temp[2]}`;
    }


//26.filter(): filter creates a new array by filtering out element

    //1.
    let arr=[1,2,3,4,6,7,8];
    let evenArr=arr.filter(iseven);
    console.log(arr);     //[1, 2, 3, 4, 6, 7, 8]
    console.log(evenArr); // [2, 4, 6, 8]

    let oddArr=arr.filter(isodd);
    console.log(oddArr);  //[1, 3, 7]
    console.log(arr);     //[1, 2, 3, 4, 6, 7, 8]
    function iseven(element)
    {
        return element%2===0;
    }
    function isodd(element)
    {
        return element%2===1;
    }

    //2.
    let arr1=["loekd","ojreg","ert","er","e"];
    let str1=arr1.filter(issorton);
    console.log(str1);  //['loekd', 'ojreg', 'ert', 'er']
    function issorton(e)
    {
        return e.length>=2;
    }
    


//27.reduce(): reduce method reduce the elements of an array to single value
    let R_arr1=[1,2,3,4,5,6,7];
    console.log(R_arr1.reduce(red)); //28
    console.log(R_arr1.reduce(getMax)); //7

    //accumulator is data storing registor it contains 0 at start point
    function red(accumulator,element)
    {
        return accumulator+element;
    }

    function getMax(accumulator,element)
    {
        return Math.max(accumulator,element);
    }



//28.function
    // function declaration define a reusable block of code that perform a specific task
    // function expressions  a way to define function as value or variables

    // function declaration
    function hello()
    {
    console.log("Hii....");
    }
    hello(); // Hii....

    //function expressions
    let hii=function()
    {
    console.log("hii..");
    console.log("everyone");
    }
    hii();
    //hii..
    //everyone

    // function declaration
    const num1 = [1,2,3,5,7,8];
    const num2 = num1.map(square);
    console.log(num1);   // [1, 2, 3, 5, 7, 8]
    console.log(num2);   //[1, 4, 9, 25, 49, 64]
    function square(e)
    {
    return Math.pow(e,2);
    }

    //function expressions
    const num3 = num1.map(function(e)
    {
        return Math.pow(e,3);
    });
    console.log(num3); //[1, 8, 27, 125, 343, 512]

    const num4 = num1.filter(function(e)
    {
        return e%2==0;
    });
    console.log(num4);  //[2, 8]

    const num5 = num4.reduce(function(a,e)
    {
        return a+e;
    });
    console.log(num5);  //10

*/

//29.arraow function
/*
    const hello1 = function()
    {
    console.log("--hii1--"); //--hii1--
    }
    hello1(); 

    const hello2 = (name,age)=>console.log(`hii2 ${name} ${age}`);
    hello2("lokesh",20); // hii2 lokesh 20

    const hello3 = (name,age)=>
    {
    console.log(`hii ${name}`); //hii lokesh
    console.log(`age is ${age}`); //age is 20
    }
    hello3("lokesh",20);

    //delay
    setTimeout(()=>console.log("--hii--"),4000); // after 4ms --hi-- will be printed

    //methods
    const A_arr=[1,2,3,4,5,6];
    const sqr=A_arr.map((e)=>Math.pow(e,2));
    const even_number=A_arr.filter((e)=>e%2==0);
    const sum_of_all=A_arr.reduce((a,e)=>a+e);

    console.log(sqr); //[1, 4, 9, 16, 25, 36]
    console.log(even_number); //2 4 6
    console.log(sum_of_all); //21

*/



/*
//30.Object:
    //  A Collection of related properties and/or methods Can represen real world objects(people,product,places)
    //  object = {key:value,function()}
    let person1 =
    {
        firstname : "lokesh",
        lastname : "J",
        age : 20,
        isEmployed : false,
        salary:"3cr",
        greeting : function(){console.log("hiii");console.log("everyone");},
    }
    console.log(person1.firstname); //lokesh
    person1.greeting(); // hiii \n everyone  

//31.this: reference to the object
    const person =
    {
        name:"lokesh",
        std:"VII",
        selfIntro1:function(){console.log(`hii myself ${this.name}`);},
        selfIntro2:function(){console.log(`hii myself ${person.name}`);}
    }
    person.selfIntro1(); //hii myself lokesh
    person.selfIntro2(); //hii myself lokesh

//32.constructors:special methods for defining the properties and mehods of objects
    //1.paramaric constutctor
    class Car 
    {
        constructor(model, colour, year, price) 
        {
            this.model = model,
            this.colour = colour,
            this.year = year,
            this.price = price;
            this.drive = function () { console.log("this car all for 18+"); };
        }
    }
    // function Car(model,colour,year,price)  // mehtod
    // {
    //     this.model=model,
    //     this.colour=colour,
    //     this.year=year,
    //     this.price=price
    //     this.drive=function(){console.log("this car all for 18+");}
    // }
    //Car - Both are correct constructors

    let car1 = new Car("Tesla1406","Black",2034,"75L");  // object creation
    let car2 = new Car("TATA","Black",2034,"75L");

    console.log(car1.model);// Tesla1406
    console.log(car1.colour); // Black
    car1.drive(); //this car all for 18+

    console.log(car2.model); //  TATA
    console.log(car2.colour); // Black
    car2.drive(); // this car all for 18+

    //2.defalut constructors
    function Car1(model = "Unknown Model", colour = "Unknown Colour", year = 2000, price = "0") 
    {
        this.model = model;
        this.colour = colour;
        this.year = year;
        this.price = price;
        this.drive = function() 
        {
            console.log("This car is for 18+");
        };
    }

    let car11 = new Car("Tesla1406", "Black", 2034, "75L");  // object creation with all parameters
    let car22 = new Car("TATA");  // object creation with default values for the rest
    let car33 = new Car();  // object creation with all default values

    console.log(car11.model);  // Tesla1406
    console.log(car11.colour); // Black
    car11.drive();

    console.log(car22.model);  // TATA
    console.log(car22.colour); // Unknown Colour
    car22.drive();

    console.log(car33.model);  // Unknown Model
    console.log(car33.colour); // Unknown Colour
    car33.drive();

*/

/*
//33.class
    //class ES6 feature provides a more structured and clear way to work with objects compared to 
    // traditional constructor function ex.static keyword,encapsulation,inheritance
    class Product
    { //class
        constructor(name,age) //constructoes
        {
          this.name=name;
          this.age=age;
        }
        display()  // methods
        {
          console.log(this.name);
          console.log(this.age.toFixed(3));
        }
        sub(year)
        {
          return 2024-year;
        }
    }
      let product1 = new Product("lokesh",20);
      console.log(product1.name);//lokesh
      product1.display(); //lokseh 20.000
      console.log(product1.sub(2004)); //20

//34.static
    // keyword that defines properties or methods that belong to class itself rather than the object created
    // from that class(class owns anything static,not the objects)

    
    class Class
    {
    static PI = 3.14;
    static getDiameter(r)
    {
        return r*2;
    }
    static getCircumference(r)
    {
        return 2*this.PI*r;
    }
    static getArea(r)
    {
        return this.PI*r*r;
    }
    static display()
    {
        console.log(this.PI);
    }
    }
    //can' t creat object to use the class
    console.log(Class.PI); //3.14
    console.log(Class.getDiameter(3)); //6
    console.log(Class.getCircumference(2)); //12.56
    console.log(Class.getArea(2)); //12.56 
    Class.display(); // 3.14

    //user count:

    class USER 
    {
    static ctr=0;
    constructor(username)
    {
        this.username=username;
        USER.ctr++;
    } 
    sayHello()
    {
        console.log(`Hii ${this.username}`);
    }
    static sayHello1()
    {
        console.log(`Hii ${this.ctr}`);
    }
    }
    let u1=new USER("LOKESH");
    console.log(USER.ctr); //1
    u1.sayHello(); //Hii LOKESH
    let u2=new USER("LOKESH"); 
    console.log(USER.ctr); //2
    USER.sayHello1();      //Hii 2
    let u3=new USER("LOKESH");
    console.log(USER.ctr); //3
    USER.sayHello1();      //Hii 3

*/

/*
//35.inheritance
    // allows neew class to inherit properties and methods form an existing class(parent->child)
    //helps with code reusability
    class Animal
    {
        alive = true;
        eat()
        {
            console.log(`this ${this.name} is eating`);
        }
        sleeping()
        {
            console.log(`this ${this.name} is sleeping`);
        }
    }
    class dog extends Animal
    {
        name="LEO";
        run()
        {
            console.log(`${this.name} running`);
        }
    }
    class fish extends Animal
    {
        name="FIP";
        swim()
        {
            console.log(`${this.name} swimming`);
        }
    }
    let DOG = new dog();
    console.log(DOG.alive); //true
    DOG.eat(); // this LEO is eating
    DOG.sleeping(); //this is sleeping
    DOG.run();  //LEO running

    let FISH = new fish()
    FISH.alive=false;
    console.log(FISH.alive); //false
    FISH.eat(); // this FIP is eating
    FISH.sleeping(); //this FIP is sleeping
    FISH.swim();  //FIP swimming

//36.super:
    //keyword is used in classes to call the constructor or access the properties and
    // methods of parent (superclass)
    class SuperAnimal
    {
        constructor(name,age) {
            this.name=name;
            this.age=age;
        }
        NAME()
        {
            console.log(`${this.name}`);
        }
        SPEED(speed)
        {
            console.log(`speed is : ${speed}`);
        }  
    }
    class Superdog extends SuperAnimal
    {
        constructor(name,age,speed)
        {
            super(name,age); //share the consturctor to parent class
            this.speed=speed;
        }
        SPEED()
        {
            super.SPEED(this.speed);
            console.log(`${this.speed}`);
        }
    }
    class Superfish extends SuperAnimal
    {
        constructor(name,age,swim)
        {
            super(name,age);
            this.swim=swim;
        }
        SWIM()
        {
            super.SPEED(this.swim);
            console.log(`${this.swim}`);
        }
    }
    let super_dog1 = new Superdog("leo",2,23);
    console.log(super_dog1.name);//leo
    super_dog1.NAME(); //2
    super_dog1.SPEED(); //speed is : 23  \n 23

    console.log("----------");

    let fish1 = new Superfish("Ted",2,3000);
    console.log(fish1.name); // Ted
    fish1.NAME(); //Ted
    fish1.SWIM(); //speed is : 3000  \n 3000

//37.getter/setter:
    //getter = special method that makes a property reable
    //setter = special method that makes a property writeable
    // validate and modify a value when reading/writing a property

    class Rectangle
    {
      constructor(width,height)
      {
        this.width=width;
        this.height=height;
      }
      set width(newwidth)
      {
        if(newwidth>0)
        {
          this._width = newwidth ;// _ means private the data
        }
        else 
        {
          console.error("plese enter positive number1");
        }
      }
      set height(newheight)
      {
        if(newheight>0)
        {
          this._height = newheight ;// _ means private the data
        }
        else 
        {
          console.error("plese enter positive number2");
        }
      }
      get width()
      {
        return this._width;
      }
      get height()
      {
        return this._height;
      }
      get area()
      {
        return this._width*this._height;
      }
    }
    let r1 = new Rectangle(-1223,"lokr");
    console.log(r1.width);
    console.log(r1.height);
    
    let r2 = new Rectangle("123",123);// but if(n>0) act is a number
    console.log(r2.width+" "+typeof r2.width);
    console.log(r2.height+" "+typeof r2.height);
    
    r2.width=200;
    r2.height=213;
    console.log(r2.width);
    console.log(r2.height);
    console.log(r2.area);

    class person
    {
      constructor(Fname,Age)
      {
        this.Fname=Fname;
        this.Age=Age;
      }
      set Fname(newFname)
      {
        if(typeof newFname==="string" && newFname.length>1)
        {
          this._Fname = newFname;
        }
        else
        {
          console.error("Enter valid name");
        }
      }
      set Age(newAge)
      {
        if(typeof newAge==="number"&&newAge>0)
        {
          this._Age = newAge;
        }
        else
        {
          console.error("Enter valid age");
        }
      }
      get details()
      {
        return `hii myself ${this._Fname} ${this._Age} year old`;
      }
    }
    let p1=new person(12,"12");
    
    let p2=new person("LOKESH",20);
    console.log(p2.details);
*/



/*
//38.destructuring
     // extract value form arrays and object,then assign them to variable in a convenient way
     // []= to perform array destructuring
     // {}= to perform object destructuring


    //1.swap the value of two variable
    console.log("1.swap the value of two variable");
    let a=1;
    let b=2;
    //destructur=array
    [a,b]=[b,a];
    console.log(a,b); //2 1

    //2.swap the value of two array
    console.log("2.swap the value of two array");
    let arr =["123","32","12345","12343"];
    [arr[0],arr[3]]=[arr[3],arr[0]];
    console.log(arr);  //[ '12343', '32', '12345', '123' ]

    //3.assign array element to variable
    console.log("3.assign array element to variable");
    let arr1=["23","234","24","2234","3456"];
    let [f,s,t,...remaing]=arr1;
    console.log(f); //23
    console.log(s); //234
    console.log(t); //24
    console.log(remaing); //['2234','3456]

    //4.extract value from objects
    let person1 =
    {
        fname:"lokesh",
        lname:"J",
        age:20,
        job:"stuudent",
    }
    let person2 =
    {
        fname:"vasu",
        lname:"K",
        age:21,
    }
    //method 1 using only one person
    let {fname,lname,age,job="unemploye"}=person1;
    console.log(fname,lname,age,job); //lokesh J 20 stuudent

    //5.destructuring in function parameters:
    //method 2 using many person using fuction
    console.log("5.destructuring in function parameters:");
    function display({fname,lname,age,job="unemploye"})
    {
        console.log(fname,lname,age,job);
    }
    display(person1);  //lokesh J 20 stuudent
    display(person2);  //vasu K 21 unemploye

*/


/*
//39.nested objects:
     // object inside of other objects
     // allows you to represent more complex data structures
     // child object is enclosed by a parent object
     // ex:
     //   person{address{},contactInfo{},about{}}


    //method 1
    let person =
    {
        fname:"lokesh",
        age:20,
        employe:true,
        hobbies:["photography","cricket","swimming"], //array
        address: // object
        {
            streetNum:"1/48",
            streetName:"market street",
            city:"sholinghur",
            district:"ranipet",
            pincode:631102,
        }
    }
    console.log(person.fname); //lokesh
    console.log(person.hobbies); //[ 'photography', 'cricket', 'swimming' ]
    console.log(person.hobbies[1]);//cricket

    console.log(person.address); // { streetNum: '1/48', streetName: 'market street', city: 'sholinghur', district: 'ranipet',pincode: 631102 }
    console.log(person.address.district); //ranipet
    for(let i in person.address)
    {
        console.log(person.address[i]);
    }
    // method 2
    class person
    {
        constructor(name,age,...address)
        {
            this.name=name;
            this.age=age;
            this.address= new Address(...address);
        }
    }
    class Address
    {
        constructor(street,city,country)
        {
            this.street=street;
            this.city=city;
            this.country=country;
        }
    }

    let person1 = new person("lokesh",20,"1/48,market st","sholinghur","india");
    let person2 = new person("vasu",30,"1/49,market st","sholinghur","india");
    let person3 = new person("prem",40,"1/20,market st","sholinghur","india");
    console.log(person1.name);
    console.log(person1.address.street);
    console.log(person2.name);
    console.log(person2.address.street);

*/

//40.array objects:
/*
    let persons = 
    [        
        {name:"lokesh",age:20,sw_hw:"sw"},
        {name:"arun",age:21,sw_hw:"sw"},
        {name:"vimal",age:20,sw_hw:"hw"},
        {name:"vallvan",age:21,sw_hw:"hw"}
    ];

    persons.push({name:"arun",age:21,sw_hw:"sw"});
    persons.pop();
    console.log(persons);

    console.log(persons.slice(0,3));

    console.log(persons[0].name,persons[0].sw_hw); //lokesh sw
    console.log(persons[2].name,persons[2].sw_hw);  //vimal hw
    //forEach 
    console.log("forEach method:");
    persons.forEach(temp=>console.log(temp.name)); //lokesh,arun,vimal,vallvan

    console.log("map method:");
    let map = persons.map(temp=>temp.name);
    console.log(map);  //[ 'lokesh', 'arun', 'vimal', 'vallvan' ]

    console.log("filter method:");
    let filter = persons.filter(temp=>temp.age>20);
    console.log(filter); //[ { name: 'arun', age: 21, sw_hw: 'sw' },{ name: 'vallvan', age: 21, sw_hw: 'hw' }]

    console.log("reduce method:");
    let max = persons.reduce((max,temp)=>temp.age>max.age?temp:max);
    console.log(max); //{ name: 'arun', age: 21, sw_hw: 'sw' }

    let min = persons.reduce((min,temp)=>temp.age<min.age?temp:min);
    console.log(min); //{ name: 'lokesh', age: 20, sw_hw: 'sw' }

*/


/*
//41.sort():
    // sort() method used to sort elementsof an array in place
    // sorts elements as string in lexicographic order,not alphabetical 
    // lexicographic =(alphabet + number +symbols) as string

    let arr1 =["lokes","loeijrcc","we","Car","acwer"];
    arr1.sort();
    console.log(arr1); //[ 'Car', 'acwer', 'loeijrcc', 'lokes', 'we' ]


    let arr2 =[2,3,42,235,124,1,1000,100];
    arr2.sort();
    console.log(arr2);  //[1, 100, 1000,124,   2,  235,3,  42]

    // decerement
    arr2.sort((a,b)=>b-a);
    console.log(arr2); //[1000,235,124,100,42,3,2,1]

    //increment 
    arr2.sort((a,b)=>a-b);
    console.log(arr2);  // //[1, 100, 1000,124,   2,  235,3,  42]

    let arr3=["adfs","sget","egx",2,"234c2","2c3","weq"];
    arr3.sort();
    console.log(arr3);//[2,'234c2','2c3', 'adfs','egx', 'sget','weq']

    let persons = [
                {name:"lokesh",age:20,gpa:7.52},
                {name:"arun",age:21,gpa:7.77},
                {name:"vallvan",age:21,gpa:8.9},
                {name:"vimal",age:20,gpa:8.55},
                ];
    persons.sort();
    console.log("sort:");
    console.log(persons); //[{ name: 'lokesh', age: 20, gpa: 7.52 },{ name: 'arun', age: 21, gpa: 7.77 },{ name: 'vallvan', age: 21, gpa: 8.9 },{ name: 'vimal', age: 20, gpa: 8.55 }]

    console.log("decerement:");
    persons.sort((a,b)=>a.gpa-b.gpa);
    console.log(persons); //[{ name: 'lokesh', age: 20, gpa: 7.52 },{ name: 'arun', age: 21, gpa: 7.77 },{ name: 'vimal', age: 20, gpa: 8.55 },{ name: 'vallvan', age: 21, gpa: 8.9 }]

    console.log("increment:");
    persons.sort((a,b)=>b.gpa-a.gpa);
    console.log(persons); //[{ name: 'vallvan', age: 21, gpa: 8.9 },{ name: 'vimal', age: 20, gpa: 8.55 },{ name: 'arun', age: 21, gpa: 7.77 },{ name: 'lokesh', age: 20, gpa: 7.52 }]

    let cards=['A',2,3,4,5,6,7,8,9,10,'J','K','Q'];
    cards.sort(()=>Math.random()-0.5);
    console.log(cards); //['Q',2,4,6,10,9,3,7,5,'K', 8,'J','A']

*/


/*
//42.data object:
    // date object that contains value that represent dates and times
    // these date object can be changed and formatted

    const date1 = new Date();
    console.log(date1); //Fri Apr 19 2024 17:52:13 GMT+0530 (India Standard Time) 

    //Date(year,month,day,hour,min,sec,ms)
    const date2 = new Date(2004,6,0,5,53,3);//Wed Jun 30 2004 05:53:03 GMT+0530 (India Standard Time)
    console.log(date2); 

    const date3 = new Date("2024-01-03T12:00:00Z");
    console.log(date3); 

    // sec to time
    const date4 = new Date(123456789);
    console.log(date4); 

    const date5 = new Date();
    let getFullYear = date5.getFullYear();
    let getMonth = date5.getMonth(); 
    let getDate = date5.getDate();
    let getHours = date5.getHours(); 
    let getMinutes = date5.getMinutes();
    let getSeconds = date5.getSeconds();
    let getDay = date5.getDay();

    console.log(getFullYear,getMonth,getDate,getHours,getMinutes,getSeconds,getDay);//2025 1 15 11 15 3 6

    const date6 = new Date();
    date6.setFullYear(2024);
    date6.setMonth(3);
    date6.setDate(19);
    date6.setHours(18);
    date6.setMinutes(3);
    date6.setSeconds(42);
    console.log(date6);  //2024-04-19T12:33:42.740Z

    let data7=new Date("2023-12-31");
    let data8=new Date("2022-12-22");
    console.log(data7>data8?"YES":"NO"); //YES

*/

//43.setTimeout():
    // function in js that allows you to schedule
    // the excution of a function after an amount of time(milliseconds)
    // setTimeout(callback,delay)

    // //1.method:
    //     function sayHello()
    //     {
    //         window.alert('hello');
    //     }
    //     setTimeout(sayHello,3000);
    // //2.method:
    //     setTimeout(function(){window.alert("hiii");},3000);


//44. project on clock:

//45. project on stopwatch:

//46. ES6 module:
/*
  ES6 module - an external file that contains reusable code
               that can be imported into other js file
               write resusable code for many different app
               can contains variable,classess,function.. and more
               introduced as part of ECMAScript 2015 update


    //./math_lokesh.js file content
    export const PI = 3.14;
    export function getCircumference(radius)
    {
        return 2 * PI * radius;
    }

    export function getArea(radius)
    {
        return PI * radius * radius;
    }

    export function getVolume(radius)
    {
        return (4/3)*PI*Math.pow(radius,3);
    }

    import {PI,getCircumference,getArea,getVolume} from './math_lokesh.js';
    console.log(PI);
    console.log(getCircumference(2));
    console.log(getArea(2));
    console.log(getVolume(2));
*/

//47.synchronous & asynchronous
/*
    // synchronous => executes line by line consecutively in sequential manner
    //                code that waits for an opration to complete
    //asynchronous => Allows multiple oprations to performed concurrently without wasting
    //                doesn't block the excution flow and allows the program to continue

    //synchronous
    console.log("hii 1");
    console.log("hii 2");
    console.log("hii 3");
    //output;
    // hii 1
    // hii 2
    // hii 3

    //asynchronous
    console.log("---------------------");
    setTimeout(() => console.log("hi1"),3000);
    console.log("hii 2");
    console.log("hii 3");
    //output;
    // hii 2
    // hii 3
    // hii 1


//48.Error - An object that is created to represent a problem that occur
//           occur often with user input or establishing a connection

    try
    {
        console.log(ECE); // This will throw a ReferenceError since `ECE` is not defined
    } 
    catch (error) 
    {
        console.log(error);   // Logs the error message to the console
        console.error(error); 
    }
    finally
    {
        console.log("BYE--->");
    }
    console.log("----Hi...---"); // This should be printed

    //output:
    // ReferenceError: ECE is not defined
    //     at js1.js:1961:17

    //higlighing 
    //js1.js:1965 ReferenceError: ECE is not defined
    //    at js1.js:1961:17

    //BYE--->
    //----Hi...---

*/

//49.project calc:

/*
//50.DOM - Document object model
    // The DOM (Document Object Model) is a programming interface for web documents. 
    // It represents the structure of a web page as a tree of objects, where each object corresponds to a part of the page, such as elements, attributes, and text.
    // js can access the DOM to dynamically change the content,structure,and style of a web page

    
    const username = "jlokesh1406";
    const welcomeMsg=document.getElementById("welcome-msg");
    welcomeMsg.textContent+=" "+username;

    //1.Element selectors = Method used to target and manipulate html elements they allow you to select one or more html elements form the dom
    // i)   document.getElementById()       --->  Element or Null
    // ii)  document.getElementsClassName() --->  HTML COLLECTION
    // iii) document.getElementsByTagName() --->  HTML COLLECTION
    // iv)  document.querySelector()        --->  Elements orr NUll
    // V)   document.querySelectorAll()     --->  Nodelist

    // i)   document.getElementById()       --->  Element or Null
    const getElementById1=document.getElementById("getElementById1");
    getElementById1.style.backgroundColor="red";
    getElementById1.style.color="white";
    getElementById1.style.fontSize = "20px";
    getElementById1.style.padding = "10px";
    getElementById1.style.border = "10px solid black";
    getElementById1.style.width = "50%";
    getElementById1.style.margin = "20px";
    console.log(getElementById1); //<h3 id="getElementById1" style="background-color: red; color: white; font-size: 20px; padding: 10px; border: 10px solid black; width: 50%; margin: 20px;">Lorem </h3>

    // ii)  document.getElementsClassName() --->  HTML COLLECTION
    const getElementsClassName1 = document.getElementsByClassName("getElementsClassName1");
    console.log(getElementsClassName1);
    for(let i of getElementsClassName1)
    {
        i.style.backgroundColor="yellow";
    }
    Array.from(getElementsClassName1).forEach(i =>
    {
          i.style.color="white";
    });
    //iii) document.getElementsByTagName()
    const getElementsByTagName1=document.getElementsByTagName("li");
    getElementsByTagName1[0].style.textAlign="center";
    for(let i of getElementsByTagName1)
    {
        i.style.backgroundColor="yellow";
    }
    Array.from(getElementsByTagName1).forEach(i =>
    {
        i.style.color="green";
    });
    
    //iv)  document.querySelector() 
    const querySelector = document.querySelector(".querySelector");
    querySelector.style.backgroundColor="yellow";
    console.log(querySelector);

    //V)   document.querySelectorAll() 
    const querySelectorAll = document.querySelectorAll(".querySelectorAll");
    querySelectorAll.forEach(i=>{
        i.style.color="red";
    });
    

*/

/*
//51.DOM - Document object model Navigation:the proces of navigating through the structure of an html document javascript
    // .firstElementcChild
    // .lastElementChild
    // .nextElementSibling
    // .previousElementSibling
    // .parentElement
    // .children

        const element = document.getElementById("DOMN");
        const firstChild = element.firstElementChild;
        firstChild.style.color = "red";

        const lastChild = element.lastElementChild; 
        lastChild.style.color = "blue";
    
        const element1=document.getElementById("two");
        const nextElementSibling=element1.nextElementSibling;
        nextElementSibling.style.color="green";

        const previousElementSibling=element1.previousElementSibling;
        previousElementSibling.style.backgroundColor="yellow";

        const element2 = document.getElementById("six");
        const parentElement = element2.parentElement; // Correctly assigning parent element
        parentElement.style.backgroundColor = "rgb(84, 155, 84)"; // Use parentElement

        
        const element3 = document.getElementById("DOMN2");
        const children = element3.children;
        for (let child of children) 
        {
            child.style.backgroundColor = "rgb(254, 23, 2)"; // Applies to all child `<li>` elements
        }
*/

//52.Example on DOM
/*
    let heading = document.createElement("h1");
    heading.id="heading"
    heading.textContent="Ted Talks";
    heading.style.color="red";
    heading.style.background="black";
    heading.style.textAlign="center";
    // document.body.append(heading);  //bottom
    // document.body.prepend(heading); //top
    // document.getElementById("Dom_Example").append(heading);
    // document.getElementById("Dom_Example").prepend(heading);
    const Dom_Example=document.getElementById("Dom_Example");
    document.body.insertBefore(heading,Dom_Example);

*/

//53.evenListener - Listen for specific events to create interaction webpage
//                  events:click,mouseover,mouseout
/*
    //1.
    const EventListner1 = document.getElementById("EventListner1");

    EventListner1.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "yellow";
        event.target.style.color = "black";
        event.target.textContent = "Click";
    });

    EventListner1.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "lightgreen";
        event.target.style.color = "black";
        event.target.textContent = "Click"; 
    });

    EventListner1.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "lightblue";
        event.target.style.color = "black";
        event.target.textContent = "Click"; 
    });

    //2.
    const EventListner2 = document.getElementById("EventListner2");

    document.addEventListener("keydown", (event) => {
        EventListner2.textContent = "😒";
        EventListner2.style.backgroundColor = "red";
    });

    document.addEventListener("keyup", (event) => {
        EventListner2.textContent = "😊";
        EventListner2.style.backgroundColor = "lightgreen";
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            EventListner2.textContent = "🤣";
            EventListner2.style.backgroundColor = "yellow";
        } else if (event.key === "ArrowRight") {
            EventListner2.textContent = "😁";
            EventListner2.style.backgroundColor = "orange";
        }
    });

    3.
    project

*/

//54.hide img project

//55.Nodelist:
/*
    let newbtn = document.createElement("button");
    newbtn.textContent="btn 5";
    newbtn.classList="myBtn";
    document.body.appendChild(newbtn);

    let btn = document.querySelectorAll(".myBtn");
    btn.forEach(btn=>{
        btn.addEventListener("mouseover",event=>
            {
                event.target.style.backgroundColor="red"
            }
        )
    });

    btn.forEach(btn=>{
        btn.addEventListener("mouseout",event=>
            {
                event.target.style.backgroundColor="yellow"
            }
        )
    });

    btn.forEach(btn=>{
        btn.addEventListener("click",event=>
            {
                event.target.remove();
            }
        )
    });
*/

//56.classlist:
    let btn = document.getElementById("classlistbtn");
    btn.classList.add("classlistenable");
    btn.classList.remove("classlistenable");
    btn.classList.toggle("classlistenable");
    btn.classList.contains("classlistenable");

    btn.addEventListener("mouseout",event=>
    {
        event.target.classList.add("hover");
    });
    btn.addEventListener("mouseover",event=>
    {
        event.target.classList.remove("hover");
    });
    btn.addEventListener("click",event=>
    {
        event.target.classList.replace("classlistenable","classlistdisable");
    });

//57. rock - paper - scissors

//58. rock - image  slider
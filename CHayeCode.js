
// // https://github.com/lionheartAbd/https-github.com-hiteshchoudhary-js-hindi-youtube
// // ************************************Strings***********************
// name= "Shifa"
// age=21
// console.log(`my name is ${name} and my age is ${age}`);

// //*********************/  Strings Method************** 
// const str= new String("Hello Wolrd")
// console.log(str);
// console.log(str.charCodeAt(3));//give us a unicode value
// console.log("Shifa".concat (" Rabbnai"));
// console.log(str.endsWith('y'));
// console.log(str[4]);
// console.log(str.charAt(6));



//  // ******************Number*******************
//  const Num=  new Number (225)
//  console.log(Num);
 
//  console.log(Num.toFixed());
//  console.log(Num.toExponential(1));
// let num=(2256788990057)
//  console.log(num.toLocaleString(2)); // add a comma b/n lasrge numbers
//  console.log(Num.toString().length);
// let n=9843.532
//  console.log(n.toPrecision(4)); //used for a preceise value
//  console.log(Num.valueOf(1));

// // ********************************Math****************************
// console.log(Math);
// console.log(Math.abs(-567));
// console.log(Math.round(832.9876));
// console.log(Math.ceil(4.1)); //always take a higher value  after point
// console.log(Math.floor(4.8)); // take lower value after point
// console.log(Math.sqrt(35));

// console.log(Math.random());
// console.log(Math.floor((Math.random() *6 )+1));

// const min=10
// const max=20

// console.log(Math.floor(Math.random() * (max-min +1))+min);


// //************************************** Dates*********************/
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);
//   //  ************************Date Methods***********************
// let MyCreatedDate1 = new Date ("2025-01-20") // use date as YY/MM/DD
// let MyCreatedDate2 = new Date(2022,1,20)  //only for a date
// let MyCreatedDate3 = new Date(2022 ,3,1,5,3) //date and time both
// let MyCreatedDate4 = new Date ("11-20-2002")  // MM/DD/YY  
// console.log(MyCreatedDate1.toLocaleString());
// console.log(MyCreatedDate2.toLocaleString());
// console.log(MyCreatedDate3.toLocaleString());
// console.log(MyCreatedDate4.toLocaleString());

// *******************Time Stamp**********************used for quizes etc give time in mili second
let myTimeStemp = Date.now()
let myCreatedDate = new Date ("11-20-2002") 
// console.log(myTimeStemp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


 let newDate= new Date()
//  console.log(newDate.getDate());
//  console.log(newDate.getDay());
//  console.log(newDate.getFullYear());
//  console.log(newDate.getMonth());
//  console.log(newDate.getMinutes());
//  console.log(newDate.getTimezoneOffset());
//  console.log(newDate.getFullYear());
 


 
 
  newDate.toLocaleString('defaut',{
    weekday:"short",
    timeZone:"Asia/Karachi"
  })
  console.log(newDate);

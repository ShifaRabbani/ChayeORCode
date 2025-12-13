//   *************************Array**************
let arr=["SHifa Rabbani",89,2,12,]

 arr.push("Gundapor")
arr.pop()
arr.shift()
arr.unshift("hy")
console.log( arr.includes("by"));//give result in a bolean T/F
console.log(arr.indexOf("SHifa Rabbani"));
const  newArr=arr.join()//Convert arry into string 
console.log( newArr);
console.log(arr);

console.log(arr.slice(1,3));
console.log(arr);

console.log(arr.splice(1,2));
console.log( arr);
//             //    **************Concatination(merg two arrays)*******************
const hero1=["Shifa","Laiba" ]
const hero2=[ " Kainat","Mehk"]

 hero1.push(hero2)
console.log(hero1);

 const Arr = hero1.concat(hero2)
 console.log(Arr);

const Array= hero1 + hero2
console.log( Array);
                    //  *********************Spread out values****    
const Al_heros =[...hero1, ...hero2]
console.log(Al_heros);

const value=[1,2,3,4 ,[5,6,7,8,["Shifa"], [9,10,11,12]]]
const real_value = value.flat(Infinity)
console.log(real_value);

            //  **********************************Conver into Array**********
console.log(Array.isArray("Shifa"));
console.log(Array.from("Shifa"));
console.log(Array.from({name:"Shifa"}));
 
let val1 = 200
let val2 = 400
let val3 = 600
console.log(Array.of(val1,val2,val3));

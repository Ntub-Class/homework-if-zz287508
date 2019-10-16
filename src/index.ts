// 請介紹兩個字串方法跟數字方法

//字串方法 indexOf() 輸入字元 找出字串中的該字元在第幾位
let a='abc';
console.log(a.indexOf('a')); //a在第0位

//字串方法 charAt() 輸入第幾位 找出該位置的字元
let b='xyz';
console.log(b.charAt(2)); //第二位是z

//數字方法 toString() 將數字變成字串
let c=100;
console.log(typeof(c.toString())); //型態變為字串

//數字方法 toPrecision() 將該數字的小數點位數 取到輸入的值(四捨五入)
let d=3.14159265358979323846
console.log(d.toPrecision(8)); //取到小數點第8位 3.1415927

// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if(money>limit){
    console.log('乾爹');
}else{
    console.log('謝謝再聯絡');
}

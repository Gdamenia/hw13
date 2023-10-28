console.log(`esaa pirveli taski`);

let num = 3;

for(let i = 1; i <= 10; i++){
    console.log(num * i);
}





console.log(`esaa meore taski`);

for (let i = 10; i > 0; i--){
    console.log(i)
}



console.log(`esaa mesame taski`);

let sum = 0;

for(let i = 1; i<=100; i++){
    sum += i
}
console.log(sum);



console.log(`esaa fizzbuzz`);

for(let i = 1; i <= 20; i++){
    if (i % 3 === 0 && i % 4 === 0 ) {
        console.log(`fizbuzz`);
    } else if ( i % 3 === 0){
        console.log(`fizz`)
    }else if ( i % 4 === 0 ){
        console.log(`buzz`)
    }else{
        console.log(i)
    }
}








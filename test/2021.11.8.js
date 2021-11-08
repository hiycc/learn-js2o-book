function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

async function asyncPrint(value,ms){
    await timeout(ms);
    console.log(value);
}

// asyncPrint('Hello,world',3000);


function* gen(){
    yield 'Hello'
    yield 'world'
    return 'Hello,world'
}
// var generator = gen();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

async function awaitPrint(ms){
    await timeout(ms);
    console.log("await finished!!!");
}
awaitPrint(1000);
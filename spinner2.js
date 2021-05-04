const symbol = ['|', '/', '-', '\\', '|', '|']

let time = 100;
const animation = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    time += 200;
    setTimeout(() => {
      process.stdout.write(`\r${arr[i]}   `)
    }, time);
  }
  setTimeout(() => {
    console.log('\n')
  }, time);
}


animation(symbol);

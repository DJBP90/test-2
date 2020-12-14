function shoutGreetings(arr) {
    let shout = [];
    for (let i = 0; i<arr.length; i++){
        shout.push(arr[i].toUpperCase() + '!')
    }
    return shout;
}

const greetings = ['hi', 'hello', 'oi', 'hey', 'yo'];
greetings.pop();
console.log(shoutGreetings(greetings))
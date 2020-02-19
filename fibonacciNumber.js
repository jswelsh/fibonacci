/* 
function fibonacci_number(input){
    let num_one = input.start[0];
    let num_two = input.start[1];
    let results = [...input.start];
    let next = null;
    for(let i = 2; i < input.length; i++) {
        next = num_one + num_two;
        num_one = num_two;
        num_two = next;
        results.push(next);
    }
    console.log(results)
} 
*/

function fibonacci_number(input){
    let num_one = input.start[0];
    let num_two = input.start[1];
    let results = [...input.start]
    let next = null;
    let count = input.start.length
    while(count < input.length) {
        next = num_one + num_two;
        num_one = num_two;
        num_two = next;
        results.push(next);
        count++;
    }
    console.log(results)
}

fibonacci_number({start: [0,1], length: 10})
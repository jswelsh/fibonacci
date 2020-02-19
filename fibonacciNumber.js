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
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
fibonacci_number({series: [1,0], length: 8})
fibonacci_number({series: [0,1], length: 10})
*/
/* 
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
fibonacci_number({series: [1,0], length: 8})
fibonacci_number({series: [0,1], length: 10})
 */
/* 
function fibonacci_number(input){
    let next = null;
    while( input.series.length <= input.length) {
        next =  input.series[0] +  input.series[1];
        input.series.unshift(next)
    }
    console.log(input.series)
} 
fibonacci_number({series: [1,0], length: 8})
fibonacci_number({series: [0,1], length: 10})
 */
/* 
function fibonacci_number(input){
    while( input.series.length <= input.length) {
        input.series.unshift(input.series[0] +  input.series[1]);
    }
    console.log(input.series);
    document.write(input.series);
}
fibonacci_number({series: [1,0], length: 8})
fibonacci_number({series: [0,1], length: 10})
 */

function fibonacci_number(input){
    for(let count = 0; count <= input.iterations; ++count) {
        input.sequence[0] += input.sequence[1]
        input.sequence[1] = input.sequence[0] - input.sequence[1]
        input.sequence[0] -= input.sequence[1]
        input.sequence[1] += input.sequence[0]
       // console.log(input.sequence[1])
       //document.write(input.sequence[1]);
    }
    //console.log(input.sequence[1]);
    document.write(input.sequence[1]);
}


fibonacci_number({sequence: [0,1], iterations: 10})
// 짝수 홀수 개수
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때,
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

//풀이 1. (변수를 하나 더 생성해서 비효율적이라고 생각함)
function solution(num_list) {
  const arr = [];
  const a = num_list.filter(n => n % 2 === 0).length;
  const b = num_list.filter(n => n % 2 !== 0).length;
  arr.push(a, b);
  return arr;
}

// 풀이 2.
// function solution(num_list) {
//    const a = num_list.filter(n=>n%2===0).length
//     console.log("a",a)
//     return [a,num_list.length-a]

// }

// 최댓값 만들기 (1)
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 처음풀었던풀이.. 테스트케이스 2개 통과 못함!
// function solution(numbers) {
//   const max = Math.max(...numbers);
//   // console.log(max)
//   const filtered = numbers.filter(n => n !== max);
//   // console.log("filtered", filtered)
//   const second = Math.max(...filtered);
//   return max * second;
// }

// 테스트케이스 모두 통과!!!!
function solution(numbers) {
  const qqq = numbers.sort((a, b) => b - a);
  const ppp = qqq.slice(0, 2);
  return ppp.reduce((acc, cur) => acc * cur);
}

// 그 외 흥미로웠던 풀이 (구조분해할당해서 곱하기 하면 간단하네)
// function solution(numbers) {
//   const [first, second] = numbers.sort((a, b) => b - a);
//   return first*second
// }

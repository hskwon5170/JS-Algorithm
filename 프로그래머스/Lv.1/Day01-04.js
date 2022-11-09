// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 이렇게 풀었는데 테스트케이스 하나 통과 못함!(런타임에러)
// function solution(n) {
//   const arr = new Array(n)
//     .fill(1)
//     .map((el, index) => el + index)
//     .filter(q => n % q === 0)
//     .reduce((acc, cur) => acc + cur);
//   return arr;
// }

function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

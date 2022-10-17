// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  return [...("" + n)].map(el => +el).reduce((a, c) => a + c); //+el을 반드시 해줘야 한다
}

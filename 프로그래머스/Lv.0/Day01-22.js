// 제곱수 판별하기
// 문제 설명
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
// 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2; //제곱수 = 정수이므로, 일단 정수인지 판별 위해 Number.isInteger(), 루트값 구하기 위해 Number.sqrt()
}

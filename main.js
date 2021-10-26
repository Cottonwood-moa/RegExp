const str = `
010-2831-6734
geon0529@naver.com
https://cottonwood-moa.tistory.com/
The quick brown fox jumps over the lazy dog.
abbcccddddthe
`

console.log(
  str.match(/(?<=@).{1,}/g)
)
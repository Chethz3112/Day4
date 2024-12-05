function findLongestWord(sentence) {
  
  const words = sentence.split(" ");

  
  let longestWord = "";
  
  
  for (let i = 0; i < words.length; i++) {
    
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  
  return longestWord;
}


const sentence = "I love programming and solving problems";
const result = findLongestWord(sentence);
console.log(result); 
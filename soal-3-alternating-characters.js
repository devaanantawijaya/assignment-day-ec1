function alternatingCharacters(str) {
  // hitung mulai dari 0
  let count = 0;

  // looping untuk cek sebelahnya
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {

      // cek berapa string yang sama disebelahnya
      if (str[i] === str[j]) {

        // tambahkan 1 setiap menemukan
        // string yang sama disebelahnya
        count++;
        break;
      } else {
        break;
      }
    }
  }
  // sebutkan hasil penjumlahannya
  return count;
}

console.log(alternatingCharacters("AAAA"));
console.log(alternatingCharacters("BBBBB"));
console.log(alternatingCharacters("ABABABAB"));
console.log(alternatingCharacters("BABABA"));
console.log(alternatingCharacters("AAABBB"));

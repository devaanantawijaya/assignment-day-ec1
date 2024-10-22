function palindrome(str) {
  // mengabaikan spasi, huruf besar dan kecil
  let str1 = str.split(" ").join("").toLowerCase();

  // susunan huruf dibaca dari belakang
  let str2 = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i];
  }

  // cek kesamaan: true / false
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("Kasur Rusak"));
console.log(palindrome("Saya Makan"));

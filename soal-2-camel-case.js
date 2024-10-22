function camelcase(str) {
  // kata awal ada 1
  let count = 1;

  //  Looping untuk ngecek string
  for (let i = 0; i < str.length; i++) {

    // cek berapa ada huruf besar diawal kata
    if (str[i] === str[i].toUpperCase()) {

      // lalu tambahkan 1 setiap menemukan huruf besar
      count++;
    }
  }
  // sebutkan hasil penjumlahannya
  return count;
}

console.log(camelcase("oneTwoThree"));
console.log(camelcase("saveChangesInTheEditor"));

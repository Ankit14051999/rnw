function containsVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            console.log(true);
            return;
        }
    }
    console.log(false);
}

containsVowel("hzllo"); 

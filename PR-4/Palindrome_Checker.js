class StringManipulator {
    cleanString (string){
        return string.replace(/[^a-zA-Z0-9 -]/).toLowerCase();
    }
}

class PalindromeChecker extends StringManipulator {
    isPalindrome(string) {
        let cleanstr = this.cleanString(string);
        let reversedStr = cleanstr.split('').reverse().join('');
        return cleanstr === reversedStr;
    }
}

let Pal = new PalindromeChecker();
let string = "121";
let ispal = Pal.isPalindrome(string);

if(ispal){
    console.log("Palindrom");
}
else{
    console.log("Not Palindrom");
}
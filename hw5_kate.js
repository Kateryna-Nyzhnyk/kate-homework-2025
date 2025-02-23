const text = ["Wonderful, Jouyful, Hapiness, Time, Task, Apple"];
const regex = /\b(?!\w*[aA])\w{6,}\b/g;

text.forEach(text => {
    let findWords = text.match(new RegExp(regex));
    console.log(findWords);
})

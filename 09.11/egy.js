function f(s) {
    document.querySelector('#output').innerHTML = 
    s.split('').reverse().join('');
} 


function j(a, b) {
    document.querySelector('#output').innerHTML = a + b;
}


function k(text) {
    const length = text.length;
    document.querySelector('#output').innerText = 'The length of the text is: ' + length;
}
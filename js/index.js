const translateButton = document.getElementById('translateButton');
const arabicText = document.getElementById('arabicText');
const signLanguageOutput = document.getElementById('signLanguageOutput');

const validCharacters = [
    'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ',
    'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع',
    'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'
];

translateButton.addEventListener('click', () => {
    const text = arabicText.value;
    signLanguageOutput.innerHTML = '';

    for (let char of text) {
        if (validCharacters.includes(char)) {
            const img = document.createElement('img');
            img.src = `img/${char}.png`;
            img.alt = `${char}`;
            img.className = 'sign-symbol';
            signLanguageOutput.appendChild(img);
        }
    }
});

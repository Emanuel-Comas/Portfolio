const originalText = "Emanuel Comas";
const glitchChars = "⧉⟊⩫⌇⠿≡⧖⩶⧬☍⌬⧃⟟⤫⩷⧞⧅𐌠𐌞ᔑ≮⩵⛶⤷⧒⧓⧄⌯⎳⧙𒀭𒈙⩸⌬ᚠᚢᛞ⧗∰";
const el = document.getElementById("glitch-name");

function glitch(text) {
    // Callback.
    const index = getRandomIndex(text);
    const char = glitchChars[Math.floor(Math.random() * glitchChars.length)];

    return text
    .split("")
    .map((c, i) => (i === index && c !== " ") ? char : c)
    .join("");
}

// Callback.
function getRandomIndex(text) {
    let index;
    do {
        index = Math.floor(Math.random() * text.length);
        // Evita espacios.
    } while (text[index] === " ");
    return index;
}

function startGlitch() {
    setInterval(() => {
        const glitched = glitch(originalText);
        el.textContent = glitched;

        setTimeout(() => {
            el.textContent = originalText;
            // Glitch muy leve.
        }, 100);
        //  Cada 2 segundos.
    }, 2000);
}

startGlitch();


// Descencriptado.
const decryptionText = document.getElementById('decryptionText');
const wall = document.getElementById('decryptionWall');
const projects = document.getElementById('projectsList');
// En caso de poner Audio.
// const audio = document.getElementById('wiredAudio');

const finalMessage = `
        decrypting...
> Accessing data nodes...
> Interface initializing...

[PROJECTS PROTECTED BY LAIN]
`;

let chars = "ａｌｔＬＡＩＮレイ ﾘﾝｸ ﾈｯﾄ ﾋﾞｯﾄ アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン ゛゜ー〜ヽゝゞ々 ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ абвгдеёжзийклмнопрстуфхцчшщъыьэюя ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯ ⟋⟍⟐⟑◐◑◒◓◔◕ ̶̷̵̴̧̨̺̇̄́̀̃";
let iterations = 0;
let interval = setInterval(() => {
    let text = "";
    for (let i = 0; i < finalMessage.length; i++) {
        text += Math.random() > 0.5 ? finalMessage[i] : chars[Math.floor(Math.random() * chars.length)];
    }
    decryptionText.textContent = text;
    iterations++;

    if (iterations > 25) {
        clearInterval(interval);
        decryptionText.textContent = finalMessage;

        setTimeout(() => {
            wall.classList.add('fade-out');

            setTimeout(() => {
                wall.style.display = 'none';
                // Lo que tarda en desaparecer el descencriptado.
                // Al cambiar aqui los segundos, igualar en el css.
            }, 200);
            // Mostrar proyectos.
            projects.classList.remove('d-none');
            projects.classList.add('show');

        }, 1500);
    }
}, 100);


// Parte para contact.

// Referencias al DOM.
const decryptBtn = document.getElementById('decryptBtn');
const btnWrapper = document.getElementById('btnWrapper');
const statusLine = document.getElementById('statusLine');
const smallState = document.getElementById('smallState');
const linksArea = document.getElementById('linksArea');


// Simulación de proceso de descencriptado.
decryptBtn.addEventListener('click', () => {
    //   Hace desaparecer el boton inmediatamente.
    //   remove(), para eliminar del DOM.
    btnWrapper.remove();

    // Estado inicial.
    smallState.textContent = 'Connecting...';
    statusLine.textContent = 'Establishing secure channel...';

    // Animación de descifrado.
    let dots = 0;
    statusLine.dataset.interval = setInterval(() => {
    dots = (dots + 1) % 4;
    statusLine.textContent = 'Deciphering wired' + '.'.repeat(dots);
    // '.' cada 0.2 segundos.
    // 200ms => 0.2 segundos.
    }, 200);

    // Proceso simulado, tras 1.6s, revela enlaces.
    // Ajustes de tiempo, si se necesita otro ritmo.
    setTimeout(() => {
        smallState.textContent = 'Partial decryption';
        statusLine.textContent = 'Verifying integrity...';
        // 600ms => 0.6 segundos.
    }, 600);

    setTimeout(() => {
        smallState.textContent = 'Processing keys';
        statusLine.textContent = 'Reassembling metadata...';
        // 1200ms => 1.2 segundos.
    }, 1200);

    // Este bloque se ejecuta a los 2 segundos.
    setTimeout(() => {
        // Final: detiene animación y muestra enlaces.
        clearInterval(statusLine.dataset.interval);
        smallState.textContent = 'Access granted';
        statusLine.textContent = 'Links successfully retrieved.';
        // Revela los links.
        linksArea.classList.remove('visually-hidden');
        // Añade un pequeño highlight. 
        linksArea.animate([{opacity:0, transform:'translateY(6px)'},{opacity:1, transform:'translateY(0)'}], {duration:600, easing:'cubic-bezier(.2,.9,.3,1)'});
        // 2000 ms =>  2.0 segundos.
    }, 2000);

});
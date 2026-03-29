<script>

let speech = null;
let voices = [];

function carregarVozes() {

    voices = window.speechSynthesis.getVoices();

}

// Carregar vozes
speechSynthesis.onvoiceschanged = carregarVozes;

function falarTexto(texto) {

    if (speechSynthesis.speaking) {

        speechSynthesis.cancel();

    }

    speech = new SpeechSynthesisUtterance(texto);

    // Seleciona voz em Português
    let vozPT = voices.find(
        voz => voz.lang === "pt-BR"
    );

    if (vozPT) {

        speech.voice = vozPT;

    }

    speech.lang = "pt-BR";

    speech.rate = 1; // velocidade
    speech.pitch = 1; // tom

    speechSynthesis.speak(speech);

}

// PLAY
document.getElementById("btnPlay")
.addEventListener("click", function() {

    let texto = document
        .getElementById("conteudo-leitura")
        .innerText;

    falarTexto(texto);

});

// PAUSE
document.getElementById("btnPause")
.addEventListener("click", function() {

    if (speechSynthesis.speaking) {

        speechSynthesis.pause();

    }

});

// STOP
document.getElementById("btnStop")
.addEventListener("click", function() {

    speechSynthesis.cancel();

});

</script>

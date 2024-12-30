// Speech Recognition Handler
class SpeechRecognizer {
    constructor(lang = "en-GB") {
        this.mic = new webkitSpeechRecognition();
        this.mic.lang = lang;
        this.mic.continuous = false;
        this.mic.interimResults = false;

        // Event Handlers
        this.mic.onstart = () => console.log("Speech recognition started...");
        this.mic.onerror = (event) => console.error("Speech recognition error:", event.error);
        this.mic.onend = () => console.log("Speech recognition ended...");
        this.mic.onresult = null; // To be set dynamically
    }

    start(onResultCallback) {
        if (typeof onResultCallback === "function") {
            this.mic.onresult = (event) => {
                const input = event.results[0][0].transcript;
                console.log("Recognized Speech:", input);
                onResultCallback(input); // Call the provided callback with the recognized text
            };
        }
        this.mic.start();
    }

    stop() {
        this.mic.stop();
    }
}

// Speech Synthesis Handler
function speakText(responseText, lang = "en-GB") {
    if (!responseText || responseText.trim() === "") {
        console.warn("No text to speak.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(responseText);
    utterance.lang = lang;
    utterance.onstart = () => console.log("Speaking:", responseText);
    utterance.onend = () => console.log("Speech synthesis completed.");
    utterance.onerror = (event) => console.error("Speech synthesis error:", event.error);

    speechSynthesis.speak(utterance);
}

// Example Usage
document.addEventListener("DOMContentLoaded", function () {
    const recognizer = new SpeechRecognizer();

    // Start recognition with a custom callback
    recognizer.start((recognizedText) => {
        console.log("Processing Input:", recognizedText);

        // Example dynamic handling
        if (recognizedText.includes("hello")) {
            speakText("Hello! How can I assist you?");
        } else if (recognizedText.includes("time")) {
            const now = new Date();
            speakText(`The current time is ${now.getHours()}:${now.getMinutes()}.`);
        } else {
            speakText("I'm not sure how to respond to that.");
        }
    });

    // Adding dynamic external input
    document.getElementById("externalInputButton").addEventListener("click", () => {
        const inputText = document.getElementById("externalInput").value;
        console.log("External Input:", inputText);

        // You can trigger actions based on external input
        speakText(inputText);
    });
});

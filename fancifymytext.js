
// bigger text
function bigger(){
    document.getElementById("fancify-text-area").style.fontSize = "24px";
}

// fancy text
function fancify(){
    document.getElementById("fancify-text-area").classList.add("styled");
}

function reset(){
    document.getElementById("fancify-text-area").classList.remove("styled");
    document.getElementById("fancify-text-area").style.fontSize = "13px";
}

function moo() {
    var textArea = document.getElementById("fancify-text-area");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            var words = sentences[i].split(" "); 
            words[words.length - 1] += "-Moo"
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(".");
}
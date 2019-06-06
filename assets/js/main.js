window.onload = () => {
    // intro text
    const textParagraph = document.querySelector("#intro");
    const words = "Web developer, programmer, and designer.";
    const typeInterval = 100 //millisconds


    const typeWord = word => {
        counter = 0;
        t = setInterval(() => {
            if (counter == word.length - 1) clearInterval(t);
            textParagraph.innerHTML += word[counter];
            counter++
        }, typeInterval)

    }


    typeWord(words)
}
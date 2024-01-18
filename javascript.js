function updateText() {
  const animatedText = document.getElementById("animated-text");
  const currentText = animatedText.textContent;

  const sequences = ["games", "webapps", "websites", "programs", "stuff"];

  const currentIndex = sequences.indexOf(currentText);

  const nextIndex = (currentIndex + 1) % sequences.length;
  const nextSequence = sequences[nextIndex];

  const maxLength = Math.max(currentText.length, nextSequence.length);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function getRandomLetter() {
    const alphabet = "abc90defghi+-0&*$jklp!@qrs456tuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }

  // Function to update each letter with a smooth transition
  async function updateLetters() {
    for (let i = 0; i < maxLength; i++) {
      const nextChar = getRandomLetter();

      // Show the current and next characters gradually
      animatedText.textContent =
        getRandomLetter() + currentText.substring(0, i) + nextChar;

      await sleep(80); // Adjust the delay as needed for a smooth transition
    }
  }

  // Call the function and reset text after animation
  updateLetters().then(() => {
    animatedText.textContent = nextSequence;
  });
}

setInterval(updateText, 5000);

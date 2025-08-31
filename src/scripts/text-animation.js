export function textTypingEffect() {
  const text = ['MERN Stack Developer', 'Software Engineer', 'UI/UX Designer'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeText() {
    const currentText = text[textIndex];
    const typingElement = document.querySelector('.text-anim');

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 1000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % text.length;
      typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
  }

  setTimeout(typeText, 1000);
}
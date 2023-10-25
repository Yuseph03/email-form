import Validate from './Validate';

export default class UI {
  static loadHomePage() {
    document.getElementById('form').addEventListener('submit', (event) => {
      event.preventDefault();
      UI.highFive();
    });
    document.getElementById('Country').onchange = Validate.zip;
    document.getElementById('ZIP').oninput = Validate.zip;
    document.getElementById('password').oninput = Validate.password;
    document.getElementById('password-confirmation').oninput = Validate.confirmPassword;
    document.querySelectorAll('input').forEach((inputEl) => inputEl.addEventListener('input', () => UI.checkMark(inputEl)));
  }

  static highFive() {
    const wave = document.querySelector('.wave');
    wave.style.visibility = 'visible';
  }

  static checkMark(input) {
    if (input.checkValidity()) {
      input.style.background = 'var(--url) no-repeat right';
      input.style.backgroundSize = '20px';
    }
  }
}

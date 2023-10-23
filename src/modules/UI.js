import Validate from './Validate';

export default class UI {
  static loadHomePage() {
    document.getElementById('Country').onchange = Validate.ZIP;
    document.getElementById('ZIP').oninput = Validate.ZIP;
    document.getElementById('password').oninput = Validate.password;
    document.getElementById('password-confirmation').oninput = Validate.confirmPassword;
  }
}

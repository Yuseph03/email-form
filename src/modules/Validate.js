export default class Validate {
  static ZIP() {
    const constraints = {
      ir: [
        '^\\d{5}-\\d{5}$',
        'Iranian ZIPs must have exactly 8 digits: e.g. NNNNN-NNNNN',
      ],
      tr: [
        '^\\d{5}$',
        'Turkish ZIPs must have exactly 4 digits: e.g. NNNNN',
      ],
      iq: [
        '^\\d{5}$',
        'Iraqi ZIPs must have exactly 4 digits: e.g. NNNNN',
      ],
      af: [
        '^^\\d{4}$',
        'Afghani ZIPs must have exactly 4 digits: e.g. NNNNN',
      ],
    };

    const country = document.getElementById('Country').value;

    const ZIPField = document.getElementById('ZIP');

    const constraint = new RegExp(constraints[country][0], '');

    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity('');
    } else {
      ZIPField.setCustomValidity(constraints[country][1]);
    }
  }

  static password() {
    console.log('kaar kard');
    const password = document.getElementById('password');
    const constraint = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
    const customValidity = 'Your password must contain a minimum of 8 characters, at least one letter and one number';
    if (constraint.test(password.value)) {
      password.setCustomValidity('');
    } else {
      password.setCustomValidity(customValidity);
    }
  }

  static passwordConfirm() {
    console.log('kaar kard');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirmation');
    const customValidity = 'Your confirmation password does not match password';

    if (password.value === passwordConfirm.value) {
      passwordConfirm.setCustomValidity('');
    } else {
      passwordConfirm.setCustomValidity(customValidity);
    }
  }
}

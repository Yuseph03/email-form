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
}
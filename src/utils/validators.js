//Funçoes utilizando regex e lógica simples para validação dos caracteres
export const validators = {
  minSize: (rule, password) => {
    return password.length >= Number(rule.value);
  },

  minUpperCase: (rule, password) => {
    const match = password.match(/[A-Z\u00C0-\u017F]/g);

    if (match) {
      return match.length >= Number(rule.value);
    }
    return false;
  },

  minLowerCase: (rule, password) => {
    const match = password.match(/[a-z\u00C0-\u017F]/g);

    if (match) {
      return match.length >= Number(rule.value);
    }
    return false;
  },

  minSpecialChars: (rule, password) => {
    const match = password.match(/[!@#\$%\^&\*\(\)\-+\/\{\}\[\]]/g);

    if (match) {
      return match.length >= Number(rule.value);
    }
    return false;
  },

  noRepeated: (rule, password) => {
    return !password.match(/(.)\1+/);
  },

  minDigit: (rule, password) => {
    const match = password.match(/[0-9]/g);
    if (match) {
      return match.length >= Number(rule.value);
    }
    return false;
  },
};

//Funçoes utilizando regex e lógica simples para validação dos caracteres
const validators = {
  minSize: (rule, password) => {
    return password.length >= Number(rule.value);
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

//funçao resolver do passwordSchema; Aqui passamos os campos que o front-end poderá interagir
export const passwordResolver = {
  Query: {
    verify: (parent, { password, rules }) => {
      const noMatch = [];

      rules.forEach((rule) => {
        //Percorrendo cada 'rule' em rules, passada acima no parametro do campo verify
        //e assinalando abaixo as chaves com seus determinados nomes e passando para as respectivas funçoes os parâmetros requeridos.
        if (!validators[rule.rule](rule, password)) {
          noMatch.push(rule.rule);
        }
      });
      //Caso alguma das funçẽs retorne falso (ou seja a validaçao falhou), o campo entra para o array de noMatch e retorna falso para o verify
      const verify = !noMatch.length;
      return {
        verify,
        noMatch,
      };
    },
  },
};

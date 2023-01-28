//Definição dos tipos
export const typeDefs = `#graphql

        type Result {
            verify: Boolean,
            noMatch: [String]
        }

        input InputRules {
            rule: String, 
            value: Int
        }

        type Query {
            verify(password: String, rules: [InputRules]): Result
        }

    `;

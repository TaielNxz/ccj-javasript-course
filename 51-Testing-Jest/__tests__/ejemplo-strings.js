
const password = "123456";

describe('Valida que el password no este vacio y tenga una extencion de 6 caracteres', () => { 
    test('Que el password tenga 6 caracteres', () => {
        expect(password.length >= 6).toBe(true);
    })

    test('Password no vacio', () => {
        expect(password).not.toBe('');
    })
});
const cliente = {
    nombre: 'Taiel',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Taiel Nunes', () => {
        expect(cliente).toMatchSnapshot();
    });
});
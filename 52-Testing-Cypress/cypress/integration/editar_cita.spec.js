/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la edita', () => {
    it('Campos nueva cita', () => {

        // Visitar la pagina
        cy.visit('/index.html');

        // Llenar el formulario
        cy.get('[data-cy="mascota-input"]')
            .type('Camila');

        cy.get('[data-cy="propietario-input"]')
            .type('Taiel');

        cy.get('[data-cy="telefono-input"]')
            .type('1396780382');

        cy.get('[data-cy="fecha-input"]')
            .type('2021-12-03');

        cy.get('[data-cy="hora-input"]')
            .type('20:30');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo come y duerme');

        // click en el submit
        cy.get('[data-cy="sintomas-cita"]')
            .click();

        // Verificar el texto del heading
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')

        // Ver texto de la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

        // Ver si la alerta tiene la clase 'alert-success'
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')

    });

    it('Edita la cita', () => {
        // Click en el boton de Editar
        cy.get('[data-cy="btn-editar"]')
            .click();

        // Limpiar input y llenarlo nuevamente
        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Nueva Camila');

        // Click en el submit
        cy.get('[data-cy="sintomas-cita"]')
            .click();

        // Ver texto de la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');

      // Ver si la alerta tiene la clase 'alert-success'
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')
    });
});
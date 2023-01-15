describe('Тестирование testqastudio', function () {

    it('Тест qastudio', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(4100);
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
         cy.get('[href="https://testqastudio.me"]').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(4100);
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Иван');
         cy.get('#billing_last_name_field').type('Иванов');
         cy.get('#billing_address_1').type('пр.Мира, 12');
         cy.get('#billing_city').type('Москва');
         cy.get('#billing_state').type('Московская область');
         cy.get('#billing_postcode').type('123456');
         cy.get('#billing_phone').type('+79253478923');
         cy.get('#billing_email').type('email@mail.ru');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');

     })

 })
 

import { PRODUCT_ITEM } from "~/@types";

let products;
let qs = {
  limit: 6, offset: 0
}

describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(500)
    cy.request({
      method: 'GET',
      url: "https://api.musement.com/api/v3/venues/164/activities",
      qs,
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'it',
        'X-Musement-Currency': 'EUR',
        'X-Musement-Version': '3.4.0'
      }
    }).as("products")
  })

  it('Gets product from the API', () => {
    cy.visit('/')
    cy.get('@products').then(({ body }) => {
      products = body.map((product: PRODUCT_ITEM) => {
        return {
          cover_image_url: product.cover_image_url,
          title: product.title,
          discount: product.discount,
          description: product.description,
          formatted_value: product.retail_price.formatted_value,
          value: product.retail_price.value,
          original_retail_price: product.original_retail_price,
          uuid: product.uuid
        };
      });
      expect(body).to.have.length(6)
    })
  })

  it('first page renders', () => {
    cy.get('.product-list').get('li').should('have.length', 11)
  })

  it('pagination', () => {
    cy.get('button[aria-label="Go to next page"]').click()
    cy.wait(500)
    cy.get('.product-list').get('li').should('have.length', 11)

    cy.get('button[aria-label="Go to last page"]').click()
    cy.wait(500)
    cy.get('.product-list').get('li').should('have.length', 11)

    cy.get('button[aria-label="Go to first page"]').click()
    cy.wait(500)
    cy.get('.product-list').get('li').should('have.length', 11)

    cy.get('button[aria-label="Go to third page"]').click()
    cy.wait(500)
    cy.get('.product-list').get('li').should('have.length', 11)
  })

  // it('add to cart', () => {
  //   cy.get('.product-list')
  //     .get('.product-list__item')
  //     .get('button[data-id="btn__add-to-cart"]')
  //     .first()
  //     .click()
  //   cy.get('div[data-id="ic__cart"]').get('span').contains(1)
  // })

  // it('add to wishlist', () => {
  //   cy.get('.product-list')
  //     .get('.product-list__item')
  //     .get('button[data-id="btn__add-to-wishlist"]')
  //     .first()
  //     .click()
  //   cy.get('div[data-id="ic__wishlist"]').get('span').contains(1)
  // })

  // it('dropdown cart', () => {
  //   cy.get('li[data-id="tg__cart"]')
  //     .get('a.dropdown-toggle[role="button"]')
  //     .first()
  //     .click()
  //   cy.get('ul.dropdown-menu').contains('(No Item)')
  //   cy.get('body').click()
  //   cy.get('.product-list')
  //     .get('.product-list__item')
  //     .get('button[data-id="btn__add-to-cart"]')
  //     .first()
  //     .click()
  //   cy.get('li[data-id="tg__cart"]')
  //     .get('a.dropdown-toggle[role="button"]')
  //     .first()
  //     .click()
  //   const menuItems = cy.get('div.product-list__item.dropdown-menu-item')
  //   menuItems.should('have.length', 1)
  //   cy.get('li[data-id="tg__cart"]')
  //     .get('a.dropdown-toggle[role="button"]')
  //     .first()
  //     .click()
  //   cy.wait(100)
  //   menuItems.get('button.menu-item-action').first().click()
  //   cy.get('ul.dropdown-menu').contains('(No Item)')
  // })
})

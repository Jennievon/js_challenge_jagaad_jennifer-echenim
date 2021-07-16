import { PRODUCT_ITEM } from '~/@types'

const qs = {
  limit: 6,
  offset: 0,
}

describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(500)
    cy.request({
      method: 'GET',
      url: 'https://api.musement.com/api/v3/venues/164/activities',
      qs,
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'it',
        'X-Musement-Currency': 'EUR',
        'X-Musement-Version': '3.4.0',
      },
    }).as('products')
  })

  it('Gets product from the API', () => {
    cy.visit('/')
    // @ts-ignore
    cy.get('@products').then(({ body }) => {
      body.map((product: PRODUCT_ITEM) => {
        return {
          cover_image_url: product.cover_image_url,
          title: product.title,
          discount: product.discount,
          description: product.description,
          formatted_value: product.retail_price.formatted_value,
          value: product.retail_price.value,
          original_retail_price: product.original_retail_price,
          uuid: product.uuid,
        }
      })
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
})

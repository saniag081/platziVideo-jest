import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('Add to cart', () => {
    const payload = ProductMock;
    const exepected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(exepected)
  });
});

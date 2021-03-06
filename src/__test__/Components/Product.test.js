import React from 'react';
import { mount, shallow } from 'enzyme';
import ProductMock from '../../__mocks__/ProductMock';
import ProviderMock from '../../__mocks__/providerMock';
import Product from '../../components/Product';

describe('</Product>', () => {
  test('render del componente', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});

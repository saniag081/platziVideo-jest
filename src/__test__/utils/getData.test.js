import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y devolver los datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123456' }));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('123456');
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});

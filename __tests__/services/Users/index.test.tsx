import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import SearchUser from '@/services/Users';

const mock = new MockAdapter(axios);

describe('SearchUser function', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches successfully data from the GitHub API', async () => {
    const username = 'marcelopaula';
    const userData = {
      login: 'marcelopaula',
      name: 'Marcelo Araujo',
    };

    mock.onGet(`https://api.github.com/users/${username}`).reply(200, userData);

    const result:any = await SearchUser(username);

    expect(result.data).toEqual(userData);
  });

  it('handles errors', async () => {
    const username = 'nonexistentUser';

    mock.onGet(`https://api.github.com/users/${username}`).reply(404);

    const result = await SearchUser(username);

    expect(result).toEqual('Request failed with status code 404');
  });
});
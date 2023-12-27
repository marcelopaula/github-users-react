import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getLanguages, getRepositories, getRepository } from '@/services/Repositories'

const mock = new MockAdapter(axios);

describe('Repositories services', () => {
  it('getRepositories service', async () => {
    const username = 'marcelopaula'
    const url = `https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc`;
    const repositoriesData = {
      items: [
        { name: 'Repo1' },
        { name: 'Repo2' },
      ],
    };
    
    mock.onGet(url).reply(200, repositoriesData);

    const result = await getRepositories(username);

    expect(result.data).toEqual(repositoriesData);
})

it('getRepository service', async () => {
  const repo = 'react'
  const url = `https://api.github.com/repos/${repo}`
  const repositoryData = { name: 'react' };
  
  mock.onGet(url).reply(200, repositoryData);

  const result = await getRepository(repo);

  expect(result.data).toEqual(repositoryData);
})
  it('getLanguages service', async () => {
      const url = '';
      const languages = { 'JavaScript': 1, 'TypeScript': 1 }

      mock.onGet(url).reply(200, languages);

      const result = await getLanguages(url);

      expect(result.data).toEqual(languages);
  })
})
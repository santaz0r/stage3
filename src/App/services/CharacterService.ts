import { AxiosResponse } from 'axios';
import httpService from './httpService';
import { TCharacters } from '../types/types';

const characterEndpoint = 'character/';

const characterService = {
  get: async (inputValue = '') => {
    const { data }: AxiosResponse<TCharacters> = await httpService.get(`${characterEndpoint}?name=${inputValue}`);
    return data.results;
  },
};

export default characterService;

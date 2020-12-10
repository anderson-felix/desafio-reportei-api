import express from 'express';
import { Request, Response } from 'express';
import cheerio from 'cheerio';
import Axios from 'axios';
import fetch from 'node-fetch';

const server = express();

server.listen(3000);

const URL = 'https://www.instagram.com/derso.f/?__a=1';

const busca = async () => {
  const { data } = await Axios.get(URL).catch(() => ({} as any));
  let $ = cheerio.load(data);
  let page = $('user').each((index: any, value: any) => {
    const data = {
      index: index,
      value: value,
    };
    return data;
  });
  console.log(page);
};
console.log(busca());

import { shell } from 'electron';
import path from 'path';

const viewUser = (username: string) => {
  const url = `https://www.instagram.com/${username}`;
  shell.openExternal(url);
}

const getSVGPath = (svg: string): string | null => {
  return process.env.BASE_URL ? 
  path.join(process.env.BASE_URL, `/assets/${svg}`) :
  null;
}


export { viewUser, getSVGPath };
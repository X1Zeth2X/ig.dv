import { shell } from 'electron';
import path from 'path';

const viewUser = (username: string): void => {
  const url = `https://www.instagram.com/${username}`;
  shell.openExternal(url);
}

const viewIP = (IP: string): void => {
  const url = `https://www.whois.com/whois/${IP}`;
  shell.openExternal(url);
}

const getSVGPath = (svg: string): string | null => {
  return process.env.BASE_URL ? 
  path.join(process.env.BASE_URL, `/assets/${svg}`) :
  null;
}


export { viewUser, viewIP, getSVGPath };
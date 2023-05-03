export default class Link {

  href: string;
  faviconsrc: string;

  constructor(href:string){
    this.href = href;
    this.faviconsrc = `http://www.google.com/s2/favicons?domain=${href}`;
  }
}
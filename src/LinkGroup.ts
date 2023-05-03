import Link from "./Link";

export default class LinkGroup {

  title: string;
  links: Link[];

  constructor(title: string){
    this.title = title;
    this.links = [];
  }

  addLink(href: string){
    let newLink = new Link(href);
    this.links.push(newLink);
  }
}
interface MarkdownRemark<T> {
  frontmatter: T;
}

export interface Link {
  title: string;
  label: string;
  url: string;
}

export interface MarkdownData<T> {
  markdownRemark: MarkdownRemark<T>;
}

export interface MarkdownEdge<T> {
  node: MarkdownRemark<T>;
}

export interface MarkdownAllResults<T> {
  edges: MarkdownEdge<T>[];
}

export interface ShowMarkdown {
  allLinks: MarkdownAllResults<Link>;
  show: MarkdownRemark<ShowMarkup>;
}

export interface Contact {
  name: string;
  title: string;
  photo: string;
  email?: string;
  region?: string;
}

export interface Contacts {
  corporateAffairs: Contact[];
  accountManagers: Contact[];
  media: Contact[];
}

export interface Show {
  title: string;
  links: Link[];
}

export interface ShowMarkup {
  title: string;
  links: string[];
}

export interface ShowAndLinks {
  title: string;
  links: Link[];
}

export interface NotFound404 {
  title: string;
  message: string;
}

export interface LinkDic {
  [key: string]: Link;
}

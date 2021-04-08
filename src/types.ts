interface MarkdownRemark<T> {
  frontmatter: T;
}

interface Contact {
  name: string;
  title: string;
  photo: string;
  email?: string;
  region?: string;
}

interface Link {
  title: string;
  label: string;
  url: string;
}

export interface MarkdownData<T> {
  markdownRemark: MarkdownRemark<T>;
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

export interface NotFound404 {
  title: string;
  description: string;
}

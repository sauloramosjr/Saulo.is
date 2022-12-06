export const isMenu: TisMenu = [
  { title: '.is()', link: '/' },
  { title: '.about()', link: '/about' },
  {
    title: '.email()',
    link: 'mailto:sauloramosjunior@hotmail.com',
  },
];

export type TisMenu = {
  title: string;
  link: string;
}[];

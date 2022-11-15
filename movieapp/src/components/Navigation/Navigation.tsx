import {Fragment} from "react";

type Menu = {
  [id: string]: string;
  title: string;
  link: string;
};

const navmenu: Array<Menu> = [
  {
    id: 'all',
    title: 'All',
    link: 'all'
  },
  {
    id: 'all1',
    title: 'Documentary',
    link: 'documentary'
  },
  {
    id: 'all2',
    title: 'Comedy',
    link: 'comedy'
  },
  {
    id: 'all3',
    title: 'Drama',
    link: 'drama'
  }
];

export function Navigation(): JSX.Element {
  return (
    <ul>
      {navmenu.map((menu) => (
        <Fragment key={menu.id}>
          <li>
            <a href={menu.link}>{menu.title}</a>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

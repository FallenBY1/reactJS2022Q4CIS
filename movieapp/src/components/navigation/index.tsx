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
    id: 'all',
    title: 'Documentary',
    link: 'documentary'
  },
  {
    id: 'all',
    title: 'Comedy',
    link: 'comedy'
  },
  {
    id: 'all',
    title: 'Drama',
    link: 'drama'
  }
];

function Navigation(): JSX.Element {
  return (
    <ul>
      {navmenu.map((menu) => (
        <>
          <li key={menu.id}>
            <a href={menu.link}>{menu.title}</a>
          </li>
        </>
      ))}
    </ul>
  );
}

export default Navigation;

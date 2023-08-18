import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

type props ={
  slug:string
}
function Menu(props) {
  return (
    <div className='menu '>
      {menu.map((item) => (
        <div className='item' key={item.id}>
          <span className='title'>{item.title}</span>
          {item.listItems.map((item) => (
            <Link to={item.url} className='listItem' key={item.id}>
              <img src={item.icon} alt='' />
              <span className='listItemTitle'>{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

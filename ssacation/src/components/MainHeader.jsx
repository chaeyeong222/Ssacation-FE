import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader( ) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        SSACATION
      </h1> 
      <p>
        <Link to="/member" className={classes.button}  >
          <MdPostAdd size={18} />
          회원가입/로그인
        </Link>
      </p>
      <p>
        <Link to="/create-post" className={classes.button}  >
          <MdPostAdd size={18} />
          게시글 등록하기
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
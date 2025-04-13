/**
 * All rights reserved by DhauladharVasi
 */

import classes from './MainNav.module.less';

const MainNav = () => {
  return (
    <div className={classes.mainNav}>
      <div className={classes.mainNavWrapper}>
        <ul>
          <li>
            <h1 className={classes.heading}>Dhauladhar Vasi</h1>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default MainNav;
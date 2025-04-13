/**
 * All rights reserved by DhauladharVasi
 */
import logo from '../../assets/svg/logo.svg'

import classes from './MainNav.module.less';

const MainNav = () => {
  return (
    <div className={classes.mainNav}>
      <div className={classes.logoTheme}>
        <img src={logo} className={classes.logo} alt='Dhauladhar vasi' />
        <span className={classes.logoText}>Dhaulahar vasi</span>
      </div>
      <div className={classes.mainNavWrapper}>
        <ul>
          <li>
            <h1 className={classes.heading}>Home</h1>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default MainNav;
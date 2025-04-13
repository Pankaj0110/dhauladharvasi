/**
 * All rights reserved by Dhauladharvasi
 */

import classes from './VerticalNav.module.less'

const VerticalNav = () => {
  return (
    <div className={classes.verticalNav}>
      <div className={classes.line}>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Explore</a></li>
        </ul>
      </div>
    </div>
  )
}

export default VerticalNav;
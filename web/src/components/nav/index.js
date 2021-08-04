import React, { useState } from "react"
import { MdMenu } from "react-icons/md"

import { MainNavigation, NavigationItem, MobileNavToggleButton } from "./styles"
import NavLink from "./Link"

const Nav = ({ links }) => {
  const [isNavVisible, updateNav] = useState(false)

  return (
    <>
      <MobileNavToggleButton onClick={() => updateNav(!isNavVisible)}>
        <MdMenu className="icon" />
      </MobileNavToggleButton>
      <MainNavigation isNavVisible={isNavVisible}>
        {links &&
          links.map(i => (
            <NavigationItem key={i._key}>
              <NavLink {...i} />
            </NavigationItem>
          ))}
      </MainNavigation>
    </>
  )
}

export default Nav

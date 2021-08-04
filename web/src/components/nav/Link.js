import React from "react"
import { Link } from "gatsby"

const NavLink = props => {
  let link = props.route || props.link || "#"
  if (props.pageRoute && props.pageRoute.slug && props.pageRoute.slug.current) {
    link = `/${props.pageRoute.slug.current}`
  }

  // External
  if (props.link) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    )
  }

  return (
    <Link className="mr-3" to={link}>
      {props.title}
    </Link>
  )
}

export default NavLink

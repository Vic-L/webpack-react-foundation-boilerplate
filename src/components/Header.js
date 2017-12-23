import React from "react"
import { Link } from "react-router-dom"

const Header = () => (
  (~
    %header
      .top-bar
        .top-bar-left
          %ul.dropdown.menu(data-dropdown-menu="")
            %li.menu-text
              %Link(to="/")
                Home
        .top-bar-right.show-for-medium
          %ul.menu
            %li
              %Link(className="header-link"
                    to="/articles")
                Articles
  ~)
)

export default Header
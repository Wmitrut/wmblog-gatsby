import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (

          <label className="check-1">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
             <div class="inner">
             <p className="oni" style={theme === 'dark' ? {opacity: 1} : {opacity : 0}}>👹</p> 
             <p className="angel" style={theme === 'dark' ? {opacity: 0} : {opacity : 1}}>😇</p> 
             </div>
             <div class="bullet"></div>
             
          </label>


        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle

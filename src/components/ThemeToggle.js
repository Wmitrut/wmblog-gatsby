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
              checked={theme === 'light'}
            />
             <div class="inner">
             {theme === 'dark' ? <p className="oni">👹</p> : <p className="angel">😇</p>}
             </div>
             <div class="bullet"></div>
             
          </label>


        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle

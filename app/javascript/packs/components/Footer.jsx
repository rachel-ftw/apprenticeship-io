import React, { Component } from 'react'

export default class Footer extends Component {
  render(){
    return(
      <footer style={styles.footer}>
        <div className="links-container" style={styles.links_container}>
          <div className="links" style={styles.links}>
          <ul style={styles.ul}>
            <li>
              Home
            </li>
            <li>
              Concept
            </li>
            <li>
              Value
            </li>
            <li>
              Resources
            </li>
          </ul>
        </div>
        <div className="links" style={styles.links}>
          <ul style={styles.ul}>
            <li>
              Employers
            </li>
            <li>
              Concept & Value
            </li>
            <li>
              Map of Apprenticeships
            </li>
            <li>
              Resources
            </li>
          </ul>
        </div>
        <div className="links" style={styles.links}>
          <ul style={styles.ul}>
            <li>
              Apprentices
            </li>
            <li>
              Concept & Value
            </li>
            <li>
              Map of Apprenticeships
            </li>
            <li>
              Hall of Fame
            </li>
          </ul>
        </div>
        <div className="links" style={styles.links}>
          <ul style={styles.ul}>
            <li>
              About Us
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="join" style={styles.join}>
        Join the Community
      </div>
      </footer>
    )
  }
}

const styles = {
  footer: {
    height: '250px',
    width: '100%',
    backgroundImage: 'linear-gradient(-134deg, rgba(48,35,174,0.50) 0%, #C86DD7 100%)',
    color: 'white'
  },
  ul: {
    listStyle: 'none',
    paddingRight: '40px'
  },
  links: {
    display: 'table-cell'
  },
  links_container: {
    width: '50%',
    margin: '0 auto'
  },
  join: {
    textAlign: 'center',
    margin: '15px'
  }
}

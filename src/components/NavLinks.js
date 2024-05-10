import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import component
import AppNavBar from './AppNavBar'
import AppFooterBar from './AppFooterBar'
// import pages
import Dashboard from '../pages/Dashboard'

const AppNavLinks = () => {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
      <AppFooterBar />
    </Router>
  )
}

export default AppNavLinks

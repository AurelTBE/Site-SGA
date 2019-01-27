import {Fragment} from 'react'
import Header from './Header'


const Layout = (props) => (
  <Fragment>
    <Header />
    {props.children}
  </Fragment>
)

export default Layout
import {withRouter} from 'next/router'
import { Fragment } from 'react';

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))

const Page = (props) => (
    <Fragment>
       <Content />
    </Fragment>
)

export default Page
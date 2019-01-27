import {withRouter} from 'next/router'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.{props.router.query.contenu}</p>
  </div>
))

const Page = (props) => (
       <Content />
)

export default Page
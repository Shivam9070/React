
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// function MyApp() {
//   return (
//     <div>
//       <h1>custom App</h1>
//     </div>
//   )
// }
//  const anotherUser="meep"
// const Element = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   'Visit Google',
//   // anotherUser
// )

  
  // const anotherElement = (<a href="https;//google.com" target='_blank'>Visit Google</a>)

createRoot(document.getElementById('root')).render(
 <App />
)

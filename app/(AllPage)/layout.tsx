import Navbar from './component/Navbar';
import homePage from './home/page';
const layout = ({children}) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Navbar />
      <h2>Home</h2>
    </div>
  )
}

export default Home
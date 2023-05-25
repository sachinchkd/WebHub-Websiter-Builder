
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Videocontainer from '../components/VideoContainer';
import Container from '../components/Container';
import Footer from '../components/Footer';
import SecondContainer from '../components/SecondContainer';



function Home() {

  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Videocontainer />
      <Container />
      <SecondContainer/>
      <Footer />
    </div>
  );
}

export default Home;

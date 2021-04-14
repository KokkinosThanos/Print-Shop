import Header from './component/header';
import SectionA from './component/sectionA';
import SectionB from './component/sectionB';
import SectionC from './component/sectionC';
import SectionD from './component/sectionD';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
    </div>
  );
}

export default App;

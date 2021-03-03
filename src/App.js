
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import News from './components/News/News'
import TopHeadline from './components/TopHeadline/TopHeadline'
import Fragment from './components/Fragment/Fragment'

function App() {
  return (
    <div className="container">   
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
     
      
    </div>

  );
}

export default App;

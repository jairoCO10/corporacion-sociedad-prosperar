import './styles.css';
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Footer from './components/footer';
import About from './pages/about.js';
import Services from './pages/services.js';

import Institucion from './pages/nuestraInstitucion/institucion';
import objetosFunciones from './pages/nuestraInstitucion/objetosFunciones';
import PrincipiosValores from './pages/nuestraInstitucion/principiosValores';

import Noticia from './pages/Noticias/noticias';
import Donaciones from './pages/Noticias/donaciones';

import Organigrama from './pages/TransparenciaAccesoInsititucion/organigrama';
import Directorio from './pages/TransparenciaAccesoInsititucion/directorios';
import Simbolos from './pages/TransparenciaAccesoInsititucion/Simbolos';
import noticias from './pages/Noticias/noticias';
import Seccionales from './pages/TransparenciaAccesoInsititucion/seccionales';

import View from "./pages/viewMapa"
import Pdf from "./pages/pdf"
import NoticeDetails from "./pages/Noticias/noticeDetails"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/home.js';
// import About from './pages/about.js';

function App() {
  return (

    <div className="App">
      <Router >
      <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/services" exact={true} component={Services} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/institucion" exact={true} component={Institucion} />
          <Route path="/objetosFunciones" exact={true} component={objetosFunciones} />
          <Route path="/principiosValores" exact={true} component={PrincipiosValores} />

          <Route path="/noticia" exact={true} component={Noticia} />
          
          <Route path="/organigrama" exact={true} component={Organigrama} />
          <Route path="/directorios" exact={true} component={Directorio} />
          <Route path="/seccionales" exact={true} component={Seccionales} />
          <Route path="/simbolos" exact={true} component={Simbolos} />

          <Route path="/noticias" exact={true} component={noticias} />
          <Route path="/donaciones" exact={true} component={Donaciones} />
          <Route path="/viewMapa" exact={true} component={View} />
          <Route path="/pdf" exact={true} component={Pdf} />
          <Route path="/:id/" exact={true} component={NoticeDetails} />
        </Switch>
        
      </Router>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
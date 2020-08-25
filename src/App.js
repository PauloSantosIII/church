import React from 'react'
import {Home, CampoComprido, NossaHistoria, Cremos, Lideranca, MissaoVisaoValores, CentroRetiro} from './pages/'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/campocomprido' component={CampoComprido} />
      <Route exact path='/106-anos-de-historia' component={NossaHistoria} />
      <Route exact path='/em-que-cremos' component={Cremos} />
      <Route exact path='/lideranca' component={Lideranca} />
      <Route exact path='/missao-visao-e-valores' component={MissaoVisaoValores} />
      <Route exact path='/centro-de-retiros' component={CentroRetiro} />
    </Switch>
  );
}

export default App;

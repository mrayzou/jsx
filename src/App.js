import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from './Componetnts/Navigation';
import SB from './Componetnts/fullname';
import Img from './Componetnts/ProfilePhoto';
import Adresse from './Componetnts/Adresse';
import Cards from './Componetnts/cards';
 import Sign from './Componetnts/Form';
 import footer from './Componetnts/footer';
import End from './Componetnts/footer';
  

function App() {
return (
<div className="App">
<body>

<Navigation />

<div> 
<SB />
<Img/>
</div>
<div className='cards'>
<Cards  />
</div>
<>

 </>

<>
<h3>write ur name and ur username and i will contact u</h3>
< Sign className="sign"/>
 </>
 <Adresse />
 
<footer>
<End />   
</footer> 

</body>
</div>
);
}

export default App;

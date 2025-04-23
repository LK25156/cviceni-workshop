import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch("http://localhost:4000/api/workshops/0");
const data = await response.json();
console.log(data);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

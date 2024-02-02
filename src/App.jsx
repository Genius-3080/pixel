import './App.css';
import pixel from './img/love.png'

function App() {
  return (
    <div className="App">
<div className='site'>
<nav>
  <div className='logo__list'>
  <h1>Pixel</h1> <img src={pixel} alt="" />
  </div>

 <ul>
  <li>Arts</li>
  <li>AI generate</li>
  <li>Help</li>
  <li>About</li>
 </ul>
<button>Explore</button>
</nav>
<div className='search__box'>
<div class="search">
     <input placeholder="Pixelize..." type="text"></input>
        <button type="submit">Go</button>
      </div>

</div>

</div>

    </div>
  );
}

export default App;

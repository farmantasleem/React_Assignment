import './App.css';

function App() {
  return (
      <div>
        <div id='addTodo'>
          <input placeholder='Enter Todo Eg. Build Todo Web App'/>
          <button>Add</button>
        </div>
        <div id='todoContainer'>
              <div className='todo'>
                <h1>Build Todo Web App</h1>
                <p>Status: Pending</p>
                <button>Remove</button>
              </div>

              <div className='todo'>
                <h1>Build Todo Web App</h1>
                <p>Status: Pending</p>
                <button>Remove</button>
              </div>
              <div className='todo'>
                <h1>Build Todo Web App</h1>
                <p>Status: Pending</p>
                <button>Remove</button>
              </div>
              <div className='todo'>
                <h1>Build Todo Web App</h1>
                <p>Status: Pending</p>
                <button>Remove</button>
              </div>
              
        </div>
      </div>
  );
}

export default App;

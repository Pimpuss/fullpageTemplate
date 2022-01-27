import './App.css';

import ReactFullpage from "@fullpage/react-fullpage"

import Nav from './components/Nav';
import Page1 from "./screens/Page1"
import Page2 from "./screens/Page2"
import Page3 from "./screens/Page3"

function App() {

  
  return (
    <>
    <Nav />
    <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    // navigation <===  Add "navigation" to add a Slider on the right
    // navigationPosition = {'left'}
    dragAndMove = {'fingersonly'}
    render={({ state, fullpageApi }) => {
      return (     
        <ReactFullpage.Wrapper>
          <div className="section" data-anchor='page1'>
            <Page1 />
          </div>
          <div className="section" data-anchor='page2'>
            <Page2 />
          </div>
          <div className="section" data-anchor='page3'>
            <Page3 />
          </div>
        </ReactFullpage.Wrapper>
      )
    }}
    />
    </>
  );
}

export default App;

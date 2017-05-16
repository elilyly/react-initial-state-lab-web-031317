import React from 'react';
import ReactDOM from 'react-dom';

//
class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    };
  }
  render() {
    return (
      <div className="ImageSlider">I am on slide {this.state.currentSlideIndex}</div>
    )
  }
}

// import React from 'react' // import react
export default ImageSlider;
// export default () => {
//   return <div></div>
// }  // export a function that returns a JSX element

require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//  获取图片信息，使用自执行函数
const imageData = (() => {
  let data = require('../data/imageData');
  data.forEach((ele) => {
    ele.imageURL = require('../images/' + ele.fileName);
  });
  return data;
})();

class AppComponent extends React.Component {

  render() {

    return (
     <section className="stage">
       <figure className="stage__images">

       </figure>
       <nav className="stage__nav">

       </nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

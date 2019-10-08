import React from 'react';
import pic from '../assets/steven-n-the-bees-cropped.jpg';
import FormattedImage from '../components/FormattedImage';


const SamplePage = ({
  content =  <p>Hello, welcome to my website. </p>
}) =>{

  return(<div>
        <FormattedImage image = {pic} sizeRatio = "0.98"/>  
        <div>
          {content}
        </div>
        <a
          className="App-link"
          href="https://media.giphy.com/media/fsQQb3KSaBxnuFaXOk/giphy.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is an external link.
        </a>
        

    </div>);
}

export default SamplePage;





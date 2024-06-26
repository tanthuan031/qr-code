// @flow
import * as React from 'react';
import imageDefault from '../../../../asset/images/imagedefault.jpg';
import { forwardRef } from 'react';
import './style.css';
function ImageCustom(props, ref) {
  const [image, setImage] = React.useState();
  const [error, setError] = React.useState();
  var classNameType = 'd-block app-border-8px d-flex justify-content-center';
  switch (props.type) {
    case 'avatar-overlay':
      classNameType = 'avatar-detail';
      break;
    case 'avatar':
      classNameType = 'img-avatar';
      break;
    default:
      classNameType = 'd-block app-border-8px d-flex justify-content-center';
      break;
  }
  const handleImageLoaded = () => {
    setImage('loaded');
    setError(false);
  };

  const handleImageError = () => {
    setImage('failed to load');
    setError(true);
  };

  return (
    <img
      src={error ? imageDefault : props.src}
      ref={ref}
      {...props}
      onError={handleImageError.bind(this)}
      className={`${classNameType} ${props.className}`}
      alt={props.alt}
    />
  );
}
export default forwardRef(ImageCustom);

// // @flow
// import * as React from 'react';
// import imageDefault from '../../../../asset/images/imagedefault.jpg';
// import { forwardRef } from 'react';
// function ImageCustom(props,ref) {
//   const [image, setImage] = React.useState();
//   const [error, setError] = React.useState();
//   const handleImageLoaded = () => {
//     setImage('loaded');
//     setError(false);
//   };
//
//   const handleImageError = () => {
//     setImage('failed to load');
//     setError(true);
//   };
//
//   return (
//     <img
//       src={error ? imageDefault : props.src}
//       ref={ref}
//       // onLoad={handleImageLoaded.bind(this)}
//       onError={handleImageError.bind(this)}
//       className={`d-block app-border-8px d-flex justify-content-center ${props.className}`}
//       alt={props.alt}/>
//   );
// }
// export default forwardRef(ImageCustom)

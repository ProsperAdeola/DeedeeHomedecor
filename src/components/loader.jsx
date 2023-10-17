import style from "./loader.module.css";
import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => {
  const [loadingInProgress, setLoading] = useState(false);

  // ...

  return (
    <div className={style.container}>
      {loadingInProgress ? (
        <div className="loader-container">
          <ClipLoader color={'#fff'} size={150} />
        </div>
      ) : (
        <div className="main-content">
          {/* ... */}
        </div>
      )}
    </div>
  );
};

export default Loader;
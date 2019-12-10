import React, { useState, useEffect } from 'react';

const Select = (props) => {
  const [data, setData] = useState([])
  const { url, renderProps } = props;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((d) => setData(d))
  }, [url])

  return (
    <div>
      <select name="" id="">
        {renderProps(data)}
      </select>
    </div>
  );
};

export default Select;
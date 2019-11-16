import React, { useEffect, useState } from 'react';

//  * https://icon.now.sh/highlight/fd0
//  * https://icon.now.sh/highlight/aaa

const FunctionalComponent = props => {
  const { timer, toggle } = props; 
  const [ timerValue, setTimer ] = useState(timer);
  const [ toggleValue, setToggle ] = useState(toggle);
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setTimer(timer)
  }, [timer]) 

  useEffect(() => {
      setToggle(toggle)
  }, [toggle])

  useEffect(() => {
    setLoading(true)
    fetch('https://it-blog-posts.herokuapp.com/api/posts')
      .then((response) => {
        if(response.status !== 200) {
          throw new Error()
        }
        return response.json().then((data) => {
          setData(data)
          setLoading(false)
        })
      })
      .catch((err) => {
        setLoading(false)
      })
  }, []) 

  return (
    <div>
      <div style={{width: '50px', height: '50px'}}>
        <img src={toggleValue ? 'https://icon.now.sh/highlight/fd0' : 'https://icon.now.sh/highlight/aaa'} alt=""/>
      </div>
      {loading && <div>Loading...</div> }
      {data.map((item) => {
          return (
            <div 
              style={{ background: '#ede7f6', border: '1px solid #ccc',  padding: '5px', margin: '5px' }}
              key={item.id}
            >
              {item.author}
            </div>
          )
      })
      }
      <span style={{border: '1px solid #ccc',  padding: '5px', margin: '5px', color: `#2233${timerValue}${timerValue}` }}>{timerValue}</span>
    </div>
  );
};

export default FunctionalComponent;
import React from 'react';


export const connect = (initProps) => {

  return (Component) => {
    return (props) => ( <Component {...initProps } {...props} /> )
  }
}
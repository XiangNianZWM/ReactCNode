import React from 'react'

const UserList = (props) => {
  return (
    <ul>
      {
        props.dataJSon && props.dataJSon.map(item => {
          return (
            <li key={item.id}>
              <span>
              <img src={item.author?.avatar_url} />
            </span>
              <p>
                {item.author?.loginname}
              </p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default UserList
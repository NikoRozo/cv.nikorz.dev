import React from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>Perfil</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}

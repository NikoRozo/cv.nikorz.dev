import React from 'react'
import styled from 'styled-components'

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className='skill__bar'>
        <div className='skill__level'></div>
      </div>
    </div>
  )
}

SkillBar.displaName = 'SkillBar'

export default styled(SkillBar)`
  width: 100%;
  margin: 0 .2em 1em 0;
  .skill__bar {
    width: 100%;
    height: 10px;
    background-color: lightgray;
    padding: 1px;
  }
  .skill__level {
    background-color: #03c42a;
    width: ${p => p.level || 0}%;
    height: 8px;
  }
`

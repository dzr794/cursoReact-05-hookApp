import React from 'react'

export const PokemonCard = ({name, id, sprites}) => {

  const showFront = ({target}) => {
    target.setAttribute('src', target.attributes.src_front.value);
  }

  const showBack = ({target}) => {
    target.setAttribute('src', target.attributes.src_back.value);
  }

  return (
    <section style={{height:200}}>

      <h2 className='text-capitalize'> #{id} - { name }</h2>

      <div>

        <img 
          src={sprites.default.front} 
          alt="default sprites" 
          src_front={sprites.default.front} 
          src_back={sprites.default.back} 
          onMouseOver={ showBack } 
          onMouseOut={ showFront } 
        />

        <img 
          src={sprites.shiny.front} 
          alt="shiny sprites" 
          src_front={sprites.shiny.front} 
          src_back={sprites.shiny.back} 
          onMouseOver={ showBack } 
          onMouseOut={ showFront } 
        />
        
        
      </div>
    </section>
  )
}

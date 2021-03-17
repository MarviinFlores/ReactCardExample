import React from 'react'


function Card({title}) {
    return (
        <div className = "card text-center bg-dark">
          <img src="" alt=""/>
          <div className = "card-body text-light">
             <h4 className = "card-title">{title}</h4>
             <p className = "card-text text-secondary">Lorem30 skd;lsk;lsa jdslskdd
             jsajsadjsalkdjs sad;s;ksksoddu sdoisudioud d adas dosaudoias
             dpsaidipodisap  jjsjsaldj dlsjdsadsa d dpoaidi idsidpoidpo
             </p>
             <a href="#!" className="btn btn-outline-secondary rounded-0">Go to This WebSite</a>
          </div>
        </div>
    )
}

export default Card

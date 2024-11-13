import React from 'react'
import { Link } from 'react-router-dom'

const HomeInst = () => {
  return (
    <div>
        <Link to={"../Professor"} className="btn btn-primary-h ">
        <i class="bi bi-plus-lg">
          <p>Criar teste avaliativo</p>
          </i>   
        </Link>
    </div>
  )
}

export default HomeInst
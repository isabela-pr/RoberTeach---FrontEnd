import React from 'react'
import { Link } from 'react-router-dom'

const HomeInst = () => {
  return (
    <div>
        <Link to={"../Professor"} className="Professor btn btn-primary-c ">
        <i class="bi bi-plus-lg"></i>
          <p>Criar teste avaliativo</p>
        </Link>
    </div>
  )
}

export default HomeInst
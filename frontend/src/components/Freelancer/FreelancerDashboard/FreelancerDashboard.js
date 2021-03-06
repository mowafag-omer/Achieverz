import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Search } from 'react-bootstrap-icons'
import FrProjectPrev from '../FrProjectPrev/FrProjectPrev'
import FrProfileWidget from '../FrProfileWidget/FrProfileWidget'

const FreelancerDashboard = (props) => {
  const projects = useSelector(state => state.projects)
  const freelancer = useSelector(state => state.freelancer)
  const frProjects = projects.projects.filter(p => p.project_status === 'open' && parseInt(p.required_category) === freelancer.profile.category)
  const hired = projects.applications ? projects.applications.filter(a => a.status === 'hired').length : []
  const noNhired = projects.applications ? projects.applications.filter(a => a.status !== 'hired').length : []
  

  const getprojctId = (id) =>{
    return projects.applications ? projects.applications.map(item => item.project_id === id ? id : 0)
    .includes(id) : id || 0
  }
  
  const frOpenProjects = frProjects.filter(elem => elem.id !== getprojctId(elem.id))

  useEffect(() => {
    freelancer.hasNoProfile && props.history.push("/frcreateProfile")
  })

  return (
    <div className="flex-fill d-flex justify-content-between p-2" style={{minHeight: '76vh'}}>
      <div className="shadow-sm p-2 m-4 w-100">
        <h4>Recommandé pour vous</h4>
        <p>Selon votre domaine d'expériences</p>
        {frOpenProjects.length ? 
          frOpenProjects.map(project => 
            <Link key={project.id} className="link" to={{ pathname: 'FrOpenProject', project: project}}>
              <FrProjectPrev status="" project={project} />
            </Link>
          ):
          <div className="mx-auto mt-5 d-flex flex-column align-items-center alerty py-2 w-75">
            <Search size={50} className="mb-4" />
            <p className="text-center">Non projets disponible !</p> 
            <button className="btn">
              <Link to='/OpenProjects' className="text-light link" >Trouver un Projet</Link>
            </button>
          </div>
        }
      </div>
      <div className="col-3 mt-3 d-none d-lg-block">
        <FrProfileWidget hired={hired} noNhired={noNhired} profile={freelancer.profile} />
      </div>
    </div>
  )
}

export default FreelancerDashboard

import { Link } from 'react-router-dom'

function MainLinks() {

  const links = [
    {
      id: 1,
      path: '/',
      name: 'home'
    },
    {
      id: 2,
      path: 'members',
      name: 'members'
    },
    {
      id: 3,
      path: 'editorials',
      name: 'editorials'
    }
  ]

  return (
    <div className='main-links'>
      {links.map((linksObj) => {
        return(
          <Link className='main-links__button' to={linksObj.path} key={linksObj.id}>
            {linksObj.name}
          </Link>
        )
      })}
    </div>
  )
}

export default MainLinks;
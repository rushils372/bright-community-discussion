import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'

// styles
import './ProjectList.css'

export default function ProjectList({ projects }) {

  return (
    <div className="project-list">
      {projects.length === 0 && <p>No questions yet!</p>}
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Expected by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <p><strong>Discussion Between:</strong></p>
            <ul>
              {project.assignedUsersList.map(user => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  )
}
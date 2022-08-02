import Title from '../../components/Title/Title'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TeamsPage = () => {
    const {Id} = useParams()
    const [foundTeam, setFoundTeam] = useState({})
    useEffect(() => {
        const fetchTeam = async () => {
          let  team  = await axios.get(`http://localhost:1337/api/teams/${Id}`)
          setFoundTeam(team.data)
        }
        fetchTeam().catch(console.error)
      }, [])
      if (!foundTeam.Id) {

        return <div>loadingTeam...</div>
        
      }

    return (
<div className="App">
<Title/>
<div>{foundTeam.TeamName } {foundTeam.Location}</div>
<br/>
<br/>
<br/>
<div><Link to={"/"}>Go Back</Link></div>
</div>
    )
}

export default TeamsPage
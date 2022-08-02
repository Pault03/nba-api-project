import React from "react";
import { NavLink } from 'react-router-dom'
import './List.css'

const List = (props) => {
    const { teams } = props
  
    return (
      <>
        {teams.map((team) => {
          //const { Id, TeamName, Location, Conference } = team
  
          return (
            <div className='' >
              <NavLink to={`/teams/${team.Id}`}>
                {team.TeamName} ({team.Location}) ({team.Conference})
              </NavLink>
            </div>
          )
        })}
      </>
    )
  }
  
  export default List
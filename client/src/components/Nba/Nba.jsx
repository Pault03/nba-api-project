import React, { useState, useEffect } from 'react'
import List from '../List/List'
import Search from '../Search/Search'
import axios from 'axios'

const Teams = () => {
    const [search, setSearch] = useState('')
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetchTeamsData()
    }, [])

    const fetchTeamsData = async () => {
        let teamsData = await axios.get('http://localhost:1337/api/teams')
        setTeams(teamsData.data)
    }

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <List teams={teams}/>
        </div>
    )
}

export default Teams
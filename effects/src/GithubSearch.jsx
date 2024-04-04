import axios from "axios";
import { useState, useEffect } from "react";
import GithubSearchForm from "./GithubSearchForm";

const BASE_URL = "https://api.github.com/users"

export default function GithubSearch() {

const [username, setUsername] = useState("")
const [profile, setProfile] = useState({ data: null, isLoading: true})

useEffect(function fetchUserOnNameChange(){

    async function fetchUser(){
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({data: userResult.data, isLoading: false})
    }
    fetchUser();

}, [username])

const search = (name) => {
    setProfile({data: null, isLoading: true})
    setUsername(name);
}

if (profile.isLoading) return (
    <div>
        <i>Loading....</i>
        <GithubSearchForm search={search}/>
    </div>
)

    return (
        <div>
            <h2>{profile.isLoading ? "loading..." : profile.data.login}</h2>
            <img src={!profile.isLoading && profile.data.avatar_url}/>
             <GithubSearchForm search={search}/>
        </div>
    )
}

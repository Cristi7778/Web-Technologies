import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ConferenceCard } from '../components/ConferenceCard';
import { ConferenceList } from '../components/ConferencesList';
const SERVER_URL = "http://localhost:3000";

const Conferences = () => {
    const [conferences, setConferences] = useState([]);
    const [queryName, setQueryName] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState("list");

    const getConferences = () => {
        const queryParams = new URLSearchParams();
        
        if(queryName) {
            queryParams.append("name", queryName);
        }
        axios.get(`${SERVER_URL}/conferences?` + queryParams)
        .then(res => res.data)
        .then(data => setConferences(data.records));
    };

    const addConference = (conference) => {
        axios.post(`${SERVER_URL}/conferences`, conference)
            .then(() => getConferences())
            .catch(err => console.log(err));
    }

    const editConference = (conference) => {
        const conferenceParams = {...conference};
        delete conferenceParams.id;
        axios.put(`${SERVER_URL}/conferences/${conference.id}`, conferenceParams)
        .then(() => getConferences())
        .catch(err => console.log(err));
    }

    const deleteConference = (conference) => {
        axios.delete(`${SERVER_URL}/conferences/${conference.id}`)
        .then(() => getConferences())
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getConferences();
    }, []);

    const onChangeQueryName = (event) => {
        const searchedConferenceName = event.target.value;
        setQueryName(searchedConferenceName);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <div className="container">
                <h3>All conferences</h3>
                <div className="toolbar">
                    <input onChange={onChangeQueryName} id="search" className="searchbar custom-text-input" type="text" placeholder="Search for a conference" />
                    <button className="custom-button" onClick={() => getConferences()}>Search</button>
                    <button className="custom-button" onClick={openModal}>Add a conference</button>
                </div>
                <div id="conferencesContainer">
                {conferences.map((conference, index) => (
                    <ConferenceCard conference={conference} key={index} onDelete={deleteConference} onEdit={editConference}/>
                ))}
                </div>
                {viewMode === "list" && <ConferenceList conferences={conferences} deleteConference={deleteConference} editConference={editConference} />}
                
            </div>
            {isModalOpen && <AddConferenceModal onAddConference={addConference} closeModal={closeModal} />}
        </div>
    )
};

export {Conferences};
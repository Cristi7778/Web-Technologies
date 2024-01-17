import React from 'react';
import { ConferenceCard } from './ConferenceCard';

const ConferenceList = ({ conferences, editConference, deleteConference }) => {
    return (
        <div id="conferencesContainer">
            {conferences.map((conference, index) => (
                <ConferenceCard conference={conference} key={index} onDelete={deleteConference} onEdit={editConference}/>
            ))}
        </div>
    );
}

export { ConferenceList };
import React, {useState} from 'react';


const AddConferenceModal = ({onAddConference, closeModal}) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [organizerId, setOrganizerId] = useState("");
    const [articleId, setArticleId] = useState("");

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeDate = (event) => {
        setDate(event.target.value);
    }

    const onChangeLocation = (event) => {
        setLocation(event.target.value);
    }

    const onChangeOrganizerId = (event) => {
        setOrganizerId(event.target.value);
    }

    const onChangeArticleId = (event) => {
        setArticleId(event.target.value);
    }

    const saveConference = (event) => {
        event.preventDefault();
        onAddConference({name,date, location, organizerId, articleId});
        closeModal();
    }

    return (
        <dialog id="addConferenceModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add conference</h2>
                    <span className="modal-close" onClick={closeModal}>&times;</span>
                </div>
                <form id="addConferenceForm" className="create-form">
                    <label for="name">Name:</label>
                    <input onChange={onChangeName} className="custom-text-input" type="text" id="name" name="name" required/><br/>

                    <label for="date">Date:</label>
                    <input onChange={onChangeDate} className="custom-text-input" type="date" id="date" name="date" required/><br/>

                    <label for="location">Location:</label>
                    <input onChange={onChangeLocation} className="custom-text-input" type="text" id="location" name="location" required/><br/>

                    <label for="organizerId">OrganizerId:</label>
                    <input onChange={onChangeOrganizerId} className="custom-text-input" type="text" id="organizerId" name="organizerId" required/><br/>

                    <label for="articleId">ArticleId:</label>
                    <textarea onChange={onChangeSynopsis} className="custom-text-input" id="synopsis" name="synopsis" required></textarea><br/>

                    <button className="custom-button" onClick={saveConference}>Save</button>
                </form>
            </div>
        </dialog>
    )
};

export {AddConferenceModal}
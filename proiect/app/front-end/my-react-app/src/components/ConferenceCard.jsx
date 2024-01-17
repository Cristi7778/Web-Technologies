import React, {useState} from 'react';
import {Card, CardContent, Button, Grid, TextField} from '@mui/material';

const ConferenceCard = ({conference, onDelete, onEdit}) => {
    const [isEditMode, setIsEditMode] = useState(false);
        const [name, setName] = useState(conference.name);
        const [date, setDate] = useState(conference.date);
        const [location, setLocation] = useState(conference.location);
        const [organizerId, setOrganizerId] = useState(conference.organizerId);
        const [articleId, setArticleId] = useState(conference.articleId);

        const updateConference = (event) => {
            event.preventDefault();
            onEdit({ name, date, location, organizerId, articleId, id: conference.id});
            setIsEditMode(false);
        }
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

    return (
        <Card variant='outlined' sx={{marginTop: 2}}>
            
                <CardContent>
                    <Grid container columnSpacing={1} direction="column">
                        <TextField label="Name" value={name} onChange={onChangeName} type="text" id="name" name="name" required/><br/>
                        <TextField label="Date" value={date} onChange={onChangeDate} type="date" id="date" name="date" required/><br/>
                        <TextField label="Location" value={location} onChange={onChangeLocation} type="text" id="location" name="location" required/><br/>
                        <TextField label="OrganizerId" value={organizerId} onChange={onChangeOrganizerId} type="text" id="organizerId" name="organizerId" required/><br/>
                        <TextField label="ArticleId" value={articleId} onChange={onChangeArticleId} type="text" id="articleId" name="articleId" required></TextField><br/>
                    </Grid>

                    <Button variant="contained" color="warning" onClick={updateConference} sx={{marginRight: 1}}>Save</Button>
                    <Button variant="contained" color="error" onClick={() => setIsEditMode(false)}>Abort changes</Button>
                </CardContent>
            
        </Card>
    )
};
export {ConferenceCard};
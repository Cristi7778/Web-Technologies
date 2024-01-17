import React, {useState} from 'react';
import {Card, CardContent, Button, Grid, TextField} from '@mui/material';

// componenta MovieCard primeste un prop denumit movie - obiectul ce descrie un film
// o functie onDelete ce va fi apelata atunci cand se doreste stergerea unui element
// si o functie onEdit ce va fi apelata atunci cand se doreste editarea unui film
// componenta are, deci, doua moduri -> read si edit
const ConferenceCard = ({confernce, onDelete, onEdit}) => {
    const [isEditMode, setIsEditMode] = useState(false);
        // adaugam in state toate campurile care vor fi completate
        // valorile initiale sunt cele ale filmului primit
        const [name, setName] = useState(movie.name);
        const [date, setDate] = useState(movie.date);
        const [location, setLocation] = useState(movie.location);
        const [organizerId, setOrganizerId] = useState(movie.organizerId);
        const [articleId, setArticleId] = useState(movie.articleId);

        const updateMovie = (event) => {
            // impiedicam trimiterea default a formularului -> refresh paginii
            event.preventDefault();
            // pasam functiei de salvare obiectul movie construit prin completarea formularului
            onEdit({ name, date, location, organizerId, articleId, id: confernce.id});
            setIsEditMode(false);
        }
    
        // definim callbacks pentru evenimentele de onChange pentru toate inputurile
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

                    <Button variant="contained" color="warning" onClick={updateMovie} sx={{marginRight: 1}}>Save</Button>
                    <Button variant="contained" color="error" onClick={() => setIsEditMode(false)}>Abort changes</Button>
                </CardContent>
            
        </Card>
    )
};
export {ConferenceCard};
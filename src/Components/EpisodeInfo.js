import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EpisodeInfo = ({ episode }) => {
    const [episodeName, setEpisodeName] = useState('');
    const getEpisodeDetails = () => {
        axios.get(episode).then((res) => {
            console.log("episode-details=>", res?.data);
            setEpisodeName(res?.data?.name)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getEpisodeDetails()
    }, []);

    return (
        <span>{episodeName}</span>
    );
}

export default EpisodeInfo;

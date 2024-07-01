import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

function VideoGeneration() {
    const [prompt, setPrompt] = useState("");
    const [videoPath, setVideoPath] = useState("");

    const handlePromptChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value);
    };

    const handleGenerateVideo = () => {
        axios.post('http://localhost:8080/api/generate_video', { prompt })
            .then(response => {
                console.log(response.data);
                setVideoPath(response.data);
            }).catch(error => {
            console.error('There was an error generating the video!', error);
        });
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', videoPath);

        axios.post('http://localhost:8080/api/upload_video', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('There was an error uploading the file!', error);
        });
    };

    return (
        <div>
            <input type="text" value={prompt} onChange={handlePromptChange} placeholder="Enter video prompt" />
            <button onClick={handleGenerateVideo}>Generate Video</button>
            {videoPath && (
                <div>
                    <p>Generated Video Path: {videoPath}</p>
                    <button onClick={handleFileUpload}>Upload Video</button>
                </div>
            )}
        </div>
    );
}

export default VideoGeneration;

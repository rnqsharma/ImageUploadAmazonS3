import React, { useEffect, useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';



const UserProfiles = () => {

  const[userProfiles, setUserProfiles] = useState([]);

  const fecthUserProfile = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
      console.log(res); 
      setUserProfiles(res.data);
    })
  }

  useEffect(() => {
    fecthUserProfile();
  }, []);

  return userProfiles.map((userProfile, index) => {
    return (
      <div key={index}>
        {userProfile.userProfileId ? <img src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}></img> : null}
        <br /> <br />
        <h1>{userProfile.userName}</h1>
        <p>{userProfile.userProfileId}</p>
        <MyDropzone {...userProfile}/>
        <br />
      </div>
    );
  });
}

function MyDropzone({ userProfileId }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    const file = acceptedFiles[0];
    console.log(file);

    const formsData = new FormData();
    formsData.append("file", file);

    axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
      formsData, {
        headers: {
          "Content-Type" : "multipart/form-data"
        }
      }
    ).then( () => {
      console.log("File Uploaded Successfully")
    }).catch( err => {
      console.log(err);
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the image here ...</p> :
          <p>Drag 'n' drop some Profile Image, or click to select Profile Image</p>
      }
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <UserProfiles />
    </div>
  );
}

export default App;

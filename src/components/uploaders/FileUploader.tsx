import React, { useState } from 'react';
import { Dropzone, FileItem, FullScreenPreview, VideoPreview, FileValidated } from "@dropzone-ui/react";
import axios from '../../utils/config/axios.config';




const FileUploader = () => {
    const [files, setFiles] = useState<FileValidated[]>([]);
    const [imageSrc, setImageSrc] = useState<any>(undefined);
    const [videoSrc, setVideoSrc] = useState<any>(undefined);


    const updateFiles = (incommingFiles:FileValidated[]) => {
        setFiles(incommingFiles);
    };

    const removeFile = (id:string |number | undefined) => {
        setFiles(files.filter((f) => f.id !== id));
    };

    const handleSee = (imageSource: any) => {
        setImageSrc(imageSource);
    };

    const handleWatch = (vidSrc: any) => {
        setVideoSrc(vidSrc);
    };

    //TODO
    const handleUpload = async(response: any)=>{
        //check the responses here
        try {
            const res = await axios.post('/katas/uploadFile', response)
            console.log("responses", res);
            
        } catch (error) {
            
        }
      }

//TODO: revisar back - no funciona

  return (
    <>
        <Dropzone 
            style={{ minWidth: "505px" }}
            value={files}
            onChange={updateFiles} 
            url={"http://localhost:8080/api/katas/uploadFile"}
            onUploadFinish={handleUpload}
        >
        {files.length > 0 &&
            files.map((file:FileValidated) => (
                <FileItem 
                    {...file} 
                    key={file.id} 
                    preview
                    resultOnTooltip
                    onDelete={()=>removeFile(file.id)}
                    onSee={handleSee} 
                    onWatch={handleWatch}
                    info 
                />
            ))}
        </Dropzone>
        <FullScreenPreview
                imgSource={imageSrc}
                openImage={imageSrc}
                onClose={(e: any) => handleSee(undefined)}
        />
        <VideoPreview
                videoSrc={videoSrc}
                openVideo={videoSrc}
                onClose={(e: any) => handleWatch(undefined)}
                controls
                autoplay
        />
    </>
    )
}

export default FileUploader;
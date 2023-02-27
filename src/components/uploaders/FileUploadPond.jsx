
import React, {useState} from 'react'
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";


// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUploadPond = () => {
  const [files, setFiles] = useState([]);
  
  
  return (
    <div>
      <FilePond
          files={files}
          // imagePreviewHeight={170}
          // imageCropAspectRatio= '1:1'
          // imageResizeTargetWidth={ 200}
          // imageResizeTargetHeight={ 200}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={3}
          server="http://localhost:8080/api/katas/uploadFile"
          name="files" /* sets the file input name, it's filepond by default */
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  )
}

export default FileUploadPond
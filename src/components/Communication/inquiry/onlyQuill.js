import React,{useState,useEffect} from 'react';
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';

const Onlyquill=({sendOnChange})=>{
    const toolbarOptions = [

        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    
        ['blockquote', 'code-block'],
    
        [{ list: 'ordered' }, { list: 'bullet' }],
    
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    
        [{ direction: 'rtl' }], // text direction
    
        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
    
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    
        [{ font: [] }],
    
        [{ align: [] }],
    
        ['clean'],
    
        // remove formatting button
    
      ];
    
      const modules = {
        toolbar: toolbarOptions,
      };
    
      const { quill, quillRef } = useQuill({ modules });
      useEffect(()=>{
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
              sendOnChange(quill.root.innerHTML);
              console.log('quill===>', quill.root.innerHTML);
            });
      }},[quill])
    return(
        <div style={{ width: '900px', height: '300px' }} id="editor">
        <div style={{ width: '900px', height: '300px' }} ref={quillRef} />
      </div>
    )
}

export default Onlyquill;
import React, { useState, useEffect } from 'react';
import { Badge, IconButton } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';

import Quill, { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';

import { Popover } from '@material-ui/core';

const QuillEditor = () => {
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

  const { quill, Quill, quillRef } = useQuill({ modules });

  const [editor, setEditor] = useState();

  const [modalState, setModalState] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setModalState(false);
  };
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        // console.log(`getText=${quill.getText()}`); // Get text only

        // console.log(`getContents =${quill.getContents()}`); // Get delta contents

        // console.log(`quill.root -delta= ${quill.root.innerHTML}`); // Get innerHTML using quill

        // console.log(`quillRef= ${quillRef.current.firstChild.innerHTML}`); // Get innerHTML using quillRef

        setEditor(quill.root.innerHTML);

        console.log('quill===>', editor);
      });
    }
  }, [quill]);

  useEffect(() => {
    console.log('editor=====>', editor);
  }, [editor]);

  return (

    <>

      <input type="button" value="open" onClick={(e) => { setModalState(!modalState); setAnchorEl(e.currentTarget); }}/>

      <Popover

        open={modalState}
        anchorEl={anchorEl}

      >
        <div style={{ textAlign: 'right' }}>
          <IconButton
            data-testid="ImportFile-IconButton"
            color="inherit"
            onClick={handleClose}
          >

            <Badge color="error" data-testid="ImportFile-Badge" style={{ textAlign: 'left', verticalAlign: 'top' }}>
              <CloseIcon data-testid="ImportFile-CloseIcon" />
            </Badge>
          </IconButton>
        </div>

        <div style={{ width: '900px', height: '300px' }} id="editor">
          <div style={{ width: '900px', height: '300px' }} ref={quillRef} />
        </div>

      </Popover>

    </>

  );
};

export default QuillEditor;

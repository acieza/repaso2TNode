const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest:'public/img'});
const fs = require('fs');

router.post('/', upload.single('imagen'), async (req,res)=>{

    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
    
    console.log(req.file);

    res.send('Imagen Subida');
})

router.post('/multi', upload.array('imagenes', 10), async (req,res)=>{

    console.log(req.files);
    for(i = 0; i < req.files.length; i++){
        fs.renameSync(req.files[i].path, req.files[i].path + '.' + req.files[i].mimetype.split('/')[1]);
    }

   

    res.send('Imagenes Subidas');
});

module.exports = router;
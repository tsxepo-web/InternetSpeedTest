import express from 'express';
import fileUpload from 'express-fileUpload';
import cors from 'cors';
import morgan from 'morgan';
import _ from 'lodash';
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.use(fileUpload({
    createParentPath: true
}));

app.use(cors());
app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}.`)
})

app.post('/upload-avatar', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: `No file uploaded`
            });
        }else{
            let avatar = req.files.avatar;

            avatar.mv('./uploads/' + avatar.name);

            res.send({
                status: true,
                message:`File is uploded`,
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
})
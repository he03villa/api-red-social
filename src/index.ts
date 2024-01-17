import { connect } from 'mongoose';
import app from './app';
const PORT = 3000;

connect("mongodb://localhost:27017/red_social").then(() => {
    console.log("la conexion esta bien");
    app.listen(PORT, () => console.log('servidor corriendo ' + PORT));
}).catch(err => console.log(err));
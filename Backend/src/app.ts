import express, { Application } from "express";
import morgan from "morgan";
import Products from "./routes/products.routes";
import Users from "./routes/users.routes";
import session from "./routes/session.routes";
import Orders from "./routes/Order.routes";
import Kart from "./routes/Kart.routes";



export class App{
    
    private app : Application;

    constructor(private port? : number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000 );
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        //this.app.use(express.urlencoded({extended: false}));
    }

    routes(){
        this.app.use('/Kart', Kart);
        this.app.use('/Orders', Orders);
        this.app.use('/Products', Products);
        this.app.use('/Users', Users);
        this.app.use('/', session);

    }

    listen(){
        this.app.listen(this.app.get('port'));
    }


}
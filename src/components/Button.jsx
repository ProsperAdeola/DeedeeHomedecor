import style from  './button.module.css';
import Button from "react-bootstrap/button"


const Button1  = ({name})  => {
        return(
            
            <div>
                <Button className={style.btn} style={{backgroundColor:"#500472"}}>{name}</Button>
            </div>
        );
};

export  default Button1
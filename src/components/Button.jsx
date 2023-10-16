import style from  './button.module.css';



const Button1  = ({name})  => {
        return(
            
            <div>
                <button className={style.btn} style={{backgroundColor:"#500472"}}>{name}</button>
            </div>
        );
};

export  default Button1
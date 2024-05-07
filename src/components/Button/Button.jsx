import styles from './Button.module.scss';

function Button({children, type='default'}){

    let btnType = type;
    if(type === 'primary'){
        btnType='btn-blue';
    }
    else if(type === 'success'){
        btnType='btn-green';
    }
    else if(type === 'warning'){
        btnType='btn-orange';
    }
    else if(type === 'error'){
        btnType='btn-red';
    }
    else if(type === 'gray'){
        btnType='btn-gray';
    }
    else if(type === 'secondary'){
        btnType='btn-secondary';
    }
    else if(type === 'underlined'){
        btnType='btn-underlined';
    }
    else{
        btnType = 'btn-default'
    }

    return (<>
    <button className={`${styles.btn} ${styles[btnType]}`}>{children}</button>
    </>)
}

export default Button;
import 'scss/func.scss';

function FunctionComponent(props){
    return (
	    <div className="function" onClick={props.callBack}>
            {props.text}
        </div>	
	);
}

export default FunctionComponent;

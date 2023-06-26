// import propTypes from "prop-types";
import classnames from "classnames";

function Button({                    //wrapper element 
        children,
        primary,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded,
        ...rest
     }) {

        const classes = classnames( rest.className , "flex items-center px-3 py-1.5 border",{
            "border-blue-500 bg-blue-500 ": primary,
            "border-gray-900 bg-gray-900 ": secondary,
            "border-green-500 bg-green-500 ": success,
            "border-yellow-400 bg-yellow-400 ": warning,
            "border-red-500 bg-red-500 ": danger,
            "bg-white": outline,//later class names will overwrite earlier class names 
            "text-blue-500": outline && primary,
            "text-gray-900": outline && secondary,
            "text-green-500": outline && success,
            "text-yellow-400": outline && warning,
            "text-red-500": outline && danger,
            "rounded-full": rounded,
            "text-white": !outline
        })

    return (<button {...rest} className = {classes} >{children}</button>); //underline element/wrapped element (html element)
}

Button.propTypes = {  // custom validator so key matching prop is not required
    checkVariationValue:  ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
                    + Number(!!secondary)
                    + Number(!!success)
                    + Number(!!warning)
                    + Number(!!danger);
    
        if (count > 1) {
            return new Error("Only one of primary, secondary, success, warning and danger can be true!");
        }
    } 
};

export default Button;
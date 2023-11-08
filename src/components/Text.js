




function H1({children, className}) {
    return (
        <h1 className={`viewer--h1 ${className || ""}`}>
            {children}
        </h1>
    );
}


function H2({children, className}) {
    return (
        <h2 className={`viewer--h2 ${className || ""}`}>
            {children}
        </h2>
    );
}


function H3({children, className}) {
    return (
        <h3 className={`viewer--h3 ${className || ""}`}>
            {children}
        </h3>
    );
}


function H4({children, className}) {
    return (
        <h4 className={`viewer--h4 ${className || ""}`}>
            {children}
        </h4>
    );
}



function Body({children, className}) {
    return (
        <p className={`viewer--body ${className || ""}`}>
            {children}
        </p>
    );
}


function Label1({children, className}) {
    return (
        <p className={`viewer--label-1 ${className || ""}`}>
            {children}
        </p>
    );
}

function Label2({children, className}) {
    return (
        <p className={`viewer--label-2 ${className || ""}`}>
            {children}
        </p>
    );
}






export {H1, H2, H3, H4, Body, Label1, Label2};
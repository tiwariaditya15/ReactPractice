import React from 'react';

function Bold(WrappedComponent){
    return (props) => {
        return(
            <div className = "hoc" align = "center">
                    <p>This text is added by Higher Order Component.</p>
                    <WrappedComponent />
            </div> 
        );
    }
}
export default Bold;
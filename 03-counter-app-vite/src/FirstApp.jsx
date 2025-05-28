    import React from 'react';
    import Proptypes from 'prop-types';
    
    export const FirstApp = ({title, subTitle, name}) => {
        //console.log(props)
        
        return(
        <>
            <h1 data-testid="test-title"> {title}</h1>
            {/* <code>{JSON.stringify(NewMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
            
        </>
        );
        }

        FirstApp.propTypes = {
            title: Proptypes.string.isRequired,
            subtitle: Proptypes.string,
        }
        FirstApp.defaultProps = {
            name: 'Fernando Herrera',
            subTitle:'No hay subtitulo',
            // title: 'Hola, soy Goku',
        }
        
    

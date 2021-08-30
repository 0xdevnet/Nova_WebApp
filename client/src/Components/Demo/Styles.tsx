import { CSSProperties } from "react";

const style: CSSProperties = {
    display: 'grid',
    placeItems: 'center'
}

export default style

//Global
export const flex_column: CSSProperties = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
}

/*--------------------------------------------------------*/

//Demo Top Bar 
export const dtb_h1_style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100vw', 
    height: '10vh', 
    margin: '0', 
    // padding: '0 0 0 50px',
    fontSize: '3rem',
} 

export const dtb_span_style: CSSProperties = {
    fontSize: '1.5rem', 
    fontFamily: 'Nova Square'
} 

//Artist Profile

export const artist_section_style: CSSProperties = {
    ...flex_column, 
    justifyContent: 'top',
    textAlign: 'center'
}

export const artist_picture_style: CSSProperties = {
    margin: '50px 0 0 0',
    width: '60%',
    height: 'auto',
    borderRadius: '15px', 
    boxShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
}

export const artist_name_style: CSSProperties = {
    fontSize: '2rem', 
    margin: '20px 0 5px 0'
}

export const artist_description_style: CSSProperties = {
    margin: '0 0 20px 0',
    width: '150px',
    padding: '0', 
    fontSize: '0.75rem', 
    letterSpacing: '1px'
}

//Highlights Section
export const highlights_container_style: CSSProperties = {
    width: '600px', 
    height: '150px',
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'left', 
    alignItems: 'center', 
    margin: '0',
    padding: '0 0 0 2.5%'
}

export const highlights_button_style = (url: string): CSSProperties => {
    return {
        marginRight: '15px', 
        width: '100px', 
        height: '100px', 
        background: `url(${url})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: 'none',
        borderRadius: '15px',
        color: 'white',
        fontSize: '1rem',
        letterSpacing: '1px'
    }
}

//Subscription Section
export const subscription_container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100vh',
}

export const ust_subscribe_container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'space-evenly',
    width: '75%',
    height: '25%',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '15px'
}

export const ust_subscribe_button_container: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '25%'
}

export const ust_subscribe_button_style: CSSProperties = {
    cursor: 'pointer',
    margin: '0',
    width: '35%',
    height: '70%',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '0.9rem'

}
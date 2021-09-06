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

//Demo Page
export const demo_container_style = {
    display: 'grid', placeItems: 'center'
},
main_content_container_style = {
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1.5fr 4fr 2.5fr'
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
    boxShadow: '-5px -5px 10px #e3e3e4, 5px 5px 10px #ffffff'
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

//Content General
export const content_section: CSSProperties = {
    width: 'auto', 
    margin: '5% 0 0 0', 
    padding: '0 5%', 
    borderRadius: '30px 30px 0 0',
    boxShadow: 'inset -9px -9px 13px #dededf, inset 9px 9px 13px #ffffff'
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
    padding: '0'
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

//content bubble section
export const content_bubble_container: CSSProperties = {
    ...flex_column, marginBottom: '50px'
}

export const title_style: CSSProperties = {
    width: '100%', margin:'0'
}

export const description_style: CSSProperties = {
    width: '100%', margin: '25px 0 25px 0'
}

export const content_bubble_img: CSSProperties = {
    width: '100%', height:'auto', borderRadius: '15px'
}

//Subscription Section
export const subscription_container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100vh',
}

export const subscribe_container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'space-evenly',
    width: '75%',
    height: '25%',
    boxShadow: '-9px -9px 13px #dededf, 9px 9px 13px #ffffff',
    borderRadius: '15px'
}

export const subscribe_button_container: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '25%'
}

export const subscribe_button_style: CSSProperties = {
    cursor: 'pointer',
    margin: '0',
    width: '35%',
    height: '70%',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '0.9rem'

}
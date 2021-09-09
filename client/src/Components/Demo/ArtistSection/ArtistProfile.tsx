import { 
    artist_picture_style, 
    artist_name_style,
    artist_description_style,
    flex_column
} from '../Styles'

const ArtistProfile = (props: {picture_url: string}) => (
    <div style={{...flex_column, textAlign: 'center'}}>
        <img
            src={props.picture_url}
            style={artist_picture_style} 
            alt="profile_pic"
        />
        <h1 style={artist_name_style}>Jane Doe</h1>
        <p style={artist_description_style}>Photographer / Travel Blogger</p>
    </div>
)

export default ArtistProfile
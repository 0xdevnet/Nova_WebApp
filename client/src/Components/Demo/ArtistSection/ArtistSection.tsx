import ArtistProfile from "./ArtistProfile";
import ArtistStats from "./ArtistStats";
import { artist_section_style } from "../Styles";

const artist_picture_url = 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const ArtistSection = () => (
    <div style={artist_section_style}>
    <ArtistProfile picture_url={artist_picture_url}/>
    <ArtistStats/>
</div>
)

export default ArtistSection
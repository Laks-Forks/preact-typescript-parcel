import {FunctionalComponent,h,render} from 'preact';

interface PropsProfile{
    name: string,
}

const Profile: FunctionalComponent<PropsProfile> = (props: PropsProfile) =>{
    return(
        <div>
            <h1>Your name: {props.name}</h1>
            <h3>This edit this on pages/profile/index.tsx</h3>
        </div>
    )
}

export default Profile;
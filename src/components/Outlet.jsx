
import About from './About';
import Stack from './Stack';
import Projects from './Projects';
import Contacts from './Contacts';
import Error from './Error'
import Loader from './Loader'; 
import OnProgress from './OnProgress';

export default function Outlet() {
    
    return (
        <>
            <About/>
            <Stack/>
            <Projects/>
            <Contacts/>
        </>
    )


}
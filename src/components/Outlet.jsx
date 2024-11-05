
import About from './About';
import Stack from './Stack';
import Projects from './Projects';
import Contacts from './Contacts';
import Error from './Error'
import Loader from './Loader'; 

export default function Outlet() {
    
    return (
        <section>
            <About/>
            <Stack/>
            <Projects/>
            <Contacts/>
        </section>
    )


}
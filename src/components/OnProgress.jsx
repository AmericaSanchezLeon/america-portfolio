import getRandomColor from '../hooks/getRandomColor';

export default function OnProgress() {
    const color  = getRandomColor();

    return (
        <section id="projects" className="onProgress__container py-2">
            <div  
            style={{ color: color }}
            className=" d-flex justify-content-center align-items-center vh-800 flex-column py-5">
                <h3> This section is currently on progress</h3>
                <i class="bi bi-tools"></i></div>
        </section>
    )
}

import gsap from "gsap";
import {Draggable} from "gsap/Draggable";


import {Navbar, Welcome, Dock} from "#components"
import {Resume, Terminal} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Resume />
        </main>
    )
}
export default App;

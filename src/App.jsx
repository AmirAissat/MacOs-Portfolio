import gsap from "gsap";
import {Draggable} from "gsap/Draggable";


import {Navbar, Welcome, Dock, Home} from "#components"
import {Finder, Resume, Terminal, Text, ImageWindowContent, Contact, Photos, Hobbies} from "#windows";


gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Resume />
            <Finder />
            <Text />
            <ImageWindowContent />
            <Contact />
            <Home />
            <Photos />
            <Hobbies />
        </main>
    )
}
export default App;

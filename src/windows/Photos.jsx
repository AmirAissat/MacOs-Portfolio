import { useState } from "react";
import clsx from "clsx";
import useWindowStore from "#store/window.js";
import WindowControls from "#components/WindowControls.jsx";
import { Search, Mail } from "lucide-react";
import { photosLinks } from "#constants/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Photos = () => {
    const { openWindow } = useWindowStore();
    const [activeId, setActiveId] = useState(photosLinks[0]?.id);
    const activeLink = photosLinks.find((link) => link.id === activeId) ?? photosLinks[0];

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos"/>

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon"/>
                    <Search className="icon"/>
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>

                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id} className={clsx(id === activeLink?.id && "active")} onClick={() => setActiveId(id)}>
                                <img src={icon} alt={title} />
                                <p className="truncate">{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
                        {activeLink?.images.map(({ id, img }) => (
                            <li key={img} onClick={() => openWindow("imgfile", {id, name: "Gallery image", icon: "public/images/image.png", kind: "file", fileType: "img", imageUrl: img,})}>
                                <img src={img} alt={`${activeLink.title} ${id}`} />
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, "photos")
PhotosWindow.displayName = "Photos"

export default PhotosWindow;

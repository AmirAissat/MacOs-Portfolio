import { useState } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Lock, Share2 } from "lucide-react";
import { hobbies } from "#constants/index.js";
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Hobbies = () => {
    const [activeId, setActiveId] = useState(hobbies[0]?.id);
    const activeHobby = hobbies.find((hobby) => hobby.id === activeId) ?? hobbies[0];

    return (
        <>
            <div id="window-header">
                <WindowControls target="safari" />

                <ul className="tabs">
                    {hobbies.map(({ id, title }) => (
                        <li key={id} className={clsx(id === activeHobby?.id && "active")} onClick={() => setActiveId(id)}>
                            <span className="dot" />
                            <p className="truncate">{title}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="safari-navbar">
                <div className="nav-arrows">
                    <ChevronLeft />
                    <ChevronRight />
                </div>

                <div className="address-bar">
                    <Lock />
                    <p className="truncate">amiraissat.dev/hobbies/{activeHobby?.title.toLowerCase().replace(/\s*\/\s*|\s+/g, "-")}</p>
                </div>

                <div className="nav-actions">
                    <Share2 />
                </div>
            </div>

            <div className="hobby-page">
                <h2>{activeHobby?.title}</h2>

                {activeHobby?.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}

                <ul className="hobby-media">
                    {activeHobby?.media.map(({ id, type, src }) => (
                        <li key={id}>
                            {type === "video" ? (
                                <video src={src} controls playsInline />
                            ) : (
                                <img src={src} alt={activeHobby.title} />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const HobbiesWindow = WindowWrapper(Hobbies, "safari");
HobbiesWindow.displayName = "Hobbies";

export default HobbiesWindow;

// Filename: lab03.tsx
import Profiler from "./components/Profile";
import Contact  from "./components/Contact";

export default function MyProfile(){
    return (
        <>
        <Profiler />
        <div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
        <Contact 
        label="Palm Sarawut FB" 
        link="https://www.facebook.com/palm.sarawut.12" 
        icon="/images/2023_Facebook_icon.svg.png"
        />
        <Contact 
        label="IG" 
        link="https://www.instagram.com/palm.sarawut.12/" 
        icon="/images/Instagram-Logo.wine.png"
        />
        <Contact 
        label="Tiktok" 
        link="https://www.tiktok.com/@omelet48626?_t=ZS-8yHm5gjpXcN&_r=1/" 
        icon="/images/1200x630wa.png"
        />
        </div>
        <div className="ps-5 pe-5 pt-3 pb-3 bg-amber-300 rounded">
            <a href=" /">Back</a>
        </div>
    </div>
        </>
    );
}
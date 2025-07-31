import Index from "./_index";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function MyTerProjiect (){

    const myPage = "Palm Term Projiect";
    const myName = "Sarawut jongkul";
    const myStdID = "026730491006-5";
    const MyTerProjiect = [ // {} - Oblects
    {
        tpld: 1,
        tpSubj: "web Technology",
        tpDesc: "สวนสนุกแห่งความสนุก",
        tpCover : "Screenshot 2025-07-31 101417.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491006-5/Project/",
        tpTeam: false
    },    
    {
        tpld: 2,
        tpSubj: "computer Progtaming 1",
        tpDesc: "[💻เล่นเกมยังไงให้สนุก💻]",
        tpCover : "Screenshot 2025-07-31 102149.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491006-5/week02/ch02_xxxx_x.html",
        tpTeam: false,
    },
    {
        tpld: 3,
        tpSubj: "computer Progtaming 2",
        tpDesc:"[ระบุ Header เว็บไซต์ของคุณ]",
        tpCover : "Screenshot 2025-07-31 110353.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491006-5/week07-ch06/ch06_1006-5.html",
        tpTeam: false,
    }
    ];

    const tpSingli = MyTerProjiect.filter(tpTmp =>
        tpTmp.tpTeam === false
    );
    const termProj = tpSingli.map((tpOpj,Index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300">
<div className="w-32 p-1">
<img src={tpOpj.tpCover} className="w-full rounded-full" title={tpOpj.tpSubj+"(ID: "+ tpOpj.tpld+")"} />
</div>
<div className="p-4 col-span-3 mb-auto">
<h2 className="text-lg font-semibold text-gray-800">{tpOpj.tpSubj}</h2>
<p className="text-gray-600 text-sm mt-2">{tpOpj.tpDesc}</p>
<ItenTeam isTeam={tpOpj.tpTeam} />
</div>
<div className="p-4 mb-auto">
<a href={tpOpj.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2">Preview</a>
</div>
</div>
    );

    return(
        <>
        <Header title={myPage}/>
        <p className="text-xl">
            Name : {myName} StdID : {myStdID}
        </p>
        <div className="w-1/2 grid mx-auto h-100 overflow-auto rouded-2x1 border border-gray-300">
        {termProj}
        </div>
        <div className="ps-5 pe-5 pt-3 pb-3 bg-amber-300 rounded">
            <a href=" /">Back</a>
        </div>
        <Footer title="2025 Sarawut jongkul"/>
        </>
    );

    function ItenTeam({isTeam}){
        if(isTeam)
            return (<p>
                Group
            </p>);
            return (<p>
                Ungroup
            </p>);
    }
}   
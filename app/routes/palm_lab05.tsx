import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MyTerProj } from "./data/termProject";

export default function MyTerProjiect (){
    
    const [isTeam, setIsTeam] = useState(null);

    const handleTeam = (isTeam: any) => {
        setIsTeam(isTeam);
    }

    const myPage = "Palm Term Projiect";
    const myName = "Sarawut jongkul";
    const myStdID = "026730491006-5";


    const tpSingle = MyTerProj.filter(tpTmp =>{
    if (isTeam === null)
        return tpTmp.tpTeam === true || tpTmp.tpTeam === false
    else
        return tpTmp.tpTeam === isTeam
});

    //const handleClick_b
    //function handleClick(){
      //  alert("คุณได้เลือกโปรเจค");
    //}

    function handleClick(tpId: any, ind: any) {
        let myOut = "";
        let myObj = MyTerProj[ind]

        myOut+= "[ ข้อมูลโปรเจค ]\n";
        myOut+= "รหัส (ID): "+myObj.tpId+"\n";
        myOut+= "รายวิชา (Subject): "+myObj.tpSubj+"\n";
        myOut+= "หน้าปก (Cover): "+myObj.tpCover+"\n";
        myOut+= "ลิ้งค์ (URL): "+myObj.tpUrl+"\n";
        myOut+= "\n-- Thank you --";

        //alert("คุณได้เลือกโปรเจค รหัส:"+tpId+);
        alert(myOut);
    }

    const termProj = tpSingle.map((tpOpj,Index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300">
<div className="w-32 p-1">
<img src={tpOpj.tpCover} className="w-full rounded-full" title={tpOpj.tpSubj+"(ID: "+ tpOpj.tpId+")"} />
</div>
<div className="p-4 col-span-3 mb-auto">
<h2 className="text-lg font-semibold text-gray-800">{tpOpj.tpSubj}</h2>
<p className="text-gray-600 text-sm mt-2">{tpOpj.tpDesc}</p>
<ItenTeam isTeam={tpOpj.tpTeam} />
</div>
<div className="p-4 mb-auto">
<a href="#" className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2"
    onClick={() => handleClick(tpOpj.tpId,Index)}
    >View</a>
    </div>
</div>
    );

    return(
        <>
        <Header title={myPage}/>
        <p className="text-xl">
            Name : {myName} StdID : {myStdID}
        </p>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => handleTeam(null)}>
         [A] All
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => handleTeam(true)}>
         [T] Team
          
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => handleTeam(false)}>
         [S] Single
         
        </button>
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
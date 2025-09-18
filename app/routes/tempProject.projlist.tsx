import { MyTerProj } from "./data/termProject";
import { Link } from "@remix-run/react";

export default function TermProjist(){
return(
        <div> 
            <h1>ข้อมูลโปรเจครายวิชา</h1>
            <p>
                {
                MyTerProj.map((tpObj,index) =>
                <li key={index}>
                    โปรเจครายวิชา: {tpObj.tpSubj}
                    <Link to={`/tempProj/proj/${tpObj.tpId}`}> View </Link>
                </li>
                 )
                }
                </p>
        </div>
);
}
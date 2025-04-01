import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function Results() {
    const [vulns, setVulns] = useState([]);
    const [loading, setLoading] = useState(false);
    const getVulns = async () => {
        setLoading(true);
        // storing the data came from the server in a variable named res
        const { data: res } = await axios.get(`http://localhost:3000/vulns/getVuln`);
        // setting the data came from the res wich is an object containing the data array that came from the server
        setVulns(res.data);
        setLoading(false);
    }
    // component didMount 
    useEffect(() => {
        // getVulns();
    }, []);

    return <>
        <h1 className='text-center'>Results</h1>
        <div className={`container bg-amber-100 text-center h-80 m-auto`}>
            <div className="row">
                <button onClick={getVulns} className={`bg-danger btn btn-danger`}>getVulns</button>
                {loading?<h2>Loading... <i className='fas fa-spinner fa-spin'></i></h2>:vulns.map((vuln) => {
                    return <div key={vuln._id} className={`col-md-4 gy-2 gx-2 `}>
                        <div className="item bg-success">
                        <h4>{vuln.vulnType}</h4>
                        <h5>{vuln.riskLevel}</h5>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}

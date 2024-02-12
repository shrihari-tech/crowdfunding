import React,{useEffect,useContext,useState} from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import Hero from "./Hero";
import Card from "./Card";
import PopUp from "./PopUp";

const Campaign = () =>{
    const{
        titleData,
        getCampaigns,
        createCampaign,
        donate,
        getUserCampaigns,
        getDonations,
    }= useContext(CrowdFundingContext);

    const [allCampaign,setAllcampaign] = useState();
    const [usercampaign,setUsercampaign] = useState();

    useEffect(()=>{
        const getCampaignsData = getCampaigns();
        const userCampaignsData = getUserCampaigns();
        return async()=>{
            const allData = await getCampaignsData;
            const userData = await userCampaignsData;
            setAllcampaign(allData);
            setUsercampaign(userData);
        };
    },[]);

    const [openModel,setOpenModel] = useState(false);
    const [donateCampaign, setDonateCampaign] = useState();
    console.log(donateCampaign);

    return(
        <div>
            <Hero titleData={titleData} createCampaign={createCampaign}/>
            <Card 
                title= "All Campaigns"
                allCampaign={allCampaign}
                setOpenModel={setOpenModel}
                setDonate={setDonateCampaign}
            />
            <Card 
                title="Your Created Campaigns"
                allCampaign={usercampaign}
                setOpenModel={setOpenModel}
                setDonate={setDonateCampaign}
            />
            {openModel && (
                <PopUp 
                    setOpenModel={setOpenModel}
                    getDonations={getDonations}
                    donate = {donateCampaign}
                    donateFunction = {donate}
                />
            )}
        </div>
    );
}

export default Campaign;
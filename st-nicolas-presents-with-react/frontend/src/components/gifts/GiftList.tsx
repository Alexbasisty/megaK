import { useEffect, useState } from "react";
import { GiftEntity } from "types";
import Spinner from "../common/Spinner/Spinner";
import GiftsTable from "./GiftsTable";

const GiftList = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);
    
    const refreshGifts = async () => {
        setGiftsList(null);

        const res = await fetch('http://localhost:3001/gift');
        const data = await res.json();
        
        setGiftsList(data.giftsList);
    };
    
    useEffect(() => {
           refreshGifts();
    }, []);
    
    if (giftsList === null) {
        return <Spinner />
    }

    return (
        <>
            <h1>Gifts</h1>
            <GiftsTable gifts={giftsList} onGiftsChange={refreshGifts}/>
        </>
    );
};

export default GiftList;
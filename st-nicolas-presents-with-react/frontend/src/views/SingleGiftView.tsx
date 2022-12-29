import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/common/Spinner/Spinner";
import { GetSingleGiftRes } from 'types';

const SingleGiftView = () => {
    const [gift, setGift] = useState<GetSingleGiftRes | null>(null);
    const { ID } = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/gift/${ID}`);
            setGift(await res.json());
            console.log(await res.json());
            
        })();
    }, [])

    if (gift === null)  return <Spinner />;

    return <>
        <h2>{gift.gift.name}</h2>
        <p>This gift has ID {gift.gift.id}</p>
        <p>We had <strong>{gift.gift.count}</strong> of this and <strong>{gift.givenCount}</strong> were already given</p>
        <Link to="/gift">Go back to list</Link>
    </>
};

export default SingleGiftView;
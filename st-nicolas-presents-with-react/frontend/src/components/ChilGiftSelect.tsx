import { useState } from "react";
import { GiftEntity } from "types";

interface Props {
    giftsList: GiftEntity[];
    selectedId: string;
}

const ChilGiftSelect = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId);
    return (
        <select value={selected} onChange={e => setSelected(e.target.value)}>
            {
                props.giftsList.map(gift => (
                    <option key={gift.id} value={gift.id}>{gift.name}</option>
                ))
            }
        </select>
    )
}

export default ChilGiftSelect;
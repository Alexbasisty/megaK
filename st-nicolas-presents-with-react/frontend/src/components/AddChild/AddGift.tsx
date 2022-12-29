import { FormEvent, useState } from 'react';
import { CreateGiftReq, GiftEntity } from 'types';
import Spinner from '../common/Spinner/Spinner';

const AddGift = () => {
    const [form, setForm] = useState<CreateGiftReq>({
        name: '',
        count: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: string | number) => {
        setForm(from => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/gift`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
            });

            const data: GiftEntity = await res.json();
            setResultInfo(`${data.name} added with ID ${data.id}`);
        } finally {
            setLoading(false);
        }        
    };

    if (resultInfo) {
        return <div>
            <p style={{backgroundColor: 'green', color: 'white'}}><strong>{resultInfo}</strong></p>
            <button onClick={e => setResultInfo(null)}>Add another one</button>
        </div>
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <form onSubmit={sendForm}>
            <h2>Add gift</h2>
            <label>
                Name: <br />
                <input type="text" value={form.name} onChange={e => updateForm('name', e.target.value)} />
            </label><br />
            <label>
                Name: <br />
                <input type="number" value={form.count} onChange={e => updateForm('count', e.target.value)} />
            </label><br />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddGift;
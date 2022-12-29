import { FormEvent, useState } from 'react';
import { ChildEntity, CreateChildReq } from 'types';
import Spinner from '../common/Spinner/Spinner';

const AddChild = () => {
    const [form, setForm] = useState<CreateChildReq>({
        name: '',
        giftId: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: string | number) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/child`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
            });

            const data: ChildEntity = await res.json();
            setResultInfo(`${data.name} has been created on Santa's list`);
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
            <h2>Add child</h2>
            <label>
                Name: <br />
                <input type="text" value={form.name} onChange={e => updateForm('name', e.target.value)} />
            </label>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddChild;
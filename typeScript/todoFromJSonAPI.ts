interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

type SingleTodoToCreate = Omit<SingleTodo, 'id'>;

class TodoAPI {
    private readonly url = 'https://jsonplaceholder.typicode.com/todos';

    async get(id: number): Promise<SingleTodo> {
        const resp = fetch(`${this.url}/${id}`);
        return await (await resp).json();
    }

    async list(): Promise<SingleTodo[]> {
        const resp = fetch(`${this.url}/`);
        return await (await resp).json();
    }

    async create(task: SingleTodoToCreate): Promise<SingleTodo> {
        const resp = fetch(`${this.url}/`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await (await resp).json();
    }
}

(async () => {
    const todo = new TodoAPI();
    console.log(await todo.get(1));
    
})();
class Loader{
    #URL = "https://jsonplaceholder.typicode.com/todos";
    async getData(){
        const responce = await fetch(this.#URL);
        const todos = await responce.json();
        return todos.length;
    }
}

export{Loader}
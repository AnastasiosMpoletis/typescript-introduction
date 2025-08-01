import { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // with ! we guarantee TypeScript that value is not null
    const enteredText = todoTextInputRef.current!.value;
    // const enteredText = todoTextInputRef.current?.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
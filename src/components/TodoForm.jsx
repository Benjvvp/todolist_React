import React, {useState} from "react";
export default function TodoForm(props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.length > 0){
      setError('Por favor ingresa un task.')
      return;
    }
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      completed: false
    });
    
    
    setError('')
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="containerInput">
          <input
            type="text"
            className="inputTask"
            name="text"
            onChange={handleChange}
            value={input}
            placeholder={error}
          ></input>
          <button type="submit" className='btnInput'><i className="fas fa-plus"></i></button>
        </div>
      </form>
    </>
  );
}

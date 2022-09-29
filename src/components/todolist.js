import React,{useState,useEffect} from "react";

const Todolist = (props) => {
    
    const [imienazwisko,setImienazwisko] = useState([]);
    const [staninputa,setStaninputa] = useState("");

    function dodajdostanukomponentu(e){
        let wynik = e.target.value;
        setStaninputa(wynik)
    }

    function dodajDoTablicy(){
        setImienazwisko([...imienazwisko,staninputa])
    }

    function resetInputValue(e){
        e.target.value = "";
    }

    return(
        <>
            <div>
                <label htmlFor="nazwa">{props.titlelabel}</label>
                <input
                    id="nazwa"
                    name="nazwa"
                    onChange={dodajdostanukomponentu}
                    placeholder={props.titleplaceholder}
                    onFocus={resetInputValue}
                />
                <button onClick={dodajDoTablicy}>Dodaj</button>
            </div>
            <div>
                <ul>
                    {imienazwisko.map((el,i)=>(<li key={el+i}>{el}</li>))}
                </ul>
            </div>
        </>
    )
}

export default Todolist;
import ElixirItem from "./ElixirItem";

const ElixirsList = ({elixirs})=>{

    const ElixirItems = elixirs.map((elixir)=>{
        return <ElixirItem elixir = {elixir} key={elixir.id}/>
    
    })

    return(
        <div>
            <h1>Elixirs</h1>
            {ElixirItems}
            
        </div>
    )
}
export default ElixirsList

export default function MyButton(props) {
   const handleClick = (id, e)=> {
        console.log(id, e.target)
   }
    return(
        <button onClick={(e)=>handleClick(1,e)}>
            삭제하기
        </button>
    )

}

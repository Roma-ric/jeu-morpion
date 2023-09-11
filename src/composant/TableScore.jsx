

function TableScore(props) {
  return(
    <div className="card p-2">
        le vainqueur est : <span className="fs-1 text-success">  {props.pionWinner} </span>
    </div>
  );
}

export default TableScore;
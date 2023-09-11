import { useEffect, useState } from "react";

function TableDeJeu(props) {

    const [valeurPlace1, setValeurPlace1] = useState("");
    const [valeurPlace2, setValeurPlace2] = useState("");
    const [valeurPlace3, setValeurPlace3] = useState("");
    const [valeurPlace4, setValeurPlace4] = useState("");
    const [valeurPlace5, setValeurPlace5] = useState("");
    const [valeurPlace6, setValeurPlace6] = useState("");
    const [valeurPlace7, setValeurPlace7] = useState("");
    const [valeurPlace8, setValeurPlace8] = useState("");
    const [valeurPlace9, setValeurPlace9] = useState("");

    useEffect(() => {
        // alert("Bienvenue dans le jeu Morpion ");
        setValeurPlace1("");
        setValeurPlace2("");
        setValeurPlace3("");
        setValeurPlace4("");
        setValeurPlace5("");
        setValeurPlace6("");
        setValeurPlace7("");
        setValeurPlace8("");
        setValeurPlace9("");
    }, [])

    return (
        <div className="container p-2 card">
            <div className="row">
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center" style={{ height: "100px" }}
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace1("O")
                        :
                        props.setPion("X") & setValeurPlace1("X")
                    }                    
                >
                    {valeurPlace1}
                </div>
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center"
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace2("O")
                        :
                        props.setPion("X") & setValeurPlace2("X")
                    }
                >
                    {valeurPlace2}
                </div>
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center"
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace3("O")
                        :
                        props.setPion("X") & setValeurPlace3("X")
                    }
                >
                    {valeurPlace3}
                </div>
            </div>
            <div className="row">
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center" style={{ height: "100px" }}
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace4("O")
                        :
                        props.setPion("X") & setValeurPlace4("X")
                    }
                >
                    {valeurPlace4}
                </div>
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center"
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace5("O")
                        :
                        props.setPion("X") & setValeurPlace5("X")
                    }
                >
                    {valeurPlace5}
                </div>
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center"
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace6("O")
                        :
                        props.setPion("X") & setValeurPlace6("X")
                    }
                >
                    {valeurPlace6}
                </div>
            </div>
            <div className="row">
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center" style={{ height: "100px" }}
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace7("O")
                        :
                        props.setPion("X") & setValeurPlace7("X")
                    }
                >
                    {valeurPlace7}
                </div>
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center"
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace8("O")
                        :
                        props.setPion("X") & setValeurPlace8("X")
                    }
                >
                    {valeurPlace8}
                </div>
                <div className="col m-2 border rounded-3 p-2 fs-1 fw-bold d-flex justify-content-center"
                    onClick={() => (props.pion === "X") ?
                        props.setPion("O") & setValeurPlace9("O")
                        :
                        props.setPion("X") & setValeurPlace9("X")
                    }
                >
                    {valeurPlace9}
                </div>
            </div>
            {
                props.setPionWinner(valeurPlace1)
                // if (valeurPlace1 === valeurPlace2 === valeurPlace3) {
                //     
                // }else if(valeurPlace4 === valeurPlace5 === valeurPlace6){
                //     props.setPionWinner(valeurPlace4);
                // }else if(valeurPlace7 === valeurPlace8 === valeurPlace9){
                //     props.setPionWinner(valeurPlace7);
                // }else if(valeurPlace1 === valeurPlace4 === valeurPlace7){
                //     props.setPionWinner(valeurPlace1);
                // }else if(valeurPlace2 === valeurPlace5 === valeurPlace8){
                //     props.setPionWinner(valeurPlace2);
                // }else if(valeurPlace3 === valeurPlace6 === valeurPlace9){
                //     props.setPionWinner(valeurPlace3);
                // }else if(valeurPlace1 === valeurPlace5 === valeurPlace9){
                //     props.setPionWinner(valeurPlace1);
                // }else if(valeurPlace3 === valeurPlace5 === valeurPlace7){
                //     props.setPionWinner(valeurPlace3);
                // }
            }
        </div>
    );
}


export default TableDeJeu;
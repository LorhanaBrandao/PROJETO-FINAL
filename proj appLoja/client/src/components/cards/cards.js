import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props){
    const [open, setOpen] = React.useState(false);

    return(
        <>
        <FormDialog
            open={open}
            setOpen={setOpen}
            title={props.name}
            category={props.category}
            cost={props.cost}
            qtd={props.qtd}
            total={props.total}
            listCard={props.listCard}
            setListCard={props.setListCard}
            id={props.id}
        />

        <div className="card-container" onClick={() => setOpen(true)}>
            <h1 className="card-title">{props.name}</h1>
            <p className="card-id">{props.id}</p>
            <p className="card-category">{props.category}</p>
            <p className="card-qtd">{props.qtd}</p>
            <p className="card-cost">{props.cost}</p>
            <h3 className="card-total">R${props.total}</h3>
        </div>
    </>
    );
}

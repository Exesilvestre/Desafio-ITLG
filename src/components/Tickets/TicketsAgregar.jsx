import React, {useState} from "react";

function TicketsAgregar({
  Grabar,
  Volver,
}) {
    const [AccionABMC, setAccionABMC] = useState("");
    const [Item, setItem] = useState({
        name: "",
        amount: 0.0,
        capacity: 0,
        quota: 0,
        ticketExtra: [],
      });
    const [extra, setExtra] = useState(""); // Estado local para el nuevo campo "Extras"

    const agregarExtra = () => {
        if (extra.trim() !== "") {
          setItem((prevItem) => ({
            ...prevItem,
            ticketExtra: [...prevItem.ticketExtra, extra],
          }));
          setExtra(""); // Limpiamos el campo "Extras" después de agregarlo
        }
    };

  if (!Item) return null;
  return (
    <div>
        <h2>Evento seleccionado: LollaPalloza</h2>
    <form>
      <div className="container-fluid">

        <fieldset>
          
          {/* campo nombre */}
          <div className="row my-3">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="name">
                Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                maxLength={50}
                name="name"
                value={Item?.name}
                autoFocus
                onChange={(e) => setItem({...Item, name: e.target.value})}
                className="form-control "
              />
            </div>
          </div>

          {/* campo Precio */}
          <div className="row my-3">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="amount">
                Precio<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
            <input
                type="number" 
                step=".01"
                name="amount"
                value={Item.amount}
                onChange={(e) => setItem({...Item, amount: parseFloat(e.target.value)})}
                className= "form-control" 
            />
            </div>
          </div>

          {/* campo capacidad */}
          <div className="row my-3">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="capacity">
                Capacidad<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
            <input
                type="number"
                name="capacity"
                value={Item.capacity}
                onChange={(e) => setItem({...Item, capacity: parseInt(e.target.value)})}
                className="form-control"
            />
            </div>
          </div>

          {/* campo cupos */}
          <div className="row my-3">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="quota">
                Cupo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
            <input
                type="number"
                name="quota"
                value={Item.quota}
                onChange={(e) => setItem({...Item, quota: parseInt(e.target.value)})}
                className="form-control"
            />
            </div>
          </div>

          {/* campo Extras */}
          <div className="row my-3">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="ticketExtra">
                Extras:
                </label>
            </div>
            <div className="col-sm-8 col-md-6 d-flex justify-content-between align-items-center">
                <input
                    type="text"
                    name="ticketExtra"
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                    className="form-control"
                />
                <button
                    type="button"
                    onClick={agregarExtra}
                    className="btn btn-primary"
                >
                Agregar Extra
                </button>
            </div>
          </div>

          {/* Lista de características extras */}
          <div className="row my-3">
            <div className="col-sm-4 col-md-3 offset-md-1"></div>
            <div className="col-sm-8 col-md-6">
                {Item.ticketExtra.length > 0 && (
                    <ul>
                        {Item.ticketExtra.map((extraItem, index) => (
                        <li key={index}>{extraItem}</li>
                        ))}
                    </ul>
                )}
            </div>
          </div>

        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>

        {/* texto: Revisar los datos ingresados... */}
        <div className="row alert alert-danger mensajesAlert">
          <i className="fa fa-exclamation-sign"></i>
          Revisar los datos ingresados...
        </div>

      </div>
    </form>
    </div>
  );
}

export { TicketsAgregar };
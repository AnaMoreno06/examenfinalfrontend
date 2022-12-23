import React from "react";
import "./pagprincipal.css";

const Pagprincipal = () => {

  return (
    <div>
      <div className="container">
        <div
          className="row my-3 p-0 mx-0"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <h1>mi banco</h1>
        </div>
        <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
          {/* Categorias */}
          <div className="col-lg-2 col-sm-6">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/206/241/non_2x/withdraw-money-icon-free-vector.jpg"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">retiros</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="https://thumbs.dreamstime.com/z/icono-del-movimiento-crecimiento-de-dinero-ejemplo-logotipo-s%C3%ADmbolo-alta-calidad-129631247.jpg"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">movimientos</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/perroscalientescolombianos500x41613697-lgql-200h.png"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">retiriar su dinero</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3844/3844121.png"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">tarjeta virtual</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/capa13610-9dvc-200h.png"
                className="card-img-top h-75"
                alt="..."
              />
             
            </div>

            <div className="col-2">
              <div className="card w-100 h-100" style={{ width: "18rem" }}>
                <img
                  src="https://thumbs.dreamstime.com/z/billetes-de-banco-del-dinero-que-vuelan-el-fondo-del-vector-56782120.jpg"
                  className="card-img-top h-50"
                  alt="..."
                />
             
            </div>
            {/* fin */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagprincipal;
</div>


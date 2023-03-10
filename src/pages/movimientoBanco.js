import React from "react";
import "./pagprincipal.css";

const MenusRest = () => {
  return (
    <div>
      <div className="container">
        <div
          className="row my-3 p-0 mx-0"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <h2 className="fw-bold text-center py-0">
            SERVICIO DE MOVIMIENTOS{" "}
          </h2>
          <p></p>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre del servicio</th>
                <th scope="col">Descripcion del servicio</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Maicitos</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Perros</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>Hamburguesas</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>Picada</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <th scope="row">5</th>
                <td>Salchipapa</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Anterior
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
          <br></br>
          <div class="form-group">
            <div className="mb-4">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Agregar Informaci??n
              </label>
            </div>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary">
              Guardar Informaci??n
            </button>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary">
              Editar Informaci??n
            </button>
          </div>
          <p></p>
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">??Bien Hecho!</h4>
            <p>Se ha guardado con exito los menus</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenusRest;

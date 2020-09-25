import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFly } from "@fortawesome/free-brands-svg-icons";

import "./style.css";

export const RegisterScreen = () => {
  return (
    <div className="container-fluid register">
      <div className="row  pb-5">
        <div className="col-md-3 register-left">
          <FontAwesomeIcon icon={faFly} style={{ fontSize: "8em" }} />
          <h3>Bienvenido</h3>
          <p>Haz tu registro y consigue tus primeros 10 €</p>
        </div>
        <div className="col-md-9 register-right">
          
            <h3 className="register-heading">Formulario de Registro</h3>
            <div className="row register-form">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellidos *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirma Password *"
                    value=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dirección *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Código Postal *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Población *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <select class="form-control">
                    <option class="hidden" selected disabled>
                      Selecciona tu provincia
                    </option>
                    <option value="alava">Álava</option>
                    <option value="albacete">Albacete</option>
                    <option value="alicante">Alicante/Alacant</option>
                    <option value="almeria">Almería</option>
                    <option value="asturias">Asturias</option>
                    <option value="avila">Ávila</option>
                    <option value="badajoz">Badajoz</option>
                    <option value="barcelona">Barcelona</option>
                    <option value="burgos">Burgos</option>
                    <option value="caceres">Cáceres</option>
                    <option value="cadiz">Cádiz</option>
                    <option value="cantabria">Cantabria</option>
                    <option value="castellon">Castellón/Castelló</option>
                    <option value="ceuta">Ceuta</option>
                    <option value="ciudadreal">Ciudad Real</option>
                    <option value="cordoba">Córdoba</option>
                    <option value="cuenca">Cuenca</option>
                    <option value="girona">Girona</option>
                    <option value="laspalmas">Las Palmas</option>
                    <option value="granada">Granada</option>
                    <option value="guadalajara">Guadalajara</option>
                    <option value="guipuzcoa">Guipúzcoa</option>
                    <option value="huelva">Huelva</option>
                    <option value="huesca">Huesca</option>
                    <option value="illesbalears">Illes Balears</option>
                    <option value="jaen">Jaén</option>
                    <option value="acoruña">A Coruña</option>
                    <option value="larioja">La Rioja</option>
                    <option value="leon">León</option>
                    <option value="lleida">Lleida</option>
                    <option value="lugo">Lugo</option>
                    <option value="madrid">Madrid</option>
                    <option value="malaga">Málaga</option>
                    <option value="melilla">Melilla</option>
                    <option value="murcia">Murcia</option>
                    <option value="navarra">Navarra</option>
                    <option value="ourense">Ourense</option>
                    <option value="palencia">Palencia</option>
                    <option value="pontevedra">Pontevedra</option>
                    <option value="salamanca">Salamanca</option>
                    <option value="segovia">Segovia</option>
                    <option value="sevilla">Sevilla</option>
                    <option value="soria">Soria</option>
                    <option value="tarragona">Tarragona</option>
                    <option value="santacruztenerife">
                      Santa Cruz de Tenerife
                    </option>
                    <option value="teruel">Teruel</option>
                    <option value="toledo">Toledo</option>
                    <option value="valencia">Valencia/Valéncia</option>
                    <option value="valladolid">Valladolid</option>
                    <option value="vizcaya">Vizcaya</option>
                    <option value="zamora">Zamora</option>
                    <option value="zaragoza">Zaragoza</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    minlength="10"
                    maxlength="10"
                    name="telefono"
                    className="form-control"
                    placeholder="Teléfono *"
                    value=""
                  />
                </div>                
              </div>              
            </div>            
            <div className="row">
                <div className="col-12 text-center">
                <input
                  type="submit"
                  className="btn btn-danger btn-lg"
                  value="Registrarse"
                />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

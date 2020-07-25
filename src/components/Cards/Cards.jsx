import React from "react";

import './style.css';

class Card extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            result: this.props.result
        }

        console.log(this.state.result);

    }
    
    render() {
        let { result } = this.state;
        //console.log(result);
        return (
            <div className="container">
                <div className="courses-container">
                    <div className="course">
                        <div className="course-preview">
                            <h6>{ result.categoriacargo.raw }</h6>
                            <h2>{ result.nombres.raw } { result.apellidos.raw }</h2>
                            <a href="#">View all details <i className="fas fa-chevron-right"></i></a>
                        </div>
                        <div className="course-info">
                            <h6>{ result.institucion.raw }</h6>
                            <pre><ul>
                                <li><b>Descargo:</b> { result.desccargo.raw }</li>
                                <li><b>Fecha Designacion:</b> { result.fecha_designacion.raw }</li>
                                <li><b>Fecha Primer Cargo:</b> { result.fechaprimercargo.raw }</li>
                                <li><b>Nivel Escolar:</b> { result.nivel_escolar.raw }</li>
                                <li><b>Sueldo Neto:</b> { result.sueldoneto.raw }</li>
                                <li><b>Tipo Cargo:</b> { result.tipodecargo.raw }</li>
                                <li><b>Tipo Carrera:</b> { result.tipodecarrera.raw }</li>
                                <li><b>Tipo Empleado:</b> { result.tipoempleado.raw }</li>
                            </ul></pre>
                            <button className="btn">RD$ { result.sueldobase.raw }</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }

export default Card;
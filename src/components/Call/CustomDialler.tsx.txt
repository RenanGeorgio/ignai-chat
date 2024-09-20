import React from "react";

//import "./Dialler.module.css";

interface Props {
  number?: string
  setNumber?: (number: string) => void
  children?: React.ReactNode
}

export const CustomDialler: React.FC<Props> = ({ number, setNumber }: Props) => {
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setNumber(event?.target?.value);
  };

  const handleBackSpace = () => {
    // @ts-ignore
    setNumber(number.substring(0, number.length - 1));
  };

  const handleNumberPressed = (newNumber: string) => {
    return () => {
      // @ts-ignore
      setNumber(`${number}${newNumber}`);
    };
  };

  return (
    <div className="modal" id="modal-dial">
      <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
              <div className="modal-header">
                  <h4 className="modal-title" style="text-align: center;">Enter the number</h4>
                  <button type="button" className="btn btn-danger close" id="btnCloseDialModal">&times;</button>
              </div>
              <div className="modal-body mx-auto">
                  <div className="btn-group-vertical  my-5" role="group" aria-label="Basic example">
                      <input id="phoneNumber" type="tel"></input>
                      <div className="btn-group btn-group-lg ">
                          <button type="button"
                              className="btn btn-outline-secondary border-bottom-0 rounded-0 btnNumber">1</button>
                          <button type="button" className="btn btn-outline-secondary border-bottom-0 btnNumber">2</button>
                          <button type="button"
                              className="btn btn-outline-secondary border-bottom-0 rounded-0 btnNumber">3</button>
                      </div>
                      <div className="btn-group btn-group-lg">
                          <button type="button"
                              className="btn btn-outline-secondary border-bottom-0 rounded-0 btnNumber">4</button>
                          <button type="button" className="btn btn-outline-secondary border-bottom-0 btnNumber">5</button>
                          <button type="button"
                              className="btn btn-outline-secondary border-bottom-0 rounded-0 btnNumber">6</button>
                      </div>
                      <div className="btn-group btn-group-lg">
                          <button type="button" className="btn btn-outline-secondary rounded-0 btnNumber">7</button>
                          <button type="button" className="btn btn-outline-secondary btnNumber">8</button>
                          <button type="button" className="btn btn-outline-secondary rounded-0 btnNumber">9</button>
                      </div>
                      <div className="btn-group btn-group-lg">
                          <button type="button" className="btn btn-outline-secondary rounded-0 btnNumber">*</button>
                          <button type="button" className="btn btn-outline-secondary btnNumber">0</button>
                          <button type="button" className="btn btn-outline-secondary rounded-0 btnNumber"><span
                                  className="small">#</span></button>
                      </div>
                      <div className="btn-group btn-group-lg">
                          <button id="btnDial" type="button" className="btn btn-outline-secondary rounded-0">
                              <i className="fa fa-phone-square fa-flip-horizontal  fa-2x" style="color: green;"
                                  aria-hidden="true"></i> </button>
                          <button type="button" className="btn btn-outline-secondary btnNumber">+</button>
                          <button id="btnDelete" type="button" className="btn btn-outline-secondary rounded-0">
                              <i className="fa fa-backspace fa-1x" aria-hidden="true"></i>
                          </button>
                      </div>
                  </div>
              </div>
              <div>
              </div>
          </div>
      </div>
    </div>
  );
}
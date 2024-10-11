import { useState } from "react";
import { IconButton, Button, Checkbox } from "@mui/material";
import { DotsVertical, Pencil, Trash } from "../../assets/icons";

import { IAddress } from "../../types";
import ModalComponent from "../Forms/Modal";
import ModalForm from "../Forms/ModalForm";
import PaymentAddressFormFields from "../Forms/PaymentForm";

import "../../styles/payment.css";

export default function PaymentAddress() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMode, setModalMode] = useState<{
    mode: string | null;
    title: string | null;
  }>({
    mode: null,
    title: null,
  });
  const [selectedItem, setSelectedItem] = useState({} as IAddress);
  const [address, setAddress] = useState<IAddress[]>([
    {
      _id: "1",
      client: "Cliente Exemplo",
      name: "Galpão 01",
      street: "Rua Exemplo",
      number: 123,
      district: "Bairro Exemplo",
      city: "Cidade Exemplo",
      state: "Estado Exemplo",
      zipCode: 12345678,
      isMain: true,
    } as IAddress,
    {
      _id: "2",
      client: "Cliente Exemplo 2",
      name: "Galpão 02",
      street: "Rua Secundária",
      number: 456,
      district: "Outro Bairro",
      city: "Outra Cidade",
      state: "Outro Estado",
      zipCode: 87654321,
      isMain: false,
    } as IAddress,
    {
      _id: "3",
      client: "Cliente Exemplo 3",
      name: "Escritório",
      street: "Rua Secundária",
      number: 456,
      district: "Outro Bairro",
      city: "Outra Cidade",
      state: "Outro Estado",
      zipCode: 87654321,
      isMain: false,
    } as IAddress,
  ]);  

  const handleFormSubmit = () => {
    console.log("Formulário enviado com sucesso!");
  };

  return (
    <>
      <div className="index">
        <div className="card-wrapper">
          <div className="row-container">
            <div className="card-top">
              <div className="card-heading">
                <div className="text-wrapper-19">Endereço</div>
                <Button
                  variant="outlined"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalMode({ mode: "add", title: "Novo endereço" });
                    setOpenModal(true);
                  }}
                >
                  Novo endereço
                </Button>
                <ModalComponent
                  open={openModal}
                  title={modalMode.title ?? ""}
                  onClose={() => setOpenModal(false)}
                >
                  <ModalForm
                    isLoading={isLoading}
                    initialValues={selectedItem}
                    mode={modalMode.mode ?? ""} 
                    onSubmit={() => handleFormSubmit()}
                  >
                    <PaymentAddressFormFields setFormValues={setSelectedItem} />
                  </ModalForm>
                </ModalComponent>
              </div>
              <div className="card-body-top">
                <div className="body-content">
                  {address?.map((addr: IAddress, key: number) => (
                    <div className="accordion-collapse" key={key}>
                      <div className="text-6">
                        <div className="row-4">
                          <div className="text-wrapper-20">{addr.name}</div>
                          {addr.isMain ? (
                            <span className="badge-3">Principal</span>
                          ) : (
                            ""
                          )}
                        </div>
                        <p className="text-wrapper-21">
                          {`${addr.street}, 
                            ${addr.number}, 
                            ${addr.district}, 
                            ${addr.city} - ${addr.state}
                          `}
                        </p>
                      </div>
                      <div className="actions">
                        <IconButton
                          className="button-icon-instance"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedItem(addr);
                            
                            setModalMode({
                              mode: "edit",
                              title: "Editar contato",
                            });
                            
                            setOpenModal(true);
                          }}
                        >
                          <Pencil />
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Trash />
                        </IconButton>
                        <IconButton>
                          <DotsVertical />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-heading">
                <div className="text-wrapper-19">Método de Pagamento</div>
                <Button variant="outlined">Adicionar</Button>
              </div>
              <div className="card-body">
                <div className="accordion-without">
                  <div className="accordion-collapse">
                    <div className="text-7">
                      <img
                        className="img-3"
                        alt="Mastercard"
                        src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/mastercard-.svg"
                      />
                      <div className="text-6">
                        <div className="text-wrapper-24">Mastercard</div>
                        <div className="text-wrapper-25">Expira Abr 2028</div>
                      </div>
                    </div>
                    <div className="actions">
                      <IconButton className="button-icon-instance">
                        <Pencil />
                      </IconButton>
                      <IconButton>
                        <Trash />
                      </IconButton>
                      <IconButton>
                        <DotsVertical />
                      </IconButton>
                    </div>
                  </div>
                  <div className="accordion-expanded">
                    <div className="accordion-collapse-medium">
                      <div className="text-7">
                        <img
                          className="img-3"
                          alt="American express"
                          src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/american-express.svg"
                        />
                        <div className="text-6">
                          <div className="row-5">
                            <div className="text-wrapper-20">
                              American Express
                            </div>
                            <span className="badge-3">Principal</span>
                          </div>
                          <div className="text-wrapper-25">
                            45 Roker Terrace
                          </div>
                        </div>
                      </div>
                      <div className="actions">
                        <IconButton className="button-icon-instance">
                          <Pencil />
                        </IconButton>
                        <IconButton>
                          <Trash />
                        </IconButton>
                        <IconButton>
                          <DotsVertical />
                        </IconButton>
                      </div>
                    </div>
                    <div className="row-6">
                      <div className="row-7">
                        <div className="row-8">
                          <div className="text-wrapper-26">Name</div>
                          <div className="text-wrapper-11">Violet Mendoza</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">Number</div>
                          <div className="text-wrapper-11">**** 4487</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">Expires</div>
                          <div className="text-wrapper-11">08/2028</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">Type</div>
                          <div className="text-wrapper-11">Mastercard Card</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">Issuer</div>
                          <div className="text-wrapper-11">VICBANK</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">ID</div>
                          <div className="text-wrapper-11">DH73DJ8</div>
                        </div>
                      </div>
                      <div className="row-7">
                        <div className="row-8">
                          <div className="text-wrapper-27">Billing Phone</div>
                          <div className="text-wrapper-11">USA</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-27">Number</div>
                          <div className="text-wrapper-11">+7634 983 637</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-27">Email</div>
                          <a
                            className="text-wrapper-11"
                            href="mailto:vafgot@vultukir.org"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            vafgot@vultukir.org
                          </a>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-27">Origin</div>
                          <div className="row-9">
                            <div className="text-wrapper-11">United States</div>
                            <img
                              className="chevron-right"
                              alt="Usa"
                              src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/usa.svg"
                            />
                          </div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-27">CVC check</div>
                          <div className="row-9">
                            <div className="text-wrapper-11">Passed</div>
                            <div className="check-wrapper">
                              <Checkbox className="check-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-collapse-footer">
                    <div className="text-7">
                      <img
                        className="img-3"
                        alt="Visa"
                        src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/visa.svg"
                      />
                      <div className="text-6">
                        <div className="text-wrapper-24">Visa</div>
                        <div className="text-wrapper-25">512 Water Plant</div>
                      </div>
                    </div>
                    <div className="actions">
                      <IconButton className="button-icon-instance">
                        <Pencil />
                      </IconButton>
                      <IconButton>
                        <Trash />
                      </IconButton>
                      <IconButton>
                        <DotsVertical />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

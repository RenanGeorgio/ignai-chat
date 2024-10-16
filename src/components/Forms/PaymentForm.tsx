import { useEffect } from "react";

const PaymentAddressFormFields = (props: any) => {
  const { formValues, mode, setFormValues } = props;
  const fetchCep = async (cep: string) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const zipCode = formValues?.zipCode;
    if (zipCode?.length === 8) {
      fetchCep(zipCode)
        .then((data) => {
          if (data.erro) {
            return;
          }
          const { logradouro, bairro, localidade, uf } = data;
          const newFormValues = {
            ...formValues,
            street: logradouro,
            district: bairro,
            city: localidade,
            state: uf,
          };

          setFormValues(newFormValues);
        })
        .catch((error) => {
          console.log("Erro ao buscar CEP");
        });
    }
  
  }, [formValues]);

  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Nome para o endereço</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome do cliente"
          className="form-input"
          required
          value={formValues?.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="zipCode">CEP</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          placeholder="Cep"
          className="form-input"
          required
          value={formValues?.zipCode}
        />
      </div>
      <div className="form-group">
        <label htmlFor="street">Rua</label>
        <input
          type="text"
          id="street"
          name="street"
          placeholder="Rua ou Avenida"
          className="form-input"
          required
          value={formValues?.street}
        />
      </div>
      <div className="form-group">
        <label htmlFor="sector">Numero</label>
        <input
          type="text"
          id="number"
          name="number"
          placeholder="Número"
          className="form-input"
          required
          value={formValues?.number}
        />
      </div>
      <div className="form-group">
        <label htmlFor="district">Bairro</label>
        <input
          type="text"
          id="district"
          name="district"
          placeholder="Bairro"
          className="form-input"
          required
          value={formValues?.district}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Cidade"
          className="form-input"
          required
          value={formValues?.city}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">Estado</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Estado"
          className="form-input"
          required
          value={formValues?.state}
        />
      </div>
      {mode === "edit" && (
        <div className="form-group-check-box p">
          <label htmlFor="isMain">Endereço principal</label>
          <input
            type="checkbox"
            id="isMain"
            name="isMain"
            className="form-input-check-box"
            checked={formValues?.isMain}
          />
        </div>
      )}
    </>
  );
};

export default PaymentAddressFormFields;

import { cloneElement, useEffect, useState, ChangeEvent, FormEvent } from "react";
import "./ModalForm.css";

interface ModalFormProps {
  children: any;
  onSubmit: (formValues: any) => void;
  isLoading: boolean;
  initialValues: any;
  mode: string;
} 

const ModalForm = ({ children, onSubmit, isLoading, initialValues, mode }: ModalFormProps) => {
  const [formValues, setFormValues] = useState({});
  const [disabled, setDisabled] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    const isCheckbox = e.target instanceof HTMLInputElement && type === "checkbox";
    const newValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  useEffect(() => {
    setDisabled(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (mode === "edit") {
      setFormValues(initialValues);
    }
  }, [initialValues, mode]);

  const newElement = cloneElement(children, {
    formValues,
    mode,
    onChange,
  });

  return (
    <div className="modal-form">
      <form onSubmit={handleSubmit}>
        <div className="form-content">{newElement}</div>
        <button
          type="submit"
          className="form-submit-button"
          disabled={disabled}
        >
          {mode === "edit" ? "Atualizar" : "Adicionar"}
        </button>
      </form>
    </div>
  );
};

export default ModalForm;

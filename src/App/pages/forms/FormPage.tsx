import { useForm } from 'react-hook-form';
import TextField from '../../components/form/TextField';
import CheckBoxField from '../../components/form/checkBoxField';
import SwitchField from '../../components/form/SwitchField';
import styles from './Form.module.scss';
import SelectField from '../../components/form/SelectField';
import FileInput from '../../components/form/FileInput';
import FormCard from '../../components/ui/formCard/FormCard';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { createCard, getAllCards } from '../../store';
import { toast } from 'react-toastify';

type TFormData = {
  name: string;
  birthday: string;
  breed: string;
  passport: boolean;
  gender: string;
  file: string;
  id: string;
};

const switchOptions = ['Male', 'Female'];
const selectOptions = [
  { label: 'breed_1', value: 'breed_1' },
  { label: 'breed_2', value: 'breed_2' },
  { label: 'breed_3', value: 'breed_3' },
  { label: 'breed_4', value: 'breed_4' },
  { label: 'breed_5', value: 'breed_5' },
];

function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useAppDispatch();

  const cardsForm = useAppSelector(getAllCards());

  const onSubmit = handleSubmit((data) => {
    const newCardData: TFormData = {
      id: (cardsForm.length + 1).toString(),
      name: data.name,
      file: data.file[0] ? URL.createObjectURL(data.file[0] as File) : '',
      passport: data.passport,
      gender: data.gender ? 'Female' : 'Male',
      birthday: data.birthday,
      breed: data.breed,
    };

    dispatch(createCard(newCardData));
    toast.success('Pet has been added');
    reset();
  });

  return (
    <>
      <h2>Form</h2>
      <form className={styles.form} data-testid="form-page" onSubmit={onSubmit}>
        <TextField label="name" field="name" register={register} error={errors} />
        <TextField label="Birthday" field="birthday" type="date" register={register} error={errors} />
        <CheckBoxField label="passport" field="passport" register={register} error={errors} />
        <SwitchField options={switchOptions} error={errors} label="" field="gender" register={register} />
        <SelectField
          options={selectOptions}
          defaultOption="choose..."
          disabledOption={false}
          error={errors}
          label="breed"
          field="breed"
          register={register}
        />
        <FileInput error={errors} field="file" label="Photo:&nbsp;" register={register} />

        <button type="submit">submit</button>
      </form>
      <div>
        <h3>Cards List</h3>

        {cardsForm.length ? (
          <div className={styles.cards_list} data-testid="not-empty">
            {cardsForm.map((card) => (
              <div key={card.id}>
                <FormCard data={card} />
              </div>
            ))}
          </div>
        ) : (
          <p data-testid="empty">Empty</p>
        )}
      </div>
    </>
  );
}

export default FormPage;

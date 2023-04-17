import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type TProps = {
  label: string;
  defaultOption: string;
  options: { label: string; value: string }[];
  field: string;
  error: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  disabledOption: boolean;
};

function SelectField({ label, defaultOption, options, field, error, register, disabledOption }: TProps) {
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <div>
        {
          <>
            <select
              id={field}
              {...register(field, {
                required: 'Your need to choose a breed',
              })}
            >
              <option disabled={disabledOption} value="" key="DEFAULT">
                {defaultOption}
              </option>
              {options &&
                options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </select>
            <span />
          </>
        }
      </div>
      {<div className="error">{error[field]?.message?.toString()}</div>}
    </div>
  );
}
export default SelectField;

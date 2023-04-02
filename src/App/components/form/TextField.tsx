import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import Regexp from './patterns';

type TProps = {
  label: string;
  field: string;
  type?: string;
  error: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

function TextField({ label, error, register, type, field }: TProps) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth().toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <div>
        <input
          type={type}
          id={field}
          max={`${year}-${month}-${day}`}
          {...register(field, {
            required: 'This field is required',
            pattern: {
              value: Regexp[field].pattern,
              message: Regexp[field].message,
            },
          })}
        />
        {<div className="error">{error[field]?.message?.toString()}</div>}
      </div>
    </div>
  );
}
TextField.defaultProps = {
  type: 'text',
};

export default TextField;

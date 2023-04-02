import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type TProps = {
  label: string;
  error: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  field: string;
};

function FileInput({ label, error, register, field }: TProps) {
  return (
    <div data-testid="file-input">
      <div>
        <label>
          {label}
          <input
            type="file"
            {...register(field, {
              required: 'Your need to upload pet picture',
            })}
          />
        </label>
        {<div className="error">{error[field]?.message?.toString()}</div>}
      </div>
    </div>
  );
}

export default FileInput;

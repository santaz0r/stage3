import React, { useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
type TProps = {
  label: string;
  field: string;
  error: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

function CheckBoxField({ label, field, error, register }: TProps) {
  const [isChecked] = useState(false);

  return (
    <div className="form-check">
      <input
        type="checkbox"
        id={field}
        defaultChecked={isChecked}
        {...register(field, {
          required: 'Your pet must have a passport',
        })}
      />
      <label className="form-check-label" htmlFor={field}>
        {label}
      </label>
      {
        <div data-testid="error" className="error">
          {error[field]?.message?.toString()}
        </div>
      }
    </div>
  );
}

export default CheckBoxField;

import React, { RefObject, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './SwitchField.module.scss';

type TProps = {
  label: string;
  type?: string;
  field: string;
  error: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  options: string[];
};

function SwitchField({ label, field, error, register, options }: TProps) {
  return (
    <div className={styles.switcher}>
      <span>{options[0]}</span>
      <input className={styles.checkbox} type="checkbox" data-testid="gender" {...register(field)} />
      <span>{options[1]}</span>
      {label && (
        <label className="form-check-label" htmlFor={field}>
          {label}
        </label>
      )}
      {<div className="error">{error[field]?.message?.toString()}</div>}
    </div>
  );
}

export default SwitchField;

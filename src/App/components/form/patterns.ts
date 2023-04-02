const Regexp: { [index: string]: { pattern: RegExp; message: string } } = {
  name: {
    pattern: /^[A-Z]/g,
    message: 'Name must be begin with uppercase',
  },
  birthday: {
    pattern: /./g,
    message: "Don't be empty",
  },
};

export default Regexp;

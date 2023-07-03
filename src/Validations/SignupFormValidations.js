const NameValidation = (Name) => {
  if (Name === "") return "NAME CANNOT BE EMPTY";
  return false;
};

const EmailValidation = (Email) => {
  if (Email === "") return "EMAIL CANNOT BE EMPTY";
  return false;
};

const PasswordValidation = (Password) => {
  if (Password === "") return "PASSWORD CANNOT BE EMPTY";
  if (Password.length <= 8)
    return "PASSWORD SHOULD BE AT LEAST 8 CHARACTERS LONG";
  return false;
};

export { NameValidation, EmailValidation, PasswordValidation };

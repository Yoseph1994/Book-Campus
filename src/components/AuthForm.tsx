import React from "react";

interface Props<T> {}

function AuthForm({ type, schema, defaultValues, onSubmit }: Props) {
  return <div>AuthForm {type}</div>;
}

export default AuthForm;

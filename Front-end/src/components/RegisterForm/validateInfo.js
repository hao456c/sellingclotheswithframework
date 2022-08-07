export default function validateInfo(values) {
  let errors = {};
  const rexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.fullname.trim()) {
    errors.fullname = "Fullname required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!rexp.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.conpassword) {
    errors.conpassword = "Password is required";
  } else if (values.conpassword !== values.password) {
    errors.conpassword = "Passwords do not match";
  }
  return errors;
}

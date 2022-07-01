import { reduxForm } from "redux-form";
import Register from "../components/auth/Register";
const RegisterContainer = reduxForm({ form: "register" })(Register);
export default RegisterContainer;

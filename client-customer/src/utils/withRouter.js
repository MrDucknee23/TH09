import { useParams, useNavigate } from "react-router-dom";

// using withRouter in class-component
function withRouter(Component) {
  return (props) => (
    <Component {...props} params={useParams()} navigate={useNavigate()} />
  );
}

export default withRouter;